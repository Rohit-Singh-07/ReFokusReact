import React from 'react'

function Stripe({url, number}) {
  return (
    <div className='md:h-20 md:w-72 sm:h-16 sm:w-60 h-16 w-52 border-2 border-zinc-700 border-l-0 text-white flex items-center justify-center mt-[6.5vh] flex-shrink-0 overflow-hidden'>
      <div className='flex justify-between w-full px-6'><img src={url} alt="" />
      <h1>{number}</h1></div>
    </div>
  )
}

export default Stripe
