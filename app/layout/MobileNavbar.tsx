'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { navigationMenu } from './Navbar';
import React from 'react';
import { cn } from '@/lib/utils';
import { RiMenu2Fill } from 'react-icons/ri';
import Profile from './component/Profile';

const MobileNavbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className='mt-3'>
              <RiMenu2Fill size={25} className='relative top-[1px] transition duration-200 group-data-[state=open]:-rotate-90' aria-hidden='true' />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 bg-primary text-foreground'>
              {navigationMenu.map((menu) => (
                <ListItem key={menu.id} href={menu.link} title={menu.name} className='px-10 py-5' />
              ))}
              <li className='mx-auto p-3'>
                <Profile />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MobileNavbar;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/50 hover:text-primary focus:text-primary', className)} {...props}>
          <div className='text-lg font-medium text-primary-foreground leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
