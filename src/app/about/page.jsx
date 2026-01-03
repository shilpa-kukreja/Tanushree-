"use client";

import { motion } from "framer-motion";
import Header from "../componats/Header";
import Footer from "../componats/Footer";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#111]">
      <Header />

       <img 
        src="/assets/img/image/Abouts.png"
        alt={"Banner"}
        className="w-full h-auto object-cover  pt-20"
      />

      {/* HERO */}
      <section className="sm:pt-20 pt-12  sm:pb-32 pb-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="max-w-6xl mx-auto px-6"
        >
          <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
            Premier Real Estate Advisory
          </p> 

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Redefining <span className="font-medium text-[#1b3163]">Luxury Living</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A boutique real estate firm offering exclusive residences,
            investment-grade assets, and off-market opportunities.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="uppercase text-center sm:text-left tracking-[0.3em] text-[#c79a28] mb-6">
              Our Philosophy
            </p>

            <h2 className="text-4xl text-center sm:text-left md:text-5xl font-light mb-10 leading-tight">
              Where Architecture <br /> Meets Investment Intelligence
            </h2>

            <p className="text-gray-700 text-justify sm:text text-lg leading-relaxed mb-6">
              We advise a global clientele of investors, entrepreneurs, and
              family offices on acquiring premium real estate assets in the
              world’s most sought-after locations.
            </p>

            <p className="text-gray-700 text-lg text-justify sm:text leading-relaxed">
              Our expertise lies in discretion, precision, and delivering
              value beyond the transaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/assets/img/image/004.jpeg"
              alt="Luxury Real Estate"
              className="rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="sm:py-28 py-14 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-16 text-center">
            {[
              { number: "20+", label: "Years of Expertise" },
              { number: "₹5,000Cr+", label: "Transactions" },
              { number: "1,000+", label: "Private Clients" },
              { number: "Global", label: "Investor Network" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b3163] mb-3">
                  {item.number}
                </h3>

                <p className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 leading-relaxed max-w-[140px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="sm:py-32 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6">
            Our Standard
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-20">
            Principles That Define Us
          </h2>

          <div className="grid md:grid-cols-3 sm:gap-14 gap-8">
            {[
              {
                title: "Discretion",
                desc: "Confidential advisory tailored for high-value transactions.",
              },
              {
                title: "Expertise",
                desc: "Data-driven insights and strategic market positioning.",
              },
              {
                title: "Legacy",
                desc: "Building long-term wealth through iconic real estate.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-[#bfa760] rounded-2xl p-12 hover:border-[#bfa760]/50 transition"
              >
                <h3 className="text-2xl font-light mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sm:py-36 py-12 bg-[#f7f6f3] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-10"
        >
          Private Access to <br /> Exceptional Properties
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Designed for discerning clients seeking privacy, precision,
          and premium opportunities.
        </p>

        {/* <a
          href="/contact"
          className="group relative overflow-hidden text-[#1b3163] px-12 py-4 rounded-xl
bg-gradient-to-r from-[#e2b54d] via-[#faea7f] to-[#ebbd4b]
shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50
transition-all duration-300 hover:scale-105"
        >
            <span className="absolute inset-0 
  bg-gradient-to-r from-transparent via-white/60 to-transparent
  animate-shine" />
          Request Consultation
        </a> */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760]  uppercase tracking-widest text-sm bg-[#bfa760] text-white transition rounded-full"
        >
          Request Consultation
        </a>
      </section>

      <Footer />
    </div>
  );
}
