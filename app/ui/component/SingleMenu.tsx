"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

type SingleMenuProps = {
  name: string;
  description: string;
  imageSrc: string;
  className: string;
};

const SingleMenu: React.FC<SingleMenuProps> = ({
  name,
  description,
  imageSrc,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          <div className="bg-neutral-500 w-full h-[30vh] rounded-md relative">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          whileHover={{ x: 20 }}
          transition={{ ease: "easeInOut" }}
          className="w-fit cursor-default"
        >
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm font-base">{description}</p>
        </motion.div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default SingleMenu;
