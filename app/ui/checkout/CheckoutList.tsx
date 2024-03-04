'use client';

import { createOrder, createOrderDto } from '@/app/actions/orders';
import CartItem from '@/app/layout/component/CartItem';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import { useMutation } from '@tanstack/react-query';
import { CartItem as cartItem } from '@/types/CartItem';

const CheckoutList = () => {
  const cart = useCart();
  const { isSuccess, error, mutate } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (data: createOrderDto) => createOrder(data),
    onMutate: () => {
      console.log('Mutate');
    },
    onError: () => {
      console.log('Error');
    },
    onSuccess: (data) => {
      console.log('Success', data);
    },
  });

  const handleCreateOrder = async (cartItem: cartItem[]) => {
    const payload = cartItem.map((item) => {
      return {
        productId: item.product.id.toString(),
        quantity: item.quantity,
      };
    });
    mutate({ orderItem: payload });
  };

  return (
    <div className='m-10 p-5 border-2'>
      {cart.items.map((item) => (
        <div key={item.product.id} className='my-2'>
          <CartItem cartItem={item} imageSize={200} />
        </div>
      ))}
      <div className='flex w-full'>
        <Button className='ml-auto mt-10' onClick={() => handleCreateOrder(cart.items)}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CheckoutList;
