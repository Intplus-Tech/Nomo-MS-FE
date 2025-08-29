"use client";

export default function CheckboxRow() {
  return (
    <section className="rounded py-3 mx-auto bg-[#FFFFFF] max-w-[1134px] mt-2 p-4 h-[90px] flex">
      <div className="flex flex-wrap justify-between gap-3 w-full items-center ">
        <label className="flex items-center gap-2 cursor-pointer border  rounded flex-1 p-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">Frontend</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer border  rounded flex-1 p-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">Backend</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer border  rounded flex-1 p-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">Data management</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer border  rounded p-1 flex-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">DevOps</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer border  rounded flex-1 p-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">Third party integration</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer border  rounded flex-1 p-1 min-w-[150px]">
          <input type="checkbox" className="w-4 h-4 accent-[#DF4F3A]" />
          <span className="text-sm text-gray-700">Others</span>
        </label>
      </div>
    </section>
  );
}
