import LandingBanner from './ui/landing/LandingBanner';
import ProductCarousel from './ui/landing/ProductCarousel';
import MenuBentoGrid from './ui/landing/MenuBentoGrid';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <LandingBanner />
      <MenuBentoGrid />
      <Separator />
      <ProductCarousel />
    </main>
  );
}
