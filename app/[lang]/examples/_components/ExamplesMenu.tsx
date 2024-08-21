'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const ExamplesTypes = [
  {
    name: 'Users',
    href: '/examples/users',
  },
  {
    name: 'Posts',
    href: '/examples/posts',
  },
  {
    name: 'Carts',
    href: '/examples/carts',
  },
];

export default function ExamplesMenu() {
  return (
    <NavigationMenu className="container mt-2">
      <NavigationMenuList className="flex gap-2">
        {ExamplesTypes.map((type) => (
          <NavigationMenuItem key={type.name}>
            <Link href={type.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-neutral-200 ring-neutral-200 dark:bg-neutral-950 ring dark:ring-neutral-800 dark:hover:bg-neutral-800 hover:bg-neutral-100 `}
              >
                {type.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
