"use client";
import { useState } from "react";
import Link from "next/link";

export default function Portal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* Background Wrapper: Replaces the 'body' styles with a full-screen gradient */
    <div className="min-h-screen w-full flex justify-center items-center p-5 bg-[linear-gradient(135deg,#f80c0c_0%,#b9da02_100%)]">
      
      {/* Login Container: Replaces '.login-container' with Glassmorphism classes */}
      <div className="relative w-full max-w-[450px] bg-white/95 backdrop-blur-[10px] rounded-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.2)] p-10 text-center">
        
        {/* Back Button: Absolute positioned to the top-left of the white box */}
        <Link 
          href="/Home" 
          className="absolute top-5 left-5 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200/50 transition-all z-50 text-gray-600"
          aria-label="Back to home"
        >
          <span className="text-2xl font-bold">←</span>
        </Link>
        
        {/* Header Section */}
        <div className="mb-8">
          <img 
            src="/logo1.jpg" 
            className="block mx-auto rounded-full mb-4" 
            alt="logo" 
            width="100" 
            height="100" 
          />
          <h1 className="text-[#333] text-3xl font-bold mb-2">Saint Gregory</h1>
          <p className="text-[#666] text-base">College of Science and Technology</p>
        </div>

        {/* Login Form */}
        <form action="/Portal/Dashboard" className="text-left">
          
          {/* Student Number Input */}
          <div className="mb-5">
            <label className="block mb-2 text-[#444] font-semibold text-sm" htmlFor="username">
              Student Number
            </label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-[#2575fc] focus:outline-none focus:ring-4 focus:ring-[#2575fc]/10"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Student Number"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-[#444] font-semibold text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-[#2575fc] focus:outline-none focus:ring-4 focus:ring-[#2575fc]/10"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Show Password Toggle */}
          <div className="flex items-center mb-4 cursor-pointer">
            <input 
              type="checkbox"  
              id="showPassword" 
              className="w-4 h-4 mr-2 cursor-pointer accent-[#2575fc]"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-[#444] text-sm cursor-pointer">
              Show Password
            </label>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="privacyPolicy" 
              className="w-4 h-4 mr-2 cursor-pointer accent-[#2575fc]" 
              required 
            />
            <label htmlFor="privacyPolicy" className="text-[#444] text-sm cursor-pointer leading-tight">
              I agree to the <Link href="#" className="text-[#2575fc] hover:underline">Data Privacy Policy</Link>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full p-4 bg-[linear-gradient(to_right,#6a11cb,#2575fc)] text-white font-bold text-lg rounded-xl shadow-[0_4px_15px_rgba(37,117,252,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,117,252,0.4)] active:translate-y-0"
          >
            Login
          </button>
        </form>

        <Link 
          href="#" 
          className="inline-block mt-6 text-[#2575fc] text-sm hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}