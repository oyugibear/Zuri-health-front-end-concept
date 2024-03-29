import React from 'react'
import Search from './Search'

const SearchXl = () => {
  return (
    <div className='bg-[#5BDADD] w-full h-[100%] rounded-xl flex flex-col mx-2 p-4 md:py-8 items-center justify-center'>
        <h3 className='text-lg font-bold text-center'>
            Best Quality, Best Prices Here.
            <br />
            Find what you are looking for now! 
        </h3>

        <div className='mt-6'>
            <Search />
        </div>
    </div>
  )
}

export default SearchXl