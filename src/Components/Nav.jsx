import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full h-15 flex items-center justify-between px-3'>
     <NavLink to='/' className='text-3xl font-bold text-zinc-800 related logo '>Linlin</NavLink>
     <div className='flex items-center justify-start gap-4'>
          <NavLink to='/about' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>About</NavLink>
          <NavLink to='/blog' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>Blog</NavLink>
          <NavLink to='/shop' className='text-sm font-medium hover:text-zinc-800 text-zinc-600 '>Buy</NavLink>
     </div>
     <div>
          <NavLink to='/login' className='text-xs font-medium px-4 py-1 related-bg rounded-full opacity-80 hover:opacity-100 text-white '>Login</NavLink>
     </div>
    </div>
  )
}

export default Nav