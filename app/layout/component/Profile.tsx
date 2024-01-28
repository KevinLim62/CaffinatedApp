"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiLoginBoxLine } from "react-icons/ri";
import { PiSignInFill } from "react-icons/pi";

const Profile = () => {
  const isUserLogin = false;

  if (isUserLogin) {
    return (
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  return (
    <div>
      <PiSignInFill size={25} className="text-white cursor-pointer" />
    </div>
  );
};

export default Profile;
