"use client";

import Link from "next/link";
import { navigationMenu } from "../Navbar";

const Resources = () => {
  return (
    <div>
      <div className="font-medium text-xl mb-3">Resources</div>
      <ul className="space-y-3 w-fit">
        {navigationMenu.map((menu) => (
          <li
            className="font-normal text-sm cursor-pointer hover:underline hover:underline-offset-4"
            key={menu.id}
          >
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
