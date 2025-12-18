#!/usr/bin/env python3
"""
Script to fetch publications from Google Scholar and update the website's publication data.

Usage:
    python scripts/update_publications.py

Requirements:
    pip install scholarly

This script will:
1. Fetch all publications from your Google Scholar profile
2. Sort them by date (newest first)
3. Update the src/data/publication.ts file with the latest data
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path

try:
    from scholarly import scholarly
except ImportError:
    print("Please install scholarly: pip install scholarly")
    exit(1)

# Configuration
GOOGLE_SCHOLAR_ID = "Nn1QQiUAAAAJ"  # Your Google Scholar ID
OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "publication.ts"

# Publications to exclude (e.g., duplicates or irrelevant ones)
EXCLUDE_TITLES = []

# Manual overrides for specific publications (title -> overrides dict)
MANUAL_OVERRIDES = {
    "Ethereum Improvement Proposal 5133": {
        "conference": "Ethereum Yellow Paper",
        "award": "Cited in Ethereum Yellow Paper",
        "paperUrl": "https://eips.ethereum.org/EIPS/eip-5133",
    },
    "Economic security of multiple shared security protocols": {
        "conference": "Mathematical Research in Blockchain Economy (MARBLE)",
        "award": "Seminal work in multiple restaking security protocols",
    },
    "Multi Agent Influence Diagrams for DeFi Governance": {
        "conference": "AI in Finance workshop, ECAI 2025",
    },
}


def fetch_publications():
    """Fetch all publications from Google Scholar."""
    print(f"Fetching publications for Google Scholar ID: {GOOGLE_SCHOLAR_ID}")
    
    try:
        author = scholarly.search_author_id(GOOGLE_SCHOLAR_ID)
        author = scholarly.fill(author, sections=['publications'])
    except Exception as e:
        print(f"Error fetching author: {e}")
        return []
    
    publications = []
    
    for pub in author.get('publications', []):
        try:
            # Fill publication details
            filled_pub = scholarly.fill(pub)
            
            title = filled_pub.get('bib', {}).get('title', '')
            
            # Skip excluded titles
            if any(exclude.lower() in title.lower() for exclude in EXCLUDE_TITLES):
                print(f"  Skipping excluded: {title}")
                continue
            
            # Extract publication info
            bib = filled_pub.get('bib', {})
            
            # Get year and month
            year = str(bib.get('pub_year', datetime.now().year))
            
            # Try to extract month from pub_date if available
            month = None
            pub_date = bib.get('pub_date', '')
            if pub_date:
                # Try to parse month from date string
                try:
                    if '/' in pub_date:
                        parts = pub_date.split('/')
                        if len(parts) >= 2:
                            month = int(parts[1])
                except:
                    pass
            
            # Get venue/conference
            venue = bib.get('venue', '') or bib.get('journal', '') or bib.get('booktitle', '')
            if not venue:
                venue = "arXiv Preprint"
            
            # Get authors
            authors = bib.get('author', '')
            if isinstance(authors, list):
                authors = ', '.join(authors)
            
            # Get citations
            citations = filled_pub.get('num_citations', 0)
            
            # Get paper URL
            paper_url = filled_pub.get('pub_url', '') or filled_pub.get('eprint_url', '')
            if not paper_url and 'arxiv' in title.lower():
                paper_url = f"https://arxiv.org/"
            
            # Get abstract/TLDR
            abstract = bib.get('abstract', '')
            
            pub_data = {
                'year': year,
                'month': month,
                'conference': venue,
                'title': title,
                'authors': authors,
                'paperUrl': paper_url if paper_url else None,
                'citations': citations if citations > 0 else None,
                'tldr': abstract[:300] + '...' if len(abstract) > 300 else abstract if abstract else None,
            }
            
            # Apply manual overrides
            for override_title, overrides in MANUAL_OVERRIDES.items():
                if override_title.lower() in title.lower():
                    pub_data.update(overrides)
                    break
            
            publications.append(pub_data)
            print(f"  Found: {title} ({year})")
            
        except Exception as e:
            print(f"  Error processing publication: {e}")
            continue
    
    return publications


def sort_publications(publications):
    """Sort publications by date (newest first)."""
    def sort_key(pub):
        year = int(pub.get('year', 0))
        month = pub.get('month') or 6  # Default to June if no month
        return (year, month)
    
    return sorted(publications, key=sort_key, reverse=True)


def generate_typescript(publications):
    """Generate TypeScript file content."""
    
    ts_content = '''export interface Publication {
  year: string;
  month?: number;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  citations?: number;
}

export const publicationData: Publication[] = [
'''
    
    for pub in publications:
        ts_content += '  {\n'
        ts_content += f'    year: "{pub["year"]}",\n'
        
        if pub.get('month'):
            ts_content += f'    month: {pub["month"]},\n'
        
        # Escape quotes in strings
        conference = pub['conference'].replace('"', '\\"')
        title = pub['title'].replace('"', '\\"')
        authors = pub['authors'].replace('"', '\\"')
        
        ts_content += f'    conference: "{conference}",\n'
        ts_content += f'    title: "{title}",\n'
        ts_content += f'    authors: "{authors}",\n'
        
        if pub.get('paperUrl'):
            ts_content += f'    paperUrl: "{pub["paperUrl"]}",\n'
        
        if pub.get('citations'):
            ts_content += f'    citations: {pub["citations"]},\n'
        
        if pub.get('tldr'):
            tldr = pub['tldr'].replace('"', '\\"').replace('\n', ' ')
            ts_content += f'    tldr: "{tldr}",\n'
        
        if pub.get('award'):
            award = pub['award'].replace('"', '\\"')
            ts_content += f'    award: "{award}",\n'
        
        ts_content += '  },\n'
    
    ts_content += '];\n'
    
    return ts_content


def main():
    print("=" * 60)
    print("Google Scholar Publication Updater")
    print("=" * 60)
    
    # Fetch publications
    publications = fetch_publications()
    
    if not publications:
        print("\nNo publications found!")
        return
    
    print(f"\nFound {len(publications)} publications")
    
    # Sort by date
    sorted_pubs = sort_publications(publications)
    print("Sorted publications by date (newest first)")
    
    # Generate TypeScript
    ts_content = generate_typescript(sorted_pubs)
    
    # Write to file
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"\nUpdated {OUTPUT_FILE}")
    print(f"Total publications: {len(sorted_pubs)}")
    print(f"Total citations: {sum(p.get('citations', 0) or 0 for p in sorted_pubs)}")
    
    # Print summary
    print("\n" + "=" * 60)
    print("Publications Summary:")
    print("=" * 60)
    for pub in sorted_pubs:
        citations = pub.get('citations', 0) or 0
        print(f"  [{pub['year']}] {pub['title'][:50]}... ({citations} citations)")


if __name__ == "__main__":
    main()


