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
        subtitle: "Bespoke advisory and transaction services for premium residential and commercial assets.",
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
    },
    education: {
        title: "Education Services",
        subtitle: "Strategic consulting and development solutions for modern educational institutions.",
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
        subtitle: "Advisory and investment solutions for luxury hospitality and lifestyle assets.",
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
    },
};

export default async function ServicesPage({ params }) {
    // Await the params promise
    const { category } = await params;
    const current = servicesData[category] ?? servicesData["real-estate"];
    const banner = categoryBanners[category] || categoryBanners["real-estate"];

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