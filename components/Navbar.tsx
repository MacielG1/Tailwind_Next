'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseOutline } from 'react-icons/io5';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import LinkCustom from './LinkCustom';
import { useState } from 'react';
import { Icons } from '@/assets/icons';
import { Dictionary } from '@/utils/getDictionary';
import { cn } from '@/lib/utils';

export default function Navbar({ dictionary }: { dictionary: Dictionary }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation: Array<{
    name: string;
    href: string;
    subMenu?: Array<{
      name: string;
      href: string;
      logo: JSX.Element;
    }>;
    current?: boolean;
  }> = [
    { name: dictionary.Navbar.Home, href: '/' },
    {
      name: dictionary.Navbar.Examples,
      href: '/examples/users',
    },
    {
      name: dictionary.Navbar.Projects,
      href: '/',
      subMenu: [
        {
          name: 'KBoards',
          href: 'https://kboards.vercel.app/',
          logo: <Icons.kboardsLogo className="h-4 w-4" />,
        },
        {
          name: 'YT Playlist Manager',
          href: 'https://ytmanager.vercel.app',
          logo: <Icons.ytPlaylistLogo className="h-4 w-4" />,
        },
        {
          name: 'Interval Timer',
          href: 'https://macielg1.github.io/Timer_Interval/',
          logo: <Icons.timerAppLogo className="h-4 w-4" />,
        },
      ],
    },
  ];

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
    console.log('drop');
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 to-sky-900">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
        {/* Mobile Toggle */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <div
            onClick={toggleMenu}
            className="mx-1 inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-800"
          >
            <span className="sr-only">isOpen main menu</span>
            {isOpen ? <IoCloseOutline className="block h-6 w-6 " aria-hidden="true" /> : <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end min-[320px]:justify-around sm:items-stretch max-w-6xl">
          {/* Logo */}
          <LinkCustom className="flex flex-shrink-0 items-center" href="/">
            <Icons.logo className="size-8 text-blue-500" />
            {/* <span className="mx-3 hidden cursor-pointer text-2xl  tracking-tight text-zinc-100 hover:text-white min-[320px]:block">Next Tailwind</span> */}
          </LinkCustom>

          {/* Menu Items */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => {
                return (
                  <div
                    key={item.name}
                    className={cn(
                      `${
                        item.subMenu ? 'group relative  hover:rounded-b-none ' : ''
                      }  flex justify-center rounded-lg  text-sm font-medium tracking-wide text-zinc-200   hover:bg-sky-800 hover:text-white focus:outline-none `,
                    )}
                  >
                    <LinkCustom
                      href={item.href}
                      className="flex w-[5.5rem] items-center justify-center rounded-lg px-2 py-2 ring-1 ring-inset ring-sky-800"
                      target={item.href.startsWith('http') ? '_blank' : ''}
                    >
                      <span>{item.name}</span>
                      {item.subMenu && <AiFillCaretDown className="pl-1 text-sm text-white transition duration-200 group-hover:text-sky-800 " />}
                    </LinkCustom>
                    {item.subMenu && (
                      <div className="absolute left-0 top-full z-10 hidden w-48 transform whitespace-nowrap rounded-md rounded-tl-none bg-sky-800 shadow-lg   group-hover:block">
                        {item.subMenu.map((subItem) => (
                          <LinkCustom
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.href.startsWith('http') ? '_blank' : ''}
                            className=" flex w-full items-center gap-2 rounded-none px-4 py-2 text-sm text-white  first:rounded-tr-md  hover:bg-sky-900 last:hover:rounded-b-md "
                          >
                            <span>{subItem.logo}</span>
                            {subItem.name}
                          </LinkCustom>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <LanguageSwitcher size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items*/}
      {isOpen ? (
        <div className="mx-1 space-y-1 px-2 pb-2  pt-2 sm:hidden">
          {navigation.map((item) => (
            <div
              key={item.name}
              className={cn(
                `${
                  item.subMenu ? 'group relative  bg-sky-800' : ''
                } "block text-md flex flex-col items-center rounded-md  text-center font-medium tracking-wide  text-white
               focus:outline-none  `,
              )}
            >
              <LinkCustom
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.subMenu) {
                    toggleDropdown();
                  } else {
                    toggleMenu();
                  }
                }}
                href={item.href}
                className="flex  w-full  items-center justify-center gap-1 rounded-md bg-sky-800 px-2  py-2 hover:bg-sky-900"
                aria-current={item.current ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {item.subMenu ? (
                  isDropdownOpen ? (
                    <AiFillCaretDown className=" pl-1 text-sm text-white transition duration-200 " />
                  ) : (
                    <AiFillCaretRight className=" pl-1 text-sm text-white transition duration-200 " />
                  )
                ) : null}
              </LinkCustom>
              {item.subMenu && isDropdownOpen && (
                <div className="relative left-0 top-full z-10 w-full transform whitespace-nowrap rounded-md bg-sky-800">
                  {item.subMenu.map((subItem) => (
                    <LinkCustom
                      key={subItem.name}
                      href="#"
                      className="block w-full rounded-md px-4 py-2 pl-8 text-sm text-white hover:bg-sky-900 "
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                      }}
                    >
                      {subItem.name}
                    </LinkCustom>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="py-2 pl-5">
            <LanguageSwitcher size={23} />
          </div>
        </div>
      ) : null}
    </nav>
  );
}
