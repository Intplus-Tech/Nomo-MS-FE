// Underline.tsx
"use client";

export default function Underline({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[358px] p-[10px] ${className}`}>
      <div className="w-full h-[1px] bg-[#ECECEC]" />
    </div>
  );
}
