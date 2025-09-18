// // // import { BarChart3, Edit, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
// // // import React, { useState } from "react";
// // // import CreatePetitions from "./CreatePetitions";
// // // import Dashboard from "./Dashboard";
// // // import Officials from "./Officials";
// // // import ParticipatePolls from "./ParticipatePolls";
// // // import Petitions from "./Petitions";
// // // import Polls from "./Polls";
// // // import SettingsPage from "./SettingsPage";

// // // const DashboardLayout: React.FC = () => {
// // //   const [activePage, setActivePage] = useState("dashboard");

// // //   const renderPage = () => {
// // //     switch (activePage) {
// // //       case "dashboard":
// // //         return <Dashboard selectedCategory="all" setSelectedCategory={() => {}} />;
// // //       case "petitions":
// // //         return <Petitions />;
// // //       case "polls":
// // //         return <Polls />;
// // //       case "participate-polls":
// // //         return <ParticipatePolls />;
// // //       case "officials":
// // //         return <Officials />;
// // //       case "create-petitions":
// // //         return <CreatePetitions />;
// // //       case "settings":
// // //         return <SettingsPage />;
// // //       default:
// // //         return <Dashboard selectedCategory="all" setSelectedCategory={() => {}} />;
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-gray-100">
// // //       {/* Sidebar */}
// // //       <div className="w-64 bg-white shadow-md border-r">
// // //         <div className="p-6 font-bold text-xl text-green-600">Civic Portal</div>
// // //         <nav className="space-y-2 px-4">
// // //           <button
// // //             onClick={() => setActivePage("dashboard")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "dashboard" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <LayoutDashboard size={18} /> Dashboard
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("petitions")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "petitions" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <FileText size={18} /> Petitions
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("polls")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "polls" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <BarChart3 size={18} /> Polls
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("participate-polls")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "participate-polls" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <BarChart3 size={18} /> Participate Polls
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("officials")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "officials" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <Users size={18} /> Officials
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("create-petitions")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "create-petitions" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <Edit size={18} /> Create Petition
// // //           </button>

// // //           <button
// // //             onClick={() => setActivePage("settings")}
// // //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// // //               activePage === "settings" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// // //             }`}
// // //           >
// // //             <Settings size={18} /> Settings
// // //           </button>
// // //         </nav>
// // //       </div>

// // //       {/* Main Content */}
// // //       <main className="flex-1">{renderPage()}</main>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardLayout;







// // import { BarChart3, Edit, FileText, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
// // import React, { useEffect, useState } from "react";
// // // @ts-ignore
// // import API from "../api";

// // import { useAuth } from "../components/AuthContext";
// // // Import components
// // import CreatePetitions from "./CreatePetitions";
// // import Dashboard from "./Dashboard";
// // import Officials from "./Officials";
// // import ParticipatePolls from "./ParticipatePolls";
// // import Petitions from "./Petitions";
// // import Polls from "./Polls";
// // import SettingsPage from "./SettingsPage";

// // interface User {
// //   id: string;
// //   name: string;
// //   email: string;
// //   role: string;
// // }

// // const DashboardLayout: React.FC = () => {
// //   const [activePage, setActivePage] = useState("dashboard");
// //   const [user, setUser] = useState<User | null>(null);
// //   const { logout } = useAuth();

// //   useEffect(() => {
// //     API.get("/auth/me")
// //       .then((res: { data: { user: React.SetStateAction<User | null>; }; }) => setUser(res.data.user))
// //       .catch(() => {
// //         logout();
// //       });
// //   }, [logout]);

// //   const handleLogout = () => {
// //     logout();
// //   };

// //   const renderPage = () => {
// //     switch (activePage) {
// //       case "dashboard": return <Dashboard selectedCategory="all" setSelectedCategory={() => {}} />;
// //       case "petitions": return <Petitions />;
// //       case "polls": return <Polls />;
// //       case "participate-polls": return <ParticipatePolls />;
// //       case "officials": return <Officials />;
// //       case "create-petitions": return <CreatePetitions />;
// //       case "settings": return <SettingsPage />;
// //       default: return <Dashboard selectedCategory="all" setSelectedCategory={() => {}} />;
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <div className="w-64 bg-white shadow-md border-r flex flex-col">
// //         <div className="p-6 font-bold text-xl text-green-600">
// //           Civic Portal
// //           {user && <p className="text-sm text-gray-500">Hello, {user.role}</p>}
// //         </div>
// //         <nav className="space-y-2 px-4 flex-1">
// //           <button onClick={() => setActivePage("dashboard")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "dashboard" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><LayoutDashboard size={18} /> Dashboard</button>
// //           <button onClick={() => setActivePage("petitions")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "petitions" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><FileText size={18} /> Petitions</button>
// //           <button onClick={() => setActivePage("polls")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "polls" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><BarChart3 size={18} /> Polls</button>
// //           <button onClick={() => setActivePage("participate-polls")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "participate-polls" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><BarChart3 size={18} /> Participate Polls</button>
// //           <button onClick={() => setActivePage("officials")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "officials" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><Users size={18} /> Officials</button>
// //           <button onClick={() => setActivePage("create-petitions")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "create-petitions" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><Edit size={18} /> Create Petition</button>
// //           <button onClick={() => setActivePage("settings")}
// //             className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left ${
// //               activePage === "settings" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
// //             }`}><Settings size={18} /> Settings</button>
// //         </nav>
// //         <div className="p-4 border-t">
// //           <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800">
// //             <LogOut size={18} /> Logout
// //           </button>
// //         </div>
// //       </div>
// //       <main className="flex-1">{renderPage()}</main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// // DashboardLayout.jsx
// import { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import CreatePetitions from './CreatePetitions';
// import Dashboard from './Dashboard';
// import Officials from './Officials';
// import ParticipatePolls from './ParticipatePolls';
// import Petitions from './Petitions';
// import Polls from './Polls';
// import SettingsPage from './SettingsPage';
// import TrackResponses from './TrackResponses';

// const DashboardLayout = ({
//   myPetitionsCount = 0,
//   signedPetitionsCount = 0,
//   activePetitionsCount = 0,
// }) => {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
//       <div className="flex-1">
//         {activeSection === 'dashboard' &&
//           <Dashboard selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
//             myPetitionsCount={myPetitionsCount}
//             signedPetitionsCount={signedPetitionsCount}
//             activePetitionsCount={activePetitionsCount}
//           />
//         }
//         {activeSection === 'petitions' && <Petitions />}
//         {activeSection === 'polls' && <Polls />}
//         {activeSection === 'officials' && <Officials />}
//         {activeSection === 'settings' && <SettingsPage />}
//         {activeSection === 'create-petitions' && <CreatePetitions />}
//         {activeSection === 'participate-polls' && <ParticipatePolls />}
//         {activeSection === 'track-responses' && <TrackResponses />}
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;





// import { useState } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';

// const DashboardLayout = ({
//   myPetitionsCount = 0,
//   signedPetitionsCount = 0,
//   activePetitionsCount = 0,
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const currentPath = location.pathname;
//   const activeSection = currentPath.split('/').pop() || 'dashboard';

//   const handleSectionChange = (section) => {
//     if (section === 'dashboard') {
//       navigate('/dashboard');  // ✅ Fix double dashboard issue
//     } else {
//       navigate(`/dashboard/${section}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar
//         activeSection={activeSection}
//         setActiveSection={handleSectionChange}
//       />
//       <div className="flex-1 p-6">
//         <Outlet
//           context={{
//             selectedCategory,
//             setSelectedCategory,
//             myPetitionsCount,
//             signedPetitionsCount,
//             activePetitionsCount,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;








// import { useEffect, useState } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import API from '../api'; // Import your API utility
// import Sidebar from '../components/Sidebar';

// const DashboardLayout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // State for data that will be passed down to child components
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [petitionStats, setPetitionStats] = useState({
//     myPetitions: 0,
//     signedPetitions: 0,
//     activePetitions: 0,
//   });

//   // Fetch dashboard stats when the component loads
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await API.get('/dashboard/stats'); // Use your API utility
//         const stats = response.data;
//         setPetitionStats({
//             myPetitions: stats.myPetitions || 0,
//             signedPetitions: stats.signedPetitions || 0,
//             activePetitions: stats.activePetitions || 0,
//         });
//       } catch (error) {
//         console.error("Failed to fetch petition stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);


//   const currentPath = location.pathname;
//   // This correctly identifies the active section from the URL
//   const activeSection = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'dashboard';

//   const handleSectionChange = (section) => {
//     if (section === 'dashboard' || section === '') {
//       navigate('/dashboard');
//     } else {
//       navigate(`/dashboard/${section}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar
//         activeSection={activeSection}
//         setActiveSection={handleSectionChange}
//         // Pass the fetched counts to the Sidebar for display
//         myPetitionsCount={petitionStats.myPetitions}
//         signedPetitionsCount={petitionStats.signedPetitions}
//       />
//       <div className="flex-1">
//         {/* The Outlet renders the active child route (e.g., Dashboard, Petitions, etc.) */}
//         <Outlet
//           context={{
//             selectedCategory,
//             setSelectedCategory,
//             // Pass the counts down to the child pages as well
//             myPetitionsCount: petitionStats.myPetitions,
//             signedPetitionsCount: petitionStats.signedPetitions,
//             activePetitionsCount: petitionStats.activePetitions,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;




import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import API from '../api'; // Import your API utility
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State for data that will be passed down to child components
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [petitionStats, setPetitionStats] = useState({
    myPetitions: 0,
    signedPetitions: 0,
    activePetitions: 0,
  });

  // Fetch dashboard stats when the component loads
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // ✅ CORRECTED: Use the specific function name from your api.js file
        const response = await API.getDashboardStats(); 
        
        const stats = response.data;
        setPetitionStats({
            myPetitions: stats.myPetitions || 0,
            signedPetitions: stats.signedPetitions || 0,
            activePetitions: stats.activePetitions || 0,
        });
      } catch (error) {
        console.error("Failed to fetch petition stats:", error);
      }
    };

    fetchStats();
  }, []);


  const currentPath = location.pathname;
  // This correctly identifies the active section from the URL
  const activeSection = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'dashboard';

  const handleSectionChange = (section) => {
    if (section === 'dashboard' || section === '') {
      navigate('/dashboard');
    } else {
      navigate(`/dashboard/${section}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        // Pass the fetched counts to the Sidebar for display
        myPetitionsCount={petitionStats.myPetitions}
        signedPetitionsCount={petitionStats.signedPetitions}
      />
      <div className="flex-1">
        {/* The Outlet renders the active child route (e.g., Dashboard, Petitions, etc.) */}
        <Outlet
          context={{
            selectedCategory,
            setSelectedCategory,
            // Pass the counts down to the child pages as well
            myPetitionsCount: petitionStats.myPetitions,
            signedPetitionsCount: petitionStats.signedPetitions,
            activePetitionsCount: petitionStats.activePetitions,
          }}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;