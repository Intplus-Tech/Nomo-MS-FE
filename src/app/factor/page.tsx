
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function SignIn() {
  const [codes, setCodes] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Move to next input
    if (value && index < codes.length - 1) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }

  };

  return (
    <main
      className="h-screen flex flex-col md:flex-row items-center justify-between 
      max-w-[1440px] mx-auto p-6 sm:p-10 md:p-[60px] 
      bg-[#1B1B1B] bg-[url('/vectorstroke.png')] bg-no-repeat bg-center bg-cover overflow-hidden"
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
        rounded-[12px] p-6 sm:p-8 md:p-12 flex flex-col mx-auto"
      >
        <div className="w-full max-w-md shadow-lg">
          {/* Header */}
          <h2 className="text-3xl text-[48px] font-bold text-white">Enter Your</h2>
          <h2 className="text-3xl text-[48px] font-bold text-white mb-2">
          verification code
          </h2>
          <p className="text-base sm:text-lg  lg:text-[20px] font-normal text-white max-w-[317px] ">Enter the code sent to your email</p>
          <p className="text-base sm:text-lg  lg:text-[20px] font-normal text-white mb-2">address. <span className="font-inter font-medium text-[20px] leading-[100%] tracking-[0]">
            chikeobi@gmail.com.
          </span>
 </p>
        </div>
          <div className="space-y-2">
        <div
          className="flex justify-between w-[83px] h-[30px] gap-2"
        >
          {codes.map((code, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={code}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[32px] h-[32px] rounded border border-[#515151] text-center text-lg font-medium outline-none focus:border-black"
            />
          ))}
         
        </div>
          <p className="text-[14px] text-gray-400"> <span>Didn&rsquo;t Received Code?</span><span className="font-inter font-medium text-[14px] leading-[20px] tracking-[0] text-white">Resend</span> (30s)</p>
        </div>

         

          {/* Sign in button */}
          <Link href="#">
          <button
            type="submit"
            className="w-full bg-[#2970FF] hover:bg-[#1F5ECC] 
            text-white rounded-lg py-2 font-medium transition"
          >
            Sign in
          </button>
        </Link>
      </section>
    </main>
  );
}
