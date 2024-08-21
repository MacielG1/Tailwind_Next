import './globals.css';
import { Open_Sans } from 'next/font/google';

import { languageSupported } from '@/middleware';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import getDictionary from '@/utils/getDictionary';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Tailwind & Next.js',
  description: 'Website built with Tailwind & Next.js',
};

export async function generateStaticParams() {
  return languageSupported.map((lang) => ({ params: { lang } }));
}

export default async function RootLayout({ children, params }) {
  const data = await getDictionary(params?.lang);
  return (
    <html lang={params.lang}>
      <body className={`${font.className} flex min-h-screen flex-col`}>
        <Navbar dictionary={data} />
        <main className="flex-grow">{children}</main>
        <Footer dictionary={data} />
      </body>
    </html>
  );
}
