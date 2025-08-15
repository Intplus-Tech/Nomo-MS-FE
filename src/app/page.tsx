"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main
      className="h-screen flex flex-col md:flex-row items-center justify-between 
      max-w-[1440px] mx-auto p-6 sm:p-10 md:p-[60px] 
      bg-[#1B1B1B] bg-[url('/grouplines.png')] bg-no-repeat bg-center bg-cover overflow-hidden"
    >
      {/* Left Section */}
      <section className="mt-10 md:mt-28 flex flex-col items-start px-4 sm:px-6 md:px-0">
        <div className="w-full max-w-[416px] h-auto gap-3">
          <div
            className="rounded-[14.75px] opacity-100 bg-[#2970FF] 
            w-[97px] sm:w-[110px] h-[80px] flex items-center justify-center"
          >
            <Image
              src="/nomovector.png"
              alt="Vector Nomo"
              width={20}
              height={63}
            />
          </div>
          <h2 className="font-medium text-[50px] sm:text-[65px] md:text-[87px] text-[#2970FF] whitespace-nowrap">
            Nomos OS
          </h2>
          <p className="text-[#ffffff] text-[16px] sm:text-[18px] md:text-[20px] font-normal">
            Enterprise System For All Technology Company
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section
        className="gap-[40px] w-full max-w-[575px] bg-[#2C2C2C] border border-[#ACACAC] 
        rounded-[12px] p-6 sm:p-8 md:p-12 flex flex-col mx-auto md:mt-[px]"
      >
        <div className="w-full max-w-md shadow-lg">
          {/* Header */}
          <h2 className="text-3xl font-bold font-sfpro text-white">Sign in</h2>
          <h2 className="text-3xl font-bold text-white mb-6">
            to your account
          </h2>
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
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 
              focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex flex-wrap items-center justify-between text-sm gap-2">
            <label className="flex items-center gap-2 text-white">
              <input type="checkbox" className="rounded border-white"/>
              Remember me
            </label>
            <Link
              href="/forgotpassword"
              className="text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full bg-[#2970FF] hover:bg-[#1F5ECC] 
            text-white rounded-lg py-2 font-medium transition"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
