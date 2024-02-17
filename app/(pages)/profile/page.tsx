import AccountManage from '@/app/ui/profile/AccountManage';

export default function Profile() {
  return (
    <main className='flex min-h-screen flex-col w-full items-center'>
      <div className='mx-auto mt-[20vh]'>
        <h1 className='text-xl 2xl:text-3xl font-bold text-primary text-center my-2'>Login / SignUp</h1>
        <AccountManage />
      </div>
    </main>
  );
}
