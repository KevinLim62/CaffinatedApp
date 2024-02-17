'use client';

import { Button } from '@/components/ui/button';
import CartCounter from './CartCounter';
import { useState } from 'react';
import { Product } from '@/types/Product';
import useCart from '@/hooks/use-cart';

type AddToCartProps = {
  product: Product;
};

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const cart = useCart();

  const handleCounterChange = (value: number) => {
    if (value >= 0) {
      setCounter(value);
    }
  };

  const handleCartUpdate = () => {
    const cartItem = {
      product: product,
      quantity: counter,
    };

    cart.addItem(cartItem);
  };

  return (
    <div className='flex flex-row items-center space-x-3'>
      <CartCounter counter={counter} handleOnChange={handleCounterChange} />
      <Button className='bg-foreground hover:bg-primary hover:text-foreground' variant='outline' onClick={handleCartUpdate}>
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
