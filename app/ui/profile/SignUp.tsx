'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const signUpSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided.',
    })
    .email({ message: 'Input is not a valid email format.' }),
  username: z
    .string({
      required_error: 'Username must be provided.',
    })
    .min(5, {
      message: 'Username must be at least 5 characters',
    }),
  password: z
    .string({
      required_error: 'Password must be provided.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters',
    }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const handleSignup = async (data: z.infer<typeof signUpSchema>) => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account now</CardTitle>
        <CardDescription>You will be able to track your order after you register.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignup)} className='space-y-3'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className=''>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='John Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <div className='flex w-full justify-center pt-5'>
              <Button className='rounded-full px-8'>Sign Up</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
