"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Header from "../componats/Header";
import Footer from "../componats/Footer";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* =======================
   SERVICES DATA (ONLY PAGE)
======================= */

const categoryBanners = {
  "real-estate": "/assets/img/image/Real.png",
  education: "/assets/img/image/Education.png",
  hospitality: "/assets/img/image/hospitality.png",
};


const servicesData = {
  "real-estate": {
    title: "Real Estate Services",
    subtitle:
      "Bespoke advisory and transaction services for premium residential and commercial assets.",
    services: [
      {
        title: "Luxury Residential Sales",
        desc:
          "Advisory and representation for villas, penthouses, and signature residences in prime locations.",
      },
      {
        title: "Commercial Assets",
        desc:
          "Strategic acquisition and disposition of grade-A office, retail, and mixed-use developments.",
      },
      {
        title: "Investment Advisory",
        desc:
          "Data-driven guidance for long-term wealth creation and portfolio diversification.",
      },
    ],
  },

  education: {
    title: "Education Services",
    subtitle:
      "Strategic consulting and development solutions for modern educational institutions.",
    services: [
      {
        title: "School Consulting",
        desc:
          "Advisory for K-12 institutions covering operations, branding, and growth strategy.",
      },
      {
        title: "University Partnerships",
        desc:
          "Facilitating national and international academic collaborations and alliances.",
      },
      {
        title: "Campus Development",
        desc:
          "End-to-end planning, land advisory, and execution for educational campuses.",
      },
    ],
  },

  hospitality: {
    title: "Hospitality Services",
    subtitle:
      "Advisory and investment solutions for luxury hospitality and lifestyle assets.",
    services: [
      {
        title: "Hotel & Resort Advisory",
        desc:
          "Consulting for luxury hotels, resorts, and branded residences.",
      },
      {
        title: "Restaurant Leasing",
        desc:
          "Strategic leasing for premium F&B destinations in prime locations.",
      },
      {
        title: "Hospitality Investments",
        desc:
          "High-yield hospitality investment advisory and portfolio structuring.",
      },
    ],
  },
};

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "real-estate";

  const current = servicesData[category];

  return (
    <div className="bg-white text-[#111]">
      <Header />


       <img 
        src={categoryBanners[category]}
        alt={current.title}
        className="w-full h-auto object-cover  pt-20"
      />
      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
<section
  className="relative sm:pt-20 pt-12 sm:pb-32 pb-16 text-center bg-cover bg-center"
  // style={{
  //   backgroundImage: `url(${categoryBanners[category]})`,
  // }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/50"></div> */}

  <motion.div
    initial="hidden"
    animate="visible"
    variants={fade}
    className="relative max-w-6xl mx-auto px-6 text-gray-800"
  >
    <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
      Our Expertise
    </p>

    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
      Bespoke{" "}
      <span className="font-medium text-[#1b3163]">
        {current.title}
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      {current.subtitle}
    </p>
  </motion.div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
          {current.services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="bg-white border border-black/10 rounded-2xl p-12 hover:border-[#bfa760]/60 transition-all duration-300"
            >
              <h3 className="text-2xl font-light mb-6">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="sm:py-32 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-20">
            A Refined, Client-First Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              "Consultation",
              "Strategy & Research",
              "Execution",
              "Long-Term Advisory",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t-2 border-[#bfa760] pt-8"
              >
                <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-4">
                  Step {index + 1}
                </p>
                <h4 className="text-lg font-medium text-black">
                  {step}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="sm:py-36 py-12 text-center bg-[#f7f6f3]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-10"
        >
          A Private Conversation About Your Goals
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Engage with experienced advisors trusted by investors and institutions
          across premium markets.
        </p>

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
