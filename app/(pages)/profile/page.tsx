'use client';

import AccountManage from '@/app/ui/profile/AccountManage';
import UserDashboard from '@/app/ui/profile/UserDashboard';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <main className='flex min-h-screen flex-col w-full items-center'>
      <div className='mt-[20vh] mx-10 w-[90%]'>
        {session?.user ? (
          <UserDashboard />
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
