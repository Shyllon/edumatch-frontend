import React, { useState } from 'react';

const CareerRecommendation = () => {
  const [skills, setSkills] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const careerData = {
    science: ['Research Scientist', 'Biologist', 'Pharmacist', 'Environmental Scientist'],
    math: ['Data Analyst', 'Actuary', 'Statistician', 'Financial Analyst'],
    coding: ['Software Developer', 'Web Developer', 'App Developer', 'AI Engineer'],
    communication: ['Public Relations Specialist', 'Content Writer', 'Marketing Specialist', 'Journalist'],
    business: ['Business Analyst', 'Entrepreneur', 'Financial Advisor', 'Supply Chain Manager'],
    creative: ['Graphic Designer', 'Illustrator', 'Animator', 'Art Director', 'Fashion Designer'],
    teaching: ['Teacher', 'Lecturer', 'Instructional Designer', 'Curriculum Developer'],
    healthcare: ['Nurse', 'Medical Doctor', 'Physiotherapist', 'Health Educator']
  };

  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedCareers = [];

    Object.keys(careerData).forEach((key) => {
      if (skills.toLowerCase().includes(key)) {
        matchedCareers.push(...careerData[key]);
      }
    });

    setRecommendations(matchedCareers.length ? matchedCareers : ['No recommendations found.']);
    setSkills('');
  };

  return (
    <section id="career" className="bg-blue-100 p-6 text-center"> 
      <h2 className="text-3xl font-bold mb-4">Get Career Recommendations</h2>
      <p className="mb-4 max-w-lg mx-auto">
        Enter your skills or knowledge areas (e.g., science, coding, creative, communication) to see personalized career paths!
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={skills}
          onChange={handleInputChange}
          placeholder="Enter your skills (e.g., creative, math, coding)"
          className="p-2 border-2 border-blue-400 rounded-md mb-2 focus:outline-none w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-400 transition duration-300"
        >
          Get Recommendations
        </button>
      </form>

      {recommendations.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md w-80 mx-auto">
          <h3 className="text-xl font-semibold mb-2">Recommended Careers:</h3>
          <ul className="text-left list-disc list-inside">
            {recommendations.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CareerRecommendation;
