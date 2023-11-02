import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineShopping } from 'react-icons/ai'

function Navbars() {
  return ( 
    <div className='grid grid-cols-2 relative mt-9 z-40 m-5 p-3'>
        <div className="hidden lg:flex flex-row items-center justify-between">
          <a href="/" className='font-bold' style={{fontSize: "22px"}}>
            Food Ajah
          </a>
          <div className="flex flex-row md:gap-10 items-center ">
              <a href="/">Sarapan</a>
              <a href="/">Makan Siang</a>
              <a href="/">Makan Malam</a>
          </div>
        </div>
        <a href="/" className='ml-auto'>
          <AiOutlineShopping className='w-6 h-6'/>
          <div 
            className="rounded-full relative bg-[#FF922C] w-2 h-2 ml-4 -mt-3 ">
          </div>
        </a>
    </div>
  )
}

export default Navbars