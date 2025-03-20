// import React, { useState } from 'react';

// import { loginUser } from '../api/api'; // Without file extension

// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userData = await loginUser(credentials);
      
//       localStorage.setItem("token", userData.token); // Store token
//       navigate("/dashboard"); // Redirect to dashboard
//     } catch (err) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };
  
//   return (
//     <section className="p-6 text-center bg-gray-100">
//       <h2 className="text-3xl font-bold mb-4">Login</h2>
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           name="email"
//           value={credentials.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="p-2 border rounded-md w-64"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="p-2 border rounded-md w-64"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
//         >
//           Login
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Login;
