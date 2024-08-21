import { Icons } from '@/assets/icons';
import { Dictionary } from '@/utils/getDictionary';
import Link from 'next/link';
import LinkCustom from './LinkCustom';

export default function Footer({ dictionary }: { dictionary: Dictionary }) {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div className=" bg-gradient-to-b  from-indigo-950 to-[#18163b] pt-16">
        <div className="border-t border-neutral-300 "></div>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex flex-col items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2 font-semibold">
              <LinkCustom className="flex flex-shrink-0 items-center" href="/">
                <Icons.logo className="h-10 w-10 text-blue-500" />
              </LinkCustom>
            </div>
            <p className="text-neutral-300 flex items-center gap-1">
              © {currentYear}{' '}
              <Link referrerPolicy="no-referrer" target="_blank" href="https://github.com/MacielG1" className="px-1">
                MacielG1
              </Link>{' '}
              <Link referrerPolicy="no-referrer" target="_blank" href="https://github.com/MacielG1">
                <Icons.Github className="size-4 mr-1 text-zinc-300 dark:text-zinc-400" />
              </Link>
              {dictionary.Footer.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
