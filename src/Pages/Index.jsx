import React from 'react';
import Nav from '../Components/Nav';
import kettle_1 from '../../public/SVG/kettle 1.svg';
import kettle_2 from '../../public/SVG/kettle 2.svg';
import kettle_6 from '../../public/SVG/kettle 6.svg';
import Rectangle from '../../public/Rectangle3_D8778A.png';
import Rectangle2 from '../../public/Reatangle3_B9CFDD.png';
import { NavLink } from 'react-router-dom';

function Index() {
  const data = [
  {
    id: 1, 
    image: kettle_1,
    bg: Rectangle,
    description:
      {
        _1:'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2:[
          {keyvalues:'Keeps your beverages hot for 12 hours and cold for 24 hours'},
          {keyvalues:'Perfect for work, gym, travel, or home use'},
          {keyvalues:'Made with BPA-free stainless steel, safe and eco-friendly'},
        ],
        _3:'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.'
        },
    open: true,
    name: 'Bawang tumbler',
    css:'left-10 top-50'
  },
  {
    id: 2, 
    image: kettle_2,
    bg: Rectangle,
    description:
      {
        _1:'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2:[
          {keyvalues:'Keeps your beverages hot for 12 hours and cold for 24 hours'},
          {keyvalues:'Perfect for work, gym, travel, or home use'},
          {keyvalues:'Made with BPA-free stainless steel, safe and eco-friendly'},
        ],
        _3:'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.'
        },
    open: false,
    name: 'Bawang tumbler',
    css:'right-20 top-30'
  },
  {
    id: 3, 
    image: kettle_6,
    bg: Rectangle2,
    description:
      {
        _1:'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2:[
          {keyvalues:'Keeps your beverages hot for 12 hours and cold for 24 hours'},
          {keyvalues:'Perfect for work, gym, travel, or home use'},
          {keyvalues:'Made with BPA-free stainless steel, safe and eco-friendly'},
        ],
        _3:'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.'
        },
    open: false,
    name: 'Bawang tumbler',
    css:'left-30 top-10'
  },
  ]
  return (
    <div className='w-full h-screen overflow-auto bg-[#D9D9D9]'>
      <Nav/>
      <div className='w-full h-fit'>
        <div className='w-full h-screen flex items-center justify-center relative'>
            {data.map((item, idx) => (
            item.open ? 
              (<div className={`w-full h-full ${item.css}`}>
                <div className='size-20 w-full h-full relative grid grid-rows-3'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <h1 className='text-[8vw] font-bold'>{item.name}</h1>
                  </div>
                  <div className='w-full h-full grid grid-cols-3'>
                    <div className='w-full h-full flex items-start justify-end pt-10'>
                      <p className='w-[60%] min-w-80 text-end '>{item.description._1}</p>
                    </div>
                    <div className='w-full h-full relative flex items-center justify-center'><div className=' absolute z-20 w-[140%] max-w-[500px] overflow-hidden'><img src={item.image} alt="kettle" className='w-full bg-transparent object-cover  '/></div></div>
                    <div className='w-full h-full flex flex-col items-start justify-end gap-2 pb-5'>
                      {item.description._2.map((desc, index) => (
                        <p key={index} className='w-[70%] min-w-80 text-sm flex items-center gap-1 '> <div className='size-2 border-2 border-zinc-800 rounded-full bg-transparent'></div> {desc.keyvalues}</p>
                      ))}
                    </div>
                  </div>
                  <div className='w-full h-full flex flex-col gap-3 items-center justify-start pt-30'>
                    <p className='max-w-[600px] text-center'>{item.description._3}</p>
                    <div>
                      <NavLink to={'grabit'} className={`px-5 py-1.5 related-bg rounded-full text-sm text-zinc-50`}>grab it</NavLink>
                    </div>
                  </div>
                </div>
              </div>)
              : 
              (<div className={`absolute w-96 overflow-hidden h-20   top-10 left-0 `}>
                <div className='relative flex w-full bg-green-400 mt-2 opacity-70'>
                  {/* <img src={item.image} alt="" className='size-20' /> */}
                </div>
              </div>)
          ))}
        </div>
        <div className='w-full h-screen bg-green-400'>

        </div>
      </div>
    </div>
  )
}

export default Index