// import React, { useState } from 'react';
// import { signupUser } from '../api/api';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [userData, setUserData] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');
    
//     try {
//       const response = await signupUser(userData);
//       setMessage(response.message || 'Signup successful! Please login.');
//       navigate('/login');  // Redirect to login page
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <section className="p-6 text-center bg-gray-100">
//       <h2 className="text-3xl font-bold mb-4">Signup</h2>
//       {message && <p className="text-green-600">{message}</p>}
//       {error && <p className="text-red-600">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={userData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="p-2 border rounded-md w-64"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="p-2 border rounded-md w-64"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={userData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="p-2 border rounded-md w-64"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
//         >
//           Signup
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Signup;
