"use client";

import { useState } from "react";
import Underline from "./Underline";

export default function BlockChainDropdown() {
  const blockChainDrop = [
    {
      title: "Decentralized Applications (dApps)",
      description:
        "Applications built on blockchain technology, often for finance, supply chain, or identity management.",
    },
    {
      title: "Smart Contract Development",
      description:
        "Programming self-executing contracts on blockchain platforms.",
    },
    {
      title: "Serious Games & Gamification Projects",
      description:
        "Applying game design principles to non-game contexts for training, education, or motivation.",
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
    <div className="w-full max-w-[1134px] mx-auto flex flex-col gap-4 max-h-[320px] overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 bg-white rounded-lg shadow-sm">
      {blockChainDrop.map((item, i) => (
        <div key={i} className="w-full">
          <label className="flex items-start gap-3 cursor-pointer">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selected.includes(item.title)}
              onChange={() => toggleSelect(item.title)}
              className="mt-1 w-4 h-4 accent-[#2970FF] cursor-pointer flex-shrink-0"
            />

            {/* Text */}
            <div className="flex flex-col w-full">
              <span className="text-base font-medium text-black leading-snug">
                {item.title}
              </span>
              <p className="text-sm text-gray-600 leading-snug pt-2">
                {item.description}
              </p>
            </div>
          </label>

          {/* Underline */}
          {i < blockChainDrop.length - 1 && (
            <div className="mt-3">
              <Underline />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
