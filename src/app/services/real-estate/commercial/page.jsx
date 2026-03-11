import { AnimatedContent } from "@/app/componats/AnimatedContent";
import Footer from "@/app/componats/Footer";
import Header from "@/app/componats/Header";

const banner = "/assets/img/image/commercial.jpeg";

const commercialData = {
  title: "Commercial Real Estate",
  subtitle:
    "Strategic advisory and acquisition services for premium commercial properties and business spaces.",

  services: [
    {
      title: "Office Spaces",
      desc: "Acquisition and leasing advisory for grade-A office developments.",
    },
    {
      title: "Retail Spaces",
      desc: "Strategic leasing for high-footfall retail destinations.",
    },
    {
      title: "Commercial Investment",
      desc: "High-yield investment opportunities in commercial real estate.",
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
  ],
};

export default function CommercialPage() {
  return (
    <div className="bg-white text-[#111]">
      <Header />

      <AnimatedContent
        category="commercial"
        current={commercialData}
        banner={banner}
      />

      <Footer />
    </div>
  );
}