'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RiProfileLine } from 'react-icons/ri';
import { useSession } from 'next-auth/react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { getOrderByUserId } from '@/app/actions/orders';
import { CartItem } from '@/types/CartItem';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const UserDashboard = () => {
  const { data: session } = useSession();
  const { isPending, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getOrderByUserId(session?.user.id),
  });

  return (
    <div className='flex flex-col justify-start items-start space-y-5 '>
      <h1 className='text-2xl 2xl:text-4xl font-semibold text-primary my-2'>WELCOME</h1>
      <h3 className='text-xl 2xl:text-2xl font-bold text-primary my-2'>{session?.user.name}</h3>
      <Alert className='bg-foreground w-fit'>
        <AlertTitle className='flex items-center gap-5 font-medium text-primary'>
          <RiProfileLine size={30} className='text-black z-20' />
          Profile Section
        </AlertTitle>
        <AlertDescription className='font-medium text-primary'>Here you can view your order histories</AlertDescription>
      </Alert>
      <Table className='mx-auto'>
        <TableCaption>Order History</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>OrderId</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className=''>Order Item</TableHead>
            <TableHead className='w-[200px] text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(data) &&
            data.map((item) => {
              let totalPrice = 0;
              const orderItem: CartItem[] = item.orderItem;
              orderItem.forEach((el) => {
                totalPrice += el.product.price * el.quantity;
              });

              return (
                <TableRow key={item.id} className='text-primary'>
                  <TableCell className='font-semibold'>{item.id}</TableCell>
                  <TableCell className='font-semibold'>{item.orderStatus}</TableCell>
                  <TableCell>
                    <Accordion type='single' collapsible className='w-full'>
                      <AccordionItem value='item-1'>
                        <AccordionTrigger>{`Order Item (${orderItem.length})`}</AccordionTrigger>
                        <AccordionContent>
                          {orderItem.map((el) => (
                            <div key={el.product.id} className='flex flex-row items-start justify-start w-full space-x-3'>
                              <Image src={el.product.imageSrc[0]} alt={el.product.name} height={150} width={150} className='rounded' />

                              <div className='flex flex-col h-full text-primary space-y-3'>
                                <h1 className='font-semibold'>{el.product.name}</h1>
                                <h1 className='font-semibold'>{el.quantity}</h1>
                              </div>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TableCell>
                  <TableCell className='text-right font-semibold'>MYR{totalPrice}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserDashboard;
