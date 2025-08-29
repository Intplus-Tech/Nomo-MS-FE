"use client";

import { Button } from "./ui/button";

export default function DevelopBox() {
  return (
    <section>
      {/* development */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center justify-between py-2 px-4">

        {/* Checkbox group */}
        <div className="flex flex-wrap items-center gap-4 border border-gray-400 w-full sm:w-[450px] min-h-[40px] p-2 justify-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm sm:text-base">Development</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm sm:text-base">Design</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm sm:text-base">Research</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm sm:text-base">Marketing</p>
          </div>
        </div>

        {/* Button */}
        <Button
          className="w-full sm:w-[120px] h-[36px] bg-[#2970FF] text-white rounded-[5px] flex items-center justify-center"
        >
          Add items
        </Button>
      </div>
    </section>
  );
}
