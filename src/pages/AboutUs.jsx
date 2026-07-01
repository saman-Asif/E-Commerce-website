import React from 'react'
import About1 from '../components/About1'

const AboutUs = () => {
  return (
     <div className='h-screen w-full'>
      <div className='w-full h-90 p-6 lg:h-full shrink-0 bg-cover bg-no-repeat flex flex-col items-center justify-center'
       style={{ backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZTSBprIuY332KWkMJ3oiKqFf2eR9Z7YDgXSqSeq2ZR1MDZ4s')`}}>
        <div className='max-w-7xl mx-auto flex flex-col gap-6 text-center justify-center items-center'>
          <p className='text-white/80 text-2xl md:text-3xl'>THESUS OUTDOORS</p>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>We believe that we can all do better by people and the planet</h1>
        </div>
      </div>
      <About1/>
    </div>
  )
}

export default AboutUs
