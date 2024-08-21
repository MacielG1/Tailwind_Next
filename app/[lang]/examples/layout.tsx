import type { Metadata } from 'next';
import ExamplesMenu from './_components/ExamplesMenu';
import getDictionary from '@/utils/getDictionary';

export const metadata: Metadata = {
  title: 'Examples',
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const dictionary = await getDictionary(params?.lang);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="container">
        <h2 className="py-5 text-center text-3xl font-semibold tracking-wider text-neutral-800 dark:text-neutral-400">{dictionary.Examples.title}</h2>
      </div>
      <ExamplesMenu />
      {children}
    </div>
  );
}
