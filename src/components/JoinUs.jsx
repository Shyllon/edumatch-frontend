import React from 'react';
import partnersImage from '../assets/partners.jpg';

const JoinUs = () => {
    return (
      <section id="join" className="bg-gray-600 text-white p-6 flex flex-col md:flex-row items-center justify-center">
        <img 
          src={partnersImage} 
          alt="Join our team" 
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-4 max-w-md">
            Are you passionate about education and technology? Join us to make a difference in the lives of students across Nigeria!
          </p>
          <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Become a Volunteer
          </button>
        </div>
      </section>
    );
  };
  
  export default JoinUs;
  