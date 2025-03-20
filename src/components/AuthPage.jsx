import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../api/api";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({ email: "", password: "", name: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginUser({ email: userData.email, password: userData.password });
        navigate("/dashboard"); // 🔹 Redirect to Dashboard
      } else {
        await signupUser(userData);
        setMessage("Signup successful! Now you can log in.");
        setTimeout(() => {
          setIsLogin(true); // 🔹 Switch to Login Form
          setMessage("");
        }, 2000);
      }
    } catch (err) {
      setMessage("Authentication failed. Please try again.");
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Logo */}
      <motion.img
        src={logo}
        alt="Edumatch Logo"
        className="h-16 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ✅ Auth Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 sm:w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login to Your Account" : "Create an Account"}</h2>

        {message && <p className="text-green-600">{message}</p>}

        {/* ✅ Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* ✅ Toggle Button */}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-blue-500 hover:underline"
        >
          {isLogin ? "New here? Sign up" : "Already have an account? Login"}
        </button>

        {/* ✅ Return to Home */}
        <button
          onClick={() => navigate("/")}
          className="mt-2 text-gray-500 hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    </motion.section>
  );
};

export default AuthPage;
