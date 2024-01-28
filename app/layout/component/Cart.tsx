"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgShoppingCart } from "react-icons/cg";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center">
          <CgShoppingCart size={25} className="text-foreground" />
        </div>
      </SheetTrigger>
      <SheetContent className="text-primary">
        <SheetHeader>
          <SheetTitle className="text-primary">Shopping Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
