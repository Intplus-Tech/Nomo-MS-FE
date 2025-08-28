"use Client";

import { Button } from "./ui/button";


export default function DevelopBox() {
  return (
    <section>
      {/* development */}

      <div className=" flex gap-12 items-center justify-around py-2 pr-10">
      <div className="flex  items-center gap-4 border border-gray-400 w-[450px] h-[30px] p-2 justify-center ml-8">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Development</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Design</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Research</p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Marketing</p>
          </div>
        </div>
        
        <Button
          className="w-[71px] h-[29px]  bg-[#2970FF]  opacity-100 rounded-[5px] 
          gap-[10px] px-[10px] py-[7px]flex items-center justify-centertext-white p-2
      ">
        Add items
        </Button>
      </div>

      


    </section>
   
  
  )
};