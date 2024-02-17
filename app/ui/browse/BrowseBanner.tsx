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
    <div className='h-[50vh] w-full overflow-hidden relative'>
      <div className='bg-primary/10 flex flex-col h-full items-center justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-3'>
        <div className='flex self-start p-5 mt-12 2xl:mt-0'>
          <Breadcrumbs breadcrumbsLinks={breadcrumbsLinks} />
        </div>
        Products
      </div>
    </div>
  );
};

export default BrowseBanner;
