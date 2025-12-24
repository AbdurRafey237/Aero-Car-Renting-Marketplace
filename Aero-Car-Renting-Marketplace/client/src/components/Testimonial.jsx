import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
        { name: "Ayesha Khan", 
          location: "Islamabad, Pakistan", 
          image: assets.testimonial_image_1, 
          testimonial: "Honestly best experience. Car was super clean and pickup was almost on time (driver was a bit late like 10 mins) but overall 10/10 👍" 
        },
        { name: "Hassan Ali", 
          location: "Lahore, Pakistan", 
          image: assets.testimonial_image_2, 
          testimonial: "Booked for wedding event, was worried at first but it went smoothly. Support replies fast on Whatsapp. Car condition was good, just minor scratch already there." 
        },
        { name: "Umer Farooq", 
          location: "Karachi, Pakistan", 
          image: assets.testimonial_image_3, 
          testimonial: "Rates were fair and no weird hidden charges. Returned car late by 30 mins but they forgive me. Will use again InshaAllah 😄" 
        }
    ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
           <Title title="Raw, Unfiltered Reviews." subTitle="See what our verified customers have to say about us, both the good and the bad."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
