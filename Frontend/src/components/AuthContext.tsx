// // import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // // @ts-ignore
// // import API from "../api"; // Your ApiClient

// // interface User {
// //   id: string;
// //   fullName: string;
// //   email: string;
// //   role?: string;
// // }

// // interface AuthContextType {
// //   user: User | null;
// //   login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
// //   logout: () => void;
// //   loading: boolean;
// //   isAuthenticated: boolean;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const useAuth = (): AuthContextType => {
// //   const context = useContext(AuthContext);
// //   if (!context) throw new Error("useAuth must be used within an AuthProvider");
// //   return context;
// // };

// // interface AuthProviderProps { children: ReactNode; }

// // export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const userData = localStorage.getItem("user");
// //     if (token && userData) {
// //       try {
// //         setUser(JSON.parse(userData));
// //         API.setAuthToken(token);
// //       } catch {
// //         logout();
// //       }
// //     }
// //     setLoading(false);
// //   }, []);

// //   const login = async (email: string, password: string) => {
// //     try {
// //       const { data } = await API.login({ email, password });
// //       const { token, user: userData } = data;
// //       localStorage.setItem("token", token);
// //       localStorage.setItem("user", JSON.stringify(userData));
// //       localStorage.setItem("userId", userData.id);
// //       API.setAuthToken(token);
// //       setUser(userData);
// //       navigate("/dashboard", { replace: true });
// //       return { success: true };
// //     } catch (error: any) {
// //       return { success: false, error: error.response?.data?.error || "Login failed" };
// //     }
// //   };

// //   const logout = () => {
// //     API.clearAuth();
// //     setUser(null);
// //     navigate("/login", { replace: true });
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };


// // src/components/AuthContext.tsx

// import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
// // We don't need useNavigate here anymore
// // @ts-ignore
// import API from "../api";

// interface User {
//   id: string;
//   fullName: string;
//   email: string;
//   role?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   // The login function now returns the user data on success
//   login: (email: string, password: string) => Promise<{ success: boolean; error?: string; user?: User }>;
//   logout: () => void;
//   loading: boolean;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };

// interface AuthProviderProps { children: ReactNode; }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
  
//   // This useEffect to initialize the user from localStorage is correct
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
//     if (token && userData) {
//       try {
//         setUser(JSON.parse(userData));
//         API.setAuthToken(token);
//       } catch {
//         // Handle logout if needed
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     try {
//       const { data } = await API.login({ email, password });
//       const { token, user: userData } = data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(userData));
//       localStorage.setItem("userRole", userData.role);
//       API.setAuthToken(token);
//       setUser(userData);
      
//       // ✅ REMOVED: Navigation logic is no longer here.
//       // We return the user data so the LoginPage can decide where to go.
//       return { success: true, user: userData };

//     } catch (error: any) {
//       return { success: false, error: error.response?.data?.error || "Login failed" };
//     }
//   };

//   const logout = () => {
//     // This part should handle navigation after logout
//     const navigate = (window as any).routerNavigate; // A way to access navigate outside component
//     if (navigate) {
//       API.clearAuth();
//       setUser(null);
//       navigate("/login", { replace: true });
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import API from "../api";

// Define the structure for a User object
interface User {
  id: string;
  fullName: string;
  email: string;
  role?: string;
}

// Define the structure for the Auth Context
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string; user?: User }>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the Auth Context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component that wraps your application
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use navigate hook for robust navigation

  // Effect to load user data from localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        API.setAuthToken(token);
      } catch (error) {
        console.error("Failed to parse user data from storage", error);
        // Clear corrupted data if parsing fails
        localStorage.clear();
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const { data } = await API.login({ email, password });
      const { token, user: userData } = data;

      // --- ✅ CRITICAL FIX: Save ALL necessary user info ---
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("userId", userData.id); // This was the missing piece
      localStorage.setItem("userRole", userData.role);

      API.setAuthToken(token);
      setUser(userData);

      // Return user data so the LoginPage can handle navigation
      return { success: true, user: userData };
    } catch (error: any) {
      return { success: false, error: error.response?.data?.error || "Login failed. Please check your credentials." };
    }
  };

  // Logout function
  const logout = () => {
    API.clearAuth();
    // --- ✅ IMPROVEMENT: Clear all auth-related items ---
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    setUser(null);
    // Navigate to the login page after clearing data
    navigate("/login", { replace: true });
  };

  const authContextValue = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
