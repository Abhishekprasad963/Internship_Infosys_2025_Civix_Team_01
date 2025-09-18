// // // import bcrypt from "bcryptjs";
// // // import crypto from "crypto";
// // // import dotenv from "dotenv";
// // // import jwt from "jsonwebtoken";
// // // import nodemailer from "nodemailer";
// // // import User from "../models/User.js";

// // // // Load environment variables
// // // dotenv.config();

// // // // Signup Controller
// // // export const signup = async (req, res) => {
// // //   console.log("📩 Signup request received:", req.body);
// // //   try {
// // //     const { fullName, email, password, role } = req.body;
    
// // //     // Add validation for fullName specifically
// // //     if (!fullName || !email || !password) {
// // //       return res.status(400).json({ 
// // //         error: "All fields are required. Please provide full name, email, and password." 
// // //       });
// // //     }

// // //     // Validate email format
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     if (!emailRegex.test(email)) {
// // //       return res.status(400).json({ error: "Please provide a valid email address" });
// // //     }

// // //     // Validate password strength
// // //     if (password.length < 6) {
// // //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// // //     }

// // //     let user = await User.findOne({ email });
// // //     if (user) {
// // //       return res.status(400).json({ error: "User already exists with this email" });
// // //     }

// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     user = new User({ 
// // //       fullName, 
// // //       email, 
// // //       password: hashedPassword, 
// // //       role: role || 'Citizen' // Default to Citizen if not provided
// // //     });
    
// // //     await user.save();
    
// // //     // Generate token
// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET || 'fallback_secret',
// // //       { expiresIn: "1d" }
// // //     );
    
// // //     console.log("✅ User created successfully:", email);
    
// // //     res.json({
// // //       token,
// // //       user: { 
// // //         id: user._id, 
// // //         fullName: user.fullName,
// // //         email: user.email, 
// // //         role: user.role 
// // //       },
// // //     });
// // //   } catch (err) {
// // //     console.error("❌ Signup error:", err);
    
// // //     // Handle duplicate key errors
// // //     if (err.code === 11000) {
// // //       return res.status(400).json({ error: "Email already exists" });
// // //     }
    
// // //     // Handle validation errors
// // //     if (err.name === 'ValidationError') {
// // //       const errors = Object.values(err.errors).map(e => e.message);
// // //       return res.status(400).json({ error: errors.join(', ') });
// // //     }
    
// // //     res.status(500).json({ error: "Server error during registration" });
// // //   }
// // // };

// // // // Login Controller with debug logging
// // // export const login = async (req, res) => {
// // //   console.log("🔑 Login request received:", req.body);
// // //   try {
// // //     const { email, password } = req.body;
// // //     console.log("🔍 Looking for user with email:", email);
    
// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       console.log("❌ User not found for email:", email);
// // //       return res.status(400).json({ error: "Invalid credentials" });
// // //     }

// // //     console.log("🔍 User found, comparing passwords...");
// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) {
// // //       console.log("❌ Password doesn't match");
// // //       return res.status(400).json({ error: "Invalid credentials" });
// // //     }

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET || 'fallback_secret',
// // //       { expiresIn: "1d" }
// // //     );

// // //     console.log("✅ Login successful:", email);
// // //     res.json({
// // //       token,
// // //       user: { 
// // //         id: user._id, 
// // //         fullName: user.fullName,
// // //         email: user.email, 
// // //         role: user.role 
// // //       },
// // //     });
// // //   } catch (err) {
// // //     console.error("❌ Login error:", err);
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Generate OTP
// // // const generateOTP = () => {
// // //   return crypto.randomInt(100000, 999999).toString();
// // // };

// // // // Email transporter setup
// // // const createTransporter = () => {
// // //   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
// // //     throw new Error("Email credentials not configured");
// // //   }

// // //   return nodemailer.createTransport({
// // //     service: 'gmail',
// // //     auth: {
// // //       user: process.env.EMAIL_USER,
// // //       pass: process.env.EMAIL_PASS,
// // //     },
// // //   });
// // // };

// // // // Forgot Password Controller - UPDATED
// // // export const forgotPassword = async (req, res) => {
// // //   console.log("📧 Forgot password request:", req.body);
// // //   try {
// // //     const { email } = req.body;
    
// // //     if (!email) {
// // //       return res.status(400).json({ error: "Email is required" });
// // //     }

// // //     const user = await User.findOne({ email });
    
// // //     // For security, don't reveal if user exists or not
// // //     if (!user) {
// // //       console.log("❌ User not found for email:", email);
// // //       // Still return success to prevent email enumeration
// // //       return res.json({ 
// // //         message: "If this email is registered, you will receive OTP shortly" 
// // //       });
// // //     }

// // //     // Generate OTP and set expiration (10 minutes)
// // //     const otp = generateOTP();
// // //     const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

// // //     user.otp = otp;
// // //     user.otpExpiry = otpExpiry;
// // //     await user.save();

// // //     console.log("📨 OTP generated for:", email, otp);

// // //     // Send email with OTP
// // //     try {
// // //       const transporter = createTransporter();
// // //       await transporter.verify();

// // //       const mailOptions = {
// // //         from: process.env.EMAIL_USER,
// // //         to: email,
// // //         subject: 'Password Reset OTP - CIVIX',
// // //         html: `
// // //           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
// // //             <h2 style="color: #4CAF50;">Password Reset Request</h2>
// // //             <p>Hello ${user.fullName},</p>
// // //             <p>Your OTP for password reset is: <strong style="font-size: 18px; color: #4CAF50;">${otp}</strong></p>
// // //             <p>This OTP will expire in 10 minutes.</p>
// // //             <p>If you didn't request this, please ignore this email.</p>
// // //             <br>
// // //             <p>Best regards,<br>CIVIX Team</p>
// // //           </div>
// // //         `
// // //       };

// // //       await transporter.sendMail(mailOptions);
// // //       console.log("✅ OTP email sent to:", email);
      
// // //       res.json({ 
// // //         message: "OTP sent to email"
// // //       });
// // //     } catch (emailError) {
// // //       console.error("❌ Email sending error:", emailError);
// // //       return res.status(500).json({ 
// // //         error: "Failed to send email. Please try again later." 
// // //       });
// // //     }
// // //   } catch (err) {
// // //     console.error("❌ Forgot password error:", err);
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Reset Password Controller
// // // export const resetPassword = async (req, res) => {
// // //   console.log("🔄 Reset password request:", req.body);
// // //   try {
// // //     const { email, otp, newPassword } = req.body;

// // //     if (!email || !otp || !newPassword) {
// // //       return res.status(400).json({ error: "All fields are required" });
// // //     }

// // //     if (newPassword.length < 6) {
// // //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// // //     }

// // //     const user = await User.findOne({ email });

// // //     if (!user) {
// // //       return res.status(404).json({ error: "User not found" });
// // //     }

// // //     // Check if OTP matches and is not expired
// // //     if (user.otp !== otp) {
// // //       return res.status(400).json({ error: "Invalid OTP" });
// // //     }

// // //     if (user.otpExpiry < new Date()) {
// // //       return res.status(400).json({ error: "OTP has expired" });
// // //     }

// // //     // Hash new password and update user
// // //     const hashedPassword = await bcrypt.hash(newPassword, 10);
// // //     user.password = hashedPassword;
// // //     user.otp = undefined;
// // //     user.otpExpiry = undefined;
// // //     await user.save();

// // //     console.log("✅ Password reset successful for:", email);
// // //     res.json({ message: "Password reset successfully" });
// // //   } catch (err) {
// // //     console.error("❌ Reset password error:", err);
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Verify OTP Controller
// // // export const verifyOtp = async (req, res) => {
// // //   console.log("🔍 Verify OTP request:", req.body);
// // //   try {
// // //     const { email, otp } = req.body;

// // //     if (!email || !otp) {
// // //       return res.status(400).json({ error: "Email and OTP are required" });
// // //     }

// // //     const user = await User.findOne({ email });

// // //     if (!user) {
// // //       return res.status(404).json({ error: "User not found" });
// // //     }

// // //     // Check if OTP matches and is not expired
// // //     if (user.otp !== otp) {
// // //       return res.status(400).json({ error: "Invalid OTP" });
// // //     }

// // //     if (user.otpExpiry < new Date()) {
// // //       return res.status(400).json({ error: "OTP has expired" });
// // //     }

// // //     console.log("✅ OTP verified for:", email);
// // //     res.json({ message: "OTP verified successfully" });
// // //   } catch (err) {
// // //     console.error("❌ Verify OTP error:", err);
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Debug route to check all users
// // // export const debugUsers = async (req, res) => {
// // //   try {
// // //     const users = await User.find({});
// // //     console.log("All users in database:", users);
// // //     res.json({ count: users.length, users });
// // //   } catch (error) {
// // //     console.error("Error fetching users:", error);
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // // Test route for login functionality
// // // export const testLogin = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     console.log("Test login with:", { email, password });
    
// // //     // Test bcrypt
// // //     const testHash = await bcrypt.hash("test123", 10);
// // //     const testMatch = await bcrypt.compare("test123", testHash);
    
// // //     res.json({
// // //       message: "Test successful",
// // //       bcryptWorking: testMatch,
// // //       received: { email, password }
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };



// // // import bcrypt from "bcryptjs";
// // // import crypto from "crypto";
// // // import dotenv from "dotenv";
// // // import jwt from "jsonwebtoken";
// // // import nodemailer from "nodemailer";
// // // import User from "../models/User.js";

// // // dotenv.config();

// // // // Signup Controller
// // // export const signup = async (req, res) => {
// // //   try {
// // //     const { fullName, email, password, role } = req.body;

// // //     // Validate inputs
// // //     if (!fullName || !email || !password) {
// // //       return res.status(400).json({ error: "All fields are required. Please provide full name, email, and password." });
// // //     }
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     if (!emailRegex.test(email)) {
// // //       return res.status(400).json({ error: "Please provide a valid email address" });
// // //     }
// // //     if (password.length < 6) {
// // //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// // //     }

// // //     // ENFORCE correct role casing!
// // //     const safeRole = ((role || "citizen") + "").toLowerCase();
// // //     if (!["citizen", "official"].includes(safeRole)) {
// // //       return res.status(400).json({ error: "Role must be either 'citizen' or 'official'." });
// // //     }

// // //     let user = await User.findOne({ email });
// // //     if (user) {
// // //       return res.status(400).json({ error: "User already exists with this email" });
// // //     }
// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     user = new User({ fullName, email, password: hashedPassword, role: safeRole });
// // //     await user.save();

// // //     // Generate token
// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET || 'fallback_secret',
// // //       { expiresIn: "1d" }
// // //     );

// // //     res.json({
// // //       token,
// // //       user: {
// // //         id: user._id,
// // //         fullName: user.fullName,
// // //         email: user.email,
// // //         role: user.role
// // //       },
// // //     });
// // //   } catch (err) {
// // //     if (err.code === 11000) {
// // //       return res.status(400).json({ error: "Email already exists" });
// // //     }
// // //     if (err.name === 'ValidationError') {
// // //       const errors = Object.values(err.errors).map(e => e.message);
// // //       return res.status(400).json({ error: errors.join(', ') });
// // //     }
// // //     res.status(500).json({ error: "Server error during registration" });
// // //   }
// // // };

// // // // Login Controller
// // // export const login = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.status(400).json({ error: "Invalid credentials" });
// // //     }

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) {
// // //       return res.status(400).json({ error: "Invalid credentials" });
// // //     }

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET || 'fallback_secret',
// // //       { expiresIn: "1d" }
// // //     );

// // //     res.json({
// // //       token,
// // //       user: {
// // //         id: user._id,
// // //         fullName: user.fullName,
// // //         email: user.email,
// // //         role: user.role
// // //       },
// // //     });
// // //   } catch (err) {
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // --- The rest of your forgot/create-OTP/reset-password functions remain unchanged ---

// // // const generateOTP = () => {
// // //   return crypto.randomInt(100000, 999999).toString();
// // // };

// // // const createTransporter = () => {
// // //   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
// // //     throw new Error("Email credentials not configured");
// // //   }
// // //   return nodemailer.createTransport({
// // //     service: 'gmail',
// // //     auth: {
// // //       user: process.env.EMAIL_USER,
// // //       pass: process.env.EMAIL_PASS,
// // //     },
// // //   });
// // // };

// // // export const forgotPassword = async (req, res) => {
// // //   try {
// // //     const { email } = req.body;
// // //     if (!email) {
// // //       return res.status(400).json({ error: "Email is required" });
// // //     }
// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.json({ message: "If this email is registered, you will receive OTP shortly" });
// // //     }
// // //     const otp = generateOTP();
// // //     const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

// // //     user.otp = otp;
// // //     user.otpExpiry = otpExpiry;
// // //     await user.save();

// // //     try {
// // //       const transporter = createTransporter();
// // //       await transporter.verify();
// // //       const mailOptions = {
// // //         from: process.env.EMAIL_USER,
// // //         to: email,
// // //         subject: 'Password Reset OTP - CIVIX',
// // //         html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
// // //                  <h2 style="color: #4CAF50;">Password Reset Request</h2>
// // //                  <p>Hello ${user.fullName},</p>
// // //                  <p>Your OTP for password reset is: <strong style="font-size: 18px; color: #4CAF50;">${otp}</strong></p>
// // //                  <p>This OTP will expire in 10 minutes.</p>
// // //                  <p>If you didn't request this, please ignore this email.</p>
// // //                  <br><p>Best regards,<br>CIVIX Team</p>
// // //                </div>`
// // //       };
// // //       await transporter.sendMail(mailOptions);
// // //       res.json({ message: "OTP sent to email" });
// // //     } catch (emailError) {
// // //       return res.status(500).json({ error: "Failed to send email. Please try again later." });
// // //     }
// // //   } catch (err) {
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Reset Password Controller
// // // export const resetPassword = async (req, res) => {
// // //   try {
// // //     const { email, otp, newPassword } = req.body;
// // //     if (!email || !otp || !newPassword) {
// // //       return res.status(400).json({ error: "All fields are required" });
// // //     }
// // //     if (newPassword.length < 6) {
// // //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// // //     }
// // //     const user = await User.findOne({ email });
// // //     if (!user) return res.status(404).json({ error: "User not found" });
// // //     if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
// // //     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });

// // //     const hashedPassword = await bcrypt.hash(newPassword, 10);
// // //     user.password = hashedPassword;
// // //     user.otp = undefined;
// // //     user.otpExpiry = undefined;
// // //     await user.save();
// // //     res.json({ message: "Password reset successfully" });
// // //   } catch (err) {
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Verify OTP
// // // export const verifyOtp = async (req, res) => {
// // //   try {
// // //     const { email, otp } = req.body;
// // //     if (!email || !otp) {
// // //       return res.status(400).json({ error: "Email and OTP are required" });
// // //     }
// // //     const user = await User.findOne({ email });
// // //     if (!user) return res.status(404).json({ error: "User not found" });
// // //     if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
// // //     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });

// // //     res.json({ message: "OTP verified successfully" });
// // //   } catch (err) {
// // //     res.status(500).json({ error: "Server error" });
// // //   }
// // // };

// // // // Debug route to check all users (dev only)
// // // export const debugUsers = async (req, res) => {
// // //   try {
// // //     const users = await User.find({});
// // //     res.json({ count: users.length, users });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // // Test route for login functionality (dev only)
// // // export const testLogin = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     const testHash = await bcrypt.hash("test123", 10);
// // //     const testMatch = await bcrypt.compare("test123", testHash);
// // //     res.json({
// // //       message: "Test successful",
// // //       bcryptWorking: testMatch,
// // //       received: { email, password }
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };







// // import bcrypt from "bcryptjs";
// // import crypto from "crypto";
// // import dotenv from "dotenv";
// // import jwt from "jsonwebtoken";
// // import nodemailer from "nodemailer";
// // import User from "../models/User.js";

// // dotenv.config();

// // // Signup Controller
// // export const signup = async (req, res) => {
// //   try {
// //     const { fullName, email, password, role } = req.body;

// //     // Validate inputs
// //     if (!fullName || !email || !password) {
// //       return res.status(400).json({ error: "All fields are required. Please provide full name, email, and password." });
// //     }
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       return res.status(400).json({ error: "Please provide a valid email address" });
// //     }
// //     if (password.length < 6) {
// //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// //     }

// //     // ENFORCE correct role casing!
// //     const safeRole = ((role || "citizen") + "").toLowerCase();
// //     if (!["citizen", "official"].includes(safeRole)) {
// //       return res.status(400).json({ error: "Role must be either 'citizen' or 'official'." });
// //     }

// //     let user = await User.findOne({ email });
// //     if (user) {
// //       return res.status(400).json({ error: "User already exists with this email" });
// //     }
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     user = new User({ fullName, email, password: hashedPassword, role: safeRole });
// //     await user.save();

// //     // Generate token
// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET || 'fallback_secret',
// //       { expiresIn: "1d" }
// //     );

// //     res.json({
// //       token,
// //       user: {
// //         id: user._id,
// //         fullName: user.fullName,
// //         email: user.email,
// //         role: user.role
// //       },
// //     });
// //   } catch (err) {
// //     if (err.code === 11000) {
// //       return res.status(400).json({ error: "Email already exists" });
// //     }
// //     if (err.name === 'ValidationError') {
// //       const errors = Object.values(err.errors).map(e => e.message);
// //       return res.status(400).json({ error: errors.join(', ') });
// //     }
// //     res.status(500).json({ error: "Server error during registration" });
// //   }
// // };

// // // Login Controller
// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET || 'fallback_secret',
// //       { expiresIn: "1d" }
// //     );

// //     res.json({
// //       token,
// //       user: {
// //         id: user._id,
// //         fullName: user.fullName,
// //         email: user.email,
// //         role: user.role
// //       },
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // const generateOTP = () => {
// //   return crypto.randomInt(100000, 999999).toString();
// // };

// // const createTransporter = () => {
// //   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
// //     throw new Error("Email credentials not configured");
// //   }
// //   return nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //       user: process.env.EMAIL_USER,
// //       pass: process.env.EMAIL_PASS,
// //     },
// //   });
// // };

// // export const forgotPassword = async (req, res) => {
// //   try {
// //     const { email } = req.body;
// //     if (!email) {
// //       return res.status(400).json({ error: "Email is required" });
// //     }
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.json({ message: "If this email is registered, you will receive OTP shortly" });
// //     }
// //     const otp = generateOTP();
// //     const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

// //     user.otp = otp;
// //     user.otpExpiry = otpExpiry;
// //     await user.save();

// //     try {
// //       const transporter = createTransporter();
// //       await transporter.verify();
// //       const mailOptions = {
// //         from: process.env.EMAIL_USER,
// //         to: email,
// //         subject: 'Password Reset OTP - CIVIX',
// //         html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
// //                  <h2 style="color: #4CAF50;">Password Reset Request</h2>
// //                  <p>Hello ${user.fullName},</p>
// //                  <p>Your OTP for password reset is: <strong style="font-size: 18px; color: #4CAF50;">${otp}</strong></p>
// //                  <p>This OTP will expire in 10 minutes.</p>
// //                  <p>If you didn't request this, please ignore this email.</p>
// //                  <br><p>Best regards,<br>CIVIX Team</p>
// //                </div>`
// //       };
// //       await transporter.sendMail(mailOptions);
// //       res.json({ message: "OTP sent to email" });
// //     } catch (emailError) {
// //       return res.status(500).json({ error: "Failed to send email. Please try again later." });
// //     }
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // export const resetPassword = async (req, res) => {
// //   try {
// //     const { email, otp, newPassword } = req.body;
// //     if (!email || !otp || !newPassword) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }
// //     if (newPassword.length < 6) {
// //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// //     }
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(404).json({ error: "User not found" });
// //     if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
// //     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });

// //     const hashedPassword = await bcrypt.hash(newPassword, 10);
// //     user.password = hashedPassword;
// //     user.otp = undefined;
// //     user.otpExpiry = undefined;
// //     await user.save();
// //     res.json({ message: "Password reset successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // export const verifyOtp = async (req, res) => {
// //   try {
// //     const { email, otp } = req.body;
// //     if (!email || !otp) {
// //       return res.status(400).json({ error: "Email and OTP are required" });
// //     }
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(404).json({ error: "User not found" });
// //     if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
// //     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });

// //     res.json({ message: "OTP verified successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // Debug route to check all users (for development only)
// // export const debugUsers = async (req, res) => {
// //   try {
// //     const users = await User.find({});
// //     res.json({ count: users.length, users });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Test route for login functionality (for development only)
// // export const testLogin = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const testHash = await bcrypt.hash("test123", 10);
// //     const testMatch = await bcrypt.compare("test123", testHash);
// //     res.json({
// //       message: "Test successful",
// //       bcryptWorking: testMatch,
// //       received: { email, password }
// //     });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };






// // authController.js

// // import bcrypt from "bcryptjs";
// // import crypto from "crypto";
// // import dotenv from "dotenv";
// // import jwt from "jsonwebtoken";
// // import nodemailer from "nodemailer";
// // import User from "../models/User.js";

// // dotenv.config();

// // // Signup Controller
// // export const signup = async (req, res) => {
// //   try {
// //     const { fullName, email, password, role } = req.body;
    
// //     // Validation is handled by the model and middleware
    
// //     let user = await User.findOne({ email });
// //     if (user) {
// //       return res.status(400).json({ error: "User already exists with this email" });
// //     }

// //     // FIX: Removed redundant password hashing here. 
// //     // The pre('save') hook in the User model handles it.
// //     user = new User({ 
// //       fullName, 
// //       email, 
// //       password, // Pass plain text password to model
// //       role: role || 'citizen' 
// //     });
    
// //     await user.save();
    
// //     // Generate token
// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET || 'fallback_secret',
// //       { expiresIn: "1d" }
// //     );
    
// //     res.json({
// //       token,
// //       user: { 
// //         id: user._id, 
// //         fullName: user.fullName,
// //         email: user.email, 
// //         role: user.role 
// //       },
// //     });
// //   } catch (err) {
// //     if (err.code === 11000) {
// //       return res.status(400).json({ error: "Email already exists" });
// //     }
// //     if (err.name === 'ValidationError') {
// //       const errors = Object.values(err.errors).map(e => e.message);
// //       return res.status(400).json({ error: errors.join(', ') });
// //     }
// //     res.status(500).json({ error: "Server error during registration" });
// //   }
// // };

// // // Login Controller
// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET || 'fallback_secret',
// //       { expiresIn: "1d" }
// //     );

// //     res.json({
// //       token,
// //       user: { 
// //         id: user._id, 
// //         fullName: user.fullName,
// //         email: user.email, 
// //         role: user.role 
// //       },
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // Generate OTP
// // const generateOTP = () => {
// //   return crypto.randomInt(100000, 999999).toString();
// // };

// // // Email transporter setup
// // const createTransporter = () => {
// //   // IMPORTANT: Set up your .env file with your email credentials
// //   // EMAIL_USER=your_email@gmail.com
// //   // EMAIL_PASS=your_app_password
// //   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
// //     console.error("Email credentials not configured in .env file.");
// //     throw new Error("Email credentials not configured");
// //   }

// //   return nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //       user: process.env.EMAIL_USER,
// //       pass: process.env.EMAIL_PASS,
// //     },
// //   });
// // };

// // // Forgot Password Controller
// // export const forgotPassword = async (req, res) => {
// //   try {
// //     const { email } = req.body;
    
// //     if (!email) {
// //       return res.status(400).json({ error: "Email is required" });
// //     }

// //     const user = await User.findOne({ email });
    
// //     if (!user) {
// //       return res.json({ message: "If this email is registered, you will receive OTP shortly" });
// //     }

// //     const otp = generateOTP();
// //     const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

// //     user.otp = otp;
// //     user.otpExpiry = otpExpiry;
// //     await user.save();

// //     try {
// //       const transporter = createTransporter();
// //       await transporter.verify();

// //       const mailOptions = {
// //         from: process.env.EMAIL_USER,
// //         to: email,
// //         subject: 'Password Reset OTP - CIVIX',
// //         html: `
// //           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
// //             <h2 style="color: #4CAF50;">Password Reset Request</h2>
// //             <p>Hello ${user.fullName},</p>
// //             <p>Your OTP for password reset is: <strong style="font-size: 18px; color: #4CAF50;">${otp}</strong></p>
// //             <p>This OTP will expire in 10 minutes.</p>
// //             <p>If you didn't request this, please ignore this email.</p>
// //             <br>
// //             <p>Best regards,<br>CIVIX Team</p>
// //           </div>
// //         `
// //       };

// //       await transporter.sendMail(mailOptions);
      
// //       res.json({ message: "OTP sent to email" });
// //     } catch (emailError) {
// //       console.error("❌ Email sending error:", emailError);
// //       return res.status(500).json({ error: "Failed to send email. Please try again later." });
// //     }
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // Reset Password Controller
// // export const resetPassword = async (req, res) => {
// //   try {
// //     const { email, otp, newPassword } = req.body;

// //     if (!email || !otp || !newPassword) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     if (newPassword.length < 6) {
// //       return res.status(400).json({ error: "Password must be at least 6 characters" });
// //     }

// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(404).json({ error: "User not found" });
// //     }

// //     if (user.otp !== otp) {
// //       return res.status(400).json({ error: "Invalid OTP" });
// //     }

// //     if (user.otpExpiry < new Date()) {
// //       return res.status(400).json({ error: "OTP has expired" });
// //     }

// //     const hashedPassword = await bcrypt.hash(newPassword, 10);
// //     user.password = hashedPassword;
// //     user.otp = undefined;
// //     user.otpExpiry = undefined;
// //     await user.save();

// //     res.json({ message: "Password reset successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // Verify OTP Controller
// // export const verifyOtp = async (req, res) => {
// //   try {
// //     const { email, otp } = req.body;

// //     if (!email || !otp) {
// //       return res.status(400).json({ error: "Email and OTP are required" });
// //     }

// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(404).json({ error: "User not found" });
// //     }

// //     if (user.otp !== otp) {
// //       return res.status(400).json({ error: "Invalid OTP" });
// //     }

// //     if (user.otpExpiry < new Date()) {
// //       return res.status(400).json({ error: "OTP has expired" });
// //     }

// //     res.json({ message: "OTP verified successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // // Debug route to check all users (for development only)
// // export const debugUsers = async (req, res) => {
// //   try {
// //     const users = await User.find({});
// //     res.json({ count: users.length, users });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Test route for login functionality (for development only)
// // export const testLogin = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const testHash = await bcrypt.hash("test123", 10);
// //     const testMatch = await bcrypt.compare("test123", testHash);
// //     res.json({
// //       message: "Test successful",
// //       bcryptWorking: testMatch,
// //       received: { email, password }
// //     });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };




import bcrypt from "bcryptjs";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "../models/User.js";

dotenv.config();

// ======================
// Signup Controller
// ======================
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists with this email" });
    }

    // Don't hash here — User.js pre-save hook does it
    user = new User({
      fullName,
      email,
      password,
      role: (role || "citizen").toLowerCase()
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors.join(", ") });
    }
    res.status(500).json({ error: "Server error during registration" });
  }
};

// ======================
// Login Controller
// ======================
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET || "fallback_secret",
//       { expiresIn: "1d" }
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};



// ======================
// Helpers
// ======================
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials not configured in .env");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
};

// ======================
// Forgot Password
// ======================
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) {
      // Always return generic response (avoid user enumeration)
      return res.json({ message: "If this email is registered, you will receive OTP shortly" });
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins
    await user.save();

    try {
      const transporter = createTransporter();
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset OTP - CIVIX",
        html: `
          <h2>Password Reset Request</h2>
          <p>Hello ${user.fullName},</p>
          <p>Your OTP for password reset is:
            <strong style="font-size: 18px; color: #4CAF50;">${otp}</strong>
          </p>
          <p>This OTP will expire in 10 minutes.</p>
          <p>If you didn’t request this, please ignore this email.</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.json({ message: "OTP sent to email" });
    } catch (emailError) {
      console.error("❌ Email sending error:", emailError);
      res.status(500).json({ error: "Failed to send OTP email" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ======================
// Verify OTP
// ======================
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
    if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP expired" });

    res.json({ message: "OTP verified successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ======================
// Reset Password
// ======================
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
    if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP expired" });

    // Assign plain new password → model pre-save will hash
    user.password = newPassword;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ======================
// Debug (dev only)
// ======================
export const debugUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ count: users.length, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const testLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const testHash = await bcrypt.hash("test123", 10);
    const testMatch = await bcrypt.compare("test123", testHash);
    res.json({
      message: "Test successful",
      bcryptWorking: testMatch,
      received: { email, password }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};







// import bcrypt from "bcryptjs";
// import crypto from "crypto";
// import jwt from "jsonwebtoken";
// import nodemailer from "nodemailer";
// import User from "../models/User.js";

// // Helper function to generate a random 6-digit OTP
// const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// // ======================
// // Signup Controller
// // ======================
// export const signup = async (req, res) => {
//   try {
//     const { fullName, email, password, role } = req.body;

//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ error: "User already exists with this email" });
//     }

//     // The User.js pre-save hook handles password hashing
//     user = new User({
//       fullName,
//       email,
//       password,
//       role: (role || "citizen").toLowerCase()
//     });

//     await user.save();

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET || "fallback_secret",
//       { expiresIn: "1d" }
//     );

//     res.json({ token, user });
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).json({ error: "Email already exists" });
//     }
//     res.status(500).json({ error: "Server error during registration" });
//   }
// };

// // ======================
// // Login Controller
// // ======================
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email }).select('+password');
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET || "fallback_secret",
//       { expiresIn: "1d" }
//     );

//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ======================
// // Forgot Password
// // ======================
// export const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) {
//       return res.status(400).json({ error: "Email is required" });
//     }

//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       console.error('FATAL: Email credentials are not configured in .env file.');
//       return res.status(500).json({ error: 'Server is not configured for sending emails.' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ message: "If this email is registered, you will receive an OTP." });
//     }

//     const otp = generateOTP();
//     user.otp = await bcrypt.hash(otp, 10);
//     user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins
//     await user.save();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     });

//     await transporter.sendMail({
//       from: `CIVIX <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your Password Reset OTP",
//       html: `<p>Your One-Time Password is: <strong>${otp}</strong>. It expires in 10 minutes.</p>`,
//     });

//     res.json({ message: "OTP sent to email successfully." });
//   } catch (err) {
//     console.error("Error in forgotPassword controller:", err);
//     res.status(500).json({ error: "Server error occurred." });
//   }
// };

// // ======================
// // Verify OTP
// // ======================
// export const verifyOtp = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

//     const user = await User.findOne({ email });
//     if (!user || !user.otp || !user.otpExpiry) {
//       return res.status(400).json({ error: "Invalid request or OTP not generated." });
//     }
//     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });

//     const isMatch = await bcrypt.compare(otp, user.otp);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid OTP" });
//     }

//     res.json({ message: "OTP verified successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ======================
// // Reset Password
// // ======================
// export const resetPassword = async (req, res) => {
//   try {
//     const { email, otp, newPassword } = req.body;
//     if (!email || !otp || !newPassword) return res.status(400).json({ error: "All fields are required" });
//     if (newPassword.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters" });

//     const user = await User.findOne({ email });
//     if (!user || !user.otp || !user.otpExpiry) {
//       return res.status(400).json({ error: "Invalid request or OTP not generated." });
//     }
//     if (user.otpExpiry < new Date()) return res.status(400).json({ error: "OTP has expired" });
    
//     const isMatch = await bcrypt.compare(otp, user.otp);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid OTP" });
//     }

//     user.password = newPassword;
//     user.otp = undefined;
//     user.otpExpiry = undefined;
//     await user.save();

//     res.json({ message: "Password reset successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ======================
// // Debug (dev only)
// // ======================
// export const debugUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json({ count: users.length, users });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };