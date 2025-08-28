"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import MobileAppDropdown from "./MobileAppDropdown";
import WebAppDropdown from "./WebAppDropdown";

export const consumerApps = [
  {
    key: "mobile",
    title: "Mobile Apps (iOS, Android, Cross-Platform)",
    description:
      "Apps for smartphones and tablets (e.g., games, social media, utilities, productivity, e-commerce, entertainment).",
  },
  {
    key: "web",
    title: "Web Applications (Consumer-Facing)",
    description:
      "Websites and web apps designed for end-users (e.g., e-commerce platforms, social networks, content platforms, online tools, streaming services).",
  },
  {
    key: "desktop",
    title: "Desktop Applications (Consumer-Facing)",
    description:
      "Software installed and run on personal computers (e.g., productivity suites, creative tools, games, utilities).",
  },
];

export default function ConsumerDropdown({ subOpen }: { subOpen: string | null }) {
  const [nestedOpen, setNestedOpen] = useState<string | null>(null);

  return (
    <>
      {subOpen === "consumer" && (
        <div
          className="absolute top-[3.2rem] left-[440px] 
            w-[420px] bg-white rounded-[6px] shadow 
            flex flex-col gap-[15px] p-[20px] z-20"
        >
          {consumerApps.map((app, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 border-b border-gray-200 pb-2 relative"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-[#091440]" />
                  <h2 className="font-[Mulish] font-semibold text-[16px] leading-[18px] text-gray-900">
                    {app.title}
                  </h2>
                </div>

                {(app.key === "mobile" || app.key === "web") && (
                  <ChevronRight
                    className={`w-4 h-4 text-gray-600 cursor-pointer transition-transform ${nestedOpen === app.key ? "rotate-90" : ""
                      }`}
                    onClick={() =>
                      setNestedOpen(nestedOpen === app.key ? null : app.key)
                    }
                  />
                )}
              </div>

              {/* Description */}
              <p className="font-[Mulish] text-[16px] leading-[18px] text-gray-600 ml-6">
                {app.description}
              </p>
            </div>
          ))}

          {/* Nested dropdown positioned beside */}
          {nestedOpen === "mobile" && (
            <div className="absolute top-0 left-[420px]">
              <MobileAppDropdown />
            </div>
          )}

          {nestedOpen === "web" && (
            <div className="absolute top-0 left-[420px]">
              <WebAppDropdown />
             </div>
          )}
        </div>
      )}
    </>
  );
}
