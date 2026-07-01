import React from 'react'
import About2 from './About2'
import About3 from './About3'
import Page5 from './Page5'
import Footer from './Footer'

const About1 = () => {
  return (
    <>
    <div className='bg-white w-full flex flex-col justify-center items-center h-auto'>
      <div className='3xl:max-w-7xl max-w-5xl flex flex-col gap-7 capitalize 3xl:mx-auto py-25 p-6 md:px-16'>
      <h1 className='text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>Who we are</h1>
      <p className='text-black/80 text-xl text-center'>Thesus is a socially and environmentally progressive brand of outdoor footwear and accessories. We are made up of a small ragtag band of industry outsiders from around the world.</p>
      <p className='text-black/80 text-xl text-center'>
        We have big imaginations but we listen, think and act carefully. We believe that positive change happens when even simple ideas are given wings. Our ideas are brought to life through connection, commitment, and design simplicity.
      </p>
      </div>
    </div>
    <About2/>
    <About3/>
    <Page5/>
    <Footer/>
    </>
  )
}

export default About1
