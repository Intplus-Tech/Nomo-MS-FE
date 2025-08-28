"use client";

import { ChevronDown } from "lucide-react";

export default function ReferenceMonth() {
  return (
    <div className="flex flex-col w-full h-[95px] max-w-[1134px] mb-2 opacity-100 bg-white mx-auto justify-center">
      <p className="text-[13px] ml-4 sm:ml-10">Reference Month</p>
      <div className="border-2 flex items-center justify-between bg-[#FFFFFF] text-[16px] w-fit ml-4 sm:ml-10 px-3 py-1">
        April 2023
        <ChevronDown className="w-5 h-5 ml-2" />
      </div>
    </div>
  );
}
