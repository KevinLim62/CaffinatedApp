import { getSingleProduct } from '@/app/actions/products';
import SingleProductBanner from '@/app/ui/browse/SingleProductBanner';
import SingleProduct from '@/app/ui/component/SingleProduct';
import { Product } from '@/types/Product';

type paramProps = {
  params: {
    productId: string;
  };
};

const page = async ({ params }: paramProps) => {
  const product: Product = await getSingleProduct(params.productId);

  return (
    <main className='flex flex-col min-h-screen items-center'>
      <SingleProductBanner
        product={{
          productId: product.id.toString(),
          productName: product.name,
        }}
      />
      <SingleProduct name={product.name} description={product.description} imageSrc={product.imageSrc} price={product.price} id={+params.productId} />
    </main>
  );
};

export default page;
