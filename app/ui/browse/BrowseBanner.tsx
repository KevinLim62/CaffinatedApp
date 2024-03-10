'use client';

import Breadcrumbs from '../component/Breadcrumbs';

const breadcrumbsLinks = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Products',
    link: '/browse',
  },
];

const BrowseBanner = () => {
  return (
    <div className='w-full mt-[16vh] 2xl:mt-[10vh]'>
      <div className='bg-primary/10 flex flex-col h-full items-center justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-2 py-8 2xl:py-5'>
        <div className='flex self-start p-2 md:p-5'>
          <Breadcrumbs breadcrumbsLinks={breadcrumbsLinks} />
        </div>
        Products
      </div>
    </div>
  );
};

export default BrowseBanner;
