import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24  bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
       
  { /* //   Left side part ******************************************************** */}

       <div className='md:w-1/2 space-y-7 h-full'>
         <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the best prices</span></h2>
         <p className='md:w-4/5'>IndiaBookStore is the fastest way to compare book prices and buy books from online book sellers in India. Go. We aggregate information like best deals ...</p>
         <div>
           <input type="search" name='search' id='search' placeholder='Search your book' className='py-2 px-6 rounded-s-sm outline-none'/>
           <button className='py-2 px-6 rounded-s-sm bg-blue-700 hover:bg-black text-white transition-all ease-in duration-200'>Search</button>
         </div>
       </div>


    { /* //   Right side part ******************************************************** */}


       <div>
        <BannerCard/>
       </div>


      </div>
    </div>
  )
}

export default Banner
