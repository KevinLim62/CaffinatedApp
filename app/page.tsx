import Banner from "./ui/landing/Banner";
import ProductCarousel from "./ui/component/ProductCarousel";
import MenuBentoGrid from "./ui/component/MenuBentoGrid";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <MenuBentoGrid />
      <Separator />
      <ProductCarousel />
    </main>
  );
}
