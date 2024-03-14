import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button() {
  return (
    <div>
      <button className="bg-white text-black rounded-full"><span className='flex gap-2 px-3 py-1 font-[satoshi]'>Start a Project <span className='pt-1'><BsArrowReturnRight /></span></span></button>
    </div>
  )
}

export default Button
