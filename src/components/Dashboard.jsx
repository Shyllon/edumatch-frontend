import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const isAuthenticated = false;  // This should come from your authentication state

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="p-6 text-center bg-green-100">
      <h2 className="text-3xl font-bold">Welcome to Your Dashboard!</h2>
      <p>Access exclusive content and features here.</p>
    </section>
  );
};

export default Dashboard;
