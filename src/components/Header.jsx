// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png"; // Import logo

// const Header = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token
//     navigate("/login");
//   };

//   // ✅ Improved function to ensure scrolling works after login/signup pages
//   const scrollToSection = (id) => {
//     if (window.location.pathname !== "/") {
//       navigate("/"); // Navigate to home first
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 300); // Delay to allow rendering
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header className="bg-green-600 text-white fixed w-full top-0 shadow-lg z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
//           <img src={logo} alt="Edumatch Logo" className="h-10 mr-3" />
//           <span className="text-xl font-bold">EduMatch</span>
//         </div>

//         {/* Navigation Links with Smooth Scrolling */}
//         <nav className="space-x-6 text-lg">
//           <button onClick={() => scrollToSection("hero")} className="hover:text-yellow-300 transition duration-300">
//             Home
//           </button>
//           <button onClick={() => scrollToSection("about")} className="hover:text-yellow-300 transition duration-300">
//             About
//           </button>
//           <button onClick={() => scrollToSection("career")} className="hover:text-yellow-300 transition duration-300">
//             Career Recommendation
//           </button>
//           <button onClick={() => scrollToSection("services")} className="hover:text-yellow-300 transition duration-300">
//             Our Services
//           </button>
//           <button onClick={() => scrollToSection("courses")} className="hover:text-yellow-300 transition duration-300">
//             Courses
//           </button>
//         </nav>

//         {/* Right Section - Auth Links */}
//         <div className="space-x-4">
//           {token ? (
//             <>
//               <Link to="/dashboard" className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 transition">
//                 Dashboard
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-400 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-green-600 transition">
//                 Login
//               </Link>
//               <Link to="/signup" className="px-4 py-2 bg-yellow-400 text-green-800 rounded-md hover:bg-yellow-300 transition">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  // Function to navigate & scroll correctly
  const navigateAndScroll = (id) => {
    navigate("/"); // Go to home first
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // Delay scrolling to ensure navigation happens first
  };

  return (
    <header className="bg-green-600 text-white fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Edumatch Logo" className="h-10 mr-3" />
          <span className="text-xl font-bold">EduMatch</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-lg hidden md:flex">
          <button onClick={() => navigateAndScroll("hero")} className="hover:text-yellow-300 transition duration-300">
            Home
          </button>
          <button onClick={() => navigateAndScroll("about")} className="hover:text-yellow-300 transition duration-300">
            About
          </button>
          <button onClick={() => navigateAndScroll("career")} className="hover:text-yellow-300 transition duration-300">
            Career Recommendation
          </button>
          <button onClick={() => navigateAndScroll("services")} className="hover:text-yellow-300 transition duration-300">
            Our Services
          </button>
          <button onClick={() => navigateAndScroll("courses")} className="hover:text-yellow-300 transition duration-300">
            Courses
          </button>
        </nav>

        {/* Right Section - Auth Links */}
        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/dashboard" className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 transition">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-green-600 transition">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
