import AddToCart from '@/app/components/AddToCart';
import { Product } from '@/app/components/types';
import Image from 'next/image';
import React from 'react'

const page = async ({params}: {params: {id: number}}) => {

  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  const product: Product = data;

  console.log(product);

  return (
    <div className='flex m-20 justify-around items-center h-150'>
      <div>
        <Image src={product.thumbnail} alt="a product" width={1000} height={1000} className='h-100 w-auto' />
      </div>
    <div className='w-1/2'>
      <h2 className='text-2xl font-medium'>{product.title}</h2>
      <p className='mb-10'>{product.brand}</p>
      <p className='w-1/2 mb-5'>{product.description}</p>

      <p className='text-xl font-medium mb-5'>{product.price}</p>
      <p>Rated {product.rating} / 5</p>

      <AddToCart />
    </div>

    </div>
  )
}

export default page
