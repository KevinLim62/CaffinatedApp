'use client';

import SingleProductBanner from '@/app/ui/browse/SingleProductBanner';
import SingleProduct from '@/app/ui/component/SingleProduct';

type paramProps = {
  params: {
    productId: string;
  };
};

const page = ({ params }: paramProps) => {
  return (
    <main className='flex flex-col min-h-screen items-center'>
      <SingleProductBanner
        product={{
          productId: params.productId,
          productName: 'Colombia',
        }}
      />
      <SingleProduct name='Colombia' description='Description 1' imageSrc='/packs/Colombia.png' price={50} productId={params.productId} />
    </main>
  );
};

export default page;
