import { getProducts } from '@/app/actions/products';
import BrowseBanner from '@/app/ui/browse/BrowseBanner';
import ProductLists from '@/app/ui/browse/ProductLists';
import { Product } from '@/types/Product';

export default async function Browse() {
  const products: Product[] = await getProducts();

  return (
    <main className='flex flex-col min-h-screen min-w-[320px] items-center'>
      <BrowseBanner />
      <ProductLists products={products} />
    </main>
  );
}
