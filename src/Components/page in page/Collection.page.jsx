// import React from 'react'

const kettle_1 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_1.svg?updatedAt=1760232904609`
const kettle_2 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_2.svg?updatedAt=1760232904979`
const kettle_3 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_3.svg?updatedAt=1760232904414`
const kettle_4 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_4.svg?updatedAt=1760232903402`
const kettle_5 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_5.svg?updatedAt=1760232904211`
const kettle_6 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Kettle_6.svg?updatedAt=1760232904486`
const Dreamsicle = `https://ik.imagekit.io/xpzegfs4i/Linlin/Dreamsicle.svg?updatedAt=1760232904968`
const Strip_1 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Strip_1.svg?updatedAt=1760232904988`
const Strip_2 = `https://ik.imagekit.io/xpzegfs4i/Linlin/Strip_2.svg?updatedAt=1760232905006`


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