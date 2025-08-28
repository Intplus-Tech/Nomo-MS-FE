    "use client";




   export default function CheckboxRow() {
 

 

  return (
    <section className="flex rounded py-3 mx-auto bg-[#FFFFFF] max-w-[1134px] h-[90px] mt-2 p-6">
  <div  className="flex items-center justify-between w-full ">
        <label className="flex items-center gap-3 cursor-pointer border-1 w-[132.96] p-1">
        <input
          type="checkbox"
          className="w-4 h-4 accent-[#DF4F3A]"
        />
        <span className="text-sm text-gray-700">Frontend</span>
      </label>

        <label className="flex items-center gap-3 cursor-pointer border-1 w-[130.96px] p-1">
        <input
          type="checkbox"
          className="w-4 h-4 accent-[#DF4F3A]"
        />
        <span className="text-sm text-gray-700">Backend</span>
      </label>

        <label className="flex items-center gap-3 cursor-pointer border-1 w-[204.96px] p-1">
        <input
          type="checkbox"
          className="w-4 h-4 accent-[#DF4F3A]"
        />
        <span className="text-sm text-gray-700">Data management</span>
      </label>

        <label className="flex items-center gap-3 cursor-pointer border-1 w-[204.96px] p-1">
        <input
          type="checkbox"
          className="w-4 h-4 accent-[#DF4F3A]"
        />
        <span className="text-sm text-gray-700">DevOps</span>
      </label>

        <label className="flex items-center gap-3 cursor-pointer border-1 w-[202.96px] p-1">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#DF4F3A]"
          />
          <span className="text-sm text-gray-700">Third party integration</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer border-1 w-[117.96px] p-1">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#DF4F3A]"
          />
          <span className="text-sm text-gray-700">Others</span>
        </label>
  </div>
    </section>
  );
}
