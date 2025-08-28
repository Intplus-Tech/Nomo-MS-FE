"use client";

import InvoiceNavbar from "@/components/InvoiceNavbarComponent";
import ReferenceMonth from "@/components/ReferenceMonth";
import ClientDetails from "@/components/ClientDetails";
import FileUpload from "@/components/FileUpload";
import CategoryDropdown from "@/components/CategoryDropdown";
import CheckboxRow from "@/components/CheckboxRow";
import InvoiceSummary from "@/components/InvoiceSummary";

import ActionButtons from "@/components/ActionButtons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Create() {
  return (
    <main>
      <InvoiceNavbar />

      <div className="p-5 sm:pl-[7rem] bg-[#FFFFFF]">create invoice</div>

      <section className="bg-[#F9FAFA]">
        <Link href="/invoice" className="inline-block">
          <button className="rounded hover:bg-gray-100 flex items-center gap-1.5 p-5 sm:pl-[7rem] text-[16px]">
            <ArrowLeft className="w-5 h-5 text-gray-700" /> Go back
          </button>
        </Link>

        <div className="sm:pl-[7rem] p-2.5">invoice details</div>
         
        <div className="max-w-[1134px] mx-auto">
          <ReferenceMonth />
         </div>
       
        <div className="flex flex-col lg:flex-row gap-6 max-w-[1134px] mx-auto ">
          <ClientDetails />
          <FileUpload />
        </div>
        
        <CategoryDropdown />
        <CheckboxRow />
        <InvoiceSummary  />
       
        <ActionButtons onCancel={() => console.log("Cancelled")} onSubmit={() => console.log("Submitted")} />

      </section>
    </main>
  );
}
