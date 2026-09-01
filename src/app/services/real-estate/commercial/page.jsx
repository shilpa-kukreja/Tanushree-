import { AnimatedContent } from "@/app/componats/AnimatedContent";
import Footer from "@/app/componats/Footer";
import Header from "@/app/componats/Header";

const banner = "/assets/img/image/commercial.jpeg";

const commercialData = {
  title: "Tailored Commercial Property Solutions",
  subtitle:
    "Expert guidance and investment advisory for high-value commercial spaces and business-ready properties.",

  // projects: [
  //   {
  //     name: "Tanushree Arcade (Commercial)",
  //     images: [
  //       "/assets/img/image/Artboard 5.jpg",
  //       "/assets/img/image/Artboard 6.jpg",
  //       "/assets/img/image/Artboard 7.jpg",
  //       "/assets/img/image/Artboard 8.jpg",
  //       "/assets/img/image/Artboard 9.jpg",
  //       "/assets/img/image/Artboard 10.jpg",
  //       "/assets/img/image/Artboard 11.jpg",
  //       "/assets/img/image/Artboard 12.jpg",
  //     ],
  //   },
  // ],

  processTitle: "OUR PROCESS",
  processHeading: "A Strategic, Client-Driven Journey",

  process: [
    "Initial Consultation",
    "Market Research & Insights",
    "Property Evaluation",
    "Long-Term Asset Advisory",
  ],

  ctaTitle: "A Private Conversation About Your Property Plans",
  ctaText:
    "Speak with experienced advisors guiding buyers and investors toward valuable residential opportunities.",
  ctaButton: "SCHEDULE CONSULTATION",
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