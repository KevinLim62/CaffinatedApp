"use client";

import Link from "next/link";
import SingleCarouselItem from "../component/SingleCarouselItem";

const productLists = [
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

const ProductLists = () => {
  return (
    <div className="m-3 py-5">
      <div className="grid grid-flow-row-dense grid-cols-4 min-w-[80vw] gap-5">
        {productLists.map((product) => (
          <Link
            href={`/browse/${product.id}`}
            key={product.id}
            className="flex flex-col justify-center"
          >
            <SingleCarouselItem
              name={product.name}
              description={product.description}
              imageSrc={product.imageSrc}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
