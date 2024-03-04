import { getProducts } from '@/app/actions/products';
import BrowseBanner from '@/app/ui/browse/BrowseBanner';
import ProductLists from '@/app/ui/browse/ProductLists';
import { Product } from '@/types/Product';

export default async function Browse() {
  const products: Product[] = await getProducts();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <BrowseBanner />
      <ProductLists products={products} />
    </main>
  );
}
