import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">EduMatch</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/signup" className="hover:text-yellow-300">Signup</Link>
        <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
