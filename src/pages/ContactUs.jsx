import React from 'react'
import Page5 from '../components/Page5'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
     <>
       <div className='h-auto bg-white w-full'>
        <div className='max-w-7xl border-t p-6 py-12 md:py-22 border-gray-400 mx-auto flex flex-col gap-6 '>
        <h1 className='text-emerald-950 text-3xl md:text-4xl lg:text-6xl max-w-5xl xl:text-7xl tracking-wide font-medium'>Contact</h1>
        <div className='flex flex-col justify-end items-center text-center'>
          <div>
        <p className='text-emerald-950 text-3xl max-w-md mt-20'>Contact us at support@thesusoutdoors.com.</p>
</div>
        </div>
        </div>
      </div>
      <Page5/>
      <Footer/>
    </>
  )
}

export default ContactUs
