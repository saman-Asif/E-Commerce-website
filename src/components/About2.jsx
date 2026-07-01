import React from 'react'

const About2 = () => {
  return (
    <div className='h-screen w-full'>
      <div className='w-full h-90 p-6 lg:h-full shrink-0 bg-cover bg-no-repeat flex flex-col items-center justify-center'
       style={{ backgroundImage:`url('https://www.thesusoutdoors.com/cdn/shop/files/April19Homepage_3.png?v=1713561580&width=1500')`}}>
        <div className='max-w-7xl mx-auto flex flex-col gap-6 text-center justify-center items-center'>
            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Where We Are</h1>
          <p className='text-white/80 text-2xl'>Thesus HQ is in Toronto, Canada. We acknowledge the Mississaugas of New Credit, the Haudenosaunee and Huron-Wendat First Nations, the original keepers of this land that hosts us.</p>
        </div>
      </div>
    </div>
  )
}

export default About2
