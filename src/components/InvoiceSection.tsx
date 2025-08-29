"use client";

import FileUpload from "./FileUpload";
import ClientDetails from "./ClientDetails";

export default function InvoiceSection() {
  return (
    <section className="w-full max-w-[1134px] bg-white mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 lg:p-6">
      {/* Left (ClientDetails) */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[290px]">
        <ClientDetails />
      </div>

      {/* Right (FileUpload) */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[290px]">
        <FileUpload />
      </div>
    </section>
  );
}
