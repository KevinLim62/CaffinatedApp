'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { PiSignInFill, PiSignOut } from 'react-icons/pi';
import { signOut, useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    return (
      <div className='flex items-center gap-3'>
        <Avatar onClick={() => router.push('/profile')}>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>{session.user && session.user.email}</AvatarFallback>
        </Avatar>
        <PiSignOut size={25} className='text-white cursor-pointer hover:scale-125' onClick={() => signOut()} />
      </div>
    );
  }

  return (
    <div>
      <PiSignInFill size={25} className='text-white cursor-pointer hover:scale-125' onClick={() => router.push('/profile')} />
    </div>
  );
};

export default Profile;
