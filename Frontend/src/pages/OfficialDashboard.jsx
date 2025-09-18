// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const OfficialDashboard = () => {
// //   const [activeTab, setActiveTab] = useState('dashboard');
// //   const [activeFilter, setActiveFilter] = useState('all');
// //   const [notifications, setNotifications] = useState({ petitions: 12, polls: 3 });
// //   const [userInfo, setUserInfo] = useState(null);
// //   const navigate = useNavigate();

// //   // Load user information on component mount
// //   // useEffect(() => {
// //   //   const storedUserInfo = localStorage.getItem('userInfo');
// //   //   const userRole = localStorage.getItem('userRole');
    
// //     // if (storedUserInfo && userRole === 'official') {
// //     //   setUserInfo(JSON.parse(storedUserInfo));
// //     // } else {
// //     //   // If user is not a public official or no user info, redirect to login
// //     //   navigate('/login');
// //     // }
// //    useEffect(() => {
// //   // const storedUserInfo = localStorage.getItem('userInfo');
// //   const storedUserInfo = localStorage.getItem('user');

// //   const userRole = localStorage.getItem('userRole');
// //   console.log("OfficialDashboard mount, userInfo:", storedUserInfo, "userRole:", userRole);
// //   if (storedUserInfo && userRole === 'official') {
// //     setUserInfo(JSON.parse(storedUserInfo));
// //   } else {
// //     navigate('/login');
// //   }
// // }, [navigate]); // <-- Only ONE dependency array here!


// //   // Simulate real-time updates
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (Math.random() > 0.7) {
// //         setNotifications(prev => ({
// //           ...prev,
// //           petitions: prev.petitions + 1
// //         }));
// //       }
// //     }, 30000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleNavClick = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleFilterClick = (filter) => {
// //     setActiveFilter(filter);
// //   };

// //   const handleSignOut = () => {
// //     // Clear user data and redirect to home
// //     localStorage.removeItem('userInfo');
// //     localStorage.removeItem('userRole');
// //     navigate('/');
// //   };

// //   const respondToPetition = (id) => {
// //     alert(`Opening response interface for petition ${id}...`);
// //   };

// //   // If user info is not loaded yet, show loading
// //   if (!userInfo) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
// //         <div className="text-center">
// //           <div className="text-3xl text-green-800 mb-4">🏛️</div>
// //           <div className="text-xl font-bold text-green-800">Loading Official Dashboard...</div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ✅ Safe firstName calculation
// //   // const firstName = userInfo?.name ? userInfo.name.split(' ')[0] : 'Official';
// //   const firstName = userInfo?.fullName ? userInfo.fullName.split(' ')[0] : 'Official';


// //   const petitions = [
// //     {
// //       id: 1,
// //       title: "Improve Street Lighting on Main Street",
// //       submitter: "Maria Rodriguez",
// //       signatures: 247,
// //       timeAgo: "3 days ago",
// //       status: "pending",
// //       priority: "high"
// //     },
// //     {
// //       id: 2,
// //       title: "Add More Bike Lanes in Downtown Area",
// //       submitter: "Green Commute Alliance",
// //       signatures: 423,
// //       timeAgo: "1 week ago",
// //       status: "under-review",
// //       priority: "medium"
// //     },
// //     {
// //       id: 3,
// //       title: "Extend Library Hours on Weekends",
// //       submitter: "Students United",
// //       signatures: 156,
// //       timeAgo: "2 weeks ago",
// //       status: "responded",
// //       priority: "low"
// //     },
// //     {
// //       id: 4,
// //       title: "Traffic Safety Measures Near Schools",
// //       submitter: "Parent Teacher Association",
// //       signatures: 534,
// //       timeAgo: "4 days ago",
// //       status: "pending",
// //       priority: "high"
// //     }
// //   ];

// //   const getStatusConfig = (status) => {
// //     const configs = {
// //       'pending': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending Review' },
// //       'under-review': { class: 'bg-blue-100 text-blue-700', text: 'Under Review' },
// //       'responded': { class: 'bg-green-100 text-green-700', text: 'Responded' }
// //     };
// //     return configs[status] || configs['pending'];
// //   };

// //   const getPriorityClass = (priority) => {
// //     const classes = {
// //       'high': 'border-l-4 border-red-500',
// //       'medium': 'border-l-4 border-yellow-500',
// //       'low': 'border-l-4 border-green-500'
// //     };
// //     return classes[priority] || '';
// //   };

// //   const quickActions = [
// //     { 
// //       icon: '📢', 
// //       title: 'Create Public Announcement', 
// //       desc: 'Share important updates with citizens', 
// //       action: () => alert('Opening announcement creation form...') 
// //     },
// //     { 
// //       icon: '📋', 
// //       title: 'Review Pending Petitions', 
// //       desc: '12 petitions awaiting your response', 
// //       action: () => alert('Navigating to petition review page...') 
// //     },
// //     { 
// //       icon: '🗳️', 
// //       title: 'Create Community Poll', 
// //       desc: 'Gather public opinion on issues', 
// //       action: () => alert('Opening poll creation interface...') 
// //     },
// //     { 
// //       icon: '📊', 
// //       title: 'View Engagement Analytics', 
// //       desc: 'Track community participation trends', 
// //       action: () => alert('Loading detailed analytics dashboard...') 
// //     },
// //     { 
// //       icon: '📅', 
// //       title: 'Schedule Town Hall', 
// //       desc: 'Plan community meetings', 
// //       action: () => alert('Opening meeting scheduler...') 
// //     }
// //   ];

// //   const navigationItems = [
// //     { id: 'dashboard', icon: '🏠', label: 'Dashboard', badge: null },
// //     { id: 'petitions', icon: '📝', label: 'Petitions', badge: notifications.petitions },
// //     { id: 'polls', icon: '📊', label: 'Polls', badge: notifications.polls },
// //     { id: 'feedback', icon: '💬', label: 'Community Feedback', badge: null },
// //     { id: 'analytics', icon: '📈', label: 'Analytics & Reports', badge: null },
// //     { id: 'announcements', icon: '📢', label: 'Public Announcements', badge: null },
// //     { id: 'engagement', icon: '👥', label: 'Citizen Engagement', badge: null },
// //     { id: 'settings', icon: '⚙️', label: 'Settings', badge: null }
// //   ];

// //   const stats = [
// //     { title: 'Pending Petitions', value: '12', change: '+3 from last week', icon: '📝', positive: true },
// //     { title: 'Active Polls', value: '3', change: '847 total responses', icon: '📊', positive: true },
// //     { title: 'Response Rate', value: '94%', change: '+5% this month', icon: '⚡', positive: true },
// //     { title: 'Community Satisfaction', value: '4.7', change: '+0.3 from last quarter', icon: '👍', positive: true }
// //   ];

// //   const filters = ['all', 'high-priority', 'urgent', 'overdue'];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex">
// //       {/* Sidebar */}
// //       <div className="w-80 bg-gradient-to-b from-green-300 to-green-400 p-6 shadow-xl flex flex-col">
// //         {/* Logo */}
// //         <div className="flex items-center mb-8 text-green-800">
// //           <div className="text-3xl mr-3">🏛️</div>
// //           <div className="text-2xl font-bold">CIVIX</div>
// //         </div>
        
// //         <div className="text-green-800 text-sm mb-8 leading-relaxed">
// //           Digital Civic Engagement platform<br />
// //           Official Administrative Portal
// //         </div>

// //         {/* Official Profile */}
// //         <div className="bg-white bg-opacity-30 rounded-xl p-5 mb-8 backdrop-blur-sm">
// //           <div className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
// //             VERIFIED OFFICIAL
// //           </div>
// //           <div className="text-lg font-bold text-green-800 mb-1">
// //             {/* {userInfo?.name || 'Official User'} */}
// //             {userInfo?.fullName || 'Official User'}

// //           </div>
// //           <div className="text-green-700 text-sm mb-2">
// //             {userInfo?.email || 'No email available'}
// //           </div>
// //           <div className="text-green-700 text-xs flex items-center">
// //             📍 Connected via CIVIX Platform
// //           </div>
// //         </div>

// //         {/* Navigation */}
// //         <nav className="flex-1">
// //           {navigationItems.map((item) => (
// //             <div
// //               key={item.id}
// //               className={`flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40 hover:translate-x-1 ${
// //                 activeTab === item.id ? 'bg-white bg-opacity-50 shadow-md' : ''
// //               }`}
// //               onClick={() => handleNavClick(item.id)}
// //             >
// //               <span className="mr-3 text-lg">{item.icon}</span>
// //               <span className="flex-1">{item.label}</span>
// //               {item.badge && (
// //                 <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-2">
// //                   {item.badge}
// //                 </span>
// //               )}
// //             </div>
// //           ))}
// //         </nav>

// //         {/* Bottom Navigation */}
// //         <div className="mt-8 pt-5 border-t border-white border-opacity-30">
// //           <div className="flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40">
// //             <span className="mr-3 text-lg">❓</span>
// //             Help & Support
// //           </div>
// //           <div 
// //             className="flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40"
// //             onClick={handleSignOut}
// //           >
// //             <span className="mr-3 text-lg">🚪</span>
// //             Sign Out
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 p-8 overflow-y-auto">
// //         {/* Header with Welcome Message */}
// //         <div className="flex justify-between items-center mb-8">
// //           <div className="text-green-800">
// //             <h1 className="text-3xl font-bold mb-2">
// //               Welcome back, {firstName}!
// //             </h1>
// //             <p className="text-gray-600 text-lg">
// //               Manage community engagement and respond to citizen concerns
// //             </p>
// //           </div>
// //           <div className="flex gap-4">
// //             <button className="px-6 py-3 bg-green-100 text-green-800 border border-green-800 rounded-lg font-semibold hover:bg-green-800 hover:text-white transition-all duration-300 flex items-center gap-2">
// //               📊 Generate Report
// //             </button>
// //             <button className="px-6 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
// //               📢 New Announcement
// //             </button>
// //           </div>
// //         </div>

// //         {/* Stats Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //           {stats.map((stat, index) => (
// //             <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-l-4 border-green-400">
// //               <div className="flex justify-between items-center mb-4">
// //                 <span className="text-gray-600 text-sm font-medium">{stat.title}</span>
// //                 <span className="text-2xl text-green-400">{stat.icon}</span>
// //               </div>
// //               <div className="text-3xl font-bold text-green-800 mb-1">{stat.value}</div>
// //               <div className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
// //                 ↗ {stat.change}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Main Content Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
// //           {/* Petitions */}
// //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
// //             <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
// //               <h2 className="text-xl font-bold text-green-800">Petitions Requiring Action</h2>
// //               <div className="flex gap-2 flex-wrap">
// //                 {filters.map((filter) => (
// //                   <button
// //                     key={filter}
// //                     className={`px-4 py-2 rounded-full text-xs transition-all duration-300 ${
// //                       activeFilter === filter
// //                         ? 'bg-green-800 text-white'
// //                         : 'bg-white text-green-800 border border-green-400 hover:bg-green-400 hover:text-green-800'
// //                     }`}
// //                     onClick={() => handleFilterClick(filter)}
// //                   >
// //                     {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               {petitions.map((petition) => {
// //                 const statusConfig = getStatusConfig(petition.status);
// //                 return (
// //                   <div key={petition.id} className={`flex justify-between items-start p-4 border-b border-gray-100 last:border-b-0 ${getPriorityClass(petition.priority)}`}>
// //                     <div className="flex-1">
// //                       <div className="font-semibold text-green-800 mb-1">{petition.title}</div>
// //                       <div className="text-xs text-gray-600 mb-2">
// //                         Submitted by {petition.submitter} • {petition.signatures} signatures • {petition.timeAgo}
// //                       </div>
// //                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusConfig.class}`}>
// //                         {statusConfig.text}
// //                       </span>
// //                     </div>
// //                     <button
// //                       className={`ml-4 px-4 py-2 rounded-md text-xs font-semibold transition-all duration-300 ${
// //                         petition.status === 'responded'
// //                           ? 'bg-gray-500 text-white'
// //                           : 'bg-green-800 text-white hover:bg-green-700'
// //                       }`}
// //                       onClick={() => respondToPetition(petition.id)}
// //                     >
// //                       {petition.status === 'responded' ? 'View Response' : 
// //                        petition.status === 'under-review' ? 'Update Status' : 'Respond'}
// //                     </button>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Quick Actions */}
// //           <div className="bg-white rounded-2xl p-6 shadow-lg">
// //             <div className="mb-6 pb-4 border-b border-gray-200">
// //               <h2 className="text-xl font-bold text-green-800">Quick Actions</h2>
// //             </div>

// //             <div className="space-y-4">
// //               {quickActions.map((action, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-center p-4 bg-green-50 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:bg-green-100 hover:border-green-400 hover:translate-x-1"
// //                   onClick={action.action}
// //                 >
// //                   <span className="mr-3 text-green-800 text-xl">{action.icon}</span>
// //                   <div className="flex-1">
// //                     <div className="font-semibold text-green-800 mb-1">{action.title}</div>
// //                     <div className="text-xs text-gray-600">{action.desc}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Community Engagement Overview */}
// //         <div className="bg-white rounded-2xl p-6 shadow-lg">
// //           <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
// //             <h2 className="text-xl font-bold text-green-800">Community Engagement Overview</h2>
// //             <select className="p-2 border border-gray-300 rounded-md">
// //               <option>Last 30 Days</option>
// //               <option>Last 90 Days</option>
// //               <option>Last Year</option>
// //             </select>
// //           </div>
          
// //           <div className="bg-green-50 rounded-lg p-5 mb-5 text-center">
// //             <div className="h-32 bg-gradient-to-r from-green-400 to-green-300 rounded-lg flex items-center justify-center text-green-800 font-bold">
// //               📈 Engagement Trends Chart<br />
// //               <small className="font-normal">Petition submissions, poll participation, and community feedback over time</small>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
// //             <div className="text-center p-4 bg-green-50 rounded-lg">
// //               <div className="text-2xl font-bold text-green-800">1,247</div>
// //               <div className="text-xs text-gray-600">Total Citizen Interactions</div>
// //             </div>
// //             <div className="text-center p-4 bg-green-50 rounded-lg">
// //               <div className="text-2xl font-bold text-green-800">89%</div>
// //               <div className="text-xs text-gray-600">Citizen Satisfaction Rate</div>
// //             </div>
// //             <div className="text-center p-4 bg-green-50 rounded-lg">
// //               <div className="text-2xl font-bold text-green-800">2.3</div>
// //               <div className="text-xs text-gray-600">Avg Response Time (days)</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OfficialDashboard;




// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const OfficialDashboard = () => {
// //   // State from your new, functional component
// //   const [activeTab, setActiveTab] = useState('dashboard');
// //   const [activeFilter, setActiveFilter] = useState('all');
// //   const [notifications, setNotifications] = useState([]);
// //   const [petitions, setPetitions] = useState([]);
// //   const [polls, setPolls] = useState([]);
// //   const [stats, setStats] = useState({
// //     petitions: 0,
// //     polls: 0,
// //     responseRate: '0%',
// //     satisfaction: 0,
// //   });
// //   const [engagement, setEngagement] = useState({
// //     totalInteractions: 0,
// //     satisfactionRate: '0%',
// //     avgResponseTime: 0,
// //   });
// //   const [userInfo, setUserInfo] = useState(null);
// //   const [showResponseModal, setShowResponseModal] = useState(false);
// //   const [selectedPetition, setSelectedPetition] = useState(null);
// //   const [responseForm, setResponseForm] = useState({
// //     message: '',
// //     responseStatus: 'under-consideration',
// //     estimatedCompletion: ''
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const navigate = useNavigate();

// //   // FIX: Using the corrected navigation logic from your "old" code
// //   useEffect(() => {
// //     const storedUserInfo = localStorage.getItem('user');
// //     const userRole = localStorage.getItem('userRole');

// //     if (storedUserInfo && userRole === 'official') {
// //       setUserInfo(JSON.parse(storedUserInfo));
// //     } else {
// //       navigate('/login');
// //     }
// //   }, [navigate]);

// //   // Data fetching logic from your "new" code
// //   useEffect(() => {
// //     if (userInfo) { // Only fetch data if the user is authenticated
// //       fetchNotifications();
// //       fetchPetitions();
// //       fetchPolls();
// //       fetchStats();
// //       fetchEngagement();
// //     }
// //   }, [userInfo]); // Dependency on userInfo ensures this runs after login check

// //   const fetchNotifications = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/dashboard/notifications');
// //       const data = await response.json();
// //       setNotifications(Array.isArray(data) ? data : []);
// //     } catch (err) {
// //       console.error('Failed to fetch notifications:', err);
// //     }
// //   };

// //   const fetchPetitions = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/petitions');
// //       const data = await response.json();
// //       // The API response for petitions is an object `{ petitions: [...] }`
// //       setPetitions(data.petitions && Array.isArray(data.petitions) ? data.petitions : []);
// //     } catch (err) {
// //       console.error('Failed to fetch petitions:', err);
// //     }
// //   };

// //   const fetchPolls = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/polls');
// //       const data = await response.json();
// //       setPolls(Array.isArray(data) ? data : []);
// //     } catch (err) {
// //       console.error('Failed to fetch polls:', err);
// //     }
// //   };

// //   const fetchStats = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/dashboard/summary');
// //       const data = await response.json();
// //       setStats({
// //         petitions: data.petitions || 0,
// //         polls: data.polls || 0,
// //         responseRate: data.responseRate || '0%',
// //         satisfaction: data.satisfaction || 0,
// //       });
// //     } catch (err) {
// //       console.error('Failed to fetch stats:', err);
// //     }
// //   };

// //   const fetchEngagement = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/dashboard/engagement');
// //       const data = await response.json();
// //       setEngagement(data);
// //     } catch (err) {
// //       console.error('Failed to fetch engagement:', err);
// //     }
// //   };

// //   // Handlers and helper functions from both files, combined and cleaned
// //   const handleNavClick = (tab) => setActiveTab(tab);
// //   const handleFilterClick = (filter) => setActiveFilter(filter);
  
// //   const handleSignOut = () => {
// //     localStorage.removeItem('user');
// //     localStorage.removeItem('userRole');
// //     navigate('/');
// //   };

// //   const respondToPetition = (petition) => {
// //     setSelectedPetition(petition);
// //     setShowResponseModal(true);
// //   };
  
// //   const closeResponseModal = () => {
// //     setShowResponseModal(false);
// //     setSelectedPetition(null);
// //     setResponseForm({ message: '', responseStatus: 'under-consideration', estimatedCompletion: '' });
// //   };

// //   const handleFormChange = (e) => {
// //     const { name, value } = e.target;
// //     setResponseForm(prev => ({ ...prev, [name]: value }));
// //   };

// //   const submitResponse = async () => {
// //     if (!selectedPetition || !responseForm.message.trim()) {
// //       alert('Please fill in the response message');
// //       return;
// //     }
// //     setIsSubmitting(true);
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/petitions/${selectedPetition._id}/respond`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           ...responseForm,
// //           respondedBy: userInfo?.fullName || 'Public Official'
// //         })
// //       });
// //       const data = await response.json();
// //       if (data.success) {
// //         alert('Response submitted successfully!');
// //         closeResponseModal();
// //         fetchPetitions();
// //       } else {
// //         alert('Failed to submit response: ' + (data.error || 'Unknown error'));
// //       }
// //     } catch (error) {
// //       console.error('Error submitting response:', error);
// //       alert('Failed to submit response. Please try again.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const getStatusConfig = (status) => {
// //     const configs = {
// //       'pending': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending' },
// //       'under-review': { class: 'bg-blue-100 text-blue-700', text: 'Under Review' },
// //       'responded': { class: 'bg-green-100 text-green-700', text: 'Responded' },
// //     };
// //     return configs[status] || configs['pending'];
// //   };

// //   const getPriorityClass = (priority) => {
// //     const classes = {
// //       'high': 'border-l-4 border-red-500',
// //       'medium': 'border-l-4 border-yellow-500',
// //       'low': 'border-l-4 border-green-500',
// //     };
// //     return classes[priority] || '';
// //   };

// //   if (!userInfo) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
// //         <div className="text-xl font-bold text-green-800">Loading Official Dashboard...</div>
// //       </div>
// //     );
// //   }

// //   const firstName = userInfo?.fullName ? userInfo.fullName.split(' ')[0] : 'Official';

// //   const navigationItems = [
// //     { id: 'dashboard', icon: '🏠', label: 'Dashboard', badge: null },
// //     { id: 'petitions', icon: '📝', label: 'Petitions', badge: petitions.filter(p => p.status === 'pending').length },
// //     { id: 'polls', icon: '📊', label: 'Polls', badge: polls.length },
// //     { id: 'feedback', icon: '💬', label: 'Community Feedback', badge: null },
// //     { id: 'analytics', icon: '📈', label: 'Analytics & Reports', badge: null },
// //     { id: 'announcements', icon: '📢', label: 'Public Announcements', badge: null },
// //     { id: 'engagement', icon: '👥', label: 'Citizen Engagement', badge: null },
// //     { id: 'settings', icon: '⚙️', label: 'Settings', badge: null }
// //   ];

// //   const statCards = [
// //     { title: 'Pending Petitions', value: petitions.filter(p => p.status === 'pending').length, icon: '📝' },
// //     { title: 'Active Polls', value: polls.length, icon: '📊' },
// //     { title: 'Response Rate', value: stats.responseRate, icon: '⚡' },
// //     { title: 'Community Satisfaction', value: `${stats.satisfaction}%`, icon: '👍' }
// //   ];

// //   const renderTabContent = () => {
// //     // This uses the same switch statement from your new code, but now it's populated with live data
// //     // I've simplified it to only show the main "petitions" tab content for brevity,
// //     // but you can copy the other cases from your "new" code as needed.
// //     switch (activeTab) {
// //         case 'dashboard':
// //             return (
// //                 <>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //                         {statCards.map((stat, index) => (
// //                           <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-l-4 border-green-400">
// //                               <div className="flex justify-between items-center mb-4">
// //                                   <span className="text-gray-600 text-sm font-medium">{stat.title}</span>
// //                                   <span className="text-2xl text-green-400">{stat.icon}</span>
// //                               </div>
// //                               <div className="text-3xl font-bold text-green-800">{stat.value}</div>
// //                           </div>
// //                         ))}
// //                     </div>
// //                     {/* You can add the other dashboard sections here */}
// //                 </>
// //             );
// //         case 'petitions':
// //             return (
// //                 <div className="bg-white rounded-2xl p-6 shadow-lg">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-green-800">All Petitions</h2>
// //                     </div>
// //                     <div className="space-y-4">
// //                         {petitions.map((petition) => (
// //                           <div key={petition._id} className={`flex justify-between items-start p-4 border-b border-gray-100 last:border-b-0 ${getPriorityClass(petition.priority)}`}>
// //                             <div className="flex-1">
// //                                 <div className="font-semibold text-green-800 mb-1">{petition.title}</div>
// //                                 <div className="text-xs text-gray-600 mb-2">
// //                                     Submitted by {petition.creator?.fullName || 'Anonymous'} • {petition.signatures?.length || 0} signatures
// //                                 </div>
// //                                 <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusConfig(petition.status).class}`}>
// //                                     {getStatusConfig(petition.status).text}
// //                                 </span>
// //                             </div>
// //                             <button
// //                                 className="ml-4 px-4 py-2 rounded-md text-xs font-semibold"
// //                                 onClick={() => respondToPetition(petition)}
// //                             >
// //                                 Respond
// //                             </button>
// //                           </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             );
// //         // Add other cases for 'polls', 'analytics', etc. here
// //         default:
// //             return <div className="bg-white rounded-2xl p-6 shadow-lg text-center">Content for {activeTab} coming soon...</div>;
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex">
// //         {/* Sidebar from your "old" code */}
// //         <div className="w-80 bg-gradient-to-b from-green-300 to-green-400 p-6 shadow-xl flex flex-col">
// //             <div className="flex items-center mb-8 text-green-800">
// //                 <div className="text-3xl mr-3">🏛️</div>
// //                 <div className="text-2xl font-bold">CIVIX</div>
// //             </div>
// //             <div className="bg-white bg-opacity-30 rounded-xl p-5 mb-8 backdrop-blur-sm">
// //                 <div className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
// //                     VERIFIED OFFICIAL
// //                 </div>
// //                 <div className="text-lg font-bold text-green-800 mb-1">{userInfo?.fullName || 'Official User'}</div>
// //                 <div className="text-green-700 text-sm mb-2">{userInfo?.email || 'No email'}</div>
// //             </div>
// //             <nav className="flex-1">
// //                 {navigationItems.map((item) => (
// //                     <div
// //                         key={item.id}
// //                         className={`flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40 hover:translate-x-1 ${activeTab === item.id ? 'bg-white bg-opacity-50 shadow-md' : ''}`}
// //                         onClick={() => handleNavClick(item.id)}
// //                     >
// //                         <span className="mr-3 text-lg">{item.icon}</span>
// //                         <span className="flex-1">{item.label}</span>
// //                         {item.badge > 0 && (
// //                             <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-2">
// //                                 {item.badge}
// //                             </span>
// //                         )}
// //                     </div>
// //                 ))}
// //             </nav>
// //             <div className="mt-8 pt-5 border-t border-white border-opacity-30">
// //                 <div
// //                     className="flex items-center p-4 m-2 rounded-lg cursor-pointer text-green-800 font-medium hover:bg-white hover:bg-opacity-40"
// //                     onClick={handleSignOut}
// //                 >
// //                     <span className="mr-3 text-lg">🚪</span>
// //                     Sign Out
// //                 </div>
// //             </div>
// //         </div>

// //         {/* Main Content Area */}
// //         <div className="flex-1 p-8 overflow-y-auto">
// //             <h1 className="text-3xl font-bold mb-6 text-green-800">
// //                 {activeTab === 'dashboard' ? `Welcome back, ${firstName}!` : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
// //             </h1>
// //             {renderTabContent()}
// //         </div>
// //       </div>
      
// //       {/* Response Modal from your "new" code */}
// //       {showResponseModal && selectedPetition && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-xl font-bold text-green-800">Respond to Petition</h3>
// //               <button onClick={closeResponseModal} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
// //             </div>
// //             <div className="bg-gray-50 rounded-lg p-4 mb-6">
// //               <h4 className="font-semibold text-green-800 mb-2">{selectedPetition.title}</h4>
// //               <p className="text-gray-700">{selectedPetition.description}</p>
// //             </div>
// //             <div>
// //               <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">Response Message *</label>
// //                 <textarea
// //                   name="message"
// //                   value={responseForm.message}
// //                   onChange={handleFormChange}
// //                   rows={5}
// //                   className="w-full p-3 border border-gray-300 rounded-lg"
// //                 />
// //               </div>
// //               <div className="flex gap-3">
// //                 <button
// //                   type="button"
// //                   onClick={submitResponse}
// //                   disabled={isSubmitting}
// //                   className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400"
// //                 >
// //                   {isSubmitting ? 'Submitting...' : 'Submit Response'}
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={closeResponseModal}
// //                   className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600"
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default OfficialDashboard;


// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OfficialDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [notifications, setNotifications] = useState([]);
//   const [petitions, setPetitions] = useState([]);
//   const [polls, setPolls] = useState([]);
//   const [stats, setStats] = useState({
//     petitions: 0,
//     polls: 0,
//     responseRate: '0%',
//     satisfaction: 0,
//   });
//   const [engagement, setEngagement] = useState({
//     totalInteractions: 0,
//     satisfactionRate: '0%',
//     avgResponseTime: 0,
//   });
//   const [userInfo, setUserInfo] = useState(null);
//   const [showResponseModal, setShowResponseModal] = useState(false);
//   const [selectedPetition, setSelectedPetition] = useState(null);
//   const [responseForm, setResponseForm] = useState({
//     message: '',
//     responseStatus: 'under-consideration',
//     estimatedCompletion: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ----- Poll states -----
//   const [showPollModal, setShowPollModal] = useState(false);
//   const [pollForm, setPollForm] = useState({ question: '', options: ['', ''] });
//   const [isPollSubmitting, setIsPollSubmitting] = useState(false);
//   const [showResultsModal, setShowResultsModal] = useState(false);
//   const [selectedPollResults, setSelectedPollResults] = useState(null);

//   const navigate = useNavigate();

//   // Load user info
//   useEffect(() => {
//     const storedUserInfo = localStorage.getItem('user');
//     const userRole = localStorage.getItem('userRole');

//     if (storedUserInfo && userRole === 'Public Official') {
//       setUserInfo(JSON.parse(storedUserInfo));
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   // Fetch all data
//   useEffect(() => {
//     fetchNotifications();
//     fetchPetitions();
//     fetchPolls();
//     fetchStats();
//     fetchEngagement();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/notifications');
//       const data = await response.json();
//       setNotifications(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch notifications:', err);
//       setNotifications([]);
//     }
//   };

//   const fetchPetitions = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/petitions');
//       const data = await response.json();
//       setPetitions(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch petitions:', err);
//       setPetitions([]);
//     }
//   };

//   const fetchPolls = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/polls');
//       const data = await response.json();
//       setPolls(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch polls:', err);
//       setPolls([]);
//     }
//   };

//   const fetchStats = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/summary');
//       const data = await response.json();
//       setStats({
//         petitions: data.petitions || petitions.length,
//         polls: data.polls || polls.length,
//         responseRate: data.responseRate || '0%',
//         satisfaction: data.satisfaction || 0,
//       });
//     } catch (err) {
//       console.error('Failed to fetch stats:', err);
//     }
//   };

//   const fetchEngagement = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/engagement');
//       const data = await response.json();
//       setEngagement(data);
//     } catch (err) {
//       console.error('Failed to fetch engagement:', err);
//     }
//   };

//   const handleNavClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('userRole');
//     navigate('/');
//   };

//   const respondToPetition = (petition) => {
//     setSelectedPetition(petition);
//     setShowResponseModal(true);
//     setResponseForm({
//       message: '',
//       responseStatus: 'under-consideration',
//       estimatedCompletion: ''
//     });
//   };

//   const closeResponseModal = () => {
//     setShowResponseModal(false);
//     setSelectedPetition(null);
//     setResponseForm({
//       message: '',
//       responseStatus: 'under-consideration',
//       estimatedCompletion: ''
//     });
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setResponseForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const submitResponse = async () => {
//     if (!selectedPetition || !responseForm.message.trim()) {
//       alert('Please fill in the response message');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/petitions/${selectedPetition._id}/respond`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...responseForm,
//           respondedBy: userInfo?.name || 'Public Official'
//         })
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         alert('Response submitted successfully!');
//         closeResponseModal();
//         fetchPetitions();
//         fetchStats();
//       } else {
//         alert('Failed to submit response: ' + (data.error || JSON.stringify(data)));
//       }
//     } catch (error) {
//       console.error('Error submitting response:', error);
//       alert('Failed to submit response. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Status and priority helper functions
//   const getStatusConfig = (status) => {
//     const configs = {
//       'pending': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending Review' },
//       'under-review': { class: 'bg-blue-100 text-blue-700', text: 'Under Review' },
//       'responded': { class: 'bg-green-100 text-green-700', text: 'Responded' },
//     };
//     return configs[status] || configs['pending'];
//   };

//   const getPriorityClass = (priority) => {
//     const classes = {
//       'high': 'border-l-4 border-red-500',
//       'medium': 'border-l-4 border-yellow-500',
//       'low': 'border-l-4 border-green-500',
//     };
//     return classes[priority] || '';
//   };

//   // ----- Poll helpers -----
//   const handlePollOptionChange = (idx, value) => {
//     const updated = [...pollForm.options];
//     updated[idx] = value;
//     setPollForm({ ...pollForm, options: updated });
//   };

//   const addPollOption = () => {
//     setPollForm({ ...pollForm, options: [...pollForm.options, ''] });
//   };

//   const submitPoll = async () => {
//     if (!pollForm.question.trim() || pollForm.options.some(opt => !opt.trim())) {
//       alert('Please enter a question and fill all options');
//       return;
//     }

//     setIsPollSubmitting(true);
//     try {
//       const res = await fetch('http://localhost:5000/api/polls', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(pollForm),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         alert('Poll created successfully');
//         setShowPollModal(false);
//         setPollForm({ question: '', options: ['', ''] });
//         fetchPolls();
//         fetchStats();
//       } else {
//         alert(data.error || 'Failed to create poll');
//       }
//     } catch (err) {
//       console.error('Error creating poll:', err);
//       alert('Error creating poll');
//     } finally {
//       setIsPollSubmitting(false);
//     }
//   };

//   const viewResults = async (pollId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/polls/${pollId}`);
//       const data = await res.json();
//       if (res.ok) {
//         setSelectedPollResults(data);
//         setShowResultsModal(true);
//       } else {
//         alert(data.error || 'Failed to fetch poll results');
//       }
//     } catch (err) {
//       console.error('Error fetching poll results:', err);
//       alert('Error fetching poll results');
//     }
//   };

//   const closePoll = async (pollId) => {
//     const ok = window.confirm('Close this poll? This will remove it from Active Polls.');
//     if (!ok) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/polls/${pollId}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message || 'Poll closed');
//         fetchPolls();
//         fetchStats();
//       } else {
//         alert(data.error || 'Failed to close poll');
//       }
//     } catch (err) {
//       console.error('Error closing poll:', err);
//       alert('Error closing poll');
//     }
//   };

//   // Render different content based on active tab
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return (
//           <>
//             {/* Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
//                 <div className="text-gray-600 text-sm">Pending Petitions</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.petitions}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-400">
//                 <div className="text-gray-600 text-sm">Active Polls</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.polls}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-400">
//                 <div className="text-gray-600 text-sm">Response Rate</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.responseRate}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400">
//                 <div className="text-gray-600 text-sm">Community Satisfaction</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.satisfaction}</div>
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//               {/* Recent Petitions */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-bold text-green-800 mb-4">Recent Petitions</h2>
//                 <div className="space-y-3">
//                   {petitions.slice(0, 5).map((petition) => (
//                     <div key={petition._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                       <div>
//                         <div className="font-medium text-green-800">{petition.title}</div>
//                         <div className="text-xs text-gray-500">{petition.signatures || 0} signatures</div>
//                       </div>
//                       <span className={`px-2 py-1 rounded-full text-xs ${getStatusConfig(petition.status).class}`}>
//                         {getStatusConfig(petition.status).text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Community Engagement */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-bold text-green-800 mb-4">Community Engagement</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Total Interactions</span>
//                     <span className="font-bold text-green-800">{engagement.totalInteractions}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Satisfaction Rate</span>
//                     <span className="font-bold text-green-800">{engagement.satisfactionRate}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Avg Response Time</span>
//                     <span className="font-bold text-green-800">{engagement.avgResponseTime} days</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );

//       case 'petitions':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">All Petitions</h2>
//               <div className="flex gap-2">
//                 {['all', 'pending', 'under-review', 'responded'].map((filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setActiveFilter(filter)}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                       activeFilter === filter
//                         ? 'bg-green-800 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-4">
//               {petitions
//                 .filter(petition => activeFilter === 'all' || petition.status === activeFilter)
//                 .map((petition) => {
//                   const statusConfig = getStatusConfig(petition.status);
//                   return (
//                     <div key={petition._1d} className={`flex justify-between items-start p-4 border border-gray-200 rounded-lg ${getPriorityClass(petition.priority)}`}>
//                       <div className="flex-1">
//                         <div className="font-semibold text-green-800 mb-1">{petition.title}</div>
//                         <div className="text-sm text-gray-600 mb-2">
//                           Submitted by {petition.createdBy} • {petition.signatures || 0} signatures
//                         </div>
//                         <div className="text-sm text-gray-700 mb-3">
//                           {petition.description && petition.description.substring(0, 150)}...
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusConfig.class}`}>
//                             {statusConfig.text}
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             Created: {new Date(petition.createdAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                       </div>
//                       <button
//                         className={`ml-4 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
//                           petition.status === 'responded'
//                             ? 'bg-gray-500 text-white cursor-not-allowed'
//                             : 'bg-green-800 text-white hover:bg-green-700'
//                         }`}
//                         onClick={() => petition.status !== 'responded' && respondToPetition(petition)}
//                         disabled={petition.status === 'responded'}
//                       >
//                         {petition.status === 'responded' ? 'Responded' : 'Respond'}
//                       </button>
//                     </div>
//                   );
//                 })}
//               {petitions.filter(petition => activeFilter === 'all' || petition.status === activeFilter).length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                   No petitions found for the selected filter.
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'polls':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">Polls Management</h2>
//               <button
//                 className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 onClick={() => setShowPollModal(true)}
//               >
//                 Create New Poll
//               </button>
//             </div>
//             <div className="space-y-4">
//               {polls.length > 0 ? polls.map((poll) => (
//                 <div key={poll._id} className="p-4 border border-gray-200 rounded-lg">
//                   <div className="font-semibold text-green-800 mb-2">{poll.question || poll.title}</div>
//                   {poll.description && <div className="text-sm text-gray-600 mb-2">{poll.description}</div>}
//                   <div className="space-y-1 mb-2">
//                     {Array.isArray(poll.options) && poll.options.map((opt, idx) => (
//                       <div key={idx} className="flex justify-between text-sm text-gray-600">
//                         <span>{opt.text}</span>
//                         <span>{opt.votes ?? 0} votes</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">
//                       Created: {poll.createdAt ? new Date(poll.createdAt).toLocaleDateString() : '—'}
//                     </span>
//                     <div className="flex gap-2">
//                       <button onClick={() => viewResults(poll._id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">View Results</button>
//                       <button onClick={() => closePoll(poll._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Close Poll</button>
//                     </div>
//                   </div>
//                 </div>
//               )) : (
//                 <div className="text-center py-8 text-gray-500">
//                   No polls created yet. Create your first poll to get started!
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'feedback':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Community Feedback</h2>
//             <div className="text-center py-8 text-gray-500">
//               Feedback management system coming soon...
//             </div>
//           </div>
//         );

//       case 'analytics':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Analytics Dashboard</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="p-4 bg-blue-50 rounded-lg">
//                 <div className="text-2xl font-bold text-blue-800">{petitions.length}</div>
//                 <div className="text-sm text-gray-600">Total Petitions</div>
//               </div>
//               <div className="p-4 bg-green-50 rounded-lg">
//                 <div className="text-2xl font-bold text-green-800">
//                   {petitions.filter(p => p.status === 'responded').length}
//                 </div>
//                 <div className="text-sm text-gray-600">Responded Petitions</div>
//               </div>
//               <div className="p-4 bg-yellow-50 rounded-lg">
//                 <div className="text-2xl font-bold text-yellow-800">
//                   {petitions.filter(p => p.status === 'pending').length}
//                 </div>
//                 <div className="text-sm text-gray-600">Pending Petitions</div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'announcements':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">Announcements</h2>
//               <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700">
//                 Create Announcement
//               </button>
//             </div>
//             <div className="space-y-4">
//               {notifications.map((notification, index) => (
//                 <div key={notification._id || index} className="p-4 border border-gray-200 rounded-lg">
//                   <div className="font-medium text-green-800 mb-2">{notification.message}</div>
//                   <div className="text-sm text-gray-500">
//                     {new Date(notification.createdAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               ))}
//               {notifications.length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                   No announcements yet.
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'engagement':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Engagement Metrics</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center p-6 bg-green-50 rounded-lg">
//                 <div className="text-3xl font-bold text-green-800 mb-2">{engagement.totalInteractions}</div>
//                 <div className="text-sm text-gray-600">Total Citizen Interactions</div>
//               </div>
//               <div className="text-center p-6 bg-blue-50 rounded-lg">
//                 <div className="text-3xl font-bold text-blue-800 mb-2">{engagement.satisfactionRate}</div>
//                 <div className="text-sm text-gray-600">Citizen Satisfaction Rate</div>
//               </div>
//               <div className="text-center p-6 bg-purple-50 rounded-lg">
//                 <div className="text-3xl font-bold text-purple-800 mb-2">{engagement.avgResponseTime}</div>
//                 <div className="text-sm text-gray-600">Avg Response Time (days)</div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'settings':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Settings</h2>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-semibold text-green-800 mb-3">Profile Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <input 
//                       type="text" 
//                       value={userInfo?.name || ''} 
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       readOnly 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input 
//                       type="email" 
//                       value={userInfo?.email || ''} 
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       readOnly 
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-green-800 mb-3">Notification Preferences</h3>
//                 <div className="space-y-2">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" defaultChecked />
//                     Email notifications for new petitions
//                   </label>
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" defaultChecked />
//                     SMS alerts for urgent matters
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Content not found</div>;
//     }
//   };

//   if (!userInfo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
//         <div className="text-center">
//           <div className="text-3xl text-green-800 mb-4">🏛️</div>
//           <div className="text-xl font-bold text-green-800">Loading Official Dashboard...</div>
//         </div>
//       </div>
//     );
//   }

//   const firstName = userInfo?.name ? userInfo.name.split(' ')[0] : 'Official';

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex">
//         {/* Sidebar */}
//         <div className="w-80 bg-gradient-to-b from-green-300 to-green-400 p-6 shadow-xl flex flex-col">
//           {/* Logo */}
//           <div className="flex items-center mb-8 text-green-800">
//             <div className="text-3xl mr-3">🏛️</div>
//             <div className="text-2xl font-bold">CIVIX</div>
//           </div>
          
//           {/* Official Profile */}
//           <div className="bg-white bg-opacity-30 rounded-xl p-5 mb-8 backdrop-blur-sm">
//             <div className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
//               VERIFIED OFFICIAL
//             </div>
//             <div className="text-lg font-bold text-green-800 mb-1">{userInfo?.name}</div>
//             <div className="text-green-700 text-sm mb-2">{userInfo?.email}</div>
//             <div className="text-green-700 text-xs flex items-center">📍 Connected via CIVIX Platform</div>
//           </div>
          
//           {/* Navigation */}
//           <nav className="flex-1">
//             {['dashboard','petitions','polls','feedback','analytics','announcements','engagement','settings'].map((id) => (
//               <div
//                 key={id}
//                 className={`flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40 hover:translate-x-1 ${
//                   activeTab === id ? 'bg-white bg-opacity-50 shadow-md' : ''
//                 }`}
//                 onClick={() => handleNavClick(id)}
//               >
//                 <span className="flex-1">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
//                 {id === 'petitions' && petitions.filter(p => p.status === 'pending').length > 0 && (
//                   <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
//                     {petitions.filter(p => p.status === 'pending').length}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </nav>
          
//           <div className="mt-8 pt-5 border-t border-white border-opacity-30">
//             <div className="flex items-center p-4 m-2 rounded-lg cursor-pointer text-green-800 font-medium hover:bg-white hover:bg-opacity-40" onClick={handleSignOut}>
//               🚪 Sign Out
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-8 overflow-y-auto">
//           <h1 className="text-3xl font-bold mb-6 text-green-800">
//             {activeTab === 'dashboard' ? `Welcome back, ${firstName}!` : 
//              activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//           </h1>

//           {renderTabContent()}
//         </div>
//       </div>

//       {/* Response Modal */}
//       {showResponseModal && selectedPetition && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Respond to Petition</h3>
//               <button 
//                 onClick={closeResponseModal}
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//               >
//                 ×
//               </button>
//             </div>
            
//             {/* Petition Details */}
//             <div className="bg-gray-50 rounded-lg p-4 mb-6">
//               <h4 className="font-semibold text-green-800 mb-2">{selectedPetition.title}</h4>
//               <p className="text-gray-600 text-sm mb-2">Submitted by: {selectedPetition.createdBy}</p>
//               <p className="text-gray-700">{selectedPetition.description}</p>
//             </div>

//             {/* Response Form */}
//             <div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Response Status
//                 </label>
//                 <select
//                   name="responseStatus"
//                   value={responseForm.responseStatus}
//                   onChange={handleFormChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 >
//                   <option value="under-consideration">Under Consideration</option>
//                   <option value="approved">Approved</option>
//                   <option value="rejected">Rejected</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Response Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={responseForm.message}
//                   onChange={handleFormChange}
//                   rows={5}
//                   placeholder="Provide a detailed response to the citizen's petition..."
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Estimated Completion Date (Optional)
//                 </label>
//                 <input
//                   type="date"
//                   name="estimatedCompletion"
//                   value={responseForm.estimatedCompletion}
//                   onChange={handleFormChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   onClick={submitResponse}
//                   disabled={isSubmitting}
//                   className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit Response'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeResponseModal}
//                   className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Poll Modal */}
//       {showPollModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Create New Poll</h3>
//               <button onClick={() => setShowPollModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
//             </div>

//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Poll question"
//                 value={pollForm.question}
//                 onChange={(e) => setPollForm({ ...pollForm, question: e.target.value })}
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//               />

//               {pollForm.options.map((opt, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={`Option ${idx + 1}`}
//                   value={opt}
//                   onChange={(e) => handlePollOptionChange(idx, e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               ))}

//               <button type="button" onClick={addPollOption} className="text-green-700 text-sm">+ Add Option</button>

//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={submitPoll}
//                   disabled={isPollSubmitting}
//                   className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400"
//                 >
//                   {isPollSubmitting ? 'Creating...' : 'Create Poll'}
//                 </button>
//                 <button onClick={() => setShowPollModal(false)} className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600">
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Poll Results Modal */}
//       {showResultsModal && selectedPollResults && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Poll Results</h3>
//               <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
//             </div>

//             <div className="mb-4">
//               <div className="font-semibold text-green-800 mb-2">{selectedPollResults.question || selectedPollResults.title}</div>
//               <div className="text-sm text-gray-500 mb-3">Created: {selectedPollResults.createdAt ? new Date(selectedPollResults.createdAt).toLocaleDateString() : '—'}</div>

//               <div className="space-y-2">
//                 {Array.isArray(selectedPollResults.options) && selectedPollResults.options.map((opt, i) => (
//                   <div key={i} className="flex justify-between items-center">
//                     <div className="text-sm text-gray-700">{opt.text}</div>
//                     <div className="text-sm font-bold text-green-800">{opt.votes ?? 0} votes</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OfficialDashboard;




// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OfficialDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [notifications, setNotifications] = useState([]);
//   const [petitions, setPetitions] = useState([]);
//   const [polls, setPolls] = useState([]);
//   const [stats, setStats] = useState({
//     petitions: 0,
//     polls: 0,
//     responseRate: '0%',
//     satisfaction: 0,
//   });
//   const [engagement, setEngagement] = useState({
//     totalInteractions: 0,
//     satisfactionRate: '0%',
//     avgResponseTime: 0,
//   });
//   const [userInfo, setUserInfo] = useState(null);
//   const [showResponseModal, setShowResponseModal] = useState(false);
//   const [selectedPetition, setSelectedPetition] = useState(null);
//   const [responseForm, setResponseForm] = useState({
//     message: '',
//     responseStatus: 'under-consideration',
//     estimatedCompletion: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ----- Poll states -----
//   const [showPollModal, setShowPollModal] = useState(false);
//   const [pollForm, setPollForm] = useState({ question: '', options: ['', ''] });
//   const [isPollSubmitting, setIsPollSubmitting] = useState(false);
//   const [showResultsModal, setShowResultsModal] = useState(false);
//   const [selectedPollResults, setSelectedPollResults] = useState(null);

//   const navigate = useNavigate();

//   // Load user info
//   // useEffect(() => {
//   //   const storedUserInfo = localStorage.getItem('userInfo');
//   //   const userRole = localStorage.getItem('userRole');

//   //   if (storedUserInfo && userRole === 'Public Official') {
//   //     setUserInfo(JSON.parse(storedUserInfo));
//   //   } else {
//   //     navigate('/login');
//   //   }
//   // }, [navigate]);
//   useEffect(()=>{

//     // const storedUserInfo = localStorage.getItem('userInfo');
//   const storedUserInfo = localStorage.getItem('user');

//   const userRole = localStorage.getItem('userRole');
//   console.log("OfficialDashboard mount, userInfo:", storedUserInfo, "userRole:", userRole);
//   if (storedUserInfo && userRole === 'official') {
//     setUserInfo(JSON.parse(storedUserInfo));
//   } else {
//     navigate('/login');
//   }
// }, [navigate]); // <-- Only ONE dependency array here!

//   // Fetch all data
//   useEffect(() => {
//     fetchNotifications();
//     fetchPetitions();
//     fetchPolls();
//     fetchStats();
//     fetchEngagement();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/notifications');
//       const data = await response.json();
//       setNotifications(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch notifications:', err);
//       setNotifications([]);
//     }
//   };

//   const fetchPetitions = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/petitions');
//       const data = await response.json();
//       setPetitions(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch petitions:', err);
//       setPetitions([]);
//     }
//   };

//   const fetchPolls = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/polls');
//       const data = await response.json();
//       setPolls(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('Failed to fetch polls:', err);
//       setPolls([]);
//     }
//   };

//   const fetchStats = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/summary');
//       const data = await response.json();
//       setStats({
//         petitions: data.petitions || petitions.length,
//         polls: data.polls || polls.length,
//         responseRate: data.responseRate || '0%',
//         satisfaction: data.satisfaction || 0,
//       });
//     } catch (err) {
//       console.error('Failed to fetch stats:', err);
//     }
//   };

//   const fetchEngagement = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/dashboard/engagement');
//       const data = await response.json();
//       setEngagement(data);
//     } catch (err) {
//       console.error('Failed to fetch engagement:', err);
//     }
//   };

//   const handleNavClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('userRole');
//     navigate('/');
//   };

//   const respondToPetition = (petition) => {
//     setSelectedPetition(petition);
//     setShowResponseModal(true);
//     setResponseForm({
//       message: '',
//       responseStatus: 'under-consideration',
//       estimatedCompletion: ''
//     });
//   };

//   const closeResponseModal = () => {
//     setShowResponseModal(false);
//     setSelectedPetition(null);
//     setResponseForm({
//       message: '',
//       responseStatus: 'under-consideration',
//       estimatedCompletion: ''
//     });
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setResponseForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const submitResponse = async () => {
//     if (!selectedPetition || !responseForm.message.trim()) {
//       alert('Please fill in the response message');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/petitions/${selectedPetition._id}/respond`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...responseForm,
//           respondedBy: userInfo?.name || 'Public Official'
//         })
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         alert('Response submitted successfully!');
//         closeResponseModal();
//         fetchPetitions();
//         fetchStats();
//       } else {
//         alert('Failed to submit response: ' + (data.error || JSON.stringify(data)));
//       }
//     } catch (error) {
//       console.error('Error submitting response:', error);
//       alert('Failed to submit response. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Status and priority helper functions
//   const getStatusConfig = (status) => {
//     const configs = {
//       'pending': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending Review' },
//       'under-review': { class: 'bg-blue-100 text-blue-700', text: 'Under Review' },
//       'responded': { class: 'bg-green-100 text-green-700', text: 'Responded' },
//     };
//     return configs[status] || configs['pending'];
//   };

//   const getPriorityClass = (priority) => {
//     const classes = {
//       'high': 'border-l-4 border-red-500',
//       'medium': 'border-l-4 border-yellow-500',
//       'low': 'border-l-4 border-green-500',
//     };
//     return classes[priority] || '';
//   };

//   // ----- Poll helpers -----
//   const handlePollOptionChange = (idx, value) => {
//     const updated = [...pollForm.options];
//     updated[idx] = value;
//     setPollForm({ ...pollForm, options: updated });
//   };

//   const addPollOption = () => {
//     setPollForm({ ...pollForm, options: [...pollForm.options, ''] });
//   };

//   const submitPoll = async () => {
//     if (!pollForm.question.trim() || pollForm.options.some(opt => !opt.trim())) {
//       alert('Please enter a question and fill all options');
//       return;
//     }

//     setIsPollSubmitting(true);
//     try {
//       const res = await fetch('http://localhost:5000/api/polls', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(pollForm),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         alert('Poll created successfully');
//         setShowPollModal(false);
//         setPollForm({ question: '', options: ['', ''] });
//         fetchPolls();
//         fetchStats();
//       } else {
//         alert(data.error || 'Failed to create poll');
//       }
//     } catch (err) {
//       console.error('Error creating poll:', err);
//       alert('Error creating poll');
//     } finally {
//       setIsPollSubmitting(false);
//     }
//   };

//   const viewResults = async (pollId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/polls/${pollId}`);
//       const data = await res.json();
//       if (res.ok) {
//         setSelectedPollResults(data);
//         setShowResultsModal(true);
//       } else {
//         alert(data.error || 'Failed to fetch poll results');
//       }
//     } catch (err) {
//       console.error('Error fetching poll results:', err);
//       alert('Error fetching poll results');
//     }
//   };

//   const closePoll = async (pollId) => {
//     const ok = window.confirm('Close this poll? This will remove it from Active Polls.');
//     if (!ok) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/polls/${pollId}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message || 'Poll closed');
//         fetchPolls();
//         fetchStats();
//       } else {
//         alert(data.error || 'Failed to close poll');
//       }
//     } catch (err) {
//       console.error('Error closing poll:', err);
//       alert('Error closing poll');
//     }
//   };

//   // Render different content based on active tab
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return (
//           <>
//             {/* Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
//                 <div className="text-gray-600 text-sm">Pending Petitions</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.petitions}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-400">
//                 <div className="text-gray-600 text-sm">Active Polls</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.polls}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-400">
//                 <div className="text-gray-600 text-sm">Response Rate</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.responseRate}</div>
//               </div>
//               <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400">
//                 <div className="text-gray-600 text-sm">Community Satisfaction</div>
//                 <div className="text-3xl font-bold text-green-800">{stats.satisfaction}</div>
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//               {/* Recent Petitions */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-bold text-green-800 mb-4">Recent Petitions</h2>
//                 <div className="space-y-3">
//                   {petitions.slice(0, 5).map((petition) => (
//                     <div key={petition._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                       <div>
//                         <div className="font-medium text-green-800">{petition.title}</div>
//                         <div className="text-xs text-gray-500">{petition.signatures || 0} signatures</div>
//                       </div>
//                       <span className={`px-2 py-1 rounded-full text-xs ${getStatusConfig(petition.status).class}`}>
//                         {getStatusConfig(petition.status).text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Community Engagement */}
//               <div className="bg-white rounded-2xl p-6 shadow-lg">
//                 <h2 className="text-xl font-bold text-green-800 mb-4">Community Engagement</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Total Interactions</span>
//                     <span className="font-bold text-green-800">{engagement.totalInteractions}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Satisfaction Rate</span>
//                     <span className="font-bold text-green-800">{engagement.satisfactionRate}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Avg Response Time</span>
//                     <span className="font-bold text-green-800">{engagement.avgResponseTime} days</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );

//       case 'petitions':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">All Petitions</h2>
//               <div className="flex gap-2">
//                 {['all', 'pending', 'under-review', 'responded'].map((filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setActiveFilter(filter)}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                       activeFilter === filter
//                         ? 'bg-green-800 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-4">
//               {petitions
//                 .filter(petition => activeFilter === 'all' || petition.status === activeFilter)
//                 .map((petition) => {
//                   const statusConfig = getStatusConfig(petition.status);
//                   return (
//                     <div key={petition._1d} className={`flex justify-between items-start p-4 border border-gray-200 rounded-lg ${getPriorityClass(petition.priority)}`}>
//                       <div className="flex-1">
//                         <div className="font-semibold text-green-800 mb-1">{petition.title}</div>
//                         <div className="text-sm text-gray-600 mb-2">
//                           Submitted by {petition.createdBy} • {petition.signatures || 0} signatures
//                         </div>
//                         <div className="text-sm text-gray-700 mb-3">
//                           {petition.description && petition.description.substring(0, 150)}...
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusConfig.class}`}>
//                             {statusConfig.text}
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             Created: {new Date(petition.createdAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                       </div>
//                       <button
//                         className={`ml-4 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
//                           petition.status === 'responded'
//                             ? 'bg-gray-500 text-white cursor-not-allowed'
//                             : 'bg-green-800 text-white hover:bg-green-700'
//                         }`}
//                         onClick={() => petition.status !== 'responded' && respondToPetition(petition)}
//                         disabled={petition.status === 'responded'}
//                       >
//                         {petition.status === 'responded' ? 'Responded' : 'Respond'}
//                       </button>
//                     </div>
//                   );
//                 })}
//               {petitions.filter(petition => activeFilter === 'all' || petition.status === activeFilter).length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                   No petitions found for the selected filter.
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'polls':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">Polls Management</h2>
//               <button
//                 className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 onClick={() => setShowPollModal(true)}
//               >
//                 Create New Poll
//               </button>
//             </div>
//             <div className="space-y-4">
//               {polls.length > 0 ? polls.map((poll) => (
//                 <div key={poll._id} className="p-4 border border-gray-200 rounded-lg">
//                   <div className="font-semibold text-green-800 mb-2">{poll.question || poll.title}</div>
//                   {poll.description && <div className="text-sm text-gray-600 mb-2">{poll.description}</div>}
//                   <div className="space-y-1 mb-2">
//                     {Array.isArray(poll.options) && poll.options.map((opt, idx) => (
//                       <div key={idx} className="flex justify-between text-sm text-gray-600">
//                         <span>{opt.text}</span>
//                         <span>{opt.votes ?? 0} votes</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">
//                       Created: {poll.createdAt ? new Date(poll.createdAt).toLocaleDateString() : '—'}
//                     </span>
//                     <div className="flex gap-2">
//                       <button onClick={() => viewResults(poll._id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">View Results</button>
//                       <button onClick={() => closePoll(poll._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Close Poll</button>
//                     </div>
//                   </div>
//                 </div>
//               )) : (
//                 <div className="text-center py-8 text-gray-500">
//                   No polls created yet. Create your first poll to get started!
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'feedback':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Community Feedback</h2>
//             <div className="text-center py-8 text-gray-500">
//               Feedback management system coming soon...
//             </div>
//           </div>
//         );

//       case 'analytics':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Analytics Dashboard</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="p-4 bg-blue-50 rounded-lg">
//                 <div className="text-2xl font-bold text-blue-800">{petitions.length}</div>
//                 <div className="text-sm text-gray-600">Total Petitions</div>
//               </div>
//               <div className="p-4 bg-green-50 rounded-lg">
//                 <div className="text-2xl font-bold text-green-800">
//                   {petitions.filter(p => p.status === 'responded').length}
//                 </div>
//                 <div className="text-sm text-gray-600">Responded Petitions</div>
//               </div>
//               <div className="p-4 bg-yellow-50 rounded-lg">
//                 <div className="text-2xl font-bold text-yellow-800">
//                   {petitions.filter(p => p.status === 'pending').length}
//                 </div>
//                 <div className="text-sm text-gray-600">Pending Petitions</div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'announcements':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-800">Announcements</h2>
//               <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700">
//                 Create Announcement
//               </button>
//             </div>
//             <div className="space-y-4">
//               {notifications.map((notification, index) => (
//                 <div key={notification._id || index} className="p-4 border border-gray-200 rounded-lg">
//                   <div className="font-medium text-green-800 mb-2">{notification.message}</div>
//                   <div className="text-sm text-gray-500">
//                     {new Date(notification.createdAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               ))}
//               {notifications.length === 0 && (
//                 <div className="text-center py-8 text-gray-500">
//                   No announcements yet.
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'engagement':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Engagement Metrics</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center p-6 bg-green-50 rounded-lg">
//                 <div className="text-3xl font-bold text-green-800 mb-2">{engagement.totalInteractions}</div>
//                 <div className="text-sm text-gray-600">Total Citizen Interactions</div>
//               </div>
//               <div className="text-center p-6 bg-blue-50 rounded-lg">
//                 <div className="text-3xl font-bold text-blue-800 mb-2">{engagement.satisfactionRate}</div>
//                 <div className="text-sm text-gray-600">Citizen Satisfaction Rate</div>
//               </div>
//               <div className="text-center p-6 bg-purple-50 rounded-lg">
//                 <div className="text-3xl font-bold text-purple-800 mb-2">{engagement.avgResponseTime}</div>
//                 <div className="text-sm text-gray-600">Avg Response Time (days)</div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'settings':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <h2 className="text-2xl font-bold text-green-800 mb-6">Settings</h2>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-semibold text-green-800 mb-3">Profile Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <input 
//                       type="text" 
//                       value={userInfo?.name || ''} 
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       readOnly 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input 
//                       type="email" 
//                       value={userInfo?.email || ''} 
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       readOnly 
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-green-800 mb-3">Notification Preferences</h3>
//                 <div className="space-y-2">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" defaultChecked />
//                     Email notifications for new petitions
//                   </label>
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" defaultChecked />
//                     SMS alerts for urgent matters
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Content not found</div>;
//     }
//   };

//   if (!userInfo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
//         <div className="text-center">
//           <div className="text-3xl text-green-800 mb-4">🏛️</div>
//           <div className="text-xl font-bold text-green-800">Loading Official Dashboard...</div>
//         </div>
//       </div>
//     );
//   }

//   const firstName = userInfo?.name ? userInfo.name.split(' ')[0] : 'Official';

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex">
//         {/* Sidebar */}
//         <div className="w-80 bg-gradient-to-b from-green-300 to-green-400 p-6 shadow-xl flex flex-col">
//           {/* Logo */}
//           <div className="flex items-center mb-8 text-green-800">
//             <div className="text-3xl mr-3">🏛️</div>
//             <div className="text-2xl font-bold">CIVIX</div>
//           </div>
          
//           {/* Official Profile */}
//           <div className="bg-white bg-opacity-30 rounded-xl p-5 mb-8 backdrop-blur-sm">
//             <div className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
//               VERIFIED OFFICIAL
//             </div>
//             <div className="text-lg font-bold text-green-800 mb-1">{userInfo?.name}</div>
//             <div className="text-green-700 text-sm mb-2">{userInfo?.email}</div>
//             <div className="text-green-700 text-xs flex items-center">📍 Connected via CIVIX Platform</div>
//           </div>
          
//           {/* Navigation */}
//           <nav className="flex-1">
//             {['dashboard','petitions','polls','feedback','analytics','announcements','engagement','settings'].map((id) => (
//               <div
//                 key={id}
//                 className={`flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40 hover:translate-x-1 ${
//                   activeTab === id ? 'bg-white bg-opacity-50 shadow-md' : ''
//                 }`}
//                 onClick={() => handleNavClick(id)}
//               >
//                 <span className="flex-1">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
//                 {id === 'petitions' && petitions.filter(p => p.status === 'pending').length > 0 && (
//                   <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
//                     {petitions.filter(p => p.status === 'pending').length}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </nav>
          
//           <div className="mt-8 pt-5 border-t border-white border-opacity-30">
//             <div className="flex items-center p-4 m-2 rounded-lg cursor-pointer text-green-800 font-medium hover:bg-white hover:bg-opacity-40" onClick={handleSignOut}>
//               🚪 Sign Out
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-8 overflow-y-auto">
//           <h1 className="text-3xl font-bold mb-6 text-green-800">
//             {activeTab === 'dashboard' ? `Welcome back, ${firstName}!` : 
//              activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//           </h1>

//           {renderTabContent()}
//         </div>
//       </div>

//       {/* Response Modal */}
//       {showResponseModal && selectedPetition && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Respond to Petition</h3>
//               <button 
//                 onClick={closeResponseModal}
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//               >
//                 ×
//               </button>
//             </div>
            
//             {/* Petition Details */}
//             <div className="bg-gray-50 rounded-lg p-4 mb-6">
//               <h4 className="font-semibold text-green-800 mb-2">{selectedPetition.title}</h4>
//               <p className="text-gray-600 text-sm mb-2">Submitted by: {selectedPetition.createdBy}</p>
//               <p className="text-gray-700">{selectedPetition.description}</p>
//             </div>

//             {/* Response Form */}
//             <div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Response Status
//                 </label>
//                 <select
//                   name="responseStatus"
//                   value={responseForm.responseStatus}
//                   onChange={handleFormChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 >
//                   <option value="under-consideration">Under Consideration</option>
//                   <option value="approved">Approved</option>
//                   <option value="rejected">Rejected</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Response Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={responseForm.message}
//                   onChange={handleFormChange}
//                   rows={5}
//                   placeholder="Provide a detailed response to the citizen's petition..."
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Estimated Completion Date (Optional)
//                 </label>
//                 <input
//                   type="date"
//                   name="estimatedCompletion"
//                   value={responseForm.estimatedCompletion}
//                   onChange={handleFormChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   onClick={submitResponse}
//                   disabled={isSubmitting}
//                   className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit Response'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeResponseModal}
//                   className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Poll Modal */}
//       {showPollModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Create New Poll</h3>
//               <button onClick={() => setShowPollModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
//             </div>

//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Poll question"
//                 value={pollForm.question}
//                 onChange={(e) => setPollForm({ ...pollForm, question: e.target.value })}
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//               />

//               {pollForm.options.map((opt, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={`Option ${idx + 1}`}
//                   value={opt}
//                   onChange={(e) => handlePollOptionChange(idx, e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               ))}

//               <button type="button" onClick={addPollOption} className="text-green-700 text-sm">+ Add Option</button>

//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={submitPoll}
//                   disabled={isPollSubmitting}
//                   className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400"
//                 >
//                   {isPollSubmitting ? 'Creating...' : 'Create Poll'}
//                 </button>
//                 <button onClick={() => setShowPollModal(false)} className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600">
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Poll Results Modal */}
//       {showResultsModal && selectedPollResults && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-800">Poll Results</h3>
//               <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
//             </div>

//             <div className="mb-4">
//               <div className="font-semibold text-green-800 mb-2">{selectedPollResults.question || selectedPollResults.title}</div>
//               <div className="text-sm text-gray-500 mb-3">Created: {selectedPollResults.createdAt ? new Date(selectedPollResults.createdAt).toLocaleDateString() : '—'}</div>

//               <div className="space-y-2">
//                 {Array.isArray(selectedPollResults.options) && selectedPollResults.options.map((opt, i) => (
//                   <div key={i} className="flex justify-between items-center">
//                     <div className="text-sm text-gray-700">{opt.text}</div>
//                     <div className="text-sm font-bold text-green-800">{opt.votes ?? 0} votes</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OfficialDashboard;





import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OfficialDashboard = () => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [petitions, setPetitions] = useState([]);
  const [polls, setPolls] = useState([]);
  const [stats, setStats] = useState({
    petitions: 0,
    polls: 0,
    responseRate: '0%',
    satisfaction: 0,
  });
  const [engagement, setEngagement] = useState({
    totalInteractions: 0,
    satisfactionRate: '0%',
    avgResponseTime: 0,
  });
  const [userInfo, setUserInfo] = useState(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedPetition, setSelectedPetition] = useState(null);
  const [responseForm, setResponseForm] = useState({
    message: '',
    responseStatus: 'under-consideration',
    estimatedCompletion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Poll states
  const [showPollModal, setShowPollModal] = useState(false);
  const [pollForm, setPollForm] = useState({ question: '', options: ['', ''] });
  const [isPollSubmitting, setIsPollSubmitting] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [selectedPollResults, setSelectedPollResults] = useState(null);

  const navigate = useNavigate();

  // --- AUTHENTICATION & DATA LOADING ---

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('user');
    const userRole = localStorage.getItem('userRole');

    if (storedUserInfo && userRole === 'official') {
      try {
        setUserInfo(JSON.parse(storedUserInfo));
      } catch (e) {
        console.error("Failed to parse user info from localStorage", e);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (userInfo) {
      fetchNotifications();
      fetchPetitions();
      fetchPolls();
      fetchStats();
      fetchEngagement();
    }
  }, [userInfo]);

  // --- API FETCHING FUNCTIONS ---

  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/dashboard/notifications');
      const data = await response.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
      setNotifications([]);
    }
  };

  const fetchPetitions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/petitions');
      const data = await response.json();
      setPetitions(data.petitions && Array.isArray(data.petitions) ? data.petitions : []);
    } catch (err) {
      console.error('Failed to fetch petitions:', err);
      setPetitions([]);
    }
  };

  const fetchPolls = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/polls');
      const data = await response.json();
      setPolls(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch polls:', err);
      setPolls([]);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/dashboard/summary');
      const data = await response.json();
      setStats({
        petitions: data.petitions || 0,
        polls: data.polls || 0,
        responseRate: data.responseRate || '0%',
        satisfaction: data.satisfaction || 0,
      });
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  const fetchEngagement = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/dashboard/engagement');
      const data = await response.json();
      setEngagement(data);
    } catch (err) {
      console.error('Failed to fetch engagement:', err);
    }
  };

  // --- HANDLERS ---

  const handleNavClick = (tab) => setActiveTab(tab);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    navigate('/');
  };

  const respondToPetition = (petition) => {
    setSelectedPetition(petition);
    setShowResponseModal(true);
    setResponseForm({
        message: '',
        responseStatus: 'under-consideration',
        estimatedCompletion: ''
    });
  };

  const closeResponseModal = () => {
    setShowResponseModal(false);
    setSelectedPetition(null);
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setResponseForm(prev => ({ ...prev, [name]: value }));
  };

  const submitResponse = async () => {
    if (!selectedPetition || !responseForm.message.trim()) {
      alert('Please fill in the response message');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`http://localhost:5000/api/petitions/${selectedPetition._id}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
          ...responseForm,
          respondedBy: userInfo?.fullName || 'Public Official'
        })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Response submitted successfully!');
        closeResponseModal();
        fetchPetitions();
      } else {
        alert('Failed to submit response: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handlePollOptionChange = (idx, value) => {
    const updated = [...pollForm.options];
    updated[idx] = value;
    setPollForm({ ...pollForm, options: updated });
  };
  
  const addPollOption = () => {
    setPollForm({ ...pollForm, options: [...pollForm.options, ''] });
  };

  const submitPoll = async () => {
    if (!pollForm.question.trim() || pollForm.options.some(opt => !opt.trim())) {
      alert('Please enter a question and fill all options');
      return;
    }
    setIsPollSubmitting(true);
    try {
      // FIX: Create a payload that includes the 'title' field, copying it from the question.
      const payload = {
        ...pollForm,
        title: pollForm.question 
      };

      const res = await fetch('http://localhost:5000/api/polls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(payload), // Send the new payload
      });
      const data = await res.json();
      if (res.ok) {
        alert('Poll created successfully');
        setShowPollModal(false);
        setPollForm({ question: '', options: ['', ''] });
        fetchPolls();
      } else {
        alert(data.error || 'Failed to create poll');
      }
    } catch (err) {
      console.error('Error creating poll:', err);
    } finally {
      setIsPollSubmitting(false);
    }
  };
  
  const viewResults = async (pollId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/polls/${pollId}`);
      const data = await res.json();
      if (res.ok) {
        setSelectedPollResults(data);
        setShowResultsModal(true);
      } else {
        alert(data.error || 'Failed to fetch results');
      }
    } catch (err) {
      console.error('Error fetching poll results:', err);
    }
  };

  const closePoll = async (pollId) => {
    if (!window.confirm('Are you sure you want to close this poll?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/polls/${pollId}`, {
         method: 'DELETE',
         headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Poll closed');
        fetchPolls();
      } else {
        alert(data.error || 'Failed to close poll');
      }
    } catch (err) {
      console.error('Error closing poll:', err);
    }
  };

  // --- HELPERS & RENDER LOGIC ---
  const getStatusConfig = (status) => {
    const configs = {
      'pending': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending' },
      'active': { class: 'bg-yellow-100 text-yellow-700', text: 'Pending' },
      'under-review': { class: 'bg-blue-100 text-blue-700', text: 'Under Review' },
      'responded': { class: 'bg-green-100 text-green-700', text: 'Responded' },
    };
    return configs[status] || configs['pending'];
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                    <div className="text-gray-600 text-sm">Total Petitions</div>
                    <div className="text-3xl font-bold text-green-800">{stats.petitions}</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-400">
                    <div className="text-gray-600 text-sm">Active Polls</div>
                    <div className="text-3xl font-bold text-green-800">{stats.polls}</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-400">
                    <div className="text-gray-600 text-sm">Response Rate</div>
                    <div className="text-3xl font-bold text-green-800">{stats.responseRate}</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400">
                    <div className="text-gray-600 text-sm">Community Satisfaction</div>
                    <div className="text-3xl font-bold text-green-800">{stats.satisfaction}%</div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-green-800 mb-4">Recent Petitions</h2>
                    {petitions.slice(0, 5).map(p => (
                        <div key={p._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mb-2">
                            <div>
                                <p className="font-medium text-green-800">{p.title}</p>
                                <p className="text-xs text-gray-500">{p.signatures?.length || 0} signatures</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusConfig(p.status).class}`}>
                                {getStatusConfig(p.status).text}
                            </span>
                        </div>
                    ))}
                </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-green-800 mb-4">Community Engagement</h2>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center"><span className="text-gray-600">Total Interactions</span><span className="font-bold text-green-800">{engagement.totalInteractions}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600">Satisfaction Rate</span><span className="font-bold text-green-800">{engagement.satisfactionRate}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600">Avg Response Time</span><span className="font-bold text-green-800">{engagement.avgResponseTime} days</span></div>
                    </div>
                </div>
            </div>
          </>
        );
      case 'petitions':
        return (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-green-800">All Petitions</h2>
                </div>
                <div className="space-y-4">
                    {petitions.length > 0 ? petitions.map((p) => (
                        <div key={p._id} className="flex justify-between items-start p-4 border-b border-gray-100 last:border-b-0">
                            <div className="flex-1">
                                <div className="font-semibold text-green-800 mb-1">{p.title}</div>
                                <div className="text-xs text-gray-600 mb-2">
                                    Submitted by {p.creator?.fullName || 'Anonymous'} • {p.signatures?.length || 0} signatures
                                </div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusConfig(p.status).class}`}>
                                    {getStatusConfig(p.status).text}
                                </span>
                            </div>
                            <button
                                onClick={() => respondToPetition(p)}
                                disabled={p.status === 'responded'}
                                className="ml-4 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 bg-green-800 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {p.status === 'responded' ? 'Viewed' : 'Respond'}
                            </button>
                        </div>
                    )) : (
                        <div className="text-center py-8 text-gray-500">No petitions found.</div>
                    )}
                </div>
            </div>
        );
      case 'polls':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">Polls Management</h2>
              <button onClick={() => setShowPollModal(true)} className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Create New Poll
              </button>
            </div>
            <div className="space-y-4">
              {polls.length > 0 ? polls.map((poll) => (
                <div key={poll._id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-green-800 mb-2">{poll.question}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Created: {new Date(poll.createdAt).toLocaleDateString()}</span>
                    <div className="flex gap-2">
                      <button onClick={() => viewResults(poll._id)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">View Results</button>
                      <button onClick={() => closePoll(poll._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Close Poll</button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-8 text-gray-500">No polls have been created yet.</div>
              )}
            </div>
          </div>
        );
      default:
        return <div className="text-center p-10 bg-white rounded-lg shadow-md">Content for {activeTab} is coming soon.</div>;
    }
  };

  // --- JSX RENDER ---
  if (!userInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
        <div className="text-xl font-bold text-green-800">Loading Official Dashboard...</div>
      </div>
    );
  }

  const firstName = userInfo?.fullName ? userInfo.fullName.split(' ')[0] : 'Official';
  const navigationItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', badge: null },
    { id: 'petitions', icon: '📝', label: 'Petitions', badge: petitions.filter(p => p.status === 'pending' || p.status === 'active').length },
    { id: 'polls', icon: '📊', label: 'Polls', badge: polls.length },
    { id: 'settings', icon: '⚙️', label: 'Settings', badge: null }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex">
        <div className="w-80 bg-gradient-to-b from-green-300 to-green-400 p-6 shadow-xl flex flex-col">
          <div className="flex items-center mb-8 text-green-800">
            <div className="text-3xl mr-3">🏛️</div>
            <div className="text-2xl font-bold">CIVIX</div>
          </div>
          <div className="bg-white bg-opacity-30 rounded-xl p-5 mb-8 backdrop-blur-sm">
            <div className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">VERIFIED OFFICIAL</div>
            <div className="text-lg font-bold text-green-800 mb-1">{userInfo?.fullName || 'Official User'}</div>
            <div className="text-green-700 text-sm mb-2">{userInfo?.email || 'No email'}</div>
          </div>
          <nav className="flex-1">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center p-4 m-2 rounded-lg cursor-pointer transition-all duration-300 text-green-800 font-medium hover:bg-white hover:bg-opacity-40 hover:translate-x-1 ${activeTab === item.id ? 'bg-white bg-opacity-50 shadow-md' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                {item.badge > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-2">{item.badge}</span>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 pt-5 border-t border-white border-opacity-30">
            <div className="flex items-center p-4 m-2 rounded-lg cursor-pointer text-green-800 font-medium hover:bg-white hover:bg-opacity-40" onClick={handleSignOut}>
              <span className="mr-3 text-lg">🚪</span> Sign Out
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-green-800">
            {activeTab === 'dashboard' ? `Welcome back, ${firstName}!` : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          {renderTabContent()}
        </div>
      </div>

      {/* --- MODALS --- */}
      {showResponseModal && selectedPetition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Respond to Petition</h3>
              <button onClick={closeResponseModal} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">{selectedPetition.title}</h4>
              <p className="text-gray-600 text-sm mb-2">Submitted by: {selectedPetition.creator?.fullName}</p>
              <p className="text-gray-700">{selectedPetition.description}</p>
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Response Status</label>
                <select name="responseStatus" value={responseForm.responseStatus} onChange={handleFormChange} className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="under-consideration">Under Consideration</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Response Message *</label>
                <textarea name="message" value={responseForm.message} onChange={handleFormChange} rows={5} placeholder="Provide a detailed response..." className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={submitResponse} disabled={isSubmitting} className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400">
                  {isSubmitting ? 'Submitting...' : 'Submit Response'}
                </button>
                <button type="button" onClick={closeResponseModal} className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Create New Poll</h3>
              <button onClick={() => setShowPollModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Poll question" value={pollForm.question} onChange={(e) => setPollForm({ ...pollForm, question: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg" />
              {pollForm.options.map((opt, idx) => (
                <input key={idx} type="text" placeholder={`Option ${idx + 1}`} value={opt} onChange={(e) => handlePollOptionChange(idx, e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" />
              ))}
              <button type="button" onClick={addPollOption} className="text-green-700 text-sm">+ Add Option</button>
              <div className="flex gap-3 mt-4">
                <button onClick={submitPoll} disabled={isPollSubmitting} className="flex-1 bg-green-800 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-400">
                  {isPollSubmitting ? 'Creating...' : 'Create Poll'}
                </button>
                <button onClick={() => setShowPollModal(false)} className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResultsModal && selectedPollResults && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Poll Results</h3>
              <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-green-800 mb-2">{selectedPollResults.question}</div>
              <div className="text-sm text-gray-500 mb-3">Created: {new Date(selectedPollResults.createdAt).toLocaleDateString()}</div>
              <div className="space-y-2">
                {Array.isArray(selectedPollResults.options) && selectedPollResults.options.map((opt, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">{opt.option}</div>
                    <div className="text-sm font-bold text-green-800">{opt.votes ?? 0} votes</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => { setShowResultsModal(false); setSelectedPollResults(null); }} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfficialDashboard;