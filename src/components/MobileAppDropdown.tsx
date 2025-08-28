"use client";

export default function MobileAppDropdown() {
  const mobilePlatforms = ["Android", "iOS", "Cross-Platform"];

  return (
    <div
      className="absolute top-0  
        w-[290px] h-[116px] bg-white rounded-[6px] shadow 
        flex flex-col gap-[15px] p-[20px] z-10"
    >
      {mobilePlatforms.map((platform, i) => (
        <label
          key={i}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" className="w-4 h-4" />
          <span className="font-[Mulish] text-[16px] leading-[18px] text-gray-800">
            {platform}
          </span>
        </label>
      ))}
    </div>
  );
}
