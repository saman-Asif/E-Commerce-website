import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
      <div className='bg-emerald-950 p-4'>
    <div className='h-auto mx-auto lg:gap-10 w-full grid md:grid-cols-[1.5fr_1fr_1fr_1fr] py-4 px-6 pb-20 grid-col'>
        <div1 className='pt-6'>
      <img className='object-cover w-30 border border-white/20' src="https://www.thesusoutdoors.com/cdn/shop/files/Thesus-white-logo.png?v=1686324987&width=1100" alt="" />
      <p className='text-white text-xl mt-4 mb-4 max-w-md'>Socially and environmentally progressive outdoor footwear
Facebook
Instagram
TikTok
</p>
    </div1>
    <div2 className='pt-6'>
        <p className='text-white text-2xl uppercase'>Our Shop</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link  hover:text-white text-white/70 text-xl " to="/features">Features</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/skills">Skills</Link>
            </li>
            <li>
                  <Link className="nav-link  hover:text-white text-white/70 text-xl" to="/howitworks">How it works</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/usecases">Usecases</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/pricing">Pricing</Link>
            </li>
            </ul>
    </div2>
    <div3 className='pt-6'>
        <p className='text-white text-2xl uppercase'>Help</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/requestaccess">Request Access</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/faq">FAQ</Link>
            </li>
             <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/signin">Sign In</Link>
            </li>
            </ul>
    </div3>
    <div4 className='pt-6 space-y-3'>
        <p className='text-white text-2xl uppercase'>About Us</p>
       <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/terms">Terms and Conditions</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/privacy">Privacy</Link>
            </li>
             <li>
                  <Link className="nav-link hover:text-white text-white/70 text-xl" to="/">Eigensol</Link>
            </li>
            </ul>
    </div4>
    </div>
    <div className='border-t border-white/10 w-full lg:flex lg:justify-between pt-4'>
    <p className='text-white/70 opacity-80 text-lg font-serif'>© Thesus</p>
    <p className='text-white/70 opacity-80 text-lg flex gap-2 items-center justify-center'>Powered by Shopify</p>
    </div>
    </div>
  )
}

export default Footer
