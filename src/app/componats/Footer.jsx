"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function Footer() {
  const [openCompany, setOpenCompany] = useState(false);
  const [openVerticals, setOpenVerticals] = useState(false);

  return (
    <footer className="bg-[#f5eee1] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div>
            <img src="/assets/img/logo/logo.png" alt="logo" className="mb-6" />

            <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-6">
              Established 2006
            </p>

            <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
              Established in 2006, Tanushree Group is a diversified organization delivering excellence across Real Estate, Education, and Hospitality. Built on integrity, trust, and long-term vision, we create value that endures.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            {/* Desktop */}
            <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Company
            </h4>
            <ul className="hidden lg:block space-y-4 text-gray-600 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                // { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
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

            {openCompany && (
              <ul className="lg:hidden mt-4 space-y-4 text-gray-600 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  // { label: "Projects", href: "/projects" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#bfa760] transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* VERTICALS */}
          {/* VERTICALS */}
          <div>
            {/* Desktop */}
            <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Verticals
            </h4>

            <ul className="hidden lg:block space-y-4 text-gray-600 text-sm">
              {[
                { name: "Real Estate", slug: "real-estate" },
                { name: "Education", slug: "education" },
                { name: "Hospitality", slug: "hospitality" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services?category=${item.slug}`}
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

            {openVerticals && (
              <ul className="lg:hidden mt-4 space-y-4 text-gray-600 text-sm">
                {[
                  { name: "Real Estate", slug: "real-estate" },
                  { name: "Education", slug: "education" },
                  { name: "Hospitality", slug: "hospitality" },
                ].map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services?category=${item.slug}`}
                      className="hover:text-[#bfa760] transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>


          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-sm text-gray-600">
              <p>
                SE-107,  <br />
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
            © {new Date().getFullYear()}{" "}
            <span className="text-black font-medium">Tanushree Group</span>. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
            alt="call"
            className="relative w-5 h-5"
          />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="//wa.me/+91 99999 98811"
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
            alt="whatsapp"
            className="relative w-5 h-5"
          />
        </a>

      </div>

    </footer>


  );
}
