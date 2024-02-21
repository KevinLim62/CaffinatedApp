'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { PiSignInFill } from 'react-icons/pi';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    return (
      <div>
        <Avatar onClick={() => router.push('/profile')}>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>{session.user && session.user.email}</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  return (
    <div>
      <PiSignInFill size={25} className='text-white cursor-pointer' onClick={() => router.push('/profile')} />
    </div>
  );
};

export default Profile;
