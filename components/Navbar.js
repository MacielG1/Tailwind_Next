"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import LinkCustom from "./LinkCustom";
import { useState } from "react";

let logo = (
  <svg
    className="block h-8 w-auto cursor-pointer "
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 15 15"
  >
    {/* prettier-ignore */}
    <rect x="0.5" y="2.5" width="14" height="10" rx="1" fill="none" stroke="#fff"/>
    <line x1="4" y1="14.5" x2="11" y2="14.5" stroke="#fff" />
    <line x1="7.5" y1="12" x2="7.5" y2="14.5" stroke="#fff" />
  </svg>
);
const navigation = [
  { name: "Home", href: "/" },
  { name: "Next", href: "https://nextjs.org/docs" },

  {
    name: "Tailwind",
    href: "https://tailwindcss.com/docs/installation",
  },

  {
    name: "Github",
    href: "/",
    subMenu: [
      {
        name: "Timer",
        href: "https://github.com/MacielG1/Interval_Timer",
      },
    ],
  },
];

// function that combines classes without needing template literals
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  let [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
    console.log("drop");
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
            {isOpen ? (
              <IoCloseOutline className="block h-6 w-6 " aria-hidden="true" />
            ) : (
              <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
            )}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end min-[320px]:justify-around sm:items-stretch ">
          {/* Logo */}
          <LinkCustom className="flex flex-shrink-0 items-center" href={`/`}>
            {logo}
            <span className="mx-3 hidden cursor-pointer text-2xl font-semibold tracking-tight text-zinc-100 hover:text-white min-[320px]:block">
              Logo
            </span>
          </LinkCustom>

          {/* Menu Items */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => {
                return (
                  <div
                    key={item.name}
                    className={classNames(
                      `${
                        item.subMenu
                          ? "group relative  hover:rounded-b-none "
                          : ""
                      }  flex justify-center rounded-lg  text-sm font-medium tracking-wide text-zinc-200   hover:bg-sky-800 hover:text-white focus:outline-none `
                    )}
                  >
                    <LinkCustom
                      href={item.href}
                      className="flex  w-[5.5rem] items-center justify-center rounded-lg px-2 py-2 ring-1 ring-inset ring-sky-800"
                      target={item.href.startsWith("http") ? "_blank" : ""}
                    >
                      <span>{item.name}</span>
                      {item.subMenu && (
                        <AiFillCaretDown className="pl-1 text-sm text-white transition duration-200 group-hover:text-sky-800 " />
                      )}
                    </LinkCustom>
                    {item.subMenu && (
                      <div className="absolute left-0 top-full z-10 hidden w-32 transform whitespace-nowrap rounded-md rounded-tl-none bg-sky-800 shadow-lg   group-hover:block">
                        {item.subMenu.map((subItem) => (
                          <LinkCustom
                            key={subItem.name}
                            href={subItem.href}
                            target={
                              subItem.href.startsWith("http") ? "_blank" : ""
                            }
                            className="block w-full rounded-none px-4 py-2 text-sm text-white  first:rounded-tr-md  hover:bg-sky-900 last:hover:rounded-b-md "
                          >
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
              className={classNames(
                `${
                  item.subMenu ? "group relative  bg-sky-800" : ""
                } "block text-md flex flex-col items-center rounded-md  text-center font-medium tracking-wide  text-white
               focus:outline-none  `
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
                aria-current={item.current ? "page" : undefined}
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
