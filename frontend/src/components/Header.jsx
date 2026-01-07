import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/*------------Left Side----------------- */}
        <motion.div 
          className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <p className='text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
              Book Appointment <br /> With best rated Photographers
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
              <img className='w-28' src={assets.group_profiles} alt="" />
              <p>Simply browse through our extensive list of best rated photographers, <br className='hidden sm:block'/> schedule your appointment hassle-free</p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
              Book now <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </motion.div>
        {/*------------Right Side----------------- */}
        <motion.div
          className='md:w-1/2 relative'
          initial={{ opacity: 0, x: 60}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
            <img className='h-full w-full md:absolute bottom-0 object-contain rounded-lg' src={assets.header_img} alt="" />
        </motion.div>
    </div>
  )
}

export default Header