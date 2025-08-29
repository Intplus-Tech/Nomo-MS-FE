"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function DataDropdown() {
  const dataScience = [
    {
      title: "Machine Learning Model Development",
      description:
        "Building predictive models and algorithms using machine learning techniques (e.g., classification, regression, clustering).",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Working with text and language data (e.g., sentiment analysis, chatbots, language translation).",
    },
    {
      title: "Computer Vision",
      description:
        "Developing applications that can see and interpret images and videos (e.g., object detection, image recognition, facial recognition).",
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleSelect = (title: string) => {
    setSelected((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className="w-full max-w-[420px] bg-white rounded-[6px] shadow-md border mx-auto sm:w-[90%] md:w-[420px]"
      style={{
        boxShadow: "0px 0px 16px 0px #0000000F",
        fontFamily: "Source Sans Pro",
      }}
    >
      {/* Header with chevron */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-5 py-3 text-left text-[16px] font-semibold text-black cursor-pointer"
      >
        <span>Data Science</span>
        {open ? (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Dropdown content */}
      {open && (
        <div className="p-5 flex flex-col gap-[15px] max-h-[360px] overflow-y-auto">
          {dataScience.map((item, i) => (
            <label
              key={i}
              className="flex flex-col sm:flex-row items-start gap-3 cursor-pointer"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selected.includes(item.title)}
                onChange={() => toggleSelect(item.title)}
                className="mt-1 w-4 h-4 accent-[#2970FF] cursor-pointer flex-shrink-0"
              />

              {/* Text */}
              <div className="flex flex-col w-full">
                <span className="text-[16px] font-normal leading-[100%] text-black">
                  {item.title}
                </span>
                <p className="text-[14px] text-gray-600 leading-snug pt-2">
                  {item.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
