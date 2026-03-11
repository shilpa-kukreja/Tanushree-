import { AnimatedContent } from "@/app/componats/AnimatedContent";
import Footer from "@/app/componats/Footer";
import Header from "@/app/componats/Header";

const banner = "/assets/img/image/Real.png";

const residentialData = {
  title: "Residential Real Estate",
  subtitle:
    "Premium advisory and transaction services for luxury residential developments and signature homes.",

  services: [
    {
      title: "Luxury Apartments",
      desc: "Advisory for high-end apartments and residential communities in prime locations.",
    },
    {
      title: "Villas & Independent Homes",
      desc: "Exclusive representation for villas and independent residential properties.",
    },
    {
      title: "Residential Investment",
      desc: "Strategic property investments for long-term wealth and rental income.",
    },
  ],

  projects: [
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