"use client"

import { motion, useScroll } from "motion/react"

export const LineComponent = () => {
    const {scrollYProgress} = useScroll();

  return (
    <motion.div 
      style={{ scaleX: scrollYProgress }} 
      className='origin-left h-1 bg-primary' 
    />
  )
}