import React from 'react'
import { IoLogoYoutube } from "react-icons/io5"
import { Link } from "react-router-dom"

function Header({about, contact, subscribe}) {
  return (
    <div className="flex justify-between items-center mx-12 my-4">
        <Link to='/'> <img src="/assets/logo2.gif" alt="" className="w-[250px]"></img></Link>
        <ul className="hidden md:flex gap-4 md:gap-14">
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">Home</li>
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">{about}</li>
            <li className="hover:font-bold hover:text-red-500 cursor-pointer text-lg">{contact}</li>
        </ul>
        <button className="bg-red-500 rounded-full text-white flex items-center justify-center text-[14px]">{subscribe} <IoLogoYoutube className="ml-3 text-[20px]"/></button>
    </div>
  )
}

export default Header

