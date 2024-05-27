import React from 'react'

const Hero = () => {
  return (
    <div className='w-full text-white'>
      <div className='max-w-[1280px] flex justify-between mx-auto py-3 mt-8 bg-[#973697]'>
        <div className='pl-7 flex flex-col justify-between gap-8 py-9'>
            <h1 className='font-bold text-7xl'>Develop your skills <br /> without diligence</h1>
            <p className='text-2xl'>A good example of a paragraph contains a topic sentence, details and a <br />
            conclusion. There are many different kinds of animals that live in China.</p>
            <div className='mt-2 flex gap-3'>
                <button className='px-9 py-3 max-w-[50] rounded-md bg-[#216568]'>Get Started</button>
                <button className='px-9 py-3 max-w-[50] rounded-md bg-[#216568]'>Discount</button>
            </div>
        </div>
        <div>
            <img src='guy.png' className='object-scale-down h-96 pr-2' alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
