"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import DevelopBox from "./DevelopBox";
import ConsumerDropdown from "./ConsumerDropdown";
import BusinessApp from "./BusinessApp";
import DataDropdown from "./DataDropdown";
import ScientificDropdown from "./ScientificDropdown";
import BlockChainDropdown from "./BlockChainDropdown";

export default function CategoryDropdown() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  const handleSubToggle = (key: string) => {
    setSubOpen((prev) => (prev === key ? null : key));
  };

  return (
    <div className="w-full max-w-[1134px] min-h-[90px] bg-white border border-gray-200 rounded mx-auto mt-4 flex flex-col lg:flex-row p-4 lg:p-5 justify-between items-start lg:items-center gap-4">
      {/* Left label */}
      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center relative w-full">
        {/* Input wrapper */}
        <div className="relative w-full sm:max-w-[431px]">
          <input
            type="text"
            placeholder="Choose the type of project"
            onClick={() => setOpen(!open)}
            className="border p-2 w-full h-[40px] pl-4 pr-8 rounded text-sm sm:text-base"
            readOnly
          />
          <ChevronDown
            onClick={() => setOpen(!open)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer"
          />
        </div>

        {/* Main dropdown */}
        {open && (
          <div className="absolute top-[3.2rem] left-0 w-full sm:w-[431px] bg-white rounded-[6px] shadow p-4 flex flex-col gap-3 z-10">
            {[
              "Consumer Applications (B2C)",
              "Business Applications (B2B/Enterprise)",
              "Data Science & AI/ML",
              "Scientific & Engineering Software",
              "Blockchain & Cryptocurrency",
            ].map((item, i) => (
              <div
                key={i}
                onClick={() =>
                  item === "Consumer Applications (B2C)"
                    ? handleSubToggle("consumer")
                    : item === "Business Applications (B2B/Enterprise)"
                      ? handleSubToggle("business")
                      : item === "Data Science & AI/ML"
                        ? handleSubToggle("data")
                        : item === "Scientific & Engineering Software"
                          ? handleSubToggle("scientific")
                          : item === "Blockchain & Cryptocurrency"
                            ? handleSubToggle("blockchain")
                            : setSubOpen(null)
                }
                className="flex justify-between items-center cursor-pointer hover:bg-[#2970FF]/10 px-2 py-2 rounded"
              >
                <span className="text-sm text-gray-800 font-[Mulish]">
                  {item}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
            ))}
          </div>
        )}

        {/* Sub-dropdowns */}
        {subOpen === "consumer" && (
          <div className="absolute top-[3.2rem] left-0 sm:left-[440px] w-full sm:w-auto z-20">
            <ConsumerDropdown subOpen={subOpen} />
          </div>
        )}

        {subOpen === "business" && (
          <div className="absolute top-[3.2rem] left-0 sm:left-[440px] w-full sm:w-auto z-20">
            <BusinessApp />
          </div>
        )}

        {subOpen === "data" && (
          <div className="absolute top-[3.2rem] left-0 sm:left-[440px] w-full sm:w-auto z-20">
            <DataDropdown />
          </div>
        )}

        {subOpen === "scientific" && (
          <div className="absolute top-[3.2rem] left-0 sm:left-[440px] w-full sm:w-auto z-20">
            <ScientificDropdown />
          </div>
        )}

        {subOpen === "blockchain" && (
          <div className="absolute top-[3.2rem] left-0 sm:left-[440px] w-full sm:w-auto z-20">
            <BlockChainDropdown />
          </div>
        )}
      </div>

      {/* Right design box */}
      <div className="w-full lg:w-auto">
        <DevelopBox />
      </div>
    </div>
  );
}
