import { NextRequest, NextResponse } from 'next/server';
import { getFontsData, generateFontFaces } from '@/utils/serverFontsUtils';

export async function GET(request: NextRequest) {
  console.log('API route /api/fonts called');
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format');

    if (format === 'css') {
      const css = generateFontFaces();
      return new NextResponse(css, {
        headers: {
          'Content-Type': 'text/css',
        },
      });
    } else {
      const fonts = getFontsData();
      if (fonts.length === 0) {
        console.log('No font files found in any directory');
        return NextResponse.json({ fonts: [], message: 'No fonts available' });
      }
      return NextResponse.json(fonts);
    }
  } catch (error: unknown) {
    console.error('Error in /api/fonts:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}