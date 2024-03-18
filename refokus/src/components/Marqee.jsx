import React from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Marqee({imageUrl, direction}) {
  return (
    <div className='w-full flex '>
      <motion.div initial={{x: direction==="left" ? "0" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 70, repeat: Infinity}} className='flex gap-32 py-7 flex-shrink-0'>
      {imageUrl.map((image, idx) => {
        return (
          <img src={image} alt="marqee" className="h-9 w-52" key={idx}/>
          
        )
      })}
    </motion.div>

    <motion.div initial={{x: direction==="left" ? "0" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 70, repeat: Infinity}} className='flex gap-32  py-7 flex-shrink-0'>
      {imageUrl.map((image, idx) => {
        return (
          <img src={image} alt="marqee" className="w-52 h-9" key={idx}/>
          
        )
      })}
    </motion.div>
    </div>
  )
}

export default Marqee
