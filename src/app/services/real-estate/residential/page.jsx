import { AnimatedContent } from "@/app/componats/AnimatedContent";
import Footer from "@/app/componats/Footer";
import Header from "@/app/componats/Header";

const banner = "/assets/img/image/residential.jpeg";

const residentialData = {
  title: "Premium Residential Living",
  subtitle:
    "Strategic guidance and curated property solutions for modern homes and smart residential investments.",

  projects: [
    {
      name: "Krishna Tanushree Kunj (Residential)",
      images: [
        "/assets/img/image/Krishnaa 1.jpg",
        "/assets/img/image/Krishnaa 2.jpg",
        "/assets/img/image/Krishnaa 3.jpg",
        "/assets/img/image/Krishnaa 4.jpg",
        "/assets/img/image/Krishnaa 5.jpg",
        "/assets/img/image/Krishnaa 6.jpg",
        "/assets/img/image/Krishnaa 7.jpg",
        "/assets/img/image/Krishnaa 8.jpg",
        "/assets/img/image/Krishnaa 9.jpg",
      ],
    },
  ],

  processTitle: "OUR PROCESS",
  processHeading: "A Thoughtful, Client-Focused Journey",

  process: [
    "Discovery Meeting",
    "Market Analysis & Planning",
    "Property Selection",
    "Ongoing Investment Guidance",
  ],

  ctaTitle: "A Personal Discussion About Your Home Goals",
  ctaText:
    "Connect with trusted property advisors helping buyers and investors navigate premium residential opportunities.",
  ctaButton: "BOOK CONSULTATION",
};

export default function ResidentialPage() {
  return (
    <div className="bg-white text-[#111]">
      <Header />

      <AnimatedContent
        category="residential"
        current={residentialData}
        banner={banner}
      />

      <Footer />
    </div>
  );
}