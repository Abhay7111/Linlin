import React from 'react';

function Table_page() {
     var data = [
          {id:'1',specification:'Capacity',value:'500ml'},
          {id:'1',specification:'Material',value:'304 Stainless Steel'},
          {id:'1',specification:'Insulation',value:'Double-Wall Vacuum'},
          {id:'1',specification:'Temperature Retention',value:'Hot: 12h, Cold: 24h'},
          {id:'1',specification:'Lid Type',value:'Leak-Proof, BPA-Free'},
          {id:'1',specification:'Weight',value:'320g'},
          {id:'1',specification:'Warranty',value:'1 Year'},
     ]
     return (
          <div className='w-[80vw] h-fit flex flex-col'>
               <div className='w-full h-fit flex items-center justify-center p-5 border-b-2 border-zinc-500'>
                    <div className='w-full'>Specification</div>
                    <div className='w-full'>Value</div>
               </div>
               <div className='w-full flex flex-col items-start'>
                   {data.map((items, index)=> (
                    <div key={index} className='w-full h-fit p-5 bg-transparent flex items-start border-b border-zinc-300'>
                         <div className='w-full'>{items.specification}</div>
                         <div className='w-full'>{items.value}</div>
                    </div>
                   ))}
               </div>
          </div>
     );
}

export default Table_page;