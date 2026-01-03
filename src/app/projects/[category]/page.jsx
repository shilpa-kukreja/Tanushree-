"use client";

import { motion } from "framer-motion";
import Header from "../componats/Header";
import Footer from "../componats/Footer";


const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

/* =======================
   PROJECTS DATA
======================= */
const projectsData = {
    "real-estate": {
        title: "Real Estate Projects",
        subtitle: "Iconic residential and commercial developments in prime locations.",
        projects: [
            {
                name: "Signature Luxury Residences",
                location: "Mumbai",
                desc: "Ultra-luxury residences designed for elite urban living.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "Premium Commercial Tower",
                location: "Dubai",
                desc: "Grade-A commercial tower with global corporate tenants.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "Waterfront Villas",
                location: "Pune",
                desc: "Exclusive villas with panoramic waterfront views.",
                image: "/assets/img/banner/banner.png",
            },
        ],
    },

    education: {
        title: "Education Projects",
        subtitle: "Modern campuses and institutions shaping the future of learning.",
        projects: [
            {
                name: "International School Campus",
                location: "Bangalore",
                desc: "World-class K-12 campus with smart learning infrastructure.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "University Expansion Project",
                location: "Delhi NCR",
                desc: "Large-scale academic expansion with global partnerships.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "Skill Development Institute",
                location: "Ahmedabad",
                desc: "Industry-aligned vocational training campus.",
                image: "/assets/img/banner/banner.png",
            },
        ],
    },

    hospitality: {
        title: "Hospitality Projects",
        subtitle: "Luxury hotels, resorts, and lifestyle destinations.",
        projects: [
            {
                name: "Beachfront Luxury Resort",
                location: "Goa",
                desc: "Five-star resort with private villas and wellness spa.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "Boutique Business Hotel",
                location: "Dubai",
                desc: "High-end business hotel catering to global executives.",
                image: "/assets/img/banner/banner.png",
            },
            {
                name: "Fine Dining Destination",
                location: "Mumbai",
                desc: "Award-winning restaurant with premium leasing strategy.",
                image: "/assets/img/banner/banner.png",
            },
        ],
    },
};


export default function ProjectsPage({ params }) {
    const category = params.category ?? "real-estate";
    const current = projectsData[category] ?? projectsData["real-estate"];

    return (
        <div className="bg-white text-[#111]">
            <Header />

            {/* ================= HERO ================= */}
            <section className="pt-44 pb-32 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fade}
                    className="max-w-6xl mx-auto px-6"
                >
                    <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6 text-sm">
                        Our Portfolio
                    </p>

                    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
                        Landmark{" "}
                        <span className="font-medium text-[#821714]">
                            {current.title}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        {current.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* ================= PROJECTS GRID ================= */}
            <section className="py-32 px-6 bg-[#f7f6f3]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                    {current.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fade}
                            className="group bg-white border border-black/10 rounded-2xl overflow-hidden 
                   hover:border-[#bfa760]/60 transition"
                        >
                            {/* IMAGE */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-700"
                                />
                                {/* GOLD OVERLAY */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-10">
                                <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-3">
                                    {project.location}
                                </p>

                                <h3 className="text-2xl font-light mb-4 group-hover:text-[#821714] transition">
                                    {project.name}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="py-36 text-center bg-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-light mb-10"
                >
                    Explore Our Exclusive Developments
                </motion.h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
                    Discover investment-ready projects crafted with excellence and vision.
                </p>

                <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760] text-[#bfa760] uppercase tracking-widest text-sm hover:bg-[#bfa760] hover:text-white transition rounded-full"
                >
                    Enquire Now
                </a>
            </section>

            <Footer />
        </div>
    );
}
