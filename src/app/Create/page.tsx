"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import InvoiceNavbar from "@/components/InvoiceNavbarComponent";
import { Paperclip } from "lucide-react";

export default function Create() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles([...files, ...Array.from(e.dataTransfer.files)]);
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const openFileDialog = () => {
    document.getElementById("fileInput")?.click();
  };
  const [open, setOpen] = useState(false);

  const items = [
    "Consumer Applications (B2C)",
    "Business Applications (B2B/Enterprise)",
    "Data Science & AI/ML",
    "Scientific & Engineering Software",
    "Data Science & AI/ML",
  ];

  return (
    <main>
      <InvoiceNavbar />

      <div className="p-5 sm:pl-[7rem] bg-[#FFFFFF]">create invoice</div>

      <section className="bg-[#F9FAFA]">
        <Link href="/invoice" className="inline-block">
          <button className="rounded hover:bg-gray-100 flex items-center gap-1.5 p-5 sm:pl-[7rem] text-[16px]">
            <ArrowLeft className="w-5 h-5 text-gray-700" /> Go back
          </button>
        </Link>

        <div className="sm:pl-[7rem] p-2.5">invoice details</div>

        {/* Reference Month */}
        <div className="flex flex-col w-full h-[95px] max-w-[1134px] mb-2 opacity-100 bg-white mx-auto justify-center">
          <p className="text-[13px] ml-4 sm:ml-10">Reference Month</p>
          <div className="border-2 flex items-center justify-between bg-[#FFFFFF] text-[16px] w-fit ml-4 sm:ml-10 px-3 py-1">
            April 2023
            <ChevronDown className="w-5 h-5 ml-2" />
          </div>
        </div>

        {/* Client details & file upload */}
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

            {/* Right */}
            <div className="items-start space-y-4">
              <div
                className="w-full sm:w-[330px] h-[32px] rounded-lg bg-[#2970FF] flex items-center gap-2 px-5 text-white cursor-pointer"
                onClick={openFileDialog}
              >
                <Paperclip className="w-4 h-4 text-white" />
                <p>Attach Files (optional)</p>
              </div>

              <div
                className="w-full sm:w-[330px] h-[202px] border border-[#E6EAED] rounded-[5px] flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-[#F9FAFA]"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={openFileDialog}
              >
                <p className="text-gray-500 text-sm mt-1">or move the file into this area</p>
                <input id="fileInput" type="file" multiple className="hidden" onChange={handleFileChange} />
                {files.length > 0 && (
                  <ul className="mt-3 w-full text-left text-sm text-gray-700">
                    {files.map((file, idx) => (
                      <li key={idx} className="truncate">
                        📄 {file.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </section>

        {/* Dropdown & checkboxes */}
        <section className="space-y-4">
          <div className="max-w-[1134px] mx-auto p-5 sm:pl-10 bg-white mt-6 h-auto sm:h-[90px] flex flex-col sm:flex-row sm:justify-between gap-4">
            {/* Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full sm:w-[431px] h-[40px] px-4 border border-gray-300 rounded-sm bg-white shadow-sm"
              >
                <span>Select Category</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {open && (
                <div className="absolute z-10 mt-2 w-full sm:w-[431px] h-[250px] bg-white rounded-[6px] shadow-[0px_10px_16px_0px_#00000029] overflow-y-auto p-2">
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-blue-500">
                        <span className="text-sm text-gray-800">{item}</span>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Checkboxes row */}
            <div className="w-full sm:w-auto">
              <div className="border flex flex-col sm:flex-row w-full sm:w-[428px] h-auto sm:h-[30px] opacity-100 border-gray-300 rounded-[2px]">
                <div className="flex items-center px-4 py-2 sm:py-0">
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" className="w-4 h-4 text-[#2970FF] border-gray-300 rounded" />
                    <span className="text-gray-700 text-[12px]">Development</span>
                  </label>
                </div>
                <div className="flex flex-wrap sm:flex-row items-center justify-between bg-gray-300 flex-1 px-4 rounded-r-[5px] space-x-3">
                  {['Design', 'Research', 'Marketing'].map((label, i) => (
                    <label key={i} className="flex items-center space-x-1">
                      <input type="checkbox" className="w-4 h-4 text-[#2970FF] border-gray-300 rounded" />
                      <span className="text-gray-700 text-[12px]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Button className="w-[71px] h-[29px] rounded-[5px] bg-[#2970FF] text-white text-[12px] flex items-center justify-center px-[10px] py-[7px] gap-[10px]">
                Add items
              </Button>
            </div>
          </div>

          {/* Another checkbox row */}
          <div className="max-w-[1134px] bg-white h-auto sm:h-[90px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-around gap-2 p-2">
            {[
              { label: "Frontend", w: "132.96px" },
              { label: "Backend", w: "130.96px" },
              { label: "Database Management", w: "230.96px" },
              { label: "DevOps", w: "126.96px" },
              { label: "3rd party integration", w: "202.96px" },
              { label: "Others", w: "117.96px" },
            ].map((box, i) => (
              <div key={i} className={`w-full sm:w-[${box.w}] h-[30px] border border-gray-300 flex items-center gap-[10px] px-4 rounded-[5px]`}>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" className="w-4 h-4 text-[#2970FF] border-gray-300 rounded" />
                  <span className="text-gray-700 text-[12px]">{box.label}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Invoice summary */}
          <div className="w-full">
            <div className="sm:pl-[7rem] mb-4">
              <p className="text-lg font-medium">Invoice Summary</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mx-auto items-center justify-center gap-6">
            {/* first div */}
            <div className="bg-white w-full lg:w-[789px] h-auto lg:h-[159px] opacity-100 rounded-lg shadow p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1 space-y-6">
                <p>Features billed to proposal: <span className="font-semibold">8</span></p>
                <div>
                  <p className="font-medium">Estimated Project Timeline</p>
                  <p className="text-[#2970FF] font-bold">16 Weeks</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full lg:w-auto">
                {['Priority level', 'Project Complexity'].map((ph, i) => (
                  <div key={i} className="relative">
                    <input type="text" placeholder={ph} className="border border-gray-300 rounded px-3 py-2 text-sm w-full lg:w-[289px] h-[44px]" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col justify-center">
                      <ChevronUp className="w-4 h-4 text-blue-500 cursor-pointer" />
                      <ChevronDown className="w-4 h-4 text-blue-500 cursor-pointer -mt-1" />
                    </div>
                  </div>
                ))}
              </div>
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

            {/* second div */}
            <div className="bg-white w-full lg:w-[340px] h-auto lg:h-[159px] opacity-100 rounded-lg shadow p-6">
              <h3 className="mt-2">Total Project Cost</h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <div>
                  <p>Total amount</p>
                  <p className="font-semibold">₦10,500,080</p>
                </div>
                <div>
                  <p>Total amount (Tax)</p>
                  <p className="font-semibold">₦12,500,080</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons row */}
          <div className="max-w-[1134px] mx-auto flex flex-col sm:flex-row justify-end gap-2 py-5">
            {['Save draft', 'Create Invoice', 'Sent To Client'].map((txt, i) => (
              <button key={i} className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-[10px] border border-[#2970FF] rounded-[5px] bg-white text-[#2970FF] font-medium py-[13px]">
                {txt}
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
