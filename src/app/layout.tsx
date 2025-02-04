import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Marck_Script } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const marckScript = Marck_Script({
  weight: '400',
  subsets: ['cyrillic', 'latin'],
  variable: '--font-marck-script',
});

export const metadata: Metadata = {
  title: 'Trofey Fish',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marckScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
