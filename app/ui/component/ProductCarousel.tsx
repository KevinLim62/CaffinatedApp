"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleCarouselItem from "./SingleCarouselItem";

const CoffeePacks = [
  {
    id: 1,
    name: "Colombia",
    description: "Description 1",
    imageSrc: "/packs/Colombia.png",
    price: 50.0,
  },
  {
    id: 2,
    name: "Honduras",
    description: "Description 2",
    imageSrc: "/packs/Honduras.png",
    price: 50.0,
  },
  {
    id: 3,
    name: "Ethiopia",
    description: "Description 3",
    imageSrc: "/packs/Ethiopia.png",
    price: 120.0,
  },
  {
    id: 4,
    name: "Himalaya",
    description: "Description 4",
    imageSrc: "/packs/Himalaya.png",
    price: 80.0,
  },
  {
    id: 5,
    name: "Viennese",
    description: "Description 5",
    imageSrc: "/packs/Viennese.png",
    price: 70.0,
  },
];

const ProductCarousel = () => {
  return (
    <div className="m-3 py-5">
      <div className="text-primary text-center pb-5">
        <h1 className="text-3xl font-bold">Brew It Your Way</h1>
        <h1 className="text-xl font-medium">Checkout Our Coffee Packs</h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="min-w-[80vw]"
      >
        <CarouselContent>
          {CoffeePacks.map((pack) => (
            <CarouselItem key={pack.id} className="md:basis-1/2 lg:basis-1/3">
              <SingleCarouselItem
                name={pack.name}
                description={pack.description}
                imageSrc={pack.imageSrc}
                price={pack.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary" />
        <CarouselNext className="text-primary" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
