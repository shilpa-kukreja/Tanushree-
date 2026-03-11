// import { AnimatedContent } from "@/app/componats/AnimatedContent";
// import Footer from "@/app/componats/Footer";
// import Header from "@/app/componats/Header";



// const categoryBanners = {
//     "real-estate": "/assets/img/image/Real.png",
//     education: "/assets/img/image/Education.png",
//     hospitality: "/assets/img/image/hospitality.png",
// };

// const servicesData = {
//     "real-estate": {
//         title: "Real Estate Services",
//         subtitle: "Bespoke advisory and transaction services for premium residential and commercial assets.",

//         services: [
//             {
//                 title: "Luxury Residential Sales",
//                 desc: "Advisory and representation for villas, penthouses, and signature residences in prime locations.",
//             },
//             {
//                 title: "Commercial Assets",
//                 desc: "Strategic acquisition and disposition of grade-A office, retail, and mixed-use developments.",
//             },
//             {
//                 title: "Investment Advisory",
//                 desc: "Data-driven guidance for long-term wealth creation and portfolio diversification.",
//             },
//         ],
//         image: 
//     },
//     education: {
//         title: "Education Services",
//         subtitle: "Strategic consulting and development solutions for modern educational institutions.",
//         services: [
//             {
//                 title: "School Consulting",
//                 desc: "Advisory for K-12 institutions covering operations, branding, and growth strategy.",
//             },
//             {
//                 title: "University Partnerships",
//                 desc: "Facilitating national and international academic collaborations and alliances.",
//             },
//             {
//                 title: "Campus Development",
//                 desc: "End-to-end planning, land advisory, and execution for educational campuses.",
//             },
//         ],
//     },
//     hospitality: {
//         title: "Hospitality Services",
//         subtitle: "Advisory and investment solutions for luxury hospitality and lifestyle assets.",
//         link : "https://tanushreegrandbanquets.com/",
//         services: [
//             {
//                 title: "Hotel & Resort Advisory",
//                 desc: "Consulting for luxury hotels, resorts, and branded residences.",
//             },
//             {
//                 title: "Restaurant Leasing",
//                 desc: "Strategic leasing for premium F&B destinations in prime locations.",
//             },
//             {
//                 title: "Hospitality Investments",
//                 desc: "High-yield hospitality investment advisory and portfolio structuring.",
//             },
//         ],
//         image:
//     },
// };

// export default async function ServicesPage({ params }) {
//     // Await the params promise
//     const { category } = await params;
//     const current = servicesData[category] ?? servicesData["real-estate"];
//     const banner = categoryBanners[category] || categoryBanners["real-estate"];

//     return (
//         <div className="bg-white text-[#111]">
//             <Header />
//             <AnimatedContent
//                 category={category}
//                 current={current}
//                 banner={banner}
//             />
//             <Footer />
//         </div>
//     );
// }


import { AnimatedContent } from "@/app/componats/AnimatedContent";
import Footer from "@/app/componats/Footer";
import Header from "@/app/componats/Header";

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

    showServices: true,

    services: [
      {
        title: "Luxury Residential Sales",
        desc: "Advisory and representation for villas, penthouses, and signature residences in prime locations.",
      },
      {
        title: "Commercial Assets",
        desc: "Strategic acquisition and disposition of grade-A office, retail, and mixed-use developments.",
      },
      {
        title: "Investment Advisory",
        desc: "Data-driven guidance for long-term wealth creation and portfolio diversification.",
      },
    ],

    projects: [
      {
        name: "Tanushree Arcade (Commercial)",
        images: [
          "/assets/img/image/Artboard 5.jpg",
          "/assets/img/image/Artboard 6.jpg",
          "/assets/img/image/Artboard 7.jpg",
          "/assets/img/image/Artboard 8.jpg",
          "/assets/img/image/Artboard 9.jpg",
          "/assets/img/image/Artboard 10.jpg",
          "/assets/img/image/Artboard 11.jpg",
          "/assets/img/image/Artboard 12.jpg",
        ],
      },
      {
        name: "Krishna Kunj (Residential)",
        images: [
          "/assets/img/image/Artboard 1.jpg",
          "/assets/img/image/Artboard 2.jpg",
          "/assets/img/image/Artboard 3.jpg",
          "/assets/img/image/Artboard 4.jpg",
          "/assets/img/image/Krishna 1.jpg",
          "/assets/img/image/Krishna 2.jpg",
          "/assets/img/image/Krishna 3.jpg",
          "/assets/img/image/Krishna 4.jpg",
        ],
      },
    ],
  },

  education: {
    title: "Education Services",
    subtitle:
      "Strategic consulting and development solutions for modern educational institutions.",

    showServices: true,

    services: [
      {
        title: "School Consulting",
        desc: "Advisory for K-12 institutions covering operations, branding, and growth strategy.",
      },
      {
        title: "University Partnerships",
        desc: "Facilitating national and international academic collaborations and alliances.",
      },
      {
        title: "Campus Development",
        desc: "End-to-end planning, land advisory, and execution for educational campuses.",
      },
    ],
  },

  hospitality: {
    title: "Hospitality Services",
    subtitle:
      "Advisory and investment solutions for luxury hospitality and lifestyle assets.",

    link: "https://tanushreegrandbanquets.com/",

    showServices: true,

    services: [
      {
        title: "Hotel & Resort Advisory",
        desc: "Consulting for luxury hotels, resorts, and branded residences.",
      },
      {
        title: "Restaurant Leasing",
        desc: "Strategic leasing for premium F&B destinations in prime locations.",
      },
      {
        title: "Hospitality Investments",
        desc: "High-yield hospitality investment advisory and portfolio structuring.",
      },
    ],

    images: [
      "/assets/img/image/image1 (1).jpeg",
      "/assets/img/image/image1 (2).jpeg",
      "/assets/img/image/image1 (3).jpeg",
      "/assets/img/image/image1 (4).jpeg",
    ],
  },
};

export default async function ServicesPage({ params }) {
  const { category } = await params;

  const current = servicesData[category] ?? servicesData["real-estate"];

  const banner =
    categoryBanners[category] || categoryBanners["real-estate"];

  return (
    <div className="bg-white text-[#111]">
      <Header />

      <AnimatedContent
        category={category}
        current={current}
        banner={banner}
      />

      <Footer />
    </div>
  );
}