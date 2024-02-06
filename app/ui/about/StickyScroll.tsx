"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

type StickyScrollProps = {
  locations: {
    city: string;
    address: string;
    imageSrc: string;
  }[];
};

const StickyScroll: React.FC<StickyScrollProps> = ({ locations }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const cardLength = locations.length;
  const cardsBreakpoints = locations.map((_, index) => index / cardLength);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.1 && latest <= breakpoint + 0.1) {
        setActiveCard(index);
      }
    });
  });

  return (
    <>
      <motion.div
        className="h-[80vh] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <h1 className="hidden lg:block top-[20%] sticky h-fit text-6xl 2xl:text-7xl font-bold text-primary overflow-hidden">
          Our store
        </h1>
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {locations.map((item, index) => (
              <div key={item.city + index} className="py-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-primary"
                >
                  {item.city}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg text-primary/70 max-w-sm mt-10"
                >
                  {item.address}
                </motion.p>
              </div>
            ))}
            <div className="h-[350px]" />
          </div>
        </div>
        <motion.div className="hidden lg:block h-80 w-[400px] rounded-md bg-primary sticky top-10 overflow-hidden">
          <Image
            src={locations[activeCard].imageSrc}
            alt={locations[activeCard].city}
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default StickyScroll;
