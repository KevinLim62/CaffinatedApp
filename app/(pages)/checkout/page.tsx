import CheckoutList from '@/app/ui/checkout/CheckoutList';
import SimilarProduct from '@/app/ui/checkout/SimilarProduct';

export default async function Checkout() {
  return (
    <main className='flex flex-col min-h-screen min-w-[320px] items-center'>
      <div className='w-full mt-[20vh] 2xl:mt-[15vh]'>
        <h1 className='text-6xl 2xl:text-7xl font-bold text-primary text-center'>Cart List</h1>
        <CheckoutList />
      </div>
      <SimilarProduct />
    </main>
  );
}
