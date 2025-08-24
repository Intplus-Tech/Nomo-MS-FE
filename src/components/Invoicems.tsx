"use client";
import { ChevronDown, ChevronRight, ChevronLeft, Timer } from "lucide-react";
import { Button } from "./ui/button";

type Invoice = {
  id: string;
  company: string;
  projectName: string;
  projectType: string;
  projectOwner: string;
  created: string;
  amount: string;
  status: string;
};

const invoices: Invoice[] = [
  {
    id: "9893772",
    company: "MeCure Health",
    projectName: "MeCure",
    projectType: "Custom Enterprise System",
    projectOwner: "Alexander Oamen",
    created: "Jan. 12, 2025",
    amount: "10,500,080",
    status: "waiting for review",
  },
  {
    id: "7788231",
    company: "Alpha Corp",
    projectName: "Alpha ERP",
    projectType: "Enterprise Resource Planning",
    projectOwner: "Grace Adeniran",
    created: "Feb. 5, 2025",
    amount: "8,250,000",
    status: "waiting for review",
  },
  {
    id: "6621994",
    company: "Beta Solutions",
    projectName: "Beta Mobile",
    projectType: "Mobile App",
    projectOwner: "Samuel Adewale",
    created: "Mar. 1, 2025",
    amount: "5,980,500",
    status: "waiting for review",
  },
];

export default function Invoicems() {
  return (
    <main className="bg-[#F9FAFA] min-h-screen">
      <section className="h-fit w-full">
        {/* ✅ Top Header */}
        <div className="w-full max-w-[1134px] mx-auto mt-4 rounded h-auto sm:h-[112px] flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 gap-3">
          {/* Left title */}
          <h3 className="text-lg font-semibold text-[#091440]">Invoice Ms</h3>

          {/* Right buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {/* Filter button */}
            <button className="flex items-center justify-center gap-2 px-3 sm:w-[89px] h-[30px] border border-[#E6EAED] bg-white rounded">
              <span className="text-[#091440] text-sm">Filter</span>
              <ChevronDown className="w-4 h-4 text-[#8997A5]" />
            </button>

            {/* Export button */}
            <button className="flex items-center justify-center gap-2 px-3 sm:w-[89px] h-[30px] border border-[#E6EAED] bg-white rounded">
              <span className="text-[#091440] text-sm">Export</span>
              <ChevronDown className="w-4 h-4 text-[#8997A5]" />
            </button>
          </div>
        </div>

        {/* ✅ Invoice Cards */}
        <div className="px-3 sm:px-6 mt-4 space-y-2 flex flex-col items-center justify-center">
          {invoices.map((inv) => (
            <button
              key={inv.id}
              className="w-full max-w-[1134px] bg-white border border-gray-200 rounded flex flex-col sm:flex-row sm:items-center text-left overflow-hidden"
            >
              {/* Left content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center p-4 gap-6 sm:gap-[10rem]">
                {/* Company Info */}
                <div className="text-[13px] flex-1 min-w-[250px]">
                  <div className="flex items-center gap-2">
                    <Button className="w-[64px] h-[25px] bg-blue-700 text-white rounded-[2px] px-2 py-1 text-sm">
                      Invoice
                    </Button>
                    <p className="font-bold text-[16px] sm:text-[18px] truncate max-w-[169px]">
                      {inv.company}
                    </p>
                  </div>
                  <p>
                    Invoice ID: <span className="text-[#2970FF]">{inv.id}</span>
                  </p>
                  <p>Created: {inv.created}</p>
                </div>

                {/* Project Info */}
                <div className="text-[13px] flex-1 min-w-[250px]">
                  <p>
                    Project Name:{" "}
                    <span className="text-[#2970FF]">{inv.projectName}</span>
                  </p>
                  <p>
                    Project Type:{" "}
                    <span className="text-[#2970FF]">{inv.projectType}</span>
                  </p>
                  <p>
                    Project Owner:{" "}
                    <span className="text-[#2970FF]">{inv.projectOwner}</span>
                  </p>
                </div>

                {/* Status & Amount */}
                <div className="text-[13px] flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 border-2 border-[#CFA03F] text-[#CFA03F] px-2 py-1 rounded w-fit">
                    <Timer className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm">{inv.status}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[16px] font-bold bg-[#41BE53] h-8 w-8 flex items-center justify-center rounded-full text-white">
                      ₦
                    </span>
                    <span className="font-medium">{inv.amount}</span>
                  </div>
                </div>
              </div>

              {/* Chevron button (right) */}
              <div className="w-full sm:w-[40px] sm:h-[98px] bg-[#E6EAED] flex items-center justify-center rounded-b sm:rounded-r sm:rounded-b-none">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>

        {/* ✅ Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FFFFFF] mx-auto max-w-[1134px] h-auto sm:h-[60px] mt-20 px-4 py-2 gap-4">
          <p className="text-sm">1-05 of 18 items</p>

          {/* Controls + page numbers */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            {/* Left controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
                <ChevronLeft className="w-4 h-4 text-gray-600 -ml-2" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Page numbers */}
            <div className="flex items-center gap-2 text-sm">
              <span className="border-2 border-[#2970FF] px-2 py-1 rounded-sm text-[#2970FF] font-medium">
                1
              </span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 border-2 border-[#2970FF] rounded-sm">
                <ChevronRight className="w-4 h-4 text-gray-600" />
                <ChevronRight className="w-4 h-4 text-gray-600 -ml-2" />
              </div>
            </div>
          </div>

          {/* Items per page */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between w-[64px] h-[32px] border-2 border-[#2970FF] rounded-sm px-2">
              <span className="text-gray-600 text-sm">10</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-gray-700 text-sm">items per page</div>
          </div>
        </div>
      </section>
    </main>
  );
}
