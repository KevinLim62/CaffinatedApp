'use client';

import Contact from './component/Contact';
import LoyaltyReward from './component/LoyaltyReward';
import Resources from './component/Resources';

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground relative'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-10 md:gap-0 p-5 h-[80vh] md:h-[60vh] 2xl:h-[50vh]'>
        <div className='w-full md:w-1/2'>
          <Contact />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex flex-col gap-2'>
            <LoyaltyReward />
            <Resources />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
