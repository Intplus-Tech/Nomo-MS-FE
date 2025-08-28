"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

export default function ClientDetails() {
  return (
    <section className="max-w-[1134px] h-auto lg:h-[400px] opacity-100 bg-white mx-auto">
      <section className="flex flex-col lg:flex-row mt-4 p-5 lg:p-10 gap-6 lg:gap-[6rem]">
        {/* Left */}
        <div className="space-y-7">
          <div className="max-w-[604px] border-2 h-[32px] border-blue-500 flex items-center justify-center rounded-lg">
            <p>Use client details from the previous invoice</p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 max-w-[604px]">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full sm:w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
            />
            <div className="relative w-full sm:w-[302px]">
              <input
                type="text"
                placeholder="Client Location"
                className="w-full h-[44px] border border-[#E6EAED] rounded-[5px] p-3 pr-8"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col justify-center">
                <ChevronUp className="w-4 h-4 text-blue-500 cursor-pointer" />
                <ChevronDown className="w-4 h-4 text-blue-500 cursor-pointer -mt-1" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 max-w-[604px]">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full sm:w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full sm:w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
            />
          </div>

          {/* Row 3 */}
          <div className="max-w-[604px] relative">
            <input
              type="text"
              placeholder="Company Address"
              className="w-full sm:w-[604px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3 pr-20"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#F9FAFA] border border-blue-600 text-blue-600 rounded px-3 text-sm w-[52px] h-[24px]"
              type="button"
            >
              Paste
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
