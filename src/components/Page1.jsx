import { Headset, ShieldAlert, ShipWheel, Undo } from 'lucide-react';
import React from 'react'
import ProductGrid from './ProductGrid';
import Page2 from './Page2';
import Page3 from './Page3';

const Page1 = () => {
    
  return (
    <div className='bg-white w-full h-auto'>
        <div>
         <div className='md:hidden py-22 bg-gray-100 flex gap-4 flex-col justify-center items-center'>
       <h1 className='text-5xl text-center'>Comfy All Day. Cosy All year.</h1>
        <p className='text-black text-lg text-center'>Sustainable Outdoor Footwear Made with 99% Natural and Recycled Materials.</p>
        <button className='bg-emerald-950 py-4 px-10 md:text-lg xl:text-xl rounded text-white'>Shop Now</button>
        </div>
      <div className='flex flex-col max-w-7xl py-8 lg:py-20 lg:px-16 p-4'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl text-black'>Comfy All Day. Cosy All year. Sustainably Made.</h1>
      </div>
      </div>
     <ProductGrid/>
    </div>
  )
}

export default Page1



