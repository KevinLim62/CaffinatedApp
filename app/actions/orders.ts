'use server';

import axios from '@/lib/axios';
import { redirect } from 'next/navigation';

export type createOrderDto = {
  orderItem: {
    productId: string;
    quantity: number;
  }[];
  userId: string;
};

export type updateOrderDto = {
  orderStatus: string;
  orderItem?: {
    productId: string;
    quantity: number;
  }[];
  userId?: string;
  expireTime?: number;
};

export const createOrder = async (payload: createOrderDto) => {
  const res = await axios.post('/orders', payload);

  // if (res.data) {
  //   const stripePaymentLink = res.data.StripePaymentLink.url;
  //   redirect(stripePaymentLink);
  // }
  return res.data;
};

export const getOrderByUserId = async (userId: string | undefined) => {
  const res = await axios.get(`/orders/userId/${userId}`);
  return res.data;
};

export const updateOrderById = async (id: string, payload: updateOrderDto) => {
  const res = await axios.put(`/orders/${id}`, payload);
  return res.data;
};
