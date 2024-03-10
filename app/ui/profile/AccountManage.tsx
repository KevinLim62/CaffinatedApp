'use client';

import SignIn from '@/app/ui/profile/SignIn';
import SignUp from '@/app/ui/profile/SignUp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

type tabStages = 'signin' | 'signup';

const AccountManage = () => {
  const [tabStage, setTabStage] = useState<tabStages>('signin');

  return (
    <Tabs value={tabStage} onValueChange={(value: any) => setTabStage(value)} className='w-[300px] md:w-[500px] mt-5 mx-auto'>
      <TabsList className='flex flex-row justify-between items-center bg-transparent border-[1px] sr-only'>
        <TabsTrigger className='w-1/2 data-[state=active]:text-foreground data-[state=active]:bg-primary  py-3' value='signin'>
          SignIn
        </TabsTrigger>
        <TabsTrigger className='w-1/2 data-[state=active]:text-foreground data-[state=active]:bg-primary py-3' value='signup'>
          SignUp
        </TabsTrigger>
      </TabsList>
      <TabsContent value='signin' className='py-10'>
        <SignIn />
        <p className='mt-5 text-base font-medium text-primary text-center underline decoration-solid cursor-pointer' onClick={() => setTabStage('signup')}>
          I do not have an account
        </p>
      </TabsContent>
      <TabsContent value='signup' className='py-10'>
        <SignUp />
        <p className='mt-5 text-base font-medium text-primary text-center underline decoration-solid cursor-pointer' onClick={() => setTabStage('signin')}>
          I have an account
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default AccountManage;
