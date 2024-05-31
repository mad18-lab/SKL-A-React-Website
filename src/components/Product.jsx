import React from 'react'

const Product = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1280px] mx-auto px-4 pt-12 pb-16 grid grid-cols-3'>
            <div className='col-span-2 pl-24'>
                <img src='books.png' alt='/' />
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-black text-4xl mt-28'>We have been improving <br /> our product <span className='text-[#00df9a]'> for many <br /> years.</span></h1>
                <p className='text-gray-900'>A good example of a paragraph contains a topic conclusion. There are
                many different kinds of animals that live in China.</p>
                <button className='max-w-[200px] bg-[#00df9a] px-6 py-4 text-white font-medium text-center'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Product
