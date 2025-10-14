import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
 var [openMenu, setOpenmenu] = useState(false);
  return (
    <div className='w-full h-15 flex items-center justify-between px-3'>
     <a href='/' className='text-3xl font-bold text-zinc-800 related logo '>Linlin</a>
     <div className='hidden md:block'>
      <div className='flex items-center justify-start gap-4'>
            <NavLink to='/' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>About</NavLink>
            <NavLink to='/' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>Blog</NavLink>
            <NavLink to='/' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>Grab now</NavLink>
      </div>
     </div>
     <div className='hidden md:block'>
          <NavLink to='/' className='text-xs font-medium px-4 py-1 related-bg rounded-full opacity-80 hover:opacity-100 text-white '>Login</NavLink>
     </div>
     <i onClick={()=>setOpenmenu((prop) => !prop)} className='ri-menu-line text-2xl font-bold cursor-pointer md:hidden block '></i>
     <div className={` ${openMenu ? `w-full p-1` : `w-0 `} z-50 h-full md:hidden block overflow-hidden fixed top-0 right-0 bg-white border border-zinc-200 transition-all`}>
      <div className='w-full h-full flex flex-col items-end justify-start gap-1'>
        <div onClick={()=>setOpenmenu(false)} className='size-8 mt-2 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white'>
            <i className='ri-close-line text-xl font-light cursor-pointer'></i>
        </div>
        <div className='w-full h-full bg-transparent flex flex-col items-start justify-start'>
          <NavLink onClick={()=> setOpenmenu(false)} to={`/`} className={`px-5 py-4 bg-white w-full hover:bg-zinc-900 hover:text-zinc-100 font-bold text-2xl uppercase transition-all duration-300`}>Home</NavLink>
          <NavLink onClick={()=> setOpenmenu(false)} to={`#about`} className={`px-5 py-4 bg-white w-full hover:bg-zinc-900 hover:text-zinc-100 font-bold text-2xl uppercase transition-all duration-300`}>About</NavLink>
          <NavLink onClick={()=> setOpenmenu(false)} to={`#blog`} className={`px-5 py-4 bg-white w-full hover:bg-zinc-900 hover:text-zinc-100 font-bold text-2xl uppercase transition-all duration-300`}>Blogx</NavLink>
          <NavLink onClick={()=> setOpenmenu(false)} to={`#grab`} className={`px-5 py-4 bg-white w-full hover:bg-zinc-900 hover:text-zinc-100 font-bold text-2xl uppercase transition-all duration-300`}>Grab Now</NavLink>
          <NavLink onClick={()=> setOpenmenu(false)} to={`#contact`} className={`px-5 py-4 bg-white w-full hover:bg-zinc-900 hover:text-zinc-100 font-bold text-2xl uppercase transition-all duration-300`}>Contact us</NavLink>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Nav