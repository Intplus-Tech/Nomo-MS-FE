"use client";

import { useState } from "react";

export default function BusinessApp() {
  const businessDrops = [
    {
      title: "Enterprise Resource Planning (ERP) Systems",
      description:
        "Integrated systems for managing core business processes (e.g., finance, HR, supply chain, CRM).",
    },
    {
      title: "Supply Chain Management (SCM) Systems",
      description:
        "Tools for managing the flow of goods and services, from raw materials to finished products.",
    },
    {
      title: "Human Resources Management Systems (HRMS)",
      description:
        "Software to manage employee data, payroll, benefits, recruitment, and HR processes.",
    },
    {
      title: "Accounting Software",
      description:
        "Applications for managing financial transactions, bookkeeping, and financial reporting.",
    },
    {
      title: "Business Intelligence (BI) & Analytics Platforms",
      description:
        "Tools for data analysis, reporting, dashboards, and business insights.",
    },
    {
      title: "Project/Task Management Software",
      description:
        "Applications for planning, scheduling, resource management, and tracking project progress.",
    },
    {
      title: "Collaboration & Communication Tools",
      description:
        "Software for teams to communicate, share files, and work together (e.g., messaging apps, video conferencing, project collaboration platforms).",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "Platforms for creating, managing, and publishing digital content (e.g., websites, blogs, online documentation).",
    },
    {
      title: "Custom Business Applications",
      description:
        "Software tailored to specific business needs and processes within an organization (e.g., industry-specific solutions, internal workflows).",
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
    <div
      className="w-[420px] bg-white rounded-[6px] p-5 border shadow z-20"
      style={{
        fontFamily: "Source Sans Pro",
      }}
    >
      {/* Scrollable area only */}
      <div className="h-[320px] overflow-y-auto flex flex-col gap-[15px] pr-2">
        {businessDrops.map((item, i) => (
          <label
            key={i}
            className="flex items-start gap-3 cursor-pointer"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selected.includes(item.title)}
              onChange={() => toggleSelect(item.title)}
              className="mt-1 w-4 h-4 accent-[#2970FF] cursor-pointer"
            />

            {/* Text Content */}
            <div className="flex flex-col" style={{ width: "286px" }}>
              <span className="text-[16px] font-normal leading-[100%] text-black">
                {item.title}
              </span>
              <p className="text-[14px] text-gray-600 leading-snug">
                {item.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
