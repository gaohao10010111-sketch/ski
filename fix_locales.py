#!/usr/bin/env python3
"""
Batch fix locale files by adding missing properties
"""

import re
from pathlib import Path

# Files to fix (excluding en.ts and zh.ts)
FILES_TO_FIX = ['es.ts', 'fi.ts', 'fr.ts', 'it.ts', 'ja.ts', 'ko.ts', 'no.ts', 'ru.ts', 'sv.ts']

def fix_alpine_section(content):
    """Add subDisciplines to alpine section"""
    pattern = r'(  alpine: \{[^\}]*?    hero: \{[^\}]*?\},)\s*\n(\s*quickAccess:)'
    replacement = r'\1\n\n    subDisciplines: [],\n\n\2'
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_freestyle_section(content):
    """Add subDisciplines to freestyleSlopestyle section"""
    pattern = r'(  freestyleSlopestyle: \{[^\}]*?    hero: \{[^\}]*?\},)\s*\n(\s*quickAccess:)'
    replacement = r'\1\n\n    subDisciplines: [],\n\n\2'
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_snowboard_slopestyle_section(content):
    """Add subDisciplines to snowboardSlopestyle section"""
    pattern = r'(  snowboardSlopestyle: \{[^\}]*?    hero: \{[^\}]*?\},)\s*\n(\s*quickAccess:)'
    replacement = r'\1\n\n    subDisciplines: [],\n\n\2'
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_snowboard_parallel_section(content):
    """Add subDisciplines to snowboardParallel section"""
    pattern = r'(  snowboardParallel: \{[^\}]*?    hero: \{[^\}]*?\},)\s*\n(\s*quickAccess:)'
    replacement = r'\1\n\n    subDisciplines: [],\n\n\2'
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_home_hero(content):
    """Add highlights array to home.hero"""
    pattern = r'(home: \{[^}]*?hero: \{[^}]*?platformIntro: [^\n]*\n)(\s*\},)'
    replacement = r'''\1      highlights: [
        { label: 'Four Points Systems', color: 'bg-ski-blue' },
        { label: 'Official Certification', color: 'bg-green-400' },
        { label: 'U-Series · Public Events', color: 'bg-yellow-400' }
      ]
\2'''
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_home_features(content):
    """Add missing properties to home.features"""
    # Check if description, online, useNow, etc. exist
    if 'features: {\n      title:' in content and 'description:' not in content.split('features: {')[1].split('},')[0]:
        pattern = r'(    features: \{\n      title: [^\n]*\n)'
        replacement = r'''\1      description: 'Complete skiing competition management solution based on FIS International Ski Federation standards',
      online: 'Online',
      useNow: 'Use Now',
      fisPointsQuery: {
        title: 'FIS Points Query',
        description: 'Query athlete FIS points and ranking information'
      },
      pointsCalculator: {
        title: 'Points Calculator',
        description: 'Real-time calculation of skiing points based on race results'
      },
      pointsRankings: {
        title: 'Points Rankings',
        description: 'Real-time updated athlete points rankings'
      },
'''
        content = re.sub(pattern, replacement, content)
    return content

def fix_home_news(content):
    """Add statuses and items to home.news"""
    pattern = r'(    news: \{[^}]*?continueCarousel: [^\n]*\n)(\s*\},)'
    replacement = r'''\1      statuses: {
        live: 'Live',
        updated: 'Updated',
        upcoming: 'Upcoming'
      },
      items: []
\2'''
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_home_latest_results(content):
    """Add statusLabels and results to home.latestResults"""
    pattern = r'(    latestResults: \{[^}]*?viewMore: [^\n]*\n)(\s*\},)'
    replacement = r'''\1      statusLabels: {
        live: 'Live',
        completed: 'Completed'
      },
      results: []
\2'''
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def fix_home_rankings(content):
    """Add entries to home.rankings"""
    pattern = r'(    rankings: \{[^}]*?viewFullRankings: [^\n]*\n)(\s*\},)'
    replacement = r'\1      entries: []\n\2'
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def add_page_metadata(content):
    """Add pageMetadata section at the end"""
    if 'pageMetadata:' not in content:
        # Find the end of the file (before the closing };)
        pattern = r'(\}\s*\}\s*\};)\s*$'
        replacement = r'''  },

  // Page Metadata
  pageMetadata: {
    docs: {
      competitionRules: {
        title: 'Competition Rules',
        description: 'Competition technical rules and referee standards'
      },
      pointsRules: {
        title: 'Points Rules',
        description: 'Ski points calculation rules'
      },
      venueStandards: {
        title: 'Venue Standards',
        description: 'Event venue requirements'
      },
      fisRules: {
        title: 'FIS Rules',
        description: 'International Ski Federation rules'
      },
      guide: {
        title: 'Platform Guide',
        description: 'Function guides and FAQ'
      }
    }
  }
};
'''
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    return content

def fix_locale_file(filepath):
    """Fix a single locale file"""
    print(f"Fixing {filepath.name}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply all fixes
    content = fix_alpine_section(content)
    content = fix_freestyle_section(content)
    content = fix_snowboard_slopestyle_section(content)
    content = fix_snowboard_parallel_section(content)

    # Fix home section
    if 'home: {' in content:
        content = fix_home_hero(content)
        content = fix_home_features(content)
        content = fix_home_news(content)
        content = fix_home_latest_results(content)
        content = fix_home_rankings(content)

    # Add pageMetadata
    content = add_page_metadata(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Fixed {filepath.name}")

def main():
    locales_dir = Path(__file__).parent / 'src' / 'locales'

    for filename in FILES_TO_FIX:
        filepath = locales_dir / filename
        if filepath.exists():
            try:
                fix_locale_file(filepath)
            except Exception as e:
                print(f"✗ Error fixing {filename}: {e}")
        else:
            print(f"✗ File not found: {filename}")

    print("\nDone!")

if __name__ == '__main__':
    main()
