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
    <div className='h-[45vh] w-full overflow-hidden relative'>
      <div className='bg-primary/10 flex flex-col h-full items-center justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-3'>
        <div className='flex self-start p-5 mt-12 2xl:mt-0'>
          <Breadcrumbs breadcrumbsLinks={breadcrumbsLinks} />
        </div>
        {product.productName}
      </div>
    </div>
  );
};

export default SingleProductBanner;
