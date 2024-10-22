export function getFontFormat(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'ttf': return 'truetype';
      case 'otf': return 'opentype';
      case 'woff': return 'woff';
      case 'woff2': return 'woff2';
      default: return 'truetype';
    }
  }