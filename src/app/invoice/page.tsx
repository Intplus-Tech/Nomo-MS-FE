"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Manage from "@/components/Manage";

export default function InvoiceNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main>
      <nav className="w-full bg-[#F9FAFA] ">
        <div className="max-w-[1440px] h-[62px]  flex items-center justify-around text-[#091440] gap-x-[16rem] ">
          {/* Left Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/invoicevector.png"
              alt="Vector Nomo"
              width={26}
              height={42}
            />
            <h2 className="font-semibold text-lg">Nomos OS</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-6 font-medium text-[16px]">
              <li >
                <a className="text-[16px]" href="#">Manage</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <span className="cursor-pointer">On / Off Switch</span>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#091440]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#F9FAFA] px-4 pb-4">
            <ul className="flex flex-col space-y-3 font-medium text-[16px]">
              <li >
                <a  href="#">Manage</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <span className="cursor-pointer">On / Off Switch</span>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Manage />
    </main>
  );
}
