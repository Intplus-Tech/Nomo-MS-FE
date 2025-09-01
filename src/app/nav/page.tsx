"use client";
import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";

function InvoiceNavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Manage");

  const router = useRouter();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      sessionStorage.clear();
    } catch { }
    router.replace("/");
  };

  const menuItems = ["Manage", "Account", "On / Off Switch", "Log Out"];
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <nav className="w-full bg-[#F9FAFA]">
      <div
        className={`max-w-[1440px] h-[62px] flex items-center text-[#091440]  
          ${isMobile ? "justify-between px-4" : ""} 
          ${isTablet ? "justify-between px-6" : ""}   
          ${isDesktop ? "justify-between px-24" : ""} `}
      >
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
            {menuItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer"
                onClick={() =>
                  item === "Log Out" ? handleLogout() : setActive(item)
                }
              >
                <span>{item}</span>
                {(item === "Manage" || item === "Account" || item === "Log Out") &&
                  active === item && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[53px] h-[4px] bg-[#2ED8A3]" />
                  )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            className="md:hidden text-[#091440]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && isMobile && (
        <div className="md:hidden bg-[#F9FAFA] px-4 pb-4">
          <ul className="flex flex-col space-y-3 font-medium text-[16px]">
            {["Manage", "Account", "On / Off Switch", "Log Out"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer"
                onClick={() => setActive(item)}
              >
                <span>{item}</span>
                {(item === "Manage" || item === "Account" || item === "Log Out") &&
                  active === item && (
                    <div className="w-[53px] h-[4px] bg-[#2ED8A3] mt-1" />
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

const InvoiceNavbar = dynamic(() => Promise.resolve(InvoiceNavbarComponent), {
  ssr: false,
});

export default InvoiceNavbar;
