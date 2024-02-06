import BrowseBanner from "@/app/ui/browse/BrowseBanner";
import ProductLists from "@/app/ui/browse/ProductLists";

export default function Browse() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BrowseBanner />
      <ProductLists />
    </main>
  );
}
