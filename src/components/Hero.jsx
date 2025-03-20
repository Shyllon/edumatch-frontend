import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

<img 
  src={heroImage} 
  alt="Hero" 
  className="w-full h-40 object-cover rounded-md mb-2"
  loading="lazy"  // Lazy loading for performance boost
/>

const Hero = () => {
  return (
    <section
      id="hero" 
      className="relative bg-blue-600 text-white min-h-screen flex flex-col justify-center items-center p-8 text-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Empowering Every Nigerian Student with Tech-Driven Learning!
      </motion.h1>
      <motion.button
        className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Start Learning Now
      </motion.button>
    </section>
  );
};

export default Hero;
