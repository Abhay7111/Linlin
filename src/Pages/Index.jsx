import React, { useState } from 'react';
import Nav from '../Components/Nav';
import { NavLink } from 'react-router-dom';
import About_page from '../Components/page in page/About.page';
import Video_page from '../Components/page in page/Video.page';
import Discover_page from '../Components/page in page/Discover.page';
import Table_page from '../Components/page in page/Table.page';
import Collection_page from '../Components/page in page/Collection.page';
import Foooter_components from '../Components/Foooter.components';

function Index() {
  const [openKettle, setOpenkettle] = useState(1);

  // Make data NOT depend on openKettle for the 'open' property
  const data = [
    {
      _id: 1,
      image: `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_1.svg?updatedAt=1760232904609`,
      bg: `https://ik.imagekit.io/xpzegfs4i/Linlin/Reatangle3_B9CFDD.png?updatedAt=1760234244956`,
      size: 'w-[140%]',
      description: {
        _1: 'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2: [
          { keyvalues: 'Keeps your beverages hot for 12 hours and cold for 24 hours' },
          { keyvalues: 'Perfect for work, gym, travel, or home use' },
          { keyvalues: 'Made with BPA-free stainless steel, safe and eco-friendly' },
        ],
        _3: 'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.',
      },
      name: 'Bawang tumbler',
      css: 'md:mt-15',
      image_size:'',
    },
    {
      _id: 2,
      image: `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_2.svg?updatedAt=1760232904979`,
      bg: `https://ik.imagekit.io/xpzegfs4i/Linlin/Rectangle3_D8778A.png?updatedAt=1760234244972`,
      size: 'w-[45%]',
      description: {
        _1: 'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2: [
          { keyvalues: 'Keeps your beverages hot for 12 hours and cold for 24 hours' },
          { keyvalues: 'Perfect for work, gym, travel, or home use' },
          { keyvalues: 'Made with BPA-free stainless steel, safe and eco-friendly' },
        ],
        _3: 'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.',
      },
      name: 'LinLin Kettle',
      css: 'md:mt-2',
      image_size:'w-24',
    },
    {
      _id: 3,
      image: `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_6.svg?updatedAt=1760232904486`,
      bg: `https://ik.imagekit.io/xpzegfs4i/Linlin/Reatangle3_B9CFDD.png?updatedAt=1760234244956`,
      size: 'w-[50%]',
      description: {
        _1: 'The Bawang Tumbler by Linlin is designed for people who value style, durability, and convenience.',
        _2: [
          { keyvalues: 'Keeps your beverages hot for 12 hours and cold for 24 hours' },
          { keyvalues: 'Perfect for work, gym, travel, or home use' },
          { keyvalues: 'Made with BPA-free stainless steel, safe and eco-friendly' },
        ],
        _3: 'With its modern design and leak-proof lid, this tumbler solves the problem of carrying drinks on-the-go without spills.',
      },
      name: 'Bawang tumbler',
      css: 'md:mt-90',
      image_size:'w-24',
    },
  ];

  // 'openKettle' state tracks which item is currently open; all others are "closed"
  const openedItem = data.find((item) => item._id === openKettle);
  const closedItems = data.filter((item) => item._id !== openKettle);

  return (
    <div className='w-full h-screen overflow-auto bg-[#FDFAF6] overflow-x-hidden'>
      <Nav />
      <div className='w-full h-fit'>
        <div className='w-full h-fit md:h-screen md:flex items-center justify-center relative'>
          {openedItem && (
            <div className={`w-full md:h-full ${openedItem.css}`} key={openedItem._id}>
              <div className='md:size-20 w-full md:h-full relative md:grid grid-rows-3'>
                <div className='w-full md:h-full flex items-center justify-center'>
                  <h1 className='text-[8vw] font-bold'>{openedItem.name}</h1>
                </div>
                <div className='w-full md:h-full md:grid md:grid-cols-3'>
                  <div className='w-full md:h-full flex justify-center md:items-start md:justify-end pt-10'>
                    <p className=' w-[85%] md:w-[60%] min-w-80 text-center md:text-end '>{openedItem.description._1}</p>
                  </div>
                  <div className='w-full md:h-full relative flex items-center justify-center'>
                    <div className={`md:absolute z-20 ${openedItem.size} md:max-w-[500px] overflow-hidden md:flex-none flex items-center justify-center`}>
                      <img src={openedItem.image} alt="kettle" className=' w-[26rem] md:w-full object-cover  ' />
                    </div>
                  </div>
                  <div className='w-full md:h-full flex flex-col items-center md:items-start justify-end gap-2 pb-5'>
                    {openedItem.description._2.map((desc, index) => (
                      <p key={index} className=' w-[90%] md:w-[70%] min-w-80 text-sm flex items-center gap-1 '>
                        <span className='size-2 border-2 border-zinc-800 rounded-full bg-transparent'></span> {desc.keyvalues}
                      </p>
                    ))}
                  </div>
                </div>
                <div className='w-full md:h-full flex flex-col md:gap-13 items-center justify-start py-10 md:pt-15'>
                  <p className=' w-[90%] md:max-w-[600px] text-center'>{openedItem.description._3}</p>
                  <div className='py-9'>
                    <NavLink
                      to={'/'}
                      className={`px-20 py-2 md:px-5 md:py-1.5 bg-[#DB60A9] hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-300 rounded-md md:rounded-full text-xl font-bold uppercase md:lowercase md:font-normal md:text-sm text-zinc-50`}
                    >
                      grab it
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='md:absolute md:top-10 md:left-0 w-full h-fit md:h-10 md:px-40 md:py-0 py-0 flex items-center justify-center md:justify-between md:gap-0 gap-10'>
            {closedItems.length > 0 &&
              closedItems.map((item) => (
                <div
                  onClick={() => setOpenkettle(item._id)}
                  key={item._id}
                  className={` ${item.css} cursor-pointer w-44 md:w-26 relative flex items-center justify-center `}
                >
                  <img src={item.bg} className='relative md:w-fit w-60 ' />
                  <img src={item.image} className={` ${item.image_size} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-12 md:z-10 `} />
                </div>
              ))}
          </div>
        </div>
        <div className='w-full h-fit'>
          <About_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-5'>
          <Video_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-5 my-30'>
          <Collection_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-5'>
          <Discover_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-5 py-40'>
          <Table_page/>
        </div>
      </div>
      <Foooter_components/>
    </div>
  )
}

export default Index