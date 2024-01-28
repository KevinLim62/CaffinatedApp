"use client";

import Image from "next/image";
import logo from "../../../public/logo/logo.png";

const Logo = () => {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden">
      <Image width={100} height={100} alt="CaffinatedLogo" src={logo} />
    </div>
  );
};

export default Logo;
