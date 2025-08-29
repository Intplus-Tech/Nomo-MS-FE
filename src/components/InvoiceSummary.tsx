"use client";

import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import SecondInvoice from "./SecondInvoice";



export default function InvoiceSummary() {
  

  return (
    <main className="max-w-[1134px] mx-auto  mt-6">
      <section
        className=" w-[175px] h-auto text-[#596D81] opacity-100 flex items-center justify-center rounded font-['Source_Sans_Pro'] font-normal text-[24px] leading-[100%] tracking-[0%] capitalize ">
        Invoice Summary
      </section>
      <section className="flex mt-4">
        
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center gap-6">
          {/* first div */}
          <div className="bg-white w-full lg:w-[789px] h-auto lg:h-[159px] opacity-100 rounded-lg shadow p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left section */}
            <div className="flex-1 space-y-6">
              <p>
                Features billed to proposal: <span className="font-semibold">8</span>
              </p>
              <div>
                <p className="font-medium">Estimated Project Timeline</p>
                <p className="text-[#2970FF] font-bold">16 Weeks</p>
              </div>
            </div>

            {/* Middle inputs */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              {["Priority level", "Project Complexity"].map((ph, i) => (
                <div key={i} className="relative">
                  <input
                    type="text"
                    placeholder={ph}
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full lg:w-[289px] h-[44px]"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col justify-center">
                    <ChevronUp className="w-4 h-4 text-blue-500 cursor-pointer" />
                    <ChevronDown className="w-4 h-4 text-blue-500 cursor-pointer -mt-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right section */}
            <div className="space-y-6">
              <div className="ml-0 lg:ml-11">
                <button className="text-[#2970FF]">Review features</button>
                <div className="w-[109px] h-[1px] bg-[#2970FF]"></div>
              </div>

              <div>
                <p>Estimated Project Cost</p>
                <div className="flex items-end justify-end">
                  <p className="ml-4 font-semibold">₦10,500,080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <SecondInvoice/>

      </section>
    </main>
    
  );
}
