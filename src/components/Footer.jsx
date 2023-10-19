import React from 'react'
import {FaFacebook, FaGithub, FaTwitter, FaInstagram, FaTwitch} from "react-icons/fa"

function Footer() {
  return (
    <div className='w-full bg-gray-300 py-8 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase py-2'>Soluções</h6>
          <ol>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
          </ol>
        </div>

        <div>
          <h6 className='font-bold uppercase py-2'>Soluções</h6>
          <ol>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
          </ol>
        </div>

        <div>
          <h6 className='font-bold uppercase py-2'>Soluções</h6>
          <ol>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
          </ol>
        </div>

        <div>
          <h6 className='font-bold uppercase py-2'>Soluções</h6>
          <ol>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
            <li className='p1'>Marketing</li>
          </ol>
        </div>

        <div className='col-span-2 pt-2 md:pt-2'>
          <p className='font-bold uppercase'>Inscreva-se na nossa newsletter</p>
          <p className='py-4'>Você receberá as últimas notícias do esporte diretamente no seu e-mail.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-2' type="email" placeholder="Digite seu e-mail"></input>
            <button className='p-2 mb-2 bg-[#00B86E]'>Enviar</button>
          </form>
        </div>

      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
        <p>JITSU NEWS, 2023. Todos os direitos reservados.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
          <FaTwitch />
        </div>
      </div>

    </div>
  )
}

export default Footer