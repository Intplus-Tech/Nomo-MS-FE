"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main
      className="h-screen flex flex-col md:flex-row items-center justify-between 
      max-w-[1440px] mx-auto p-6 sm:p-10 md:p-[60px] 
      bg-[#1B1B1B] bg-[url('/vectorstroke.png')] bg-no-repeat bg-center bg-cover overflow-hidden"
    >
      {/* Wrapper for back link + section */}
      <div className="w-full max-w-[575px] sm:w-[575px] mx-auto">
        {/* Back navigation */}
        <Link
          href="/"
          className="flex items-center text-white hover:text-[#2970FF] transition mb-4"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium ml-1">Back</span>
        </Link>

        {/* Section */}
        <section
          className="gap-[5px] w-full sm:h-[577px] bg-[#2C2C2C] 
            border border-[#ACACAC] rounded-[12px] p-6 sm:p-8 md:p-12 flex flex-col lg:h-[477px]"
        >
          <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] shadow-lg">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white">
              Reset password
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-[#BDBDBD] mb-2">
              Create a new password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-10">
            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-[#F5F5F5] mb-1">
                New Password
              </label>
              <div className="relative flex items-center"> 
                <span className="absolute left-3 text-gray-400">
                  <Lock size={20} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 
                    focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD] bg-transparent text-white"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-400"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-[#F5F5F5] mb-1">
                Re-Enter new password
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-400">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 
                    focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD] bg-transparent text-white"
                  placeholder="Enter new password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-400"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2970FF] text-white py-2 rounded-lg hover:bg-[#1f5cd6] transition mt-10"
            >
              Reset Password
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
