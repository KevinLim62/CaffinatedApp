'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

type BreadcrumbsProps = {
  breadcrumbsLinks: {
    label: string;
    link: string;
  }[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbsLinks }) => {
  return (
    <div className='flex flex-row items-center gap-3'>
      {breadcrumbsLinks.map((el, index) => (
        <React.Fragment key={index}>
          {index === breadcrumbsLinks.length - 1 ? (
            <>
              <span className='font-medium text-lg'>{el.label}</span>
            </>
          ) : (
            <>
              <span className='font-light text-lg'>
                <Link href={el.link} className='hover:underline hover:underline-offset-4'>
                  {el.label}
                </Link>
              </span>
              <Separator decorative orientation='vertical' className='bg-primary rotate-12 w-[2px]' />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
