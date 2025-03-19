import React from 'react';
import { motion } from 'framer-motion';
import libraryImage from '../assets/library.jpg';
import examImage from '../assets/exam.jpg';
import skillsImage from '../assets/skills.jpg';

const Services = () => {
  const services = [
    {
      title: 'Digital Library',
      description: 'Access a vast collection of resources.',
      image: libraryImage
    },
    {
      title: 'Exam Preparation Tools',
      description: 'Interactive quizzes and practice tests.',
      image: examImage
    },
    {
      title: 'Technical and Digital Skills Training',
      description: 'Learn essential digital skills.',
      image: skillsImage
    }
  ];

  return (
    <section id="services" className="bg-gray-200 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full sm:w-64 md:w-72 lg:w-80 mb-4"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-2"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
