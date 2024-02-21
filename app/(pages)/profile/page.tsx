'use client';

import AccountManage from '@/app/ui/profile/AccountManage';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <main className='flex min-h-screen flex-col w-full items-center'>
      <div className='mx-auto mt-[20vh]'>
        {session?.user ? (
          <>
            <h1 className='text-2xl 2xl:text-4xl font-bold text-primary text-center my-2'>Welcome</h1>
            <h3 className='text-xl 2xl:text-2xl font-bold text-primary text-center my-2'>{session.user.email}</h3>
          </>
        ) : (
          <>
            <h1 className='text-2xl 2xl:text-4xl font-bold text-primary text-center my-2'>Login / Register</h1>
            <AccountManage />
          </>
        )}
      </div>
    </main>
  );
}
