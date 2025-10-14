import React from 'react'
import { NavLink } from 'react-router-dom'

function Foooter_components() {
  return (
    <div className='bg-transparent w-full min-h-10 flex md:flex-row flex-col items-center justify-between px-5 gap-3 md:gap-0'>
     <a href='/' className=' text-5xl md:text-2xl logo font-bold hover:text-[#DB60A9]'>Linlin</a>
     <div className='flex items-center justify-between gap-4 text-zinc-900'>
      <NavLink to={`/`} className=' cursor-pointer text-sm font-medium'>About</NavLink>
      <NavLink to={`/`} className=' cursor-pointer text-sm font-medium'>Blog</NavLink>
      <NavLink to={`/`} className=' cursor-pointer text-sm font-medium'>Grab now</NavLink>
     </div>
     <div className='flex items-center justify-between gap-4'>
      <h1 className='text-xs font-normal text-zinc-900'>This is showcase project by <a href='https://www.github.com/Abhay7111' className='text-zinc-900'>Abhay7111</a></h1>
     </div>
    </div>
  )
}

export default Foooter_components