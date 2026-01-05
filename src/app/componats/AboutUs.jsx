import React from 'react';
import Image from 'next/image';

function AboutUs() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content Section */}
          <div className="lg:w-1/2 space-y-3">
            {/* Sub-headline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#d6b685]"></div>
              <span className="text-gray-900 font-semibold tracking-widest  uppercase">
                About Our Company
              </span>
            </div>

            {/* Main Headline */}
            {/* <h1 className="text-5xl md:text-5xl lg:text-3xl font-bold leading-tight">
              <span className="text-gray-900 mr-1">Crafting Digital</span>
              <span className="bg-gradient-to-r from-[#c49827] to-yellow-400 bg-clip-text text-transparent">
                Excellence Since 2010
              </span>
            </h1> */}
            <h1 className="text-5xl md:text-5xl lg:text-4xl font-light leading-tight ">
              Crafting Enduring <span className="font-medium text-[#1b3163]">Excellence Since 2006</span>
            </h1>

            {/* About Content */}
            <div className="space-y-2">
              <p className=" leading-relaxed text-justify ">
                Tanushree Group is a diversified organization built on vision, integrity, and long-term commitment. Since our inception in 2006, we have consistently delivered excellence across Real Estate, Education, and Hospitality, guided by a belief that true success lies in creating meaningful impact.
                With nearly two decades of experience, we blend thoughtful planning with ethical execution to develop spaces, institutions, and experiences that stand the test of time. Our work reflects a deep understanding of human aspirations and a responsibility toward communities we serve.

              </p>



              <p className="leading-relaxed text-justify">
                We are driven by the pursuit of quality, transparency, and trust. Every initiative undertaken by Tanushree Group is shaped with care, precision, and a people-first mindset. Our passion lies in transforming vision into value and ambition into enduring outcomes, while remaining committed to excellence in every detail.

              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group relative overflow-hidden px-6 py-3 rounded-xl
bg-gradient-to-r from-[#e2b54d] via-[#faea7f] to-[#ebbd4b]
shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50
transition-all duration-300 hover:scale-105">

                {/* CONTINUOUS SHINE */}
                <span className="absolute inset-0 
  bg-gradient-to-r from-transparent via-white/60 to-transparent
  animate-shine" />

                {/* CONTENT */}
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="font-bold capitalize text-blue-900 tracking-wide">
                    LERN MORE
                  </span>
                  <svg
                    className="w-5 h-5 text-blue-900 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>



              {/* <button className="group px-6 py-2 rounded-xl border-2 border-gray-300 hover:border-golden bg-white hover:bg-gray-50 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-gray-700 group-hover:text-golden transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-gray-700 group-hover:text-golden transition-colors">
                    Watch Video
                  </span>
                </div>
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#c49827] to-yellow-400 bg-clip-text text-transparent">250+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#c49827] to-yellow-400 bg-clip-text text-transparent">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#c49827] to-yellow-400 bg-clip-text text-transparent">20+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-golden/20 to-yellow-400/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-golden/10 to-amber-500/5 rounded-3xl -z-10"></div>

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  {/* Placeholder image - Replace with actual image */}
                  <img src="/assets/img/image/004.jpeg" alt="Main Image" className="w-full h-full object-cover" />


                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 sm:-right-6 right-0 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation First</h4>
                    <p className="text-gray-500 text-sm">Pushing boundaries since 2010</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">45+</div>
                    <div className="text-gray-500 text-sm">Countries Served</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#c49827] to-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-golden" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
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

export default AboutUs;