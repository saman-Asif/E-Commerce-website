import React from 'react'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import Footer from '../components/Footer'

const Thesus = () => {
  return (
    <>
    <div className='h-screen w-full'>
      <div className='w-full h-full lg:h-full bg-cover flex flex-col items-center justify-center'
       style={{ backgroundImage:`url('https://www.thesusoutdoors.com/cdn/shop/files/Sustainable-outdoor-footwear-Thesus_f377354f-4515-42d1-bd26-95f199fba96b.png?v=1687893529&width=3840')`}}>
        <div className='hidden max-w-7xl mx-auto md:flex flex-col gap-6 text-center justify-center items-center'>
        <h1 className='text-white md:text-4xl lg:text-6xl xl:text-7xl tracking-wide font-medium'>Comfy All Day. Cosy All Year.</h1>
        <p className='text-white text-2xl'>Sustainable Outdoor Footwear Made with 99% Natural and Recycled Materials.</p>
        <button className='bg-white py-4 px-10 md:text-lg xl:text-xl rounded text-black'>Shop Now</button>
        </div>
      </div>
    </div>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Footer/>
    </>
  )
}

export default Thesus
