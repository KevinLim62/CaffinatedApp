"use client";

import Logo from "@/app/layout/component/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

type SingleCarouselItemProps = {
  name: string;
  description: string;
  imageSrc: string;
  price: number;
};

const SingleCarouselItem: React.FC<SingleCarouselItemProps> = ({
  name,
  description,
  imageSrc,
  price,
}) => {
  return (
    <>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square rounded-lg overflow-hidden items-center justify-center p-6 cursor-pointer relative">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-primary/80"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex flex-col h-full items-center justify-center text-foreground">
                <Logo />
                <h1 className="text-lg font-bold">{name}</h1>
                <h3 className="text-lg font-bold">{description}</h3>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
      <div className="ml-3 text-primary">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm font-medium">
          <span className="text-xs">From</span>
          {` RM${price}`}
        </p>
      </div>
    </>
  );
};

export default SingleCarouselItem;
