'use client';

import Image from 'next/image';
import AddToCart from './AddToCart';
import { Product } from '@/types/Product';

const SingleProduct: React.FC<Product> = ({ name, description, imageSrc, price, id }) => {
  return (
    <div className='w-full'>
      <div className='m-3 py-5'>
        <div className='flex flex-col md:flex-row items-center justify-center md:mx-20 h-full'>
          <div className='w-full h-[50vh] md:w-[40%] md:h-[80vh] 2xl:w-[30%] 2xl:h-[60vh] relative'>
            <Image src={imageSrc[0]} alt={name} fill className='object-cover' />
          </div>
          <div className='w-full md:w-[60%] h-full'>
            <div className='flex flex-col h-full items-start text-primary md:mx-20 p-10'>
              <div className='space-y-3'>
                <h1 className='text-6xl font-bold'>{name}</h1>
                <h3 className='text-2xl font-bold my-2'>{`RM${price}`}</h3>
                <p className='text-md text-justify font-medium leading-loose'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
              </div>
              <div className='mt-10'>
                <AddToCart
                  product={{
                    name,
                    description,
                    imageSrc,
                    price,
                    id,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
