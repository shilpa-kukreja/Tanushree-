// import React from "react";

// function MissionStats() {
//   return (
//     <section className="relative py-16 px-4 md:px-8 overflow-hidden">
      
//       {/* BACKGROUND VIDEO */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source
//           src="/assets/img/background/Palm.mp4"
//           type="video/mp4"
//         />
//       </video>

//       {/* DARK OVERLAY (Text readable rahe) */}
//       <div className="absolute inset-0 "></div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-6xl mx-auto">

//         {/* Mission Statement Section - Top */}
//         <div className="mb-6 text-center">
//           <div>
//             <div className="text-xl font-normal text-gray-800 leading-[36px]">
//               Our Mission Is Simple Yet Powerful:
//             </div>

//             <h1 className="text-5xl md:text-5xl lg:text-5xl font-light leading-tight">
//               Crafting Digital{" "}
//               <span className="font-medium text-[#821714]">
//                 Excellence Since 2010
//               </span>
//             </h1>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="items-center text-center">

//           {/* Text Content */}
//           <div className="space-y-2">
//             <p className="text-gray-700">
//               <span className="font-bold text-gray-900">Shainubitz</span> was
//               created for leaders who refuse to settle - innovations, founders,
//               and visionaries who believe their workspace should elevate their
//               thinking, reflect
//             </p>

//             <p className="text-gray-700">
//               their journey and inspire their future.
//             </p>

//             <p className="text-gray-700">
//               We are committed to designing environments where ambition meets
//               comfort, productivity meets luxury, and opportunity meets identity.
//               Every detail from the
//             </p>

//             <p className="leading-[28px] text-gray-700">
//               architecture to the amenities is crafted with intention, purpose,
//               and excellence.
//             </p>

//             <div className="mt-4 space-y-2">
//               <div className="text-xl font-light text-gray-800 italic">
//                 Because Success Deserves More Than Space.
//               </div>

//               <div className="text-2xl font-bold text-gray-900">
//                 It Deserves A Stage.
//               </div>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="space-y-3 mt-5">
//             <div className="grid grid-cols-3 text-start gap-6">

//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="p-6">
//                   <div className="flex items-center justify-center">
//                     <div className="mr-2">
//                       <div className="text-3xl font-bold text-gray-900">
//                         AED
//                       </div>
//                       <div className="text-3xl font-bold text-gray-900">
//                         2.4B+
//                       </div>
//                     </div>

//                     <div>
//                       <div className="text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
//                         TRANSACTION VALUE
//                       </div>
//                       <div className="text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
//                         GENERATED
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default MissionStats;


import React from "react";

function MissionStats() {
  return (
    <section
      className="relative bg-white py-8 sm:py-16 px-4 md:px-8"
      style={{
        backgroundImage: "url('/assets/img/background/sec-background.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= TOP TITLE ================= */}
        <div className="mb-6 text-center px-2">
          <div className="text-lg sm:text-xl font-normal text-gray-800 tracking-wide">
            OUR MISSION :
          </div>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
            Building Excellence{" "}
            <span className="font-medium text-[#1b3163]">
              That Goes Beyond Structures
            </span>
          </h1>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="text-center md:text-center">
          {/* TEXT */}
          <div className="space-y-3 px-2 sm:px-6 md:px-0">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <span className="font-bold text-gray-900">To </span>
              create environments that elevate living, inspire learning, and
              enrich experiences. At Tanushree Group, every initiative is guided
              by integrity, thoughtful design,
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              and a responsibility to deliver lasting value.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Since 2006, we have remained committed to building with intention.
              From the spaces we develop to
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              the institutions we nurture and the experiences we curate, every
              detail is shaped with care, clarity, and long-term vision.
            </p>

            {/* QUOTE */}
            <div className="mt-6 space-y-2">
              <div className="text-base sm:text-xl font-light text-gray-800 italic">
                We believe success is not defined by scale alone
              </div>

              <div className="text-lg sm:text-2xl font-bold text-gray-900">
                It is defined by trust earned, promises kept, and impact created.
              </div>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-8 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-start">
              {/* STAT 1 */}
              <div className="p-4 sm:p-6">
                <div className="space-y-1">
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    Nearly Two Decades
                  </div>
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    of Trust
                  </div>
                </div>
              </div>

              {/* STAT 2 */}
              <div className="p-4 sm:p-6">
                <div className="space-y-1">
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    Diverse Expertise Under
                  </div>
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    One Group
                  </div>
                </div>
              </div>

              {/* STAT 3 */}
              <div className="p-4 sm:p-6">
                <div className="space-y-1">
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    Enduring Value
                  </div>
                  <div className="text-xs sm:text-[14px] font-medium text-gray-600 uppercase tracking-[0.2em]">
                    Creation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionStats;
