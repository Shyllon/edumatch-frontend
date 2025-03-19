import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="mb-2">&copy; 2025 Edumatch - All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#!" className="hover:text-yellow-400">Facebook</a>
        <a href="#!" className="hover:text-yellow-400">Twitter</a>
        <a href="#!" className="hover:text-yellow-400">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
