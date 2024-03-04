import LandingBanner from './ui/landing/LandingBanner';
import ProductCarousel from './ui/landing/ProductCarousel';
import MenuBentoGrid from './ui/landing/MenuBentoGrid';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/types/Product';
import { getProducts } from './actions/products';

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <LandingBanner />
      <MenuBentoGrid />
      <Separator />
      <ProductCarousel products={products} />
    </main>
  );
}
