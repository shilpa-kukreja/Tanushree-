"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Footer from "../componats/Footer";
import Header from "../componats/Header";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!res.ok) throw new Error();

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  } catch (error) {
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
   
         
    
    <div className="min-h-screen bg-gray-50">
     <Header />

      <img 
        src="/assets/img/image/Contacts.png"
        alt={"Banner"}
        className="w-full h-auto object-cover  pt-20"
      />

      {/* HERO */}
      {/* <section className="pt-32 pb-20  text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 text-[#1b3163]"
        >
          Contact Our Real Estate Experts
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 text-[#1b3163]">
          Let us help you buy, sell, or invest in premium properties.
        </p>
      </section> */}
      <section className="sm:pt-20 pt-12   sm:pb-32 pb-16 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fade}
                className="max-w-6xl mx-auto px-6"
              >
                <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
                  Contact Our 
                </p>
      
                <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
                  Real  <span className="font-medium text-[#1b3163]">Estate Experts</span>
                </h1>
      
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                   Let us help you buy, sell, or invest in premium properties.  
                </p>
              </motion.div>
            </section>

      {/* CONTENT */}
      <section className="sm:py-20 py-12 px-4 bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
           <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/20 backdrop-blur-lg rounded-xl p-12  border border-white/30 max-w-xl mx-auto hover:scale-100 transition-transform duration-500"
    >
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-8 text-center">
        Why Work With Us
      </h2>

      {/* Benefits List */}
      <ul className="space-y-5 text-lg md:text-xl text-gray-800">
        <li className="font-semibold flex items-center gap-3">
          <span className="text-amber-500 text-2xl">🏆</span> 20+ Years Real Estate Experience
        </li>
        <li className="font-semibold flex items-center gap-3">
          <span className="text-amber-500 text-2xl">🏢</span> Luxury Residential & Commercial Properties
        </li>
        <li className="font-semibold flex items-center gap-3">
          <span className="text-amber-500 text-2xl">🤝</span> Trusted by 1,000+ Clients
        </li>
        <li className="font-semibold flex items-center gap-3">
          <span className="text-amber-500 text-2xl">⚡</span> Fast & Confidential Service
        </li>
      </ul>

      {/* Contact Info */}
      <div className="mt-12 border-t border-amber-400/50 pt-8 text-gray-800 space-y-4">
        <div>
          <p className="font-bold text-[#c79a28]">📍 Office</p>
          <p className="font-medium">SE-107, Shastri Nagar, Ghaziabad, 201001</p>
        </div>

        <div>
          <p className="font-bold text-[#c79a28]">📞 Phone</p>
          <p className="font-medium">+91 99999 98811</p>
        </div>

        <div>
          <p className="font-bold text-[#c79a28]">✉ Email</p>
          <p className="font-medium">info@tanushreegroup.com</p>
        </div>
      </div>

      {/* Optional Footer Badge */}
      <div className="mt-8 text-center text-sm text-[#c79a28] font-semibold">
        Investor-Grade Luxury Real Estate
      </div>
    </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-md border-2 border-[#c79a28] shadow-xl sm:p-10 px-5 py-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Request a Consultation
            </h2>

            {success ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Our agent will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-[#b59b31]  focus:ring-2 focus:ring-[#b59b31]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-[#b59b31]  focus:ring-2 focus:ring-[#b59b31]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-[#b59b31]  focus:ring-2 focus:ring-[#b59b31]"
                />

                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-[#b59b31]  focus:ring-2 focus:ring-[#b59b31]"
                >
                  <option value="">Property Interest</option>
                  <option>Buy Property</option>
                  <option>Sell Property</option>
                  <option>Rent Property</option>
                  <option>Investment</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-[#b59b31] focus:ring-2  focus:ring-[#b59b31]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#c79a28] to-[#b59b31] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>

  );
}
