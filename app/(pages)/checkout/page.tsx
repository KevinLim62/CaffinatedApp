'use client';

import CartItem from '@/app/layout/component/CartItem';
import SimilarProduct from '@/app/ui/checkout/SimilarProduct';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

export default function Checkout() {
  const cart = useCart();
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='w-full mt-[20vh]'>
        <h1 className='text-6xl 2xl:text-7xl font-bold text-primary text-center'>Cart List</h1>
        <div className='m-10 p-5 border-2'>
          {cart.items.map((item) => (
            <div key={item.product.productId} className='my-2'>
              <CartItem cartItem={item} imageSize={200} />
            </div>
          ))}
          <div className='flex w-full'>
            <Button className='ml-auto mt-10' onClick={() => {}}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <SimilarProduct />
    </main>
  );
}
