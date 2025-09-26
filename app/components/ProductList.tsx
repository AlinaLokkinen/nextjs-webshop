import React from 'react'
import ProductCard from './ProductCard';
import { Product } from './types';


const ProductList = async () => {

    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const products: Product[] = data.products;

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 m-10 justify-items-center gap-5">
        {products.map(p => (
            <ProductCard key={p.id} product={p} />
        ))}
    </div>
  )
}

export default ProductList
