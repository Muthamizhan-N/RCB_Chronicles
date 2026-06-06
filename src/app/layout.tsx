import type { Metadata } from 'next';
import { Bebas_Neue, Permanent_Marker, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebas = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
});

const permanent = Permanent_Marker({
  weight: '400',
  variable: '--font-permanent',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RCB Chronicles | Royal Challengers Bengaluru IPL Franchise History',
  description:
    'An interactive and comprehensive historical archive of the Royal Challengers Bengaluru (RCB) IPL franchise from the inaugural 2008 season to the present. Explore season details, analytics, player archives, the greatest XI selector, and achievements.',
  keywords: 'RCB, Royal Challengers Bengaluru, IPL, Cricket, Virat Kohli, AB de Villiers, Chris Gayle, RCB History, Playoff Stats, Chinnaswamy, Playoff, IPL Stats, RCB Records',
  authors: [{ name: 'RCB Fan Club' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${permanent.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-full flex flex-col bg-rcb-black text-gray-100 font-sans grid-bg select-none">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
