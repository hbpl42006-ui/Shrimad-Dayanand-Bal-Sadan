import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-devanagari',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#7A1F2B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Shrimad Dayanand Bal Sadan | Charitable Residential & Educational Institution, Lucknow',
    template: '%s | Shrimad Dayanand Bal Sadan',
  },
  description:
    'Shrimad Dayanand Bal Sadan (ESTD. 1915) is a charitable residential and educational institution in Moti Nagar, Lucknow, providing shelter, formal schooling, Vedic values, and vocational skills to orphan, destitute, and vulnerable children.',
  keywords: [
    'Shrimad Dayanand Bal Sadan',
    'Lucknow Orphanage',
    'Arya Samaj Bal Sadan',
    'Child Welfare Lucknow',
    'Charitable Educational Institution Lucknow',
    'Vedic Education Lucknow',
    'Donate Bal Sadan Lucknow',
    'Donate Meals Lucknow',
  ],
  authors: [{ name: 'Shrimad Dayanand Bal Sadan' }],
  creator: 'Shrimad Dayanand Bal Sadan',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://srimaddayanandbalsadan.in',
    title: 'Shrimad Dayanand Bal Sadan | Serving Children Since 1915',
    description:
      'Charitable residential and educational sanctuary in Lucknow for orphaned, destitute, and vulnerable children. Rooted in Vedic values and modern education.',
    siteName: 'Shrimad Dayanand Bal Sadan',
    images: [
      {
        url: '/images/photos/campus_school_building.jpg',
        width: 1200,
        height: 630,
        alt: 'Shrimad Dayanand Bal Sadan Campus, Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrimad Dayanand Bal Sadan | Lucknow',
    description: 'Providing care, shelter, education, and Vedic values to underprivileged children since 1915.',
    images: ['/images/photos/campus_school_building.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
  verification: {
    google: '-fSgMxkTf8ltyLLfi02LdcvsfVfzjE-EScMJTrufJTY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Shrimad Dayanand Bal Sadan',
    alternateName: 'Bal Sadan Lucknow',
    url: 'https://srimaddayanandbalsadan.in',
    logo: 'https://srimaddayanandbalsadan.in/images/logo.png',
    foundingDate: '1915-05-11',
    founder: {
      '@type': 'Person',
      name: 'Banarasi Lal Ji (Swami Nirbhayanand)',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Moti Nagar, (Near DAV College), Aishbagh Road',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226004',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9452158755',
      contactType: 'Admissions and Donorship Inquiries',
      areaServed: 'IN',
      availableLanguage: ['Hindi', 'English'],
    },
    nonprofitStatus: 'Nonprofit501c3',
    sameAs: [
      'https://www.youtube.com/@ShrimadDayanandBalSadan',
      'https://www.instagram.com/srimaddayanandbalsadan',
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${notoDevanagari.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-charcoal-900 bg-white min-h-screen flex flex-col selection:bg-saffron selection:text-charcoal-900">
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
