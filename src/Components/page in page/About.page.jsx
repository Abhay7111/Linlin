import React from 'react'

function About_page() {
  return (
    <div className='w-full min-h-full flex flex-col items-center justify-center p-4'>
     <div className='w-full min-h-96 flex items-center justify-start'>
          <p className='lg:w-[60%] md:min-w-40 mt-20 lg:mt-0 w-full text-2xl font-semibold pl-40'>Founded in 2015, Linlin is a brand dedicated to making modern, eco-friendly, and stylish drinkware.  We believe that a good product should not just be functional, but also beautiful to carry and safe for everyday use.  With thousands of happy customers, Linlin continues to deliver innovative and durable hydration solutions for people on the go.</p>
     </div>
     <div className='w-full h-96 flex items-center justify-center text-sm font-medium'>
          <p>Your Bawang Tumbler goes through strict quality control to ensure you get the best experience.
               <li className='list-disc my-1 ml-5'>Premium 304 Stainless Steel – Safe & rust-proof</li>
               <li className='list-disc my-1 ml-5'>Double-Wall Vacuum Insulation – Hot up to 12h, Cold up to 24h</li>
               <li className='list-disc my-1 ml-5'>Leak-Proof & BPA-Free Lid – No spills, no toxins</li>
               <li className='list-disc my-1 ml-5'>Durability Tested – Built for rough and daily use</li>
               <li className='list-disc my-1 ml-5'>Eco-Friendly – Reusable & sustainable choice</li>
               Linlin’s focus is on longevity and trust, so every product comes with a 1-year warranty.</p>
     </div>
    </div>
  )
}

export default About_page