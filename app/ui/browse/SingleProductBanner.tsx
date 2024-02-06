"use client";

import { useState } from "react";
import Breadcrumbs from "../component/Breadcrumbs";

const SingleProductBanner = () => {
  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/browse",
    },
  ]);

  return (
    <div className="h-[35vh] w-full overflow-hidden relative">
      <div className="bg-primary/10 flex flex-col h-full items-center justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-3">
        <div className="flex self-start p-5">
          <Breadcrumbs breadcrumbsLinks={breadcrumbsLinks} />
        </div>
        Products _
      </div>
    </div>
  );
};

export default SingleProductBanner;
