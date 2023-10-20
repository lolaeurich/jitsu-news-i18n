import React from 'react'
import { useState, useEffect } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import "../locale/en.json"

function Search({search, all, athletes}) {
  


  return (
    <div className="flex flex-col justify-center mt-8 px-[70] md:px-[150px]">
      <img src="/assets/banner.png" className="rounded-2xl"></img>
      <div className="bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center border-2 border-inherit">
        <IoSearchOutline className="text-[20px] text-gray-400"/>
        <input type="text" placeholder={search} className="outline-none ml-2"></input>
      </div>
      <div className="flex gap-10 justify-center mt-5">
          <ul className="flex flex-row p-1 pb-2 gap-24">
            <li className='font-semibold text-lg rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] hover:text-white hover:bg-red-600 border-red-500 transition-all duration-100 ease-in-out'>{all}</li>
            <li className='font-semibold text-lg rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]  hover:text-white hover:bg-red-600 border-red-500 transition-all duration-100 ease-in-out'>{athletes}</li>
            <li className='font-semibold text-lg rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]  hover:text-white hover:bg-red-600 border-red-500 transition-all duration-100 ease-in-out'>Social</li>
          </ul>
        
      </div>
    </div>
  )
}

export default Search

