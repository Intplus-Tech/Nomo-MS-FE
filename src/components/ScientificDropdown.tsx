"use client";

import { useState } from "react";
import Underline from "./Underline";

export default function ScientificDropdown() {
  const scienceDrop = [
    {
      title: "Simulation & Modeling Software",
      description:
        "Applications for simulating real-world systems and processes (e.g., scientific simulations, engineering design tools, financial modeling).",
    },
    {
      title: "Data Analysis & Visualization Tools",
      description:
        "Software for processing, analyzing, and visualizing large datasets (e.g., scientific data analysis, statistical software, geographical information systems (GIS)).",
    },
    {
      title:
        "Computer-Aided Design (CAD) & Computer-Aided Engineering (CAE) Software",
      description: "Tools for designing and engineering products and systems.",
    },
    {
      title: "Research & Development Software",
      description:
        "Custom software to support specific research projects in various scientific fields.",
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (title: string) => {
    setSelected((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="flex flex-col gap-3 h-auto max-h-[360px] overflow-y-auto px-4 sm:px-5 pb-5 bg-[#FFFFFF] rounded">
      {scienceDrop.map((item, i) => (
        <div key={i}>
          <label className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 cursor-pointer">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selected.includes(item.title)}
              onChange={() => toggleSelect(item.title)}
              className="mt-1 w-4 h-4 accent-[#2970FF] cursor-pointer flex-shrink-0"
            />

            {/* Text */}
            <div className="flex flex-col w-full sm:w-[350px]">
              <span className="text-sm sm:text-[16px] font-normal leading-tight text-black">
                {item.title}
              </span>
              <p className="text-xs sm:text-[14px] text-gray-600 leading-snug pt-1 sm:pt-2">
                {item.description}
              </p>
            </div>
          </label>

          {/* Underline */}
          <Underline />
        </div>
      ))}
    </div>
  );
}
