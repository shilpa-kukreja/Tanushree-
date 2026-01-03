"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: "Luxury Heights",
    image: "/projects/project1.jpg"
  },
  {
    id: 2,
    name: "Tech Park One",
    image: "/projects/project2.jpg"
  },
  {
    id: 3,
    name: "Ocean View",
    image: "/projects/project3.jpg"
  },
  {
    id: 4,
    name: "Green Valley",
    image: "/projects/project4.jpg"
  },
  {
    id: 5,
    name: "Business Center",
    image: "/projects/project5.jpg"
  },
  {
    id: 6,
    name: "Sky Towers",
    image: "/projects/project6.jpg"
  },
  {
    id: 7,
    name: "Innovation Hub",
    image: "/projects/project7.jpg"
  },
  {
    id: 8,
    name: "Lake View",
    image: "/projects/project8.jpg"
  }
];

function OurProjects() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#c49827]">Projects</span>
          </h2> */}
          <h1 className="text-5xl md:text-5xl lg:text-4xl font-light leading-tight ">
            OUR <span className="font-medium text-[#1b3163]">PROJECTS</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of exceptional developments
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-16 right-4 flex gap-2 z-10">
            <button
              onClick={previous}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center hover:bg-gray-50"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center hover:bg-gray-50"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-3">
                <div className="group relative overflow-hidden  bg-white shadow-md hover:shadow-xl border-2 border-[#c49827] rounded-sm transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="relative  overflow-hidden">
                    {/* Placeholder Image */}
                     <Image src="/assets/img/banner/banner.png" alt="logo" width={100} height={100} lazy="true" fill="" className="w-full" />
                    
                    {/* Uncomment when you have actual images */}
                    {/* 
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    */}
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Project Name */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      
      </div>
    </section>
  );
}

export default OurProjects;