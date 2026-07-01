import React from 'react'
import Page5 from '../components/Page5'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Cart = () => {

  return (
    <>
      <div className='h-auto bg-white w-full'>
        <div className='flex max-w-7xl border-t p-6 py-12 md:py-22 border-gray-400 mx-auto flex-col justify-end items-center text-center'>
            <h1 className='text-emerald-950 text-2xl md:text-3xl lg:text-4xl max-w-5xl xl:text-7xl tracking-wide font-medium'>Your cart is empty</h1>
             <Link to='/'><button className='bg-emerald-950 py-4 px-10 mt-15 md:text-lg xl:text-xl rounded text-white'>Continue Shoppping</button></Link> 
            <p className='text-emerald-950 text-3xl max-w-md mt-15'>Have an account?</p>
            <p className='text-emerald-950 text-2xl max-w-md'>
<Link className='underline decoration-emerald-950 decoration-1 underline-offset-2' to='/login'>Log in</Link> to check out faster.</p>
          </div>
        </div>
      <Page5 />
      <Footer />
    </>
  )
}

export default Cart
