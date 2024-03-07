'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useCart from '@/hooks/use-cart';
import { CgShoppingCart } from 'react-icons/cg';
import CartItem from './CartItem';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const Cart = () => {
  const { status } = useSession();
  const cart = useCart();
  const router = useRouter();

  const handleProceedCheckout = () => {
    if (status === 'authenticated') {
      router.push('/checkout');
    } else {
      toast('You have to login first before proceeding to checkout');
      router.push('/profile');
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className='flex items-center rounded-full px-3 py-1 bg-foreground space-x-1'>
          <CgShoppingCart size={25} className='text-primary' />
          <div className='text-primary font-medium'>{cart.items.length}</div>
        </div>
      </SheetTrigger>
      <SheetContent className=''>
        <SheetHeader>
          <SheetTitle className='text-primary'>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cart.items.map((item) => (
              <div key={item.product.id} className='my-2'>
                <CartItem cartItem={item} />
              </div>
            ))}
            <div className='flex w-full'>
              <Button className='ml-auto mt-10' onClick={handleProceedCheckout} disabled={cart.items.length === 0}>
                Proceed
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
