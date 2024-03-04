'use server';

import axios from '@/lib/axios';

export type createOrderDto = {
  orderItem: {
    productId: string;
    quantity: number;
  }[];
};

export const createOrder = async (payload: createOrderDto) => {
  console.log('Create Order from here');
  const res = await axios.post('/orders', payload);
  return res.data;
};
