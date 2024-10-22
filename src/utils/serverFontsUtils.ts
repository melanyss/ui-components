import path from 'path';
import fs from 'fs';

export function getFontFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && /\.(ttf|otf|woff|woff2)$/i.test(dirent.name))
    .map((dirent) => dirent.name);
}

export function getFontFormat(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  switch (ext) {
    case '.ttf': return 'truetype';
    case '.otf': return 'opentype';
    case '.woff': return 'woff';
    case '.woff2': return 'woff2';
    default: return 'truetype';
  }
}

export function getAllFontFiles(): { name: string; url: string; isGoogleFont: boolean }[] {
    const privateFontDirectory = path.join(process.cwd(), 'public/fonts');
    const publicFontDirectory = path.join(process.cwd(), 'public/google-fonts');
    
    let privateFonts = getFontFiles(privateFontDirectory).map(file => ({
      name: path.parse(file).name,
      url: `/fonts/${file}`,
      isGoogleFont: false
    }));
  
    let googleFonts = getFontFiles(publicFontDirectory).map(file => ({
      name: path.parse(file).name,
      url: `/google-fonts/${file}`,
      isGoogleFont: true
    }));
  
    return [...privateFonts, ...googleFonts];
  }

  export function generateFontFaces(): string {
    const fontFiles = getAllFontFiles();
  
    const fontFaces = fontFiles.map((font) => {
      const fontFormat = getFontFormat(font.url);
      if (font.isGoogleFont) {
        return `
    @font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('${fontFormat}');
      font-display: swap;
    }
    `;
      } else {
        return `
    @font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('${fontFormat}');
      font-display: swap;
    }
    `;
      }
    }).join('\n');
  
    return `@layer base {\n${fontFaces}\n}`;
  }

  export function getFontsData() {
    return getAllFontFiles();
  }