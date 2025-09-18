// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // export default function SignUpPage() {
// // //   const [role, setRole] = useState("Citizen");

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// // //       <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        
// // //         {/* Left Section */}
// // //         <div className="md:w-1/2 bg-green-200 p-10 flex flex-col justify-center">
// // //           <div className="flex items-center space-x-2 mb-6">
// // //             <span className="text-2xl">🏛️</span>
// // //             <h1 className="text-2xl font-bold text-gray-700">CIVIX</h1>
// // //           </div>
// // //           <h2 className="text-lg font-semibold text-gray-700 mb-2">
// // //             Digital Civic Engagement platform
// // //           </h2>
// // //           <p className="text-gray-600 mb-6">
// // //             Civix enables citizens to engage in local governance through petitions,
// // //             voting and tracking officials responses.
// // //           </p>

// // //           <ul className="space-y-4 text-gray-700">
// // //             <li className="flex items-center space-x-2">
// // //               <span>✏️</span>
// // //               <span>Create and Sign Petitions</span>
// // //             </li>
// // //             <li className="flex items-center space-x-2">
// // //               <span>✔️</span>
// // //               <span>Participate in Public Polls</span>
// // //             </li>
// // //             <li className="flex items-center space-x-2">
// // //               <span>📊</span>
// // //               <span>Track Official Responses</span>
// // //             </li>
// // //           </ul>
// // //         </div>

// // //         {/* Right Section */}
// // //         <div className="md:w-1/2 bg-gray-50 p-10 flex flex-col justify-center">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-2">
// // //             Welcome to Civix
// // //           </h2>
// // //           <p className="text-gray-600 mb-6">
// // //             Join our platform to make your voice heard in local Governance
// // //           </p>

// // //           <div className="flex mb-6 space-x-6">
// // //             <Link 
// // //               to="/login" 
// // //               className="text-gray-500 hover:text-gray-700"
// // //             >
// // //               Login
// // //             </Link>
// // //             <button className="font-semibold text-gray-800 border-b-2 border-green-400">
// // //               Register
// // //             </button>
// // //           </div>

// // //           {/* Form */}
// // //           <form className="space-y-4">
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Full Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter your full name"
// // //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Email
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 placeholder="Enter your email"
// // //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 placeholder="Create a password"
// // //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Confirm Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 placeholder="Confirm your password"
// // //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// // //               />
// // //             </div>

// // //             {/* Radio Buttons for Role */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 I am registering as:
// // //               </label>
// // //               <div className="flex items-center space-x-6">
// // //                 <label className="flex items-center space-x-2">
// // //                   <input
// // //                     type="radio"
// // //                     value="Citizen"
// // //                     checked={role === "Citizen"}
// // //                     onChange={() => setRole("Citizen")}
// // //                     className="text-green-400 focus:ring-green-300"
// // //                   />
// // //                   <span>Citizen</span>
// // //                 </label>
// // //                 <label className="flex items-center space-x-2">
// // //                   <input
// // //                     type="radio"
// // //                     value="Public Official"
// // //                     checked={role === "Public Official"}
// // //                     onChange={() => setRole("Public Official")}
// // //                     className="text-green-400 focus:ring-green-300"
// // //                   />
// // //                   <span>Public Official</span>
// // //                 </label>
// // //               </div>
// // //             </div>

// // //             <button
// // //               type="submit"
// // //               className="w-full py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition"
// // //             >
// // //               Create Account
// // //             </button>
// // //           </form>

// // //           <p className="text-center text-sm text-gray-600 mt-4">
// // //             Already have an account?{" "}
// // //             <Link 
// // //               to="/login" 
// // //               className="text-green-500 font-medium hover:underline"
// // //             >
// // //               Sign In
// // //             </Link>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import API from "../api";

// // export default function SignUpPage({ setIsAuthenticated }) {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //     role: "Citizen"
// //   });
// //   const [error, setError] = useState("");
// //   const [showSuccessModal, setShowSuccessModal] = useState(false);
// //   const [registeredEmail, setRegisteredEmail] = useState("");
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
    
// //     if (formData.password !== formData.confirmPassword) {
// //       setError("Passwords do not match");
// //       return;
// //     }
    
// //     if (formData.password.length < 6) {
// //       setError("Password must be at least 6 characters");
// //       return;
// //     }
    
// //     try {
// //       // Remove confirmPassword before sending
// //       const { confirmPassword, ...submitData } = formData;
      
// //       console.log("Sending registration data:", submitData);
      
// //       const response = await API.post("/auth/register", submitData);
// //       console.log("Registration response:", response.data);
      
// //       if (response.data.token && response.data.user) {
// //         // Show success modal instead of automatically logging in
// //         setRegisteredEmail(formData.email);
// //         setShowSuccessModal(true);
        
// //         // Clear form
// //         setFormData({
// //           fullName: "",
// //           email: "",
// //           password: "",
// //           confirmPassword: "",
// //           role: "Citizen"
// //         });
// //       } else {
// //         setError("Registration successful but no token received");
// //       }
// //     } catch (err) {
// //       console.error("Registration error:", err);
      
// //       // More detailed error handling
// //       if (err.response) {
// //         console.error("Error response:", err.response.data);
// //         setError(err.response.data?.error || err.response.data?.message || "Registration failed. Please try again.");
// //       } else if (err.request) {
// //         setError("Cannot connect to server. Please make sure the backend is running.");
// //       } else {
// //         setError("Registration failed. Please try again.");
// //       }
// //     }
// //   };

// //   const handleLoginRedirect = () => {
// //     setShowSuccessModal(false);
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// //       {/* Success Modal */}
// //       {showSuccessModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
// //             <div className="text-center">
// //               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// //                 </svg>
// //               </div>
// //               <h3 className="text-lg font-medium text-gray-900 mb-2">Registration Successful!</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Your account has been created successfully. Please login to continue.
// //               </p>
// //               {registeredEmail && (
// //                 <p className="text-sm text-gray-500 mb-4">
// //                   Registered email: <span className="font-medium">{registeredEmail}</span>
// //                 </p>
// //               )}
// //               <button
// //                 onClick={handleLoginRedirect}
// //                 className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
// //               >
// //                 Go to Login
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        
// //         {/* Left Section */}
// //         <div className="md:w-1/2 bg-green-200 p-10 flex flex-col justify-center">
// //           <div className="flex items-center space-x-2 mb-6">
// //             <span className="text-2xl">🏛️</span>
// //             <h1 className="text-2xl font-bold text-gray-700">CIVIX</h1>
// //           </div>
// //           <h2 className="text-lg font-semibold text-gray-700 mb-2">
// //             Digital Civic Engagement platform
// //           </h2>
// //           <p className="text-gray-600 mb-6">
// //             Civix enables citizens to engage in local governance through petitions,
// //             voting and tracking officials responses.
// //           </p>

// //           <ul className="space-y-4 text-gray-700">
// //             <li className="flex items-center space-x-2">
// //               <span>✏️</span>
// //               <span>Create and Sign Petitions</span>
// //             </li>
// //             <li className="flex items-center space-x-2">
// //               <span>✔️</span>
// //               <span>Participate in Public Polls</span>
// //             </li>
// //             <li className="flex items-center space-x-2">
// //               <span>📊</span>
// //               <span>Track Official Responses</span>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Right Section */}
// //         <div className="md:w-1/2 bg-gray-50 p-10 flex flex-col justify-center">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-2">
// //             Welcome to Civix
// //           </h2>
// //           <p className="text-gray-600 mb-6">
// //             Join our platform to make your voice heard in local Governance
// //           </p>

// //           <div className="flex mb-6 space-x-6">
// //             <Link 
// //               to="/login" 
// //               className="text-gray-500 hover:text-gray-700"
// //             >
// //               Login
// //             </Link>
// //             <button className="font-semibold text-gray-800 border-b-2 border-green-400">
// //               Register
// //             </button>
// //           </div>

// //           {error && (
// //             <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
// //               {error}
// //             </div>
// //           )}

// //           {/* Form */}
// //           <form className="space-y-4" onSubmit={handleSubmit}>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 placeholder="Enter your full name"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 required
// //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter your email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 placeholder="Create a password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //                 minLength="6"
// //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 placeholder="Confirm your password"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 required
// //                 minLength="6"
// //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
// //               />
// //             </div>

// //             {/* Radio Buttons for Role */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 I am registering as:
// //               </label>
// //               <div className="flex items-center space-x-6">
// //                 <label className="flex items-center space-x-2">
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="Citizen"
// //                     checked={formData.role === "Citizen"}
// //                     onChange={handleChange}
// //                     className="text-green-400 focus:ring-green-300"
// //                   />
// //                   <span>Citizen</span>
// //                 </label>
// //                 <label className="flex items-center space-x-2">
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="Public Official"
// //                     checked={formData.role === "Public Official"}
// //                     onChange={handleChange}
// //                     className="text-green-400 focus:ring-green-300"
// //                   />
// //                   <span>Public Official</span>
// //                 </label>
// //               </div>
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition"
// //             >
// //               Create Account
// //             </button>
// //           </form>

// //           <p className="text-center text-sm text-gray-600 mt-4">
// //             Already have an account?{" "}
// //             <Link 
// //               to="/login" 
// //               className="text-green-500 font-medium hover:underline"
// //             >
// //               Sign In
// //             </Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // SignupPage.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api";

// export default function SignUpPage({ setIsAuthenticated }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "citizen",
//   });
//   const [error, setError] = useState("");
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [registeredEmail, setRegisteredEmail] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       const { confirmPassword, ...submitData } = formData;
//       const response = await API.post("/auth/register", submitData);

//       if (response.data && response.data.user) {
//         setRegisteredEmail(submitData.email);
//         setShowSuccessModal(true);
//         setFormData({
//           fullName: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//           role: "citizen",
//         });
//       } else {
//         setError("Registration successful but no response received");
//       }
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.response) {
//         setError(
//           err.response.data?.error ||
//             err.response.data?.message ||
//             "Registration failed."
//         );
//       } else if (err.request) {
//         setError("Cannot connect to server. Is it running?");
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     }
//   };

//   const handleLoginRedirect = () => {
//     setShowSuccessModal(false);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">
//               Registration Successful!
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Your account has been created. Please login to continue.
//             </p>
//             {registeredEmail && (
//               <p className="text-sm text-gray-500 mb-4">
//                 Registered: {registeredEmail}
//               </p>
//             )}
//             <button
//               onClick={handleLoginRedirect}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md"
//             >
//               Go to Login
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
//         <div className="md:w-1/2 bg-green-200 p-10 flex flex-col justify-center">
//           <h1 className="text-2xl font-bold text-gray-700 mb-2">CIVIX</h1>
//           <p className="text-gray-600">
//             Civix enables citizens to engage in local governance through
//             petitions and tracking responses.
//           </p>
//         </div>

//         <div className="md:w-1/2 bg-gray-50 p-10 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">
//             Create Account
//           </h2>
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               minLength={6}
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <input
//               name="confirmPassword"
//               type="password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm Password"
//               minLength={6}
//               required
//               className="w-full px-4 py-2 border rounded-lg"
//             />

//             <button
//               type="submit"
//               className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg"
//             >
//               Create Account
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-600 mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-green-500 font-medium">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import axios from "axios"; // Import axios directly for quick fix
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [role, setRole] = useState("citizen");
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     // Validation
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Call the backend API directly with correct endpoint
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/signup", // Correct endpoint
//         {
//           fullName,
//           email,
//           password,
//           role: role.toLowerCase()
//         }
//       );

//       if (response.data && response.data.token) {
//         // Store token and user data
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         localStorage.setItem("userInfo", JSON.stringify({
//           name: fullName,
//           email: email
//         }));

//         // Navigate based on role
//         if (role.toLowerCase() === "official") {
//           navigate("/official-dashboard");
//         } else {
//           navigate("/dashboard");
//         }
//       }
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.response?.data?.error) {
//         setError(err.response.data.error);
//       } else if (err.message) {
//         setError(err.message);
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full max-w-5xl bg-white rounded-xl shadow-md flex overflow-hidden">
        
//         {/* Left Section */}
//         <div className="w-1/2 bg-green-200 p-10 flex flex-col justify-center">
//           <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 mb-4">
//             <span className="text-3xl">🏛️</span> CIVIX
//           </h1>
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">
//             Digital Civic Engagement platform
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Civix enables citizens to engage in local governance through
//             petitions, voting and tracking officials responses.
//           </p>
//           <ul className="space-y-4 text-gray-800">
//             <li className="flex items-center gap-2">
//               <span className="text-orange-500 text-lg">✏️</span> Create and Sign Petitions
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-600 text-lg">✔</span> Participate in Public Polls
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-blue-600 text-lg">📊</span> Track Official Responses
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 p-10 flex flex-col justify-center bg-gray-50">
//           <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome to Civix</h2>
//           <p className="text-gray-600 mb-6">
//             Join our platform to make your voice heard in local Governance
//           </p>

//           {/* Tabs */}
//           <div className="flex gap-6 mb-6 text-gray-600 font-medium">
//             <Link
//               to="/login"
//               className="hover:text-gray-900 transition border-b-2 border-transparent hover:border-gray-900 pb-1"
//             >
//               Login
//             </Link>
//             <span className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1">
//               Register
//             </span>
//           </div>

//           {/* Error message */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
//               {error}
//             </div>
//           )}

//           {/* Signup Form */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               minLength={6}
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               minLength={6}
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
//             />

//             <div>
//               <p className="text-gray-600 text-sm mb-2">I am registering as:</p>
//               <div className="flex items-center gap-6">
//                 <label className="flex items-center gap-2 text-gray-700">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="citizen"
//                     checked={role === "citizen"}
//                     onChange={() => setRole("citizen")}
//                   />
//                   Citizen
//                 </label>
//                 <label className="flex items-center gap-2 text-gray-700">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="official"
//                     checked={role === "official"}
//                     onChange={() => setRole("official")}
//                   />
//                   Public Official
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Creating Account..." : "Create Account"}
//             </button>
//           </form>

//           <p className="text-center text-gray-600 mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-green-600 font-medium">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api"; // Make sure this path is correct

const SignupPage = () => {
  const [role, setRole] = useState("citizen");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  // Frontend validation
  if (!fullName || !email || !password || !confirmPassword) {
    setError("All fields are required");
    setLoading(false);
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    setLoading(false);
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    setLoading(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    setLoading(false);
    return;
  }

  try {
    // Call backend API
    const response = await API.register({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
      role: role.toLowerCase(),
    });

    console.log("Registration response:", response.data);

    if (response.data && response.data.token) {
      // Store token + user
      API.setAuthToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("userInfo", JSON.stringify({
        name: fullName,
        email: email,
      }));

      // Redirect based on role
      if (role.toLowerCase() === "official") {
        navigate("/official-dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  } catch (err) {
    console.error("Registration error:", err);
    if (err.response?.data?.error) {
      setError(err.response.data.error);
    } else if (err.response?.data?.message) {
      setError(err.response.data.message);
    } else {
      setError("Registration failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setLoading(true);

  //   // Frontend validation
  //   if (!fullName || !email || !password || !confirmPassword) {
  //     setError("All fields are required");
  //     setLoading(false);
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     setLoading(false);
  //     return;
  //   }

  //   if (password.length < 6) {
  //     setError("Password must be at least 6 characters");
  //     setLoading(false);
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setError("Please enter a valid email address");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     // Call the backend API with proper data structure
  //     const response = await API.register({
  //       fullName: fullName.trim(),
  //       email: email.toLowerCase().trim(),
  //       password: password,
  //       role: role.toLowerCase()
  //     });

  //     console.log("Registration response:", response.data);

  //     if (response.data && response.data.token) {
  //       // Store token and user data
  //       API.setAuthToken(response.data.token);
  //       localStorage.setItem("user", JSON.stringify(response.data.user));
  //       localStorage.setItem("userInfo", JSON.stringify({
  //         name: fullName,
  //         email: email
  //       }));

  //       // Navigate based on role
  //       if (role.toLowerCase() === "official") {
  //         navigate("/official-dashboard");
  //       } else {
  //         navigate("/dashboard");
  //       }
  //     }
  //   } catch (err) {
  //     console.error("Registration error:", err);
      
  //     // Detailed error handling
  //     if (err.response?.data?.error) {
  //       setError(err.response.data.error);
  //     } else if (err.response?.data?.message) {
  //       setError(err.response.data.message);
  //     } else if (err.response?.data) {
  //       // Handle validation errors from backend
  //       const errors = err.response.data;
  //       if (typeof errors === 'object') {
  //         const errorMessages = Object.values(errors).flat().join(', ');
  //         setError(errorMessages);
  //       } else {
  //         setError("Registration failed: " + JSON.stringify(errors));
  //       }
  //     } else if (err.message) {
  //       setError(err.message);
  //     } else {
  //       setError("Registration failed. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md flex overflow-hidden">
        
        {/* Left Section */}
        <div className="w-1/2 bg-green-200 p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 mb-4">
            <span className="text-3xl">🏛️</span> CIVIX
          </h1>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Digital Civic Engagement platform
          </h2>
          <p className="text-gray-700 mb-6">
            Civix enables citizens to engage in local governance through
            petitions, voting and tracking officials responses.
          </p>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center gap-2">
              <span className="text-orange-500 text-lg">✏️</span> Create and Sign Petitions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span> Participate in Public Polls
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">📊</span> Track Official Responses
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome to Civix</h2>
          <p className="text-gray-600 mb-6">
            Join our platform to make your voice heard in local Governance
          </p>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 text-gray-600 font-medium">
            <Link
              to="/login"
              className="hover:text-gray-900 transition border-b-2 border-transparent hover:border-gray-900 pb-1"
            >
              Login
            </Link>
            <span className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1">
              Register
            </span>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <div>
              <p className="text-gray-600 text-sm mb-2">I am registering as:</p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="citizen"
                    checked={role === "citizen"}
                    onChange={() => setRole("citizen")}
                  />
                  Citizen
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="official"
                    checked={role === "official"}
                    onChange={() => setRole("official")}
                  />
                  Public Official
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;