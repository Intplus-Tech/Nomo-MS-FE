"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

export default function ClientDetails() {
  return (
    <div className="w-full h-auto bg-white rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <div className="w-full border-2 min-h-[32px] border-blue-500 flex items-center justify-center rounded-lg px-2 text-center">
        <p className="text-sm sm:text-base">Use client details from the previous invoice</p>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          placeholder="Company Name"
          className="w-full sm:flex-1 min-h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
        />
        <div className="relative w-full sm:flex-1">
          <input
            type="text"
            placeholder="Client Location"
            className="w-full min-h-[44px] border border-[#E6EAED] rounded-[5px] p-3 pr-8"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col justify-center">
            <ChevronUp className="w-4 h-4 text-blue-500 cursor-pointer" />
            <ChevronDown className="w-4 h-4 text-blue-500 cursor-pointer -mt-1" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full sm:flex-1 min-h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full sm:flex-1 min-h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
        />
      </div>

      {/* Row 3 */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Company Address"
          className="w-full min-h-[44px] border border-[#E6EAED] rounded-[5px] p-3 pr-20"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#F9FAFA] border border-blue-600 text-blue-600 rounded px-3 text-sm h-[28px] sm:h-[24px]"
          type="button"
        >
          Paste
        </button>
      </div>
    </div>
  );
}
