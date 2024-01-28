"use client";

import Contact from "./component/Contact";
import LoyaltyReward from "./component/LoyaltyReward";
import Resources from "./component/Resources";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="flex flex-row items-center justify-center p-5 h-[50vh]">
        <div className="w-1/2">
          <Contact />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-2">
            <LoyaltyReward />
            <Resources />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
