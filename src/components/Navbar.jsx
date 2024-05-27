import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='w-full text-black'>
      <div className='flex justify-between max-w-[1280px] mx-auto px-8 py-2'>
        <div className='flex justify-between gap-5'>
            <div className='flex gap-2'>
                <img src='coding.png' alt='/' className='w-20'/>
                <h1 className='text-gray-800 font-bold mx-auto my-4 text-3xl'>SKL</h1>
            </div>
            <ul className='flex justify-between gap-3 mx-auto my-5 font-medium'>
                <li>Overview</li>
                <li>Feature</li>
                <li>About</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className='flex justify-between gap-4 items-center'>
            <div className='flex justify-between'>
                <AiOutlineGlobal className='mt-1 mr-2' />
                <p className='font-medium'>Language</p>
            </div>
            <button className='bg-[#00df9a] font-medium rounded-md px-4 py-2'>Sign Up</button>
        </div>
      </div>
      <hr className='w-full' />
    </div>
  )
}

export default Navbar
