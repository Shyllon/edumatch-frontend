import React from 'react';
import { motion } from 'framer-motion';
import scienceImage from '../assets/science.jpg';
import artImage from '../assets/art.jpg';
import businessImage from '../assets/business.jpg';

const Courses = () => {
  const categories = [
    {
      name: 'Science',
      description: 'Explore Physics, Chemistry, Biology, and more!',
      image: scienceImage
    },
    {
      name: 'Arts',
      description: 'Dive into History, Literature, and the arts!',
      image: artImage
    },
    {
      name: 'Commercial',
      description: 'Master Business, Accounting, and Economics!',
      image: businessImage
    }
  ];

  return (
    <section id="courses" className="bg-gray-300 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Course Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full sm:w-64 md:w-72 lg:w-80 mb-4"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md mb-2"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-700">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
