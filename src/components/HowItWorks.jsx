import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up for Free',
      description: 'Create your account and get started right away.',
      icon: <UserPlus size={40} className="text-blue-500 mb-2" />,
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Browse Courses and Resources',
      description: 'Explore a variety of topics to suit your needs.',
      icon: <BookOpen size={40} className="text-green-500 mb-2" />,
      bgColor: 'bg-green-100'
    },
    {
      title: 'Start Learning and Growing!',
      description: 'Apply your knowledge and advance your career.',
      icon: <Rocket size={40} className="text-purple-500 mb-2" />,
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-400 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg w-72 ${step.bgColor} flex flex-col items-center`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
