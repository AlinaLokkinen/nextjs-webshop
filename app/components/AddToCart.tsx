'use client'
import React, { useState } from 'react'

const AddToCart = () => {

    const [addedMsg, setAddedMsg] = useState('Item added to cart!');
    const [added, setAdded] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 5000);
      }}
      className='mt-5 font-medium text-white bg-cyan-900 p-3 rounded-xs'
      >Add to cart</button>

      {added && (
        <p className='font-xl font-medium mt-2'>{addedMsg}</p>
      )}
    </div>
  )
}

export default AddToCart
 