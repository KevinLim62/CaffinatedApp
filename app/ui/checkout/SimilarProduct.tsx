'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import SingleCarouselItem from '../component/SingleCarouselItem';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/app/actions/products';
import { Product } from '@/types/Product';
import Link from 'next/link';

const SimilarProduct = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  return (
    <div className='m-3 py-5'>
      <div className='text-primary text-center pb-5'>
        <h1 className='text-3xl font-bold'>Brew It Your Way</h1>
        <h1 className='text-xl font-medium'>Something that you might be interested</h1>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='max-w-xs mx-auto md:min-w-[80vw]'
      >
        <CarouselContent>
          {Array.isArray(data) &&
            data.map((product: Product) => (
              <CarouselItem key={product.id} className='md:basis-1/2 lg:basis-1/3'>
                <Link href={`/browse/${product.id}`} key={product.id}>
                  <SingleCarouselItem product={product} />
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='hidden sm:flex text-primary' />
        <CarouselNext className='hidden sm:flex text-primary' />
      </Carousel>
    </div>
  );
};

export default SimilarProduct;
