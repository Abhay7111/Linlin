import React from 'react';
import bg1 from '../../assets/SVG/Rectangle_4.svg';
import kettle from '../../assets/SVG/Kettle_5.svg';
import kettle2 from '../../assets/SVG/Kettle_6.svg';
import kettle3 from '../../assets/SVG/Kettle_2.svg';
import bg2 from '../../assets/SVG/Rectangle_4_1.svg';

function Discover_page() {
  return (
    <div className='w-[85vw] h-full flex flex-col gap-20'>
      <h1 className='w-full text-4xl text-center font-medium py-2'>Discover our kettle</h1>
     <div className='w-full h-fit flex items-center justify-between'>
          <div className='w-[30vw] min-h-[400px] relative flex flex-col items-center justify-between gap-2'>
            <h1 className=' text-5xl font-light top-1/3 left-full absolute text-nowrap'>Bobo cup</h1>
            <div className='w-full relative'>
              <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Rectangle_4.svg?updatedAt=1760232901834`} className='w-full h-full' />
              <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_5.svg?updatedAt=1760232904211`} className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className='text-xl font-medium leading-8 px-5 text-center'>Enjoy convenience and style with the 450ml Bobo Cup, a portable and versatile bottle designed for everyday use. Whether you're at work, the gym, or on the go, this cup ensures your drink stays fresh and secure.</p>
          </div>
          <div className='w-[30vw] min-h-[400px] relative flex flex-col-reverse items-center justify-between gap-2 mt-10'>
            <h1 className=' text-5xl font-light bottom-1/4 right-full absolute text-nowrap'>Linlin bottle</h1>
            <div className='w-full relative'>
              <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Rectangle_4_1.svg?updatedAt=1760232901875`} className='w-full h-full' />
              <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_6.svg?updatedAt=1760232904486`} className='w-full h-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className='text-xl font-medium leading-8 px-5 text-center'>The LinLin Kettle is thoughtfully designed for modern lifestyles, combining style, functionality, and convenience in one sleek product. With its 1150ml capacity and premium materials, this water bottle is your go-to companion for hydration at home, in the office, or on the go.</p>
          </div>
     </div>
     <div className='w-full mt-30'>
      <div className=' h-fit flex '>
        <div className='w-full relative'>
          <p className='absolute w-[80%] right-0 text-end bottom-1/4 pr-5'>Enjoy your favourite drinks in style with this cute tumbler. It holds a generous 1000ml, so you stay hydrated all day. Moreover, the double-wall stainless steel keeps beverages hot for 24 hours or cold for 36 hours.</p>
        </div>
        <div className='w-full h-fit relative flex flex-col gap-5 items-center justify-center'>
          <h1 className='w-full text-center text-5xl font-medium'>Linlin kettle</h1>
          <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Rectangle_4.svg?updatedAt=1760232901834`} alt="" className='w-full h-full object-cover'/>
          <img src={`https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_2.svg?updatedAt=1760232904979`} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[65%] object-cover' />
        </div>
        <div className='w-full relative'>
          <p className='absolute w-[80%] left-0 text-start bottom-1/12 pl-5'>Therefore, you never worry about your coffee or iced tea going lukewarm. Additionally, the spill-resistant lid and straw make it easy to sip on the go. It fits in most car cup holders, so it is perfect for travel.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Discover_page