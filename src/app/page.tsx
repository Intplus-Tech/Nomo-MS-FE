"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function SignIn() {
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
      bg-[#1B1B1B] bg-[url('/grouplines.png')] bg-no-repeat bg-center bg-cover overflow-hidden"
    >
      {/* Left Section */}
      <section className="mt-10 md:mt-28 flex flex-col items-start px-4 sm:px-6 md:px-0">
        <div className="w-full  ">
          <div
            className="rounded-lg opacity-100 bg-[#2970FF] 
            flex items-center justify-center h-[70px] w-[87px]">
            <Image
              src="/nomovector.png"
              alt="Vector Nomo"
              width={69}
              height={84}
            />
          </div>

          <h2 className="font-medium text-[50px] sm:text-[65px] md:text-[87px] text-[#2970FF] whitespace-nowrap">
            Nomos OS
          </h2>
          <p className="text-[#BDBDBD] font-custom text-[16px] sm:text-[18px] md:text-[20px] font-normal">
            Enterprise System For All Technology Company
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section
        className="gap-[40px] w-full max-w-[575px] bg-[#2C2C2C] border border-[#ACACAC] 
        rounded-[12px] p-6 sm:p-8 md:p-12 flex flex-col mx-auto md:mt-[px]"
      >
        <div className="w-full max-w-[340px]">
          {/* Header */}
          <h2 className="text-[48px] font-bold font-sfpro text-white inline-block">
            Sign in
          </h2>
          <h2 className="text-3xl font-bold text-white inline-block w-full text-[44px]">
            to your account
          </h2>
          <h3 className="text-[#BDBDBD] text-[20px] font-custom">
            Enter your details to proceed further
          </h3>
        </div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#F5F5F5] mb-1 font-custom">
              Email
            </label>

            <div className="relative">
              {/* Email Icon */}
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              {/* Input with left padding for icon */}
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 
                 focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD]"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F5F5F5] mb-1 font-custom">
              Password
            </label>

            <div className="relative">
              {/* Left lock icon */}
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              {/* Password input */}
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-10 py-2 
                 focus:ring-2 focus:ring-[#2970FF] outline-none placeholder-[#BDBDBD]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Right eye toggle icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex flex-wrap items-center justify-between text-sm gap-2">
            <label className="flex items-center gap-2 text-[#F5F5F5]">
              <input type="checkbox" className="rounded border-white font-custom"/>
              Remember me
            </label>
            <Link
              href="/forgotpassword"
              className="text-[#F5F5F5] hover:underline font-custom"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <Link href="/invoice">
          <button
            type="submit"
            className="w-full bg-[#2970FF] hover:bg-[#1F5ECC] 
            text-white rounded-lg py-2 font-medium transition font-custom"
          >
            Sign in
          </button>
          </Link>
        </form>
      </section>
    </main>
  );
}
