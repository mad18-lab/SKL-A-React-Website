import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#1f274d] text-white'>
      <div className='max-w-[1280px] flex justify-between mx-auto px-3 py-16'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
                <img src='coding.png' alt='/' className='w-20'/>
                <h1 className='font-bold my-5 text-3xl text-white'>SKL</h1>
            </div>
            <div>
                <p>A simple paragraph is comprised of three major components. <br /> The first sentence, 
                which is often a declarative sentence.</p>
            </div>
            <div className='flex'>
                <input type='email' placeholder=' Your email' className='w-[250px] rounded-md' />
                <button className='bg-[#00df9a] font-medium rounded-md px-4 py-2'>Subscribe</button>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium'>Platform</h1>
                <ul>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium'>Help</h1>
                <ul>
                    <li>How does it work?</li>
                    <li>Where to ask question?</li>
                    <li>How to play?</li>
                    <li>What is needed for this?</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 pl-6'>
                <h1 className='font-medium'>Contacts</h1>
                <ul>
                    <li>(012) 1234-567-890</li>
                    <li>123 456 789</li>
                    <li>London, Paris, New York</li>
                    <li>- L.A., San Francisco</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
