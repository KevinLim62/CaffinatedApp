"use client";

import SingleProductBanner from "@/app/ui/browse/SingleProductBanner";
import SingleProduct from "@/app/ui/component/SingleProduct";

type paramProps = {
  params: {
    productId: string;
  };
};

const page = ({ params }: paramProps) => {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <SingleProductBanner />
      <SingleProduct
        name="Colombia"
        description="Description 1"
        imageSrc="/packs/Colombia.png"
        price={50.0}
      />
    </main>
  );
};

export default page;
