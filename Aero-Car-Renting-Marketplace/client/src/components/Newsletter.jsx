import React from 'react'
import { motion } from 'motion/react';

const Newsletter = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}

    className="flex flex-col items-center justify-center text-center space-y-3 max-md:px-4 my-12 mb-40 max-w-4xl mx-auto rounded-3xl border border-borderColor bg-gradient-to-br from-[#FFF7ED] via-[#F6F3FF] to-[#E0E7FF] px-6 md:px-10 py-10 shadow-sm">

            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.5 }}

            className="md:text-4xl text-2xl font-semibold text-slate-900">Deals & Excitement.</motion.h1>

            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}

            className="md:text-lg text-slate-700/80 pb-6">
                Wanna know about a price drop on one of your liked cars? Or, wanna know about an exotic car coming up (Rari, Rolls, Porsche type thing)? Your email please! (no spam)
            </motion.p>
            <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}

            className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 rounded-2xl overflow-hidden border border-borderColor bg-white/60 backdrop-blur">
                <input
                    className="h-full outline-none w-full px-4 text-slate-900 placeholder:text-slate-600/70 bg-transparent"
                    type="email"
                    placeholder="abdur@rafey.we"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
                    Send
                </button>
            </motion.form>
        </motion.div>
  )
}

export default Newsletter