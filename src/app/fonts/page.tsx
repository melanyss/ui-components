'use client';

import { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { getFontFormat } from '@/utils/fontsUtils';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Font {
  name: string;
  url: string;
  isGoogleFont: boolean;
}

const textToDisplay1 = 'The quick brown fox jumps over the lazy dog';
const textToDisplay2 = 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.\nEveryone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.\nEveryone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.';

export default function FontTesterPage() {
    const [text, setText] = useState(textToDisplay1);
    const [fonts, setFonts] = useState<Font[]>([]);
    const [message, setMessage] = useState<string | null>(null);
  
    useEffect(() => {
      console.log('Fetching fonts...');
      fetch('/api/fonts')
        .then(response => response.json())
        .then(data => {
          /* console.log('Fonts fetched:', data); */
          if (Array.isArray(data)) {
            setFonts(data);
          } else if (data.fonts) {
            setFonts(data.fonts);
          } else {
            setFonts([]);
          }
          if (data.message) {
            setMessage(data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching fonts:', error);
          setMessage('Failed to load fonts. Please try again later.');
        });
  
      // Fetch and apply dynamic CSS
      fetch('/api/fonts?format=css')
        .then(response => response.text())
        .then(css => {
          const style = document.createElement('style');
          style.textContent = css;
          document.head.appendChild(style);
        })
        .catch(error => {
          console.error('Error fetching font CSS:', error);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            
          <h1 className="text-4xl font-bold text-primary p-10 mb-6 text-center" id="font-tester">Fonts Tester</h1>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to test fonts..."
            className="mb-8 border-slate-300 border-4"
          />
          {message && <p className="text-center mb-4">{message}</p>}
          {fonts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fonts.map((font, index) => (
                <FontDisplay key={`${font.name}-${index}`} font={font} text={text} />
              ))}
            </div>
          ) : (
            !message && <p className="text-center">No fonts to display</p>
          )}
          <div className="flex flex-wrap gap-6 justify-center mt-20">
        <Link href="/#gradients">
          <Badge className="text-xl py-2 px-4 hover:bg-card-bg hover:text-white transition-colors border-styled">
            Gradients
          </Badge>
        </Link>
        <Link href="/#buttons">
          <Badge className="text-xl py-2 px-4 hover:bg-card-bg hover:text-white transition-colors border-styled">
            Buttons
          </Badge>
        </Link>
      </div>
        </div>
      );
}

function FontDisplay({ font, text }: { font: Font; text: string }) {
    const fontFace = `
      @font-face {
        font-family: '${font.name}';
        src: url('${font.url}') format('${getFontFormat(font.url)}');
        font-display: swap;
      }
    `;
  
    return (
      <div className="rounded-lg p-4 border-4 border-slate-200">
        <style>{fontFace}</style>
        <h2 className="text-2xl font-semibold mb-6">{font.name}</h2>
        <p style={{ fontFamily: `'${font.name}', sans-serif` }}>{text}</p>
      </div>
    );
  }