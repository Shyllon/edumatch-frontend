import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-gray-700 text-white p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-lg mb-4">Get free educational resources and updates delivered to your inbox!</p>
      <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-2 rounded-lg text-gray-800 focus:outline-none"
        />
        <button type="submit" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
