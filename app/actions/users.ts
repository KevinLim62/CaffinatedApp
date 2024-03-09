'use server';

import axios from '@/lib/axios';

export type createUserDto = {
  name: string;
  email: string;
  password: string;
};

export const createUser = async (payload: createUserDto) => {
  const res = await axios.post('/users', payload);
  return res.data;
};
