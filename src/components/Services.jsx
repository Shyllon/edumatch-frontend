import React from 'react';
import { motion } from 'framer-motion';
import libraryImage from '../assets/library.jpg';
import examImage from '../assets/exam.jpg';
import aiImage from '../assets/ai.jpg';
import accessibilityImage from '../assets/accessibility.jpg';
import skillsImage from '../assets/skills.jpg'; 

const Services = () => {
  const services = [
    {
      title: 'Digital Library',
      description: 'A comprehensive digital library of secondary school educational materials.',
      image: libraryImage
    },
    {
      title: 'AI-Powered Career Assessment',
      description: 'Get personalized career recommendations based on your skills and interests.',
      image: aiImage
    },
    {
      title: 'Exam Preparation Tools',
      description: 'Interactive quizzes and practice tests for WAEC, NECO, and UTME.',
      image: examImage
    },
    {
      title: 'User-Friendly Interface',
      description: 'Accessible on various devices with low bandwidth requirements.',
      image: accessibilityImage
    },
    {
      title: 'Technical and Digital Skills Training',
      description: 'Gain hands-on experience in essential digital and technical fields.',
      image: skillsImage
    }
  ];

  return (
    <section id="services" className="bg-gray-200 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md"
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
