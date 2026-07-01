import React from 'react'

const Page5 = () => {
  return (
    <div className='bg-white w-full h-auto'>
      <div className='3xl:max-w-7xl 3xl:mx-auto flex flex-col gap-6 items-center justify-center lg:px-12 lg:py-30 py-12 p-6'>
       <h1 className='text-5xl md:text-6xl text-emerald-950 text-center mt-4'>Something New is Coming. Join the Waitlist.</h1>
        <p className='text-emerald-950 text-lg md:text-2xl text-center'>Subscribe to our newsletter. Get waitlisted for what is to come.</p>
        <input
        type='email'
        placeholder='Email'
        name='email'
        required
        className='w-full md:max-w-lg text-sm px-5 py-5 border border-emerald-950 outline-none transition-all'
        />
      </div>
    </div>
  )
}

export default Page5
