'use client'
import Link from 'next/link'
import React from 'react'

const ViewProductsButton = () => {


  return (
    <div>
      <button onClick={() => Link} className="relative z-10 bg-amber-600 w-1/5 p-3 rounded-xs">View products</button>
    </div>
  )
}

export default ViewProductsButton
