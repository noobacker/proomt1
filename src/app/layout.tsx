import '@/styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Proomt | The Internet\'s Prompt Layer',
  description: 'Explore, Share, Sell - One Prompt at a Time. Find the right words to power your AI.',
  keywords: 'AI prompts, prompt marketplace, AI prompt engineering, sell prompts, buy prompts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  );
} 