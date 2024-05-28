import React from 'react'

const Better = () => {
  return (
    <div className='w-full text-black'>
      <div className='max-w-[1280px] grid grid-cols-4 px-4 py-7 mx-auto'>
        <div className='pt-20'>
            <h1 className='font-bold text-3xl pb-3'>Why we are <br /> better <br /> than others?</h1>
            <p className='text-gray-600 text-sm'>A simple paragraph is comprised of three major <br /> components. The first sentence, which 
            is often a <br /> declarative sentence, is called the "topic sentence".</p>
        </div>
        <div className='col-span-3 flex gap-9 pl-2 pt-20'>
            <div className='shadow-2xl w-[300px] h-[350px] rounded-3xl'>
                <img src='keyboard.png' alt='/' className='h-48 mx-auto px-3 py-8 mt-8' />
                <h1 className='font-bold text-2xl text-center'>Convenient study schedule</h1>
            </div>
            <div className='shadow-2xl w-[300px] h-[350px] rounded-3xl mt-20'>
                <img src='keyboard.png' alt='/' className='h-48 mx-auto px-3 py-8 mt-8' />
                <h1 className='font-bold text-2xl text-center'>Convenient study schedule</h1>
            </div>
            <div className='shadow-2xl w-[300px] h-[350px] rounded-3xl'>
                <img src='keyboard.png' alt='/' className='h-48 mx-auto px-3 py-8 mt-8' />
                <h1 className='font-bold text-2xl text-center'>Convenient study schedule</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Better
