// "use client";
// import { motion } from "framer-motion";

// const fade = {
//     hidden: { opacity: 0, y: 24 },
//     visible: { opacity: 1, y: 0 },
// };

// export function AnimatedContent({ category, current, banner }) {
//     return (
//         <>
//             <img
//                 src={banner}
//                 alt={current.title}
//                 className="w-full h-auto object-cover pt-20"
//             />

//             {/* ================= HERO ================= */}
//             <section className="relative sm:pt-20 pt-12 sm:pb-32 pb-16 text-center bg-cover bg-center">
//                 <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={fade}
//                     className="relative max-w-6xl mx-auto px-6 text-gray-800"
//                 >
//                     <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
//                         Our Expertise
//                     </p>

//                     <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
//                         Bespoke{" "}
//                         <span className="font-medium text-[#1b3163]">
//                             {current.title}
//                         </span>
//                     </h1>

//                     <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//                         {current.subtitle}
//                     </p>
//                     <p className="text-lg mt-5 md:text-xl text-gray-600 max-w-3xl mx-auto">
//                         {current.link}
//                     </p>
//                 </motion.div>
//             </section>

//             {/* ================= SERVICES ================= */}
//             <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
//                 <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
//                     {current.services.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={fade}
//                             className="bg-white border border-black/10 rounded-2xl p-12 hover:border-[#bfa760]/60 transition-all duration-300"
//                         >
//                             <h3 className="text-2xl font-light mb-6">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 {service.desc}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* ================= PROCESS ================= */}
//             <section className="sm:py-32 py-12 px-6">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6">
//                         Our Process
//                     </p>

//                     <h2 className="text-4xl md:text-5xl font-light mb-20">
//                         A Refined, Client-First Approach
//                     </h2>

//                     <div className="grid md:grid-cols-4 gap-12">
//                         {[
//                             "Consultation",
//                             "Strategy & Research",
//                             "Execution",
//                             "Long-Term Advisory",
//                         ].map((step, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 className="border-t-2 border-[#bfa760] pt-8"
//                             >
//                                 <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-4">
//                                     Step {index + 1}
//                                 </p>
//                                 <h4 className="text-lg font-medium text-black">
//                                     {step}
//                                 </h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ================= CTA ================= */}
//             <section className="sm:py-36 py-12 text-center bg-[#f7f6f3]">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-4xl md:text-6xl font-light mb-10"
//                 >
//                     A Private Conversation About Your Goals
//                 </motion.h2>

//                 <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
//                     Engage with experienced advisors trusted by investors and institutions
//                     across premium markets.
//                 </p>

//                 <a
//                     href="/contact"
//                     className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760] uppercase tracking-widest text-sm bg-[#bfa760] text-white transition rounded-full"
//                 >
//                     Request Consultation
//                 </a>
//             </section>
//         </>
//     );
// }

// "use client";
// import { motion } from "framer-motion";

// const fade = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0 },
// };

// export function AnimatedContent({ category, current, banner }) {
//   return (
//     <>
//       <img
//         src={banner}
//         alt={current.title}
//         className="w-full h-auto object-cover pt-20"
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative sm:pt-20 pt-12 sm:pb-32 pb-16 text-center bg-cover bg-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fade}
//           className="relative max-w-6xl mx-auto px-6 text-gray-800"
//         >
//           <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
//             Our Expertise
//           </p>

//           <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
//             Bespoke{" "}
//             <span className="font-medium text-[#1b3163]">
//               {current.title}
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             {current.subtitle}
//           </p>

//           {current.link && (
//             <a
//               href={current.link}
//               target="_blank"
//               className="block mt-6 text-[#1b3163] underline text-lg"
//             >
//               Visit Tanushreegrandbanquets Website
//             </a>
//           )}
//         </motion.div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
//           {current.services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fade}
//               className="bg-white border border-black/10 rounded-2xl p-12 hover:border-[#bfa760]/60 transition-all duration-300"
//             >
//               <h3 className="text-2xl font-light mb-6">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= REAL ESTATE PROJECTS ================= */}
//       {current.projects && (
//         <section className="sm:py-24 py-12 px-6">
//           <div className="max-w-7xl mx-auto">

//             {current.projects.map((project, i) => (
//               <div key={i} className="mb-20">

//                 <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">
//                   {project.name}
//                 </h2>

//                 <div className="grid md:grid-cols-4 gap-6">
//                   {project.images.map((img, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       className="overflow-hidden rounded-xl"
//                     >
//                       <img
//                         src={img}
//                         alt={project.name}
//                         className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>
//             ))}

//           </div>
//         </section>
//       )}

//       {/* ================= GENERAL IMAGE SECTION (HOSPITALITY) ================= */}
//       {current.images && (
//         <section className="sm:py-24 py-12 px-6">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
//             {current.images.map((img, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="overflow-hidden rounded-xl"
//               >
//                 <img
//                   src={img}
//                   alt="service"
//                   className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ================= PROCESS ================= */}
//       <section className="sm:py-32 py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6">
//             Our Process
//           </p>

//           <h2 className="text-4xl md:text-5xl font-light mb-20">
//             A Refined, Client-First Approach
//           </h2>

//           <div className="grid md:grid-cols-4 gap-12">
//             {[
//               "Consultation",
//               "Strategy & Research",
//               "Execution",
//               "Long-Term Advisory",
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="border-t-2 border-[#bfa760] pt-8"
//               >
//                 <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-4">
//                   Step {index + 1}
//                 </p>

//                 <h4 className="text-lg font-medium text-black">
//                   {step}
//                 </h4>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="sm:py-36 py-12 text-center bg-[#f7f6f3]">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-6xl font-light mb-10"
//         >
//           A Private Conversation About Your Goals
//         </motion.h2>

//         <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
//           Engage with experienced advisors trusted by investors and
//           institutions across premium markets.
//         </p>

//         <a
//           href="/contact"
//           className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760] uppercase tracking-widest text-sm bg-[#bfa760] text-white transition rounded-full"
//         >
//           Request Consultation
//         </a>
//       </section>
//     </>
//   );
// }





// "use client";
// import { motion } from "framer-motion";

// const fade = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0 },
// };

// export function AnimatedContent({ category, current, banner }) {
//   return (
//     <>
//       <img
//         src={banner}
//         alt={current.title}
//         className="w-full h-auto object-cover pt-20"
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative sm:pt-20 pt-12 sm:pb-32 pb-16 text-center bg-cover bg-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fade}
//           className="relative max-w-6xl mx-auto px-6 text-gray-800"
//         >
//           <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
//             Our Expertise
//           </p>

//           <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
//             Bespoke{" "}
//             <span className="font-medium text-[#1b3163]">
//               {current.title}
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             {current.subtitle}
//           </p>

//           {current.link && (
//             <a
//               href={current.link}
//               target="_blank"
//               className="block mt-6 text-[#1b3163] underline text-lg"
//             >
//               Visit Tanushreegrandbanquets Website
//             </a>
//           )}
//         </motion.div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
//           {current.services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fade}
//               className="bg-white border border-black/10 rounded-2xl p-12 hover:border-[#bfa760]/60 transition-all duration-300"
//             >
//               <h3 className="text-2xl font-light mb-6">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= PROJECTS ================= */}
//       {current.projects && (
//         <section className="sm:py-24 py-12 px-6">
//           <div className="max-w-7xl mx-auto">

//             {current.projects.map((project, i) => (
//               <div key={i} className="mb-20">

//                 <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">
//                   {project.name}
//                 </h2>

//                 <div className="grid md:grid-cols-4 gap-6">
//                   {project.images.map((img, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       className="overflow-hidden rounded-xl"
//                     >
//                       <img
//                         src={img}
//                         alt={project.name}
//                         className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>
//             ))}

//           </div>
//         </section>
//       )}

//       {/* ================= IMAGE SECTION ================= */}
//       {current.images && (
//         <section className="sm:py-24 py-12 px-6">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
//             {current.images.map((img, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="overflow-hidden rounded-xl"
//               >
//                 <img
//                   src={img}
//                   alt="service"
//                   className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ================= PROCESS ================= */}
//       <section className="sm:py-32 py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center">

//           <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6">
//             {current.processTitle || "Our Process"}
//           </p>

//           <h2 className="text-4xl md:text-5xl font-light mb-20">
//             {current.processHeading || "A Refined, Client-First Approach"}
//           </h2>

//           <div className="grid md:grid-cols-4 gap-12">
//             {(current.process || [
//               "Consultation",
//               "Strategy & Research",
//               "Execution",
//               "Long-Term Advisory",
//             ]).map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="border-t-2 border-[#bfa760] pt-8"
//               >
//                 <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-4">
//                   Step {index + 1}
//                 </p>

//                 <h4 className="text-lg font-medium text-black">
//                   {step}
//                 </h4>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="sm:py-36 py-12 text-center bg-[#f7f6f3]">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-6xl font-light mb-10"
//         >
//           {current.ctaTitle || "A Private Conversation About Your Goals"}
//         </motion.h2>

//         <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
//           {current.ctaText ||
//             "Engage with experienced advisors trusted by investors and institutions across premium markets."}
//         </p>

//         <a
//           href="/contact"
//           className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760] uppercase tracking-widest text-sm bg-[#bfa760] text-white transition rounded-full"
//         >
//           {current.ctaButton || "Request Consultation"}
//         </a>
//       </section>
//     </>
//   );
// }


"use client";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedContent({ category, current, banner }) {
  return (
    <>
      <img
        src={banner}
        alt={current.title}
        className="w-full h-auto object-cover pt-20"
      />

      {/* ================= HERO ================= */}
      <section className="relative sm:pt-20 pt-12 sm:pb-32 pb-16 text-center bg-cover bg-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="relative max-w-6xl mx-auto px-6 text-gray-800"
        >
          <p className="uppercase tracking-[0.35em] text-[#c79a28] mb-6 text-sm">
            Our Expertise
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
            Bespoke{" "}
            <span className="font-medium text-[#1b3163]">
              {current.title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {current.subtitle}
          </p>

           {current.link && (
             <a
              href={current.link}
              target="_blank"
              className="block mt-6 text-[#1b3163] underline text-lg"
            >
              Visit Tanushreegrandbanquets Website
            </a>
          )}
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      {current.showServices && current.services &&  (
        <section className="sm:py-32 py-12 px-6 bg-[#f7f6f3]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
            {current.services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="bg-white border border-black/10 rounded-2xl p-12 hover:border-[#bfa760]/60 transition-all duration-300"
              >
                <h3 className="text-2xl font-light mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROJECTS ================= */}
      {current.projects && (
        <section className="sm:py-24 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {current.projects.map((project, i) => (
              <div key={i} className="mb-20">
                <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">
                  {project.name}
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        alt={project.name}
                        className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {current.images && (
        <section className="sm:py-24 py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
            {current.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt="service"
                  className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROCESS ================= */}
     <section className="sm:py-32 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#bfa760] mb-6">            {current.processTitle || "Our Process"}
         </p>

          <h2 className="text-4xl md:text-5xl font-light mb-20">
            {current.processHeading || "A Refined, Client-First Approach"}
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
           {(current.process || [
              "Consultation",
              "Strategy & Research",
              "Execution",
              "Long-Term Advisory",
            ]).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t-2 border-[#bfa760] pt-8"
              >
                <p className="text-sm uppercase tracking-widest text-[#bfa760] mb-4">
                  Step {index + 1}
                </p>

                <h4 className="text-lg font-medium text-black">
                  {step}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
         <section className="sm:py-36 py-12 text-center bg-[#f7f6f3]">
         <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}         className="text-4xl md:text-6xl font-light mb-10"
>
         {current.ctaTitle || "A Private Conversation About Your Goals"}
        </motion.h2>

       <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          {current.ctaText ||
            "Engage with experienced advisors trusted by investors and institutions across premium markets."}
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-14 py-5 border border-[#bfa760] uppercase tracking-widest text-sm bg-[#bfa760] text-white transition rounded-full"
        >
        {current.ctaButton || "Request Consultation"}
       </a>
     </section>
    </>
  );
}