import React from 'react'
import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function Search() {
  const tags=[
    {
        id:1,
        name:'Tudo',
    },
    {
        id:2,
        name:'Atletas',
    },
    {
        id:3,
        name:'Social',
    },
]

const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div className="flex flex-col justify-center mt-8 px-[70] md:px-[150px]">
      <img src="/assets/banner.png" className="rounded-2xl"></img>
      <div className="bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center border-2 border-inherit">
        <IoSearchOutline className="text-[20px] text-gray-400"/>
        <input type="text" placeholder="Buscar" className="outline-none ml-2"></input>
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index)=>(
          <ul onClick={()=>setActiveIndex(index)} className={`${index==activeIndex?"bg-red-500 text-white":null} 
          p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 
          hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Search