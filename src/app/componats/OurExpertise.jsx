"use client";
import React, { useState } from "react";

const expertiseData = [
 {
  id: 1,
  category: "Real Estate",
  tagline: "Building Excellence. Empowering Aspirations.",
  description:
    "At Tanushree Group, real estate is more than development. It is about creating spaces where lives grow, futures feel secure, and communities flourish. Every project reflects thoughtful planning, ethical execution, and enduring quality.",
  stats: ["2006 Founded", "100+ Projects", "5000+ Happy Families"],
  color: "#d6b685",
  image: "/assets/img/image/003.jpg",
},

  {
    id: 2,
    category: "Education",
    tagline: "Shaping Minds for a Brighter Tomorrow",
    description:
      "Education at Tanushree Group is a foundation for lifelong growth. We create learning environments that nurture curiosity, confidence, and capability, empowering individuals to succeed beyond classrooms.",
    stats: ["15+ Years Experience", "10,000+ Students", "98% Success Rate"],
    color: "#d6b685",
    image: "/assets/img/image/001.jpg",
  },
  {
    id: 3,
    category: "Hospitality",
    tagline: "Experiences Crafted with Care",
    description:
      "Hospitality is an art of connection. At Tanushree Group, we go beyond accommodations to create warm, refined experiences defined by comfort, attention, and genuine care for every guest.",
    stats: ["50+ Properties", "95% Guest Satisfaction", "24/7 Premium Service"],
    color: "#d6b685",
    image: "/assets/img/image/002.jpg",
  },
];

function OurExpertise() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="sm:py-24 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-light leading-tight ">
              Building Dreams Across{" "} <span className="font-medium text-[#1b3163]">Multiple Verticals</span>
          </h1>
          {/* <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Building Dreams Across{" "}
            <span className="bg-gradient-to-r from-[#c49827] to-yellow-400 bg-clip-text text-transparent">
              Multiple Verticals
            </span>
          </h2> */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto text-justify">
            For nearly two decades, Tanushree Group has delivered excellence across diverse sectors, guided by trust, integrity, and a commitment to lasting value since 2006.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.category}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-1 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-200">Since 2006</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.tagline}
                </p>
                <p
                  className={`text-gray-600 mb-6 transition-all duration-500 ${
                    expandedCard === item.id ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center gap-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>{expandedCard === item.id ? "Show Less" : "Read More"}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedCard === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                 <button className="group relative  overflow-hidden px-6 py-3 rounded-xl
bg-gradient-to-r from-[#e2b54d] via-[#faea7f] to-[#ebbd4b]
shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50
transition-all duration-300 hover:scale-105">

          {/* CONTINUOUS SHINE */}
          <span className="absolute inset-0 
  bg-gradient-to-r from-transparent via-white/60 to-transparent
  animate-shine" />

          {/* CONTENT */}
          <div className="relative flex items-center justify-center space-x-3">
            <span className="font-bold capitalize text-blue-900 tracking-wide">
              LERN MORE
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
                </div>
              </div>

              {/* Premium Golden Border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent bg-clip-border transition-all duration-500 group-hover:border-gradient-to-r"
                style={{
                  borderImage: `linear-gradient(45deg, ${item.color}, gold, ${item.color}) 1`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
