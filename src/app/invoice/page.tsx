"use client";
import Manage from "@/components/Manage";
import Invoicems from "@/components/Invoicems";
import InvoiceNavbar from "@/components/InvoiceNavbarComponent";


export default function invoicePage() {
  
  return (
    <main className="">
      <InvoiceNavbar/>
      <Manage />
      <Invoicems />
    </main>
  );
}





