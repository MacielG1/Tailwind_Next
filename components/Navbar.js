"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  {
    name: "Projects",
    href: "#",
    current: false,
    subMenu: [
      { name: "Project 1", href: "#", current: false },
      { name: "Project 2", href: "#", current: false },
    ],
  },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  // function that combines classes without needing template literals
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-sky-950 to-sky-600">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
        {/* Mobile Toggle */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <div
            onClick={toggleMenu}
            className=" mx-1 inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-800"
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
          <div className="flex flex-shrink-0 items-center">
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
            {/* Website Name */}
            <span className="mx-3 hidden cursor-pointer text-2xl font-semibold tracking-tight text-zinc-100 hover:text-white min-[320px]:block">
              <Link href="#">Logo</Link>
            </span>
          </div>
          {/* Menu Items */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-sky-900 text-white"
                      : "text-zinc-200 hover:bg-sky-800 hover:text-white",
                    `${
                      item.subMenu ? "group relative" : ""
                    } rounded-md px-2 py-2 text-sm font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-zinc-200`
                  )}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between"
                    aria-current={item.current ? "page" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.subMenu && (
                      <AiFillCaretDown className="pl-1 text-sm text-white transition duration-200 group-hover:text-sky-800" />
                    )}
                  </Link>
                  {item.subMenu && (
                    <div className="absolute left-0 top-full z-10 hidden w-32 transform whitespace-nowrap rounded-md bg-sky-800 shadow-lg ring-1 ring-black ring-opacity-5 transition duration-300 group-hover:block">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href="#"
                          className="block w-full rounded-md px-4 py-2 text-sm text-white hover:bg-sky-900 "
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
                  item.subMenu ? "group relative" : ""
                } rounded-md px-2  py-2 text-sm  font-medium tracking-wide text-white focus:outline-none focus:ring-2 focus:ring-zinc-200`
              )}
            >
              <Link
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.subMenu) {
                    toggleDropdown();
                  } else {
                    toggleMenu();
                  }
                }}
                href={item.href}
                className="flex  items-center  gap-1 "
                aria-current={item.current ? "page" : undefined}
              >
                <span>{item.name}</span>
                {item.subMenu && (
                  <AiFillCaretDown className="pl-1 text-sm text-white transition duration-200 " />
                )}
              </Link>
              {item.subMenu && isDropdownOpen && (
                <div className="relative left-0 top-full z-10 mt-2 w-full transform whitespace-nowrap rounded-md  bg-gradient-to-r from-sky-900  to-sky-600">
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href="#"
                      className="block w-full rounded-md px-4 py-2 pl-5 text-sm text-white hover:bg-sky-900 hover:bg-opacity-70"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
