import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex  justify-center z-10 h-20 items-center top-0 text-cyan-900 text-lg font-medium">
      <div className="flex gap-15">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>
      
    </div>
  );
};

export default Navbar;
