"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function Footer() {
  const [openCompany, setOpenCompany] = useState(false);
  const [openVerticals, setOpenVerticals] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll to top - ensure it only runs on client
  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Define consistent class names without line breaks
  const getCallButtonClasses = () => 
    "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110";

  const getWhatsAppButtonClasses = () => 
    "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110";

  const getPingSpanClasses = () => 
    "absolute inset-0 rounded-full animate-ping bg-opacity-30";

  // Company links data
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    // { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  // Vertical links data
  const verticalLinks = [
    { name: "Real Estate", slug: "real-estate" },
    { name: "Education", slug: "education" },
    { name: "Hospitality", slug: "hospitality" },
  ];

  // Show year only on client to avoid hydration mismatch
  const currentYear = isMounted ? new Date().getFullYear() : 2024;

  return (
    <footer className="bg-[#f5eee1] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 mb-20">
          {/* BRAND */}
          <div>
            {/* Use Next.js Image component for logo */}
            <div className="relative w-40 h-16 mb-6">
              <Image
                src="/assets/img/logo/logo.png"
                alt="Tanushree Group Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-6">
              Established 2006
            </p>

            <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
              Established in 2006, Tanushree Group is a diversified organization 
              delivering excellence across Real Estate, Education, and Hospitality. 
              Built on integrity, trust, and long-term vision, we create value that endures.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            {/* Desktop */}
            <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Company
            </h4>
            <ul className="hidden lg:block space-y-4 text-gray-600 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#bfa760] transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Accordion */}
            <button
              onClick={() => setOpenCompany(!openCompany)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b border-black/10"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-black">
                Company
              </span>
              {openCompany ? <Minus size={18} /> : <Plus size={18} />}
            </button>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${openCompany ? 'max-h-60' : 'max-h-0'}`}>
              <ul className="mt-4 space-y-4 text-gray-600 text-sm">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#bfa760] transition block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VERTICALS */}
          <div>
            {/* Desktop */}
            <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Verticals
            </h4>

            <ul className="hidden lg:block space-y-4 text-gray-600 text-sm">
              {verticalLinks.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="hover:text-[#bfa760] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Accordion */}
            <button
              onClick={() => setOpenVerticals(!openVerticals)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b border-black/10"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-black">
                Verticals
              </span>
              {openVerticals ? <Minus size={18} /> : <Plus size={18} />}
            </button>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${openVerticals ? 'max-h-60' : 'max-h-0'}`}>
              <ul className="mt-4 space-y-4 text-gray-600 text-sm">
                {verticalLinks.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="hover:text-[#bfa760] transition block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-sm text-gray-600">
              <p>
                SE-107, <br />
                Shastri Nagar, Ghaziabad, 201001
              </p>

              <p>
                <span className="block text-black font-medium">Phone</span>
                +91 99999 98811
              </p>

              <p>
                <span className="block text-black font-medium">Email</span>
                info@tanushreegroup.com
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-black/10 mb-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>
            © {currentYear}{" "}
            <span className="text-black font-medium">Tanushree Group</span>. All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className="text-black border border-black/20 px-6 py-2 rounded-full hover:border-[#bfa760] hover:text-[#bfa760] transition"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        {/* CALL BUTTON */}
        <a
          href="tel:+91 99999 98811"
          aria-label="Call Us"
          className={getCallButtonClasses()}
        >
          <span className={`${getPingSpanClasses()} bg-[#1b3163]`}></span>
          <div className="relative w-5 h-5">
            {/* Use inline SVG instead of external image */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.2 11.8c-.8-2-1.2-4.1-1.2-6.3 0-.3.2-.5.5-.5zm14 12c-2.2 0-4.3-.4-6.3-1.2l2.3-1.9c1.1.3 2.3.5 3.5.6V18c0 .3-.2.5-.5.5z"/>
            </svg>
          </div>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="//wa.me/+91 99999 98811"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className={getWhatsAppButtonClasses()}
        >
          <span className={`${getPingSpanClasses()} bg-[#25d366]`}></span>
          <div className="relative w-5 h-5">
            {/* Use inline SVG instead of external image */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
              <path d="M17.6 6.3C16 4.7 13.9 3.8 11.7 4c-4.4.4-7.9 4-7.9 8.5 0 1.8.5 3.6 1.5 5.2L4 20l2.5-.7c1.5.8 3.2 1.2 4.9 1.2h.1c4.7 0 8.5-3.8 8.5-8.5.1-2.1-.8-4.2-2.4-5.7zm-5.9 12.2c-1.4 0-2.8-.4-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1 0-4.1 3.4-7.5 7.5-7.5 2 0 3.9.8 5.3 2.2 1.4 1.4 2.2 3.3 2.2 5.3.1 4.1-3.3 7.5-7.5 7.5zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.8-.7-1.3-1.5-1.5-1.9-.1-.4 0-.6.1-.8.1-.2.2-.3.3-.5.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.5-.1-.2-1-2.4-1.4-3.3-.4-.8-.8-.7-1.1-.7-.3 0-.6 0-.9.1-.3.1-.5.3-.7.5-.2.2-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.4-.5 1.6-1 .2-.5.2-1 .1-1.4-.1-.4-.4-.6-.8-.8z"/>
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
}