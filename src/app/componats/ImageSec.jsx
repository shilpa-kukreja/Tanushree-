// import Image from 'next/image'
// import React from 'react'

// function ImageSec({img = null}) {
//   return (
//     <div>
//         <Image src={img} alt="slider" width={1920} height={500} />
//     </div>
//   )
// }

// export default ImageSec

// "use client";
// import React, { useRef, useEffect, useState } from 'react';

// const ImageSec = ({ img, isParallax = false }) => {
//   const containerRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);

//   // Intersection observer for fade-in effect
//   useEffect(() => {
//     if (!containerRef.current) return;
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { 
//         threshold: 0.2,
//         rootMargin: '50px'
//       }
//     );

//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   if (isParallax) {
//     return (
//       <div 
//         ref={containerRef}
//         className="relative overflow-hidden h-[60vh] min-h-[800px] max-h-[800px] w-full group"
//       >
//         {/* Fixed background image */}
//         <div className="fixed inset-0 w-full   -z-10">
//           <img
//             src={img}
//             alt="Parallax Background"
//             className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
//             loading="lazy"
//           />
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
//         </div>
        
//         {/* Spacer to maintain layout */}
//         <div className="h-[60vh] min-h-[400px] max-h-[600px]"></div>
        
//         {/* Content - positioned absolutely over the fixed background */}
//         <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
//           <div 
//             className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${
//               isInView 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-12'
//             }`}
//           >
//             <div className="inline-block mb-6">
//               <div className="w-16 h-1 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-full mb-2 mx-auto"></div>
//               <div className="w-12 h-1 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-full mx-auto"></div>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Crafting
//               <span className="block text-[#c49827] mt-2">Architectural Marvels</span>
//             </h2>
            
//             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
//               Where visionary design meets exceptional craftsmanship to create 
//               spaces that inspire and endure for generations
//             </p>
            
//             {/* Decorative line */}
//             <div className="flex justify-center items-center gap-6 mt-10">
//               <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
//               <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
//               <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Original non-parallax version - much smaller
//   return (
//     <div className="relative w-full h-auto ">
//       <img
//         src={img}
//         alt="Banner"
//         className="w-full h-auto object-cover rounded-lg shadow-lg"
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export default ImageSec;

"use client";
import React, { useRef, useEffect, useState } from "react";

const ImageSec = ({ img, isParallax = false }) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);

  /* Parallax scroll effect */
  useEffect(() => {
    if (!isParallax) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setOffset(rect.top * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isParallax]);

  /* Fade-in observer */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  /* ---------- NORMAL IMAGE VERSION ---------- */
  return (
    <div className="w-full">
      <img
        src={img}
        alt="Section Image"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default ImageSec;
