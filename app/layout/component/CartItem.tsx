'use client';

import CartCounter from '@/app/ui/component/CartCounter';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/use-cart';
import { CartItem as item } from '@/types/CartItem';
import Image from 'next/image';
import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

type CartItemProps = {
  cartItem: item;
  imageSize?: number;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem, imageSize = 100 }) => {
  const cart = useCart();
  const [counter, setCounter] = useState(cartItem.quantity);

  const handleCounterChange = (value: number) => {
    setCounter(value);

    const updatedCartItem = {
      product: cartItem.product,
      quantity: cartItem.quantity,
    };

    cart.addItem(updatedCartItem);
  };

  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
  };

  return (
    <>
      <div className='p-3'>
        <div className='flex flex-row items-start justify-start w-full space-x-3'>
          <Image src={cartItem.product.imageSrc} alt={cartItem.product.name} height={imageSize} width={imageSize} className='rounded' />

          <div className='flex flex-col h-full text-primary space-y-3'>
            <h1 className='font-bold'>{cartItem.product.name}</h1>
            <h3 className='font-bold'>{`RM${cartItem.product.price}`}</h3>
            <CartCounter counter={counter} handleOnChange={handleCounterChange} iconSize={15} />
          </div>

          <button className='w-full self-end'>
            <MdDeleteOutline size={20} className='ml-auto text-red-500' onClick={() => handleRemoveItem(cartItem.product.productId)} />
          </button>
        </div>
      </div>

      <Separator className='w-full' />
    </>
  );
};

export default CartItem;
