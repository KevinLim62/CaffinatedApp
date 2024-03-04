'use client';

import Link from 'next/link';
import SingleCarouselItem from '../component/SingleCarouselItem';
import { Product } from '@/types/Product';

type ProductListsProps = {
  products: Product[];
};

const ProductLists: React.FC<ProductListsProps> = ({ products }) => {
  return (
    <div className='m-3 py-5'>
      <div className='grid grid-flow-row-dense grid-cols-4 min-w-[80vw] gap-5'>
        {products.map((product) => (
          <Link href={`/browse/${product.id}`} key={product.id} className='flex flex-col justify-center'>
            <SingleCarouselItem product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
