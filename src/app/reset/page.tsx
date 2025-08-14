"use client";

import Link from "next/link";

import React, { useState } from "react";

export default function Forgotpassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
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
          

          <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] shadow-lg  ">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white">
              forgot password
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-white mb-2">
              Enter your email address to reset your
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal text-white">
              password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 
                  focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD]"
                placeholder="Enter your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 
                  focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD]"
                placeholder="Enter your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit button */}
            <Link href="/reset">
              <button
                type="submit"
                className="w-full bg-[#2970FF] hover:bg-[#1F5ECC] 
                  text-white rounded-lg py-2 font-medium transition"
              >
                verify
              </button>
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
