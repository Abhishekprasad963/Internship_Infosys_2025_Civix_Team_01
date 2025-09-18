// // import axios from 'axios';

// // class ApiClient {
// //   constructor() {
// //     this.client = axios.create({
// //       baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
// //       timeout: 10000,
// //       headers: {
// //         'Content-Type': 'application/json',
// //       }
// //     });

// //     this.initializeInterceptors();
// //   }

// //   initializeInterceptors() {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //     }

// //     // Request interceptor
// //     this.client.interceptors.request.use(
// //       (config) => {
// //         console.log("📤 API Request:", {
// //           url: config.url,
// //           method: config.method,
// //           data: config.data,
// //         });
// //         return config;
// //       },
// //       (error) => {
// //         console.error('❌ Request error:', error);
// //         return Promise.reject(error);
// //       }
// //     );

// //     // Response interceptor
// //     this.client.interceptors.response.use(
// //       (response) => {
// //         console.log("✅ API Response:", {
// //           status: response.status,
// //           data: response.data,
// //           url: response.config.url
// //         });
// //         return response;
// //       },
// //       (error) => {
// //         // Enhanced error logging
// //         if (error.response) {
// //           console.error('❌ Server responded with error:', {
// //             status: error.response.status,
// //             data: error.response.data,
// //             url: error.response.config.url
// //           });
// //         } else if (error.request) {
// //           console.error('❌ No response received:', error.request);
// //         } else {
// //           console.error('❌ Request setup error:', error.message);
// //         }

// //         if (error.response?.status === 401) {
// //           this.clearAuth();
// //           window.location.href = '/login';
// //         }

// //         return Promise.reject(error);
// //       }
// //     );
// //   }

// //   clearAuth() {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     localStorage.removeItem('userId');
// //     delete this.client.defaults.headers.common['Authorization'];
// //   }

// //   // ================= Auth methods =================
// //   async login(credentials) {
// //     return this.client.post('/auth/login', credentials);
// //   }

// //   async register(userData) {
// //     return this.client.post('/auth/signup', userData);
// //   }

// //   async getCurrentUser() {
// //     return this.client.get('/auth/me');
// //   }

// //   // ================= Auth Helpers =================
// //   setAuthToken(token) {
// //     localStorage.setItem('token', token);
// //     this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //   }

// //   removeAuthToken() {
// //     this.clearAuth();
// //   }

// //   isAuthenticated() {
// //     return !!localStorage.getItem('token');
// //   }

// //   getStoredUser() {
// //     const userData = localStorage.getItem('user');
// //     return userData ? JSON.parse(userData) : null;
// //   }
// // }

// // export const API = new ApiClient();
// // export default API;


// import axios from 'axios';

// class ApiClient {
//   constructor() {
//     this.client = axios.create({
//       baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     this.initializeInterceptors();
//   }

//   initializeInterceptors() {
//     const token = localStorage.getItem('token');
//     if (token) {
//       this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }

//     // Request interceptor
//     this.client.interceptors.request.use(
//       (config) => {
//         console.log("📤 API Request:", {
//           url: config.url,
//           method: config.method,
//           data: config.data,
//         });
//         return config;
//       },
//       (error) => {
//         console.error('❌ Request error:', error);
//         return Promise.reject(error);
//       }
//     );

//     // Response interceptor
//     this.client.interceptors.response.use(
//       (response) => {
//         console.log("✅ API Response:", {
//           status: response.status,
//           data: response.data,
//           url: response.config.url
//         });
//         return response;
//       },
//       (error) => {
//         // Enhanced error logging
//         if (error.response) {
//           console.error('❌ Server responded with error:', {
//             status: error.response.status,
//             data: error.response.data,
//             url: error.response.config.url
//           });
//         } else if (error.request) {
//           console.error('❌ No response received:', error.request);
//           console.error('⚠️ Check if backend server is running on port 5000');
//         } else {
//           console.error('❌ Request setup error:', error.message);
//         }

//         if (error.response?.status === 401) {
//           this.clearAuth();
//           window.location.href = '/login';
//         }

//         return Promise.reject(error);
//       }
//     );
//   }

//   clearAuth() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('userId');
//     delete this.client.defaults.headers.common['Authorization'];
//   }

//   // ================= Auth methods =================
//   async login(credentials) {
//     return this.client.post('/auth/login', credentials);
//   }

//   async register(userData) {
//     return this.client.post('/auth/signup', userData);
//   }

//   async getCurrentUser() {
//     return this.client.get('/auth/me');
//   }

//   // ================= Petition methods =================
//   async getPetitions(params = {}) {
//     return this.client.get('/petitions', { params });
//   }

//   async getPetition(id) {
//     return this.client.get(`/petitions/${id}`);
//   }

//   async createPetition(petitionData) {
//     return this.client.post('/petitions', petitionData);
//   }

//   async updatePetition(id, updates) {
//     return this.client.patch(`/petitions/${id}`, updates);
//   }

//   async signPetition(id) {
//     return this.client.post(`/petitions/${id}/sign`);
//   }

//   async deletePetition(id) {
//     return this.client.delete(`/petitions/${id}`);
//   }

//   // ================= Dashboard methods =================
//   async getDashboardStats() {
//     return this.client.get('/dashboard/stats');
//   }

//   async getRecentPetitions() {
//     return this.client.get('/dashboard/recent');
//   }

//   async getMyPetitions() {
//     return this.client.get('/user/my-petitions');
//   }

//   async getSignedPetitions() {
//     return this.client.get('/user/signed-petitions');
//   }

//   // ================= Auth Helpers =================
//   setAuthToken(token) {
//     localStorage.setItem('token', token);
//     this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }

//   removeAuthToken() {
//     this.clearAuth();
//   }

//   isAuthenticated() {
//     return !!localStorage.getItem('token');
//   }

//   getStoredUser() {
//     const userData = localStorage.getItem('user');
//     return userData ? JSON.parse(userData) : null;
//   }
// }

// export const API = new ApiClient();
// export default API;








import axios from "axios";

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeInterceptors();
  }

  initializeInterceptors() {
    // ✅ Always check token from localStorage before each request
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("📤 API Request:", {
          url: config.url,
          method: config.method,
          data: config.data,
        });
        return config;
      },
      (error) => {
        console.error("❌ Request error:", error);
        return Promise.reject(error);
      }
    );

    // ✅ Response interceptor with global error handling
    this.client.interceptors.response.use(
      (response) => {
        console.log("✅ API Response:", {
          status: response.status,
          data: response.data,
          url: response.config.url,
        });
        return response;
      },
      (error) => {
        if (error.response) {
          console.error("❌ Server responded with error:", {
            status: error.response.status,
            data: error.response.data,
            url: error.response.config.url,
          });
        } else if (error.request) {
          console.error("❌ No response received:", error.request);
          console.error("⚠️ Check if backend server is running on port 5000");
        } else {
          console.error("❌ Request setup error:", error.message);
        }

        // Auto-logout on 401 Unauthorized
        if (error.response?.status === 401) {
          this.clearAuth();
          window.location.href = "/login";
        }

        return Promise.reject(error);
      }
    );
  }

  clearAuth() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    delete this.client.defaults.headers.common["Authorization"];
  }

  // ================= Auth methods =================
  async login(credentials) {
    const response = await this.client.post("/auth/login", credentials);
    if (response.data?.token) {
      this.setAuthToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("userId", response.data.user.id);
    }
    return response;
  }

  async register(userData) {
    const response = await this.client.post("/auth/signup", userData);
    if (response.data?.token) {
      this.setAuthToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("userId", response.data.user.id);
    }
    return response;
  }

  async getCurrentUser() {
    return this.client.get("/auth/me");
  }

  // ================= Petition methods =================
  async getPetitions(params = {}) {
    return this.client.get("/petitions", { params });
  }

  async getPetition(id) {
    return this.client.get(`/petitions/${id}`);
  }

  async createPetition(petitionData) {
    const res = await this.client.post("/petitions", petitionData);
    return {
      success: true,
      message: res.data.message || "Petition created successfully",
      data: res.data,
    };
  }

  async updatePetition(id, updates) {
    const res = await this.client.patch(`/petitions/${id}`, updates);
    return {
      success: true,
      message: res.data.message || "Petition updated successfully",
      data: res.data,
    };
  }

  async signPetition(id) {
    const res = await this.client.post(`/petitions/${id}/sign`);
    return {
      success: true,
      message: res.data.message || "Petition signed successfully",
      data: res.data,
    };
  }

  async deletePetition(id) {
    const res = await this.client.delete(`/petitions/${id}`);
    return {
      success: true,
      message: res.data.message || "Petition deleted successfully",
      data: res.data,
    };
  }

  // ================= Dashboard methods =================
  async getDashboardStats() {
    return this.client.get("/dashboard/stats");
  }

  async getRecentPetitions() {
    return this.client.get("/dashboard/recent");
  }

  async getMyPetitions() {
    return this.client.get("/user/my-petitions");
  }

  async getSignedPetitions() {
    return this.client.get("/user/signed-petitions");
  }

  // ================= Auth Helpers =================
  setAuthToken(token) {
    localStorage.setItem("token", token);
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  removeAuthToken() {
    this.clearAuth();
  }

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }

  getStoredUser() {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  }
}

export const API = new ApiClient();
export default API;
