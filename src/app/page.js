import AboutUs from "./componats/AboutUs";
import Footer from "./componats/Footer";
import Header from "./componats/Header";
import HomeSlider from "./componats/HomeSlider";
import ImageSec from "./componats/ImageSec";
import MissionStats from "./componats/MissionStats";
import OurExpertise from "./componats/OurExpertise";
import OurProjects from "./componats/OurProjects";
import ParallaxSection from "./componats/ParallaxSection";
import ReviewsSection from "./componats/ReviewsSection";
import WhyChooseUs from "./componats/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative">
      

      {/* GLOBAL BACKGROUND VIDEO */}
      <div className="fixed inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/img/background/Palm.mp4" type="video/mp4" />
        </video>

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* PAGE CONTENT */}
      <Header />
      <HomeSlider />
      <AboutUs />

      <ImageSec img="/assets/img/image/COM-2.jpg" />

      <OurExpertise />

      <ParallaxSection
        img="/assets/img/image/Education-HOME-2.jpg"
        
      />

      <MissionStats />

      <ImageSec img="/assets/img/image/Hospitality HOME (1).jpg" />

      <WhyChooseUs />

      <ImageSec img="/assets/img/image/Group1.jpg" />

      <ReviewsSection />
      {/* <OurProjects /> */}
      <Footer />
    </div>
  );
}

