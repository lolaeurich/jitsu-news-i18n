import React from 'react'
import { IoLogoYoutube } from "react-icons/io5"

function Header() {
  return (
    <div className="flex justify-between items-center mx-12 my-4">
        <img src="/assets/logo2.gif" alt="" className="w-[250px]"></img>
        <ul className="hidden md:flex gap-4 md:gap-14">
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">Home</li>
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">Sobre Nós</li>
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">Contato</li>
        </ul>
        <button className="bg-red-500 rounded-full text-white flex items-center justify-center text-[14px]">Inscreva-se <IoLogoYoutube className="ml-3 text-[20px]"/></button>
    </div>
  )
}

export default Header