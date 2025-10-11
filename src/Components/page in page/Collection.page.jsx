// import React from 'react'
import kettle_1 from '../../assets/SVG/kettle_1.SVG';
import kettle_2 from '../../assets/SVG/kettle_2.svg';
import kettle_3 from '../../assets/SVG/kettle_3.svg';
import kettle_4 from '../../assets/SVG/kettle_4.svg';
import kettle_5 from '../../assets/SVG/kettle_5.svg';
import kettle_6 from '../../assets/SVG/kettle_6.svg';
import Strip_1 from '../../assets/SVG/Strip_1.svg';
import Strip_2 from '../../assets/SVG/Strip_2.svg';
import Dreamsicle from '../../assets/SVG/Dreamsicle.svg';


function Collection_page() {
     var kettles = [
          {id: 1, bgcolor:'#111', name: 'Bawang tumbler',Image:kettle_1},
          {id: 2, bgcolor:'[#]', name: 'LinLin Kettle',Image:kettle_2},
          {id: 3, bgcolor:'[#]', name: 'Bawang tumbler',Image:kettle_3},
          {id: 4, bgcolor:'[#]', name: 'LinLin Kettle',Image:kettle_4},
          {id: 5, bgcolor:'[#]', name: 'Bawang tumbler',Image:kettle_5},
          {id: 6, bgcolor:'[#]', name: 'LinLin Kettle',Image:kettle_6},
          {id: 7, bgcolor:'[#]', name: 'Dreamsicle',Image:Dreamsicle},
          {id: 8, bgcolor:'[#]', name: 'kettle Strip',Image:Strip_1},
          {id: 9, bgcolor:'[#]', name: 'kettle Strip',Image:Strip_2},
     ]

  return (
    <div className='w-[90vw] h-fit flex flex-col gap-3 items-center p-5'>
     <div className='w-full h-fit bg-transparent text-center scroll-none mb-10'><h1 className='text-4xl font-medium'>Collection</h1></div>
     <div className='w-full h-fit overflow-x-auto'>
          <div className='w-fit h-full flex gap-3'>
               {kettles.map((kettle)=>(
                    <div key={kettle.id} className='w-60 h-fit rounded-2xl flex flex-col items-center py-3 gap-3'>
                         <div className={`w-full h-75 flex items-center justify-center bg-[${kettle.bgcolor}] rounded-3xl`}>
                              <img src={kettle.Image} alt={kettle.name} className='w-full h-[85%] object-contain'/>
                         </div>
                         <div className='w-full h-1/4 bg-transparent flex items-center justify-center'>
                              <h2 className='text-sm font-medium'>{kettle.name}</h2>
                         </div>
                    </div>
               ))}
          </div>
     </div>
    </div>
  )
}

export default Collection_page