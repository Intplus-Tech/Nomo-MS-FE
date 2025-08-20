"use client";
import { ChevronDown, ChevronRight, ChevronLeft, Timer } from "lucide-react";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";

export default function Invoicems() {
  return (
    <main className="bg-[#F9FAFA] h-[650px]">
      <section className="h-fit">
        {/* Top Header */}
        <div className="flex w-full max-w-[1134px] mx-auto items-center justify-between pt-4 px-4">
          {/* Left title */}
          <h3 className="text-lg font-semibold text-[#091440]">Invoice Ms</h3>

          {/* Right buttons */}
          <div className="flex gap-4">
            {/* Filter button */}
            <button className="flex items-center justify-center gap-2 w-[89px] h-[30px] border border-[#E6EAED] bg-white rounded">
              <span className="text-[#091440] text-sm">Filter</span>
              <ChevronDown className="w-4 h-4 text-[#8997A5]" />
            </button>

            {/* Export button */}
            <button className="flex items-center justify-center gap-2 w-[89px] h-[30px] border border-[#E6EAED] bg-white rounded">
              <span className="text-[#091440] text-sm">Export</span>
              <ChevronDown className="w-4 h-4 text-[#8997A5]" />
            </button>
          </div>
        </div>


        {/* Invoice Card */}
        <div className="h-[369px]">
          <div className="w-full max-w-[1134px] h-[112px] bg-white border border-gray-200 rounded mx-auto mt-4 flex">
            {/* Left content grows */}
            <div className="flex-1 flex justify-between items-center p-5">
              <div className="text-[13px]">
                <div className="flex items-center gap-2">
                  <Button className="w-[64px] h-[25px] bg-blue-700 text-white rounded-[2px] px-[7px] py-[2px] text-sm">
                    Invoice
                  </Button>
                  <p className="font-bold text-[18px] w-[169px]" >MeCure Health</p>
                </div>
                <p>Invoice ID: <span className="text-[#2970FF]">9893772</span></p>
                <p>Created: Jan. 12, 2025</p>
              </div>

              <div className="text-[13px]">
                <p>Project Name: <span className="text-[#2970FF]">MeCure</span></p>
                <p>Project Type: <span className="text-[#2970FF]">Custom Enterprise System</span> </p>
                <p>Project Owner: <span className="text-[#2970FF]">Alexander Oamen</span> </p>
              </div>

              <div className="text-[13px]">
                <div className="flex items-center gap-2 border-2 border-[#CFA03F] text-[#CFA03F] px-2 py-1 rounded">
                  <Timer className="w-5 h-5" />
                  <span className="text-sm">waiting for review</span>
                </div>
                <div className="pl-[1rem] mt-1 flex items-center gap-2">
                  <span className="text-[16px] font-bold bg-[#41BE53] h-8 w-8 flex items-center justify-center rounded-full text-white">
                    ₦
                  </span>
                  <span>10,500,080</span>
                </div>
              </div>
            </div>

            {/* ✅ Chevron button sticks to far right */}
            <button className="w-[40px] h-[98px] bg-[#E6EAED] flex items-center justify-center rounded-r">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Second invoice card */}
          <div className="w-full max-w-[1134px] h-[112px] bg-white border border-gray-200 rounded mx-auto  flex">
            {/* Left content grows */}
            <div className="flex-1 flex justify-between items-center p-5">
              <div className="text-[13px]">
                <div className="flex items-center gap-2">
                  <Button className="w-[64px] h-[25px] bg-blue-700 text-white rounded-[2px] px-[7px] py-[2px] text-sm">
                    Invoice
                  </Button>
                  <p className="font-bold text-[18px] w-[169px]" >MeCure Health</p>
                </div>
                <p>Invoice ID: <span className="text-[#2970FF]">9893772</span></p>
                <p>Created: Jan. 12, 2025</p>
              </div>

              <div className="text-[13px]">
                <p>Project Name: <span className="text-[#2970FF]">MeCure</span></p>
                <p>Project Type: <span className="text-[#2970FF]">Custom Enterprise System</span> </p>
                <p>Project Owner: <span className="text-[#2970FF]">Alexander Oamen</span> </p>
              </div>

              <div className="text-[13px]">
                <div className="flex items-center gap-2 border-2 border-[#CFA03F] text-[#CFA03F] px-2 py-1 rounded">
                  <Timer className="w-5 h-5" />
                  <span className="text-sm">waiting for review</span>
                </div>
                <div className="pl-[1rem] mt-1 flex items-center gap-2">
                  <span className="text-[16px] font-bold bg-[#41BE53] h-8 w-8 flex items-center justify-center rounded-full text-white">
                    ₦
                  </span>
                  <span>10,500,080</span>
                </div>
              </div>
            </div>

            {/* ✅ Chevron button sticks to far right */}
            <button className="w-[40px] h-[98px] bg-[#E6EAED] flex items-center justify-center rounded-r">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Third invoice card */}
          <div className="w-full max-w-[1134px] h-[112px] bg-white border border-gray-200 rounded mx-auto  flex">
            {/* Left content grows */}
            <div className="flex-1 flex justify-between items-center p-5">
              <div className="text-[13px]">
                <div className="flex items-center gap-2">
                  <Button className="w-[64px] h-[25px] bg-blue-700 text-white rounded-[2px] px-[7px] py-[2px] text-sm">
                    Invoice
                  </Button>
                  <p className="font-bold text-[18px] w-[169px]" >MeCure Health</p>
                </div>
                <p>Invoice ID: <span className="text-[#2970FF]">9893772</span></p>
                <p>Created: Jan. 12, 2025</p>
              </div>

              <div className="text-[13px]">
                <p>Project Name: <span className="text-[#2970FF]">MeCure</span></p>
                <p>Project Type: <span className="text-[#2970FF]">Custom Enterprise System</span> </p>
                <p>Project Owner: <span className="text-[#2970FF]">Alexander Oamen</span> </p>
              </div>

              <div className="text-[13px]">
                <div className="flex items-center gap-2 border-2 border-[#CFA03F] text-[#CFA03F] px-2 py-1 rounded">
                  <Timer className="w-5 h-5" />
                  <span className="text-sm">waiting for review</span>
                </div>
                <div className="pl-[1rem] mt-1 flex items-center gap-2">
                  <span className="text-[16px] font-bold bg-[#41BE53] h-8 w-8 flex items-center justify-center rounded-full text-white">
                    ₦
                  </span>
                  <span>10,500,080</span>
                </div>
              </div>
            </div>

            {/* ✅ Chevron button sticks to far right */}
            <button className="w-[40px] h-[98px] bg-[#E6EAED] flex items-center justify-center rounded-r">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-between items-center bg-[#FFFFFF] mx-auto max-w-[1134px] h-[60px] mt-[12rem]">
            <div>
              <p>1-05 of 18 items</p>
            </div>

            <div className="flex items-center gap-6">
              {/* Left controls */}
              <div className="flex items-center gap-2">
                {/* Double left */}
                <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                  <ChevronLeft className="w-4 h-4 text-gray-600 -ml-2" />
                </div>

                {/* Single left */}
                <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              {/* Page numbers */}
              <div className="flex items-center gap-2 text-sm">
                <span className="border-2 border-[#2970FF] px-2 py-1 rounded-sm text-[#2970FF] font-medium">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-2">
                {/* Single right */}
                <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>

                {/* Double right */}
                <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                  <ChevronRight className="w-4 h-4 text-gray-600 -ml-2" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">

              <div className="flex items-center justify-between w-[64px] h-[32px] border-2 border-[#2970FF] rounded-sm px-2">
                <span className="text-gray-600 text-sm">10</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>


              <div className="text-gray-700 text-sm">items per page</div>
            </div>

          </div>
        </div>


      </section>
    </main>
  );
}
