import React from 'react';
import aboutImage from '../assets/about.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 p-6 flex flex-col md:flex-row items-center justify-center">
      <img src={aboutImage} alt="About Edumatch" className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
      <div className="text-center md:text-left md:ml-6">
        <h2 className="text-3xl font-bold mb-4">About Edumatch</h2>
        <p className="text-lg mb-2">
        EduMatch Nigeria is a comprehensive digital platform designed to bridge educational gaps for Nigerian students, with a focus on providing accessible learning resources and career guidance. The platform aims to address two critical challenges: the out-of-school crisis and the skills mismatch problem in the Nigerian educational landscape.

          At Edumatch, we aim to bridge the educational gap through technology.
          Our mission is to empower every Nigerian student with access to quality 
          learning resources, skill development, and career opportunities.
        </p>
        <p className="text-lg font-semibold">
          Vision: Empowering every learner to achieve more!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
