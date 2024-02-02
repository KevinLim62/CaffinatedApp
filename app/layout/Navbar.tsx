'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Profile from './component/Profile';
import Cart from './component/Cart';
import Logo from './component/Logo';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimate, useMotionValueEvent, useScroll } from 'framer-motion';
import { scroll } from 'framer-motion';
import { useState } from 'react';

export const navigationMenu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Browse',
    link: '/browse',
  },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = scrollYProgress.getPrevious() ?? latest;
    const direction = latest - previous;

    if (latest < 0.1) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.nav
        className='fixed top-0 w-full py-2 bg-primary z-30 origin-top'
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className='flex flex-row h-full items-center justify-between mx-5'>
          <div className='w-[30%]'>
            <NavigationMenu>
              <NavigationMenuList className='gap-5'>
                {navigationMenu.map((menu) => (
                  <NavigationMenuItem key={menu.id}>
                    <NavigationMenuLink href={menu.link} className='text-lg font-medium text-primary-foreground relative'>
                      <div className='after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-0 after:bg-white after:hover:w-full after:origin-left after:duration-200'>{menu.name}</div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <div className='w-[30%]'>
            <div className='flex gap-3 items-center justify-end'>
              <Profile />
              <Cart />
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
