import React from "react";
import { Product } from "./types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const { id, title, description, price, thumbnail } = product;

  return (
    <div className="flex flex-col mx-10 my-10 items-center justify-center h-full w-65 ">
      <Link href={`/shop/${id}`} className="flex flex-col items-center justify-center h-full w-full">
        <Image
          src={thumbnail}
          alt="product image"
          width={150}
          height={150}
          className="mb-5"
        />
        <div className="flex flex-col text-center justify-center items-center">
          <p className="text-xl font-medium">{title}</p>
          <p>{product.brand}</p>
          <p>€ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
