"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const serviceCategories = [
  { name: "Real Estate", slug: "real-estate" },
  { name: "Education", slug: "education" },
  { name: "Hospitality", slug: "hospitality" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Add this
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setIsMounted(true); // Component is now mounted on client
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    
    // Only run on client side
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header classes without conditional logic that changes between server/client
  const getHeaderClasses = () => {
    // On server or initial render, use default classes
    if (!isMounted) {
      // Server-side render - use a consistent default
      return "fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 bg-white/95 shadow-md";
    }
    
    // Client-side only logic
    if (isHome) {
      return isScrolled 
        ? "fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 bg-white/95 shadow-xl"
        : "fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 bg-transparent";
    } else {
      return "fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 bg-[#fcfbf4] shadow-md";
    }
  };

  // Fix 1: Remove line breaks from class strings
  // Fix 2: Use consistent class names for the gradient button
  
  const getGradientButtonClasses = () => {
    return [
      "group",
      "relative",
      "hidden",
      "md:block",
      "overflow-hidden",
      "px-6",
      "py-3",
      "rounded-xl",
      "bg-gradient-to-r",
      "from-[#e2b54d]",
      "via-[#faea7f]",
      "to-[#ebbd4b]",
      "shadow-lg",
      "shadow-yellow-500/30",
      "hover:shadow-yellow-500/50",
      "transition-all",
      "duration-300",
      "hover:scale-105"
    ].join(" ");
  };

  const getShineSpanClasses = () => {
    return [
      "absolute",
      "inset-0",
      "bg-gradient-to-r",
      "from-transparent",
      "via-white/60",
      "to-transparent",
      "animate-shine"
    ].join(" ");
  };

  const getMobileCTAClasses = () => {
    return [
      "block",
      "text-center",
      "mt-10",
      "py-4",
      "rounded-xl",
      "font-bold",
      "bg-gradient-to-r",
      "from-[#e2b54d]",
      "via-[#faea7f]",
      "to-[#ebbd4b]",
      "text-blue-900",
      "shadow-lg"
    ].join(" ");
  };

  const getFooterCallClasses = () => {
    return [
      "group",
      "relative",
      "flex",
      "h-14",
      "w-14",
      "items-center",
      "justify-center",
      "rounded-full",
      "bg-gradient-to-r",
      "from-[#e2b54d]",
      "via-[#faea7f]",
      "to-[#ebbd4b]",
      "shadow-lg",
      "shadow-yellow-500/30",
      "hover:shadow-yellow-500/50",
      "transition-all",
      "duration-300"
    ].join(" ");
  };

  const getFooterWhatsappClasses = () => {
    return [
      "group",
      "relative",
      "flex",
      "h-14",
      "w-14",
      "items-center",
      "justify-center",
      "rounded-full",
      "bg-gradient-to-r",
      "from-green-500",
      "to-emerald-600",
      "shadow-lg",
      "shadow-green-500/30",
      "hover:shadow-green-500/50",
      "transition-all",
      "duration-300"
    ].join(" ");
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className={getHeaderClasses()}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/img/logo/logo.png"
              alt="logo"
              width={220}
              height={90}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="font-medium hover:text-golden">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-golden">
              About
            </Link>

            {/* SERVICES */}
            <div className="relative group">
              <span className="cursor-pointer font-medium hover:text-golden">
                Services
              </span>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-64 bg-white rounded-md shadow-2xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {serviceCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/services/${cat.slug}`}
                    className="block px-8 py-4 text-sm hover:bg-[#f7f6f3] transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="font-medium hover:text-golden">
              Contact
            </Link>
          </nav>

          {/* FIXED: No line breaks in class string */}
          <button className={getGradientButtonClasses()}>
            <span className={getShineSpanClasses()} />
            
            <div className="relative flex items-center justify-center space-x-3">
              <span className="font-bold capitalize text-blue-900 tracking-wide">
                Get Premium
              </span>
              <svg
                className="w-5 h-5 text-blue-900 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Image
            src="/assets/img/logo/logo.png"
            alt="logo"
            width={160}
            height={60}
          />
          <button
            className="text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-6 space-y-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium"
          >
            About
          </Link>

          {/* SERVICES ACCORDION */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full flex justify-between items-center text-lg font-medium"
            >
              Services
              <span className="text-xl">
                {serviceOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300
              ${serviceOpen ? "max-h-60 mt-4" : "max-h-0"}`}
            >
              <div className="ml-4 space-y-3">
                {serviceCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/services/${cat.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-gray-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium"
          >
            Contact
          </Link>

          {/* CTA - FIXED: No line breaks */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={getMobileCTAClasses()}
          >
            GET PREMIUM
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;