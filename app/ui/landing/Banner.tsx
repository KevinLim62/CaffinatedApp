"use client";

import Image from "next/image";
import banner from "../../../public/banner/banner.png";

const Banner = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Image
        src={banner}
        alt="Banner"
        fill
        className="contrast-50 object-cover"
      />
      <div className="absolute inset-y-[40%] inset-x-[17%] text-7xl font-bold whitespace-nowrap space-y-3">
        <h1>Caffinated</h1>
        <h1>Where Every Cup is a Journey.</h1>
      </div>
    </div>
  );
};

export default Banner;
