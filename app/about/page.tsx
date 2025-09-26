import React from 'react'

const page = () => {
  return (
    <div className='m-20'>
        <h1 className='text-2xl font-medium mb-10'>About this webshop</h1>

        <p>This is a mock web shop for practicing Next.js and Tailwind CSS.</p>

        <p>Product data is fetched from <a href="https://dummyjson.com/" className='underline'>Dummy json.</a></p>

        <p className='mt-15'>Create by <a href="https://github.com/alinalokkinen" className='underline'>Alina Lokkinen</a></p>
    </div>
  )
}

export default page
