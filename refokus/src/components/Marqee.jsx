import React from 'react'

function Marqee({imageUrl}) {
  return (
    <div className='flex gap-32 overflow-hidden py-7'>
      {imageUrl.map((image, idx) => {
        return (
          <img src={image} alt="marqee" className="w-60 h-9" key={idx}/>
        )
      })}
    </div>
  )
}

export default Marqee
