'use client';

import { useState } from 'react';
import Breadcrumbs from '../component/Breadcrumbs';

type SingleProductBanner = {
  product: {
    productId: string;
    productName: string;
  };
};

const SingleProductBanner: React.FC<SingleProductBanner> = ({ product }) => {
  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Products',
      link: '/browse',
    },
    {
      label: product.productName,
      link: `/browse/${product.productId}`,
    },
  ]);

  return (
    <div className='w-full mt-[16vh] 2xl:mt-[10vh]'>
      <div className='bg-primary/10 flex flex-col h-full items-center justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-2 py-8 2xl:py-5'>
        <div className='flex self-start p-5'>
          <Breadcrumbs breadcrumbsLinks={breadcrumbsLinks} />
        </div>
        {product.productName}
      </div>
    </div>
  );
};

export default SingleProductBanner;
