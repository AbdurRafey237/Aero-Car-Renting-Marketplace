import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#FFF7ED] to-[#E0E7FF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

        <div className='text-slate-900'>
            <h2 className='text-3xl font-medium'>Psst ... Got a Car Lyin' Around?</h2>
            <p className='mt-2'>PUT IT UP on Aero now and begin earning TODAY.</p>
            <p className='max-w-130'>We vet your customers, secure your earnings, & pay your insurance but ONLY YOU can approve a booking.</p>

            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-6 py-2 bg-[#4F46E5] hover:bg-[#4338CA] transition-all text-white rounded-lg text-sm mt-4 cursor-pointer'>PUT IT UP ?</motion.button>
        </div>

        <motion.img 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_car_image} alt="car" className='max-h-45 mt-10'/>
      
    </motion.div>
  )
}

export default Banner
