"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, AlertCircle } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

function InvoiceNavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Manage");
  const [showUnauthorized, setShowUnauthorized] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

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

  const handleMenuClick = (item: string) => {
    if (item === "Log Out") {
      handleLogout();
    } else if (item === "Manage") {
      setShowUnauthorized(true);
    } else {
      setActive(item);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-[#F9FAFA]">
        <div
          className={`max-w-[1440px] h-[62px] flex items-center text-[#091440]  
            ${isMobile ? "justify-between px-4" : ""} 
            ${isTablet ? "justify-around gap-x-[6rem] px-6" : ""} 
            ${isDesktop ? "justify-around gap-x-[27rem] -ml-6.5 px-8" : ""}`}
        >
          {/* Logo */}
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
                  onClick={() => handleMenuClick(item)}
                >
                  {item === "On / Off Switch" ? (
                    <button
                      onClick={() => setSwitchOn(!switchOn)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${switchOn ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-md transform transition ${switchOn ? "translate-x-6" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <span>{item}</span>
                  )}

                  {(item === "Manage" || item === "Account" || item === "Log Out") &&
                    active === item && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[53px] h-[4px] bg-[#2ED8A3]" />
                    )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
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
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer"
                  onClick={() => handleMenuClick(item)}
                >
                  {item === "On / Off Switch" ? (
                    <button
                      onClick={() => setSwitchOn(!switchOn)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${switchOn ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-md transform transition ${switchOn ? "translate-x-6" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <span>{item}</span>
                  )}

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

      {/* UNAUTHORIZED POPUP */}
      {showUnauthorized && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white w-[90%] max-w-[485px] h-auto min-h-[320px] rounded-[6px] p-5 shadow-[0px_0px_16px_0px_#0000000F] flex flex-col gap-4 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowUnauthorized(false)}
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-full flex justify-center">
              <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#BE212F]">
                <AlertCircle className="text-white" size={20} />
              </div>
            </div>

            {/* Unauthorized Text */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold text-red-600">
                You are not authorized
              </h2>
              <h2 className="text-lg font-semibold text-red-600">
                to view this page.
              </h2>
            </div>

            {/* Divider */}
            <div className="mx-auto w-[70%] border border-[#C4CBD2]" />

            {/* Secondary Password Text */}
            <div className="flex flex-col items-center text-[#091440] font-bold">
              <p className="text-sm">Use your Secondary Password</p>
              <p className="text-sm">to view</p>
            </div>

            {/* Input + Button */}
            <input
              type="password"
              placeholder="Enter Secondary Password"
              className="py-2 focus:ring-2 focus:ring-blue-500 w-[90%] max-w-[215px] h-[44px] rounded-[5px] border border-[#E6EAED] bg-[#FFFFFF] px-3 text-sm outline-none mx-auto"
            />
            <button className="bg-[#1f65e9] text-white px-4 py-2 rounded-md hover:bg-blue-400-600 w-[80%] max-w-[180px] h-[44px] mx-auto">
              Submit Password
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const InvoiceNavbar = dynamic(() => Promise.resolve(InvoiceNavbarComponent), {
  ssr: false,
});

export default InvoiceNavbar;
