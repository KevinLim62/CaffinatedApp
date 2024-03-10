'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided.',
    })
    .email({ message: 'Input is not a valid email format.' }),
  password: z
    .string({
      required_error: 'Password must be provided.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters',
    }),
});

const SignIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const userActivation = searchParams.get('activation');
    const userEmail = searchParams.get('email');
    const userPassword = searchParams.get('password');

    if (userActivation === 'true' && userEmail && userPassword) {
      handleLogin({
        email: userEmail,
        password: userPassword,
      });
    }
  }, []);

  const handleLogin = async (data: z.infer<typeof signInSchema>) => {
    await signIn('userLogin', {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: process.env.NEXT_UI_URL,
    }).then((res) => {
      if (res?.ok) {
        toast.success('Welcome back!');
        router.replace(pathName);
        console.log('Sign in response: ', res);
      } else {
        toast.error('User email or password incorrect');
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Login to your account to view your orders and loyalty program.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-3'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className=''>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='JohnDoe@gmail.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className=''>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='Password' {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col justify-center items-center space-y-3'>
              <div className='flex w-full justify-center pt-5'>
                <Button className='rounded-full px-8'>Login</Button>
              </div>
              <Separator className='w-[70%] h-[2px]' />
              <div className='flex items-center space-x-5'>
                <FcGoogle size={30} className='cursor-pointer hover:scale-125' />
                <FaFacebookF size={28} className='cursor-pointer hover:scale-125 text-[#1877F2]' />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
