import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if no user data
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🚀 Welcome to Your Dashboard</h2>
        
        {user ? (
          <>
            <p className="text-lg font-semibold">Hello, {user.name}! 👋</p>
            <p className="text-gray-600">Email: {user.email}</p>
            
            {/* Work in Progress Notice */}
            <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-100 text-left">
              <h3 className="text-lg font-semibold">Coming Soon! 🎉</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>📚 Access to Digital Library & Study Materials</li>
                <li>📝 Exam Past Questions (WAEC, NECO, JAMB, etc.)</li>
                <li>💡 AI-Powered Career Recommendations</li>
                <li>🎯 Interactive Quizzes & Exam Preparation Tools</li>
                <li>📊 Personalized Learning Dashboard</li>
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-4 justify-center">
              <button 
                onClick={() => navigate("/")}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition"
              >
                Go to Home
              </button>
              <button 
                onClick={() => alert('Feature coming soon!')}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Explore Features
              </button>
            </div>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
