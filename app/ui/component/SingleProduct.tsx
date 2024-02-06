"use client";

import Image from "next/image";

type SingleProductProps = {
  name: string;
  description: string;
  imageSrc: string;
  price: number;
};

const SingleProduct: React.FC<SingleProductProps> = ({
  name,
  description,
  imageSrc,
  price,
}) => {
  return (
    <div className="w-full">
      <div className="m-3 py-5">
        <div className="flex flex-row items-center justify-center mx-20 h-[90vh]">
          <div className="w-[40%] h-full relative">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          </div>
          <div className="w-[60%] h-full">
            <div className="flex flex-col h-full items-start text-primary mx-20 p-10">
              <div className="space-y-3">
                <h1 className="text-6xl font-bold">{name}</h1>
                <p className="text-lg text-justify font-medium leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="mt-auto">
                <h3 className="text-6xl font-bold">{price}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
