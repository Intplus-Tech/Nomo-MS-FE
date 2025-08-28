"use client";

export default function WebAppDropdown() {
  const webPlatform = [
    "Website",
    "Entertainment",
    "E-commerce",
    "Social Networks",
    "Content Platforms",
    "Online Tools",
    "Streaming Services",
  ];

  return (
    <div
      className="w-[298px] h-[282px] bg-white rounded-[6px] p-[20px] flex flex-col gap-[15px] shadow"
    >
      {webPlatform.map((webapp, i) => (
        <label
          key={i}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#091440] cursor-pointer"
          />

          {/* Text */}
          <span className="font-[Mulish] font-bold text-[16px] leading-[18px] text-[#091440]">
            {webapp}
          </span>
        </label>
      ))}
    </div>
  );
}
