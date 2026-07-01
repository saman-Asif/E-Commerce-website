import React from 'react'
import Page5 from '../components/Page5'
import Footer from '../components/Footer'

const Login = () => {
  return (
     <>
      <div className='h-screen bg-red-700 w-full'>
        <div className='flex max-w-7xl border-t p-6 py-12 md:py-22 border-gray-400 mx-auto flex-col justify-center items-center text-center'>
            <h1 className='text-emerald-950 text-2xl md:text-3xl lg:text-4xl max-w-5xl xl:text-7xl tracking-wide font-medium'>Log In</h1>
               <input
        type='email'
        placeholder='Email'
        name='email'
        required
        className='w-full md:max-w-lg text-sm px-5 py-5 border border-emerald-950 outline-none transition-all'
        />
          <input
        type='password'
        placeholder='Password'
        name='password'
        required
        className='w-full md:max-w-lg text-sm px-5 py-5 border border-emerald-950 outline-none transition-all'
        />
            <p className='text-emerald-950 text-2xl max-w-md underline decoration-emerald-950 decoration-1 underline-offset-2'>Forgot your password</p>
             <button className='bg-emerald-950 py-4 px-10 mt-15 md:text-lg xl:text-xl rounded text-white'>Sign In</button>
              <p className='text-emerald-950 text-2xl max-w-md underline decoration-emerald-950 decoration-1 underline-offset-2'>Create account</p>
          </div>
        </div>
      <Page5/>
      <Footer/>
    </>
  )
}

export default Login
