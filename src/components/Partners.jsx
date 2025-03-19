import React from 'react';
import { School, Globe, Book, Briefcase, Users, Monitor, GraduationCap, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'Ministry of Education', icon: <School size={50} className="text-blue-600" /> },
    { name: 'UNESCO', icon: <Globe size={50} className="text-green-500" /> },
    { name: 'World Bank', icon: <Book size={50} className="text-purple-500" /> },
    { name: 'Microsoft Education', icon: <Monitor size={50} className="text-blue-400" /> },
    { name: 'UNICEF', icon: <Users size={50} className="text-pink-500" /> },
    { name: 'African Union', icon: <Briefcase size={50} className="text-yellow-500" /> },
    { name: 'Harvard University', icon: <GraduationCap size={50} className="text-red-500" /> },
    { name: 'Oxford University', icon: <Award size={50} className="text-gray-500" /> },
    { name: 'Google for Education', icon: <Building size={50} className="text-orange-500" /> }
  ];

  return (
    <section id="partners" className="bg-gray-500 p-6 text-white text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
      <p className="mb-4">We collaborate with prestigious institutions and organizations to create impactful learning experiences.</p>

      <motion.div
        className="flex justify-center items-center gap-8"
        animate={{ x: ['0%', '-50%', '0%'] }}  // Moving animation
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} // Smooth and endless
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex flex-col items-center justify-center mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {partner.icon}
            <h3 className="text-gray-800 mt-2 font-semibold">{partner.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
