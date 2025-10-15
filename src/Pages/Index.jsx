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
        _1: 'Tired of drinks that don’t stay the right temperature? The Bawang Tumbler keeps your coffee hot, your water cold, and your day running smoothly. Whether you’re commuting, working, or exploring, this tumbler supports your lifestyle—with zero leaks and all-day freshness.',
        _2: [
          { keyvalues: 'Keeps Drinks at the Perfect Temperature: Its advanced vacuum insulation locks in heat or cold for hours.' },
          { keyvalues: 'Plenty of Room: With a generous 1050ml capacity, you can stay hydrated without constant refills.' },
          { keyvalues: 'Clean, Fresh Sips Every Time: We use premium stainless steel and food-grade ceramic coating, so you never taste metal or plastic.' },
          { keyvalues: 'Zero Leaks, Full Confidence: The tight, leak-proof lid keeps your bag dry—even when you’re on the move.' },
          { keyvalues: 'Quick and Easy to Clean: Its smooth design has no tricky corners, which means less scrubbing and more sipping.' },
          { keyvalues: 'Strong Yet Stylish: This tumbler combines modern design with rugged durability. So, it’s made to look great and last long.' },
        ],
        _3: 'The colour and colour name of the Bawang Tumbler are for reference only. Actual product colour may vary slightly due to lighting, photography, or screen display settings.',
      },
      name: 'Bawang tumbler',
      css: 'md:mt-15',
      image_size:'',
    },
    {
      _id: 2,
      image: `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_2.svg?updatedAt=1760232904979`,
      bg: `https://ik.imagekit.io/xpzegfs4i/Linlin/Rectangle3_D8778A.png?updatedAt=1760234244972`,
      size: 'w-[40%]',
      description: {
        _1: "Enjoy your favourite drinks in style with this cute tumbler. It holds a generous 1000ml, so you stay hydrated all day. Moreover, the double-wall stainless steel keeps beverages hot for 24 hours or cold for 36 hours. Therefore, you never worry about your coffee or iced tea going lukewarm. Additionally, the spill-resistant lid and straw make it easy to sip on the go. It fits in most car cup holders, so it is perfect for travel.",
        _2: [
          { keyvalues: "Large 1000ml Capacity: Perfect for all-day hydration at home, work, or outdoors." },
          { keyvalues: "Durable Stainless Steel: Built to last and resist rust, scratches, and dents." },
          { keyvalues: "Double-Wall Insulation: Keeps drinks hot or cold for hours." },
          { keyvalues: "Leak-Proof Lid & Straw: Enjoy drinks without spills or messes." },
          { keyvalues: "Cute Design: A fun and stylish look that stands out." },
          { keyvalues: "Easy to Clean: Wide mouth fits ice cubes and cleans quickly." },
        ],
        _3: "This stainless steel tumbler is great for daily use or special occasions. In addition, the secure lid prevents spills, giving you peace of mind. For example, it makes morning commutes, gym sessions, or office days more enjoyable. The cute tumbler design also makes it a perfect gift for friends and family. Furthermore, its eco-friendly build helps reduce plastic waste. Finally, you can enjoy every sip knowing you chose a reliable and adorable travel companion.",
      },
      name: 'LinLin Kettle',
      css: 'md:mt-2',
      image_size:'w-24',
    },
    {
      _id: 3,
      image: `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_6.svg?updatedAt=1760232904486`,
      bg: `https://ik.imagekit.io/xpzegfs4i/Linlin/Reatangle3_B9CFDD.png?updatedAt=1760234244956`,
      size: 'w-[40%]',
      description: {
        _1: 'The LinLin Kettle is thoughtfully designed for modern lifestyles, combining style, functionality, and convenience in one sleek product. With its 1150ml capacity and premium materials, this water bottle is your go-to companion for hydration at home, in the office, or on the go.',
        _2: [
          { keyvalues: 'UU Handle Design: Ergonomic "UU" handle provides a smooth, comfortable grip, making it easy to carry or hold for extended periods.' },
          { keyvalues: "Versatile Usage: Comes with a matching strap for convenient carrying, whether you're heading to the gym, taking a hike, or running errands." },
          { keyvalues: "Spring-Activated Straw: The built-in straw automatically springs out with a gentle push, offering effortless drinking on the move." },
          { keyvalues: "Compact Lid for Storage: Features a detachable small lid for easy cleaning and compact storage." },
        ],
        _3: "Whether you're sipping at your desk, staying hydrated during a workout, or taking it along for travel, the LinLin Kettle offers the perfect balance of design and practicality. Choose your favourite colour and elevate your hydration game today! The colour and colour name of the LinLin Bottle are for reference only. Actual product colour may vary slightly due to lighting, photography, or screen display settings.",
      },
      name: 'LinLin bottle',
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
      <div className='w-[100vw] h-fit'>
        <div className='w-full h-fit md:h-screen md:flex items-center justify-center relative'>
          {openedItem && (
            <div className={`w-full md:h-full flex items-center justify-center ${openedItem.css}`} key={openedItem._id}>
              <div className=' w-full md:h-full relative md:grid grid-rows-3'>
                <div className='w-full md:h-full flex items-center justify-center mt-10 md:m-0'>
                  <h1 className=' text-[2.5rem] uppercase md:text-[8vw] text-nowrap font-bold '>{openedItem.name}</h1>
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
                      <li key={index} className=' w-[90%] md:w-[70%] min-w-80 text-sm flex items-start gap-2 '>
                        <div className='w-3 h-1.5 bg-zinc-800 rounded-full mt-2'></div> {desc.keyvalues}
                      </li>
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
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-3 md:p-5'>
          <Video_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center p-2 md:p-5 my-10 md:my-30'>
          <Collection_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center md:p-5'>
          <Discover_page/>
        </div>
        <div className='w-full h-fit bg-transparent flex items-center justify-center md:p-5 py-20 md:py-40'>
          <Table_page/>
        </div>
      </div>
      <Foooter_components/>
    </div>
  )
}

export default Index