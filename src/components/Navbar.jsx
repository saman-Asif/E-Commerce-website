import { Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react';
import { button } from 'motion/react-client';
import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
    { name: 'Thesus', to: '/' },
    { name: 'Weekend Boots', to: '/weekendboots' },
    { name: 'Rain Boots', to: '/rainboots' },
    { name: 'Modern Winter Boots', to: '/modernwinterboots' },
    { name: 'About Us', to: '/aboutus' },
  ];
  return (
    <nav className='w-full bg-white text-emerald-950'>
        <div className='flex justify-between gap-8 items-center py-6 px-4 lg:px-12 3xl:max-w-7xl 3xl:mx-auto'>
          <p className='lg:hidden flex items-center'>
            {!isOpen && (
                <button
                onClick={()=>setIsOpen(true)}
                type='button'
                aria-label='Toggle-menu'
                className="text-slate-800 hover:text-white focus:outline-none p-2"
                >
              <Menu/>
                </button>
            )}
            </p>
            <div className={`fixed inset-0 transition-opacity duration-300 lg::hidden z-40 ${
             isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} // Closes the panel if user taps the blurred left side
      />
       <div
        className={`fixed top-32 right-0 w-[85%] max-w-xs h-screen  text-slate-800 bg-white border-t border-gray-300 transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
            }`}
            >
               {/* Close Button Inside the Panel */}
        <div className="flex justify-between p-4">
           <button
            onClick={() => setIsOpen(false)}
            type="button"
            className=" p-2"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
            <div className="flex flex-col h-full space-y-8 pb-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)} // Closes menu when a link is tapped
              className="text-md font-semibold tracking-wide text-slate-800 transition-colors duration-200 pl-4"
            >
              {link.name}
            </Link>
          ))}
           </div>
            </div>
      <Link to='/'><img className='w-40 lg:w-60' src="https://www.thesusoutdoors.com/cdn/shop/files/Thesus-logo-200x100.png?v=1690969252&width=200" alt="Thesus" /></Link>
      <ul className='lg:flex lg:flex-wrap items-center hidden gap-6 text-xl'>
        <li className='hover:text-emerald-950 hover:underline decoration-emerald-950 decoration-1 underline-offset-2 text-emerald-900'>Shop By Size</li>
        <Link to='/weekendboots'><li className='hover:text-emerald-950 hover:underline decoration-emerald-950 decoration-1 underline-offset-2 text-emerald-900'>Weekend Boots</li></Link>
        <Link to='/rainboots'><li className='hover:text-emerald-950 hover:underline decoration-emerald-950 decoration-1 underline-offset-2 text-emerald-900'>Rain Boots</li></Link>
        <Link to='/modernwinterboots'><li className='hover:text-emerald-950 hover:underline decoration-emerald-950 decoration-1 underline-offset-2 text-emerald-900'>Modern Winter Boots</li></Link>
       <Link to='/aboutus'><li className='hover:text-emerald-950 hover:underline decoration-emerald-950 decoration-1 underline-offset-2 text-emerald-900'>About Us</li></Link> 
      </ul>
      <ul className='flex gap-5 items-center'>
        <li><Search className='w-6 h-6 md:w-7 md:h-7'/></li>
        <Link to='/login'><li><UserRound className='text-emerald-950 w-6 h-6  md:w-7 md:h-7' size={32}/></li></Link>
        <Link to='/cart'><li><ShoppingCart className='text-emerald-950 hidden lg:block' size={32}/></li></Link>
      </ul>
        </div>
    </nav>
  )
}

export default Navbar
