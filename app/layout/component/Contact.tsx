"use client";

import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="space-y-5">
      <div className="font-bold text-2xl">Caffinated</div>
      <div>Address</div>
      <div>Contact</div>
      <div className="flex gap-5 text-white">
        <RiTwitterXFill size={30} className="cursor-pointer" />
        <FaInstagram size={30} className="cursor-pointer" />
        <FaFacebookF size={30} className="cursor-pointer" />
      </div>
      <div className="absolute bottom-5 font-light text-sm text-foreground/50">
        © 2024 Caffinated, All rights reserved. Powered by Kevin
      </div>
    </div>
  );
};

export default Contact;
