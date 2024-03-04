'use server';

import axios from '@/lib/axios';

export const getProducts = async () => {
  const res = await axios.get('/products');
  return res.data;
};

export const getSingleProduct = async (productId: string) => {
  const res = await axios.get(`/products/${productId}`);
  return res.data;
};
