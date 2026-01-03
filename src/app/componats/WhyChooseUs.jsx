import Image from 'next/image';
import React from 'react';

function WhyChooseUsSimple() {
  const features = [
    {
      title: "Diverse Expertise",
      description: "With a strong presence across Real Estate, Education, and Hospitality, Tanushree Group brings diversified expertise under one trusted name. Since 2006, our multi-sector experience allows us to understand varied needs and deliver solutions with depth, clarity, and consistency.",
      icon: "https://images.unsplash.com/photo-1560518883-ce090…fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image: "/assets/img/image/Diverse Expertise (1).jpg",
    },
    {
      title: "Empowering Dreams",
      description: " We believe our work should elevate lives. From creating secure homes and nurturing future-ready minds to delivering refined hospitality experiences, every initiative is designed to turn aspirations into meaningful realities.",
      icon: "https://images.unsplash.com/photo-1560518883-ce090…fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image: "/assets/img/image/Empowering Dreams (1).jpg",
    },
    {
      title: "Unwavering Support",
      description: "Our commitment does not end with delivery. We stand by our clients, partners, students, and guests with transparent communication, ethical practices, and dependable support at every stage of the journey.",
      icon: "https://images.unsplash.com/photo-1560518883-ce090…fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image: "/assets/img/image/Unwavering Support (1).jpg",
    }
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-7">
           <h1 className="text-5xl md:text-5xl lg:text-4xl font-light leading-tight ">
            Why Choose <span className="font-medium text-[#1b3163]">Us</span>
          </h1>
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2> */}
          <p className="text-gray-600 ">
            Discover what sets us apart in building trust, value, and enduring excellence.
          </p>
        </div>

        {/* Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 hover:bg-white hover:shadow-xl border-2 rounded-sm border-[#bfa760] transition-all duration-300">
              <Image src={feature.image}  width={100} height={100} alt={feature.title} className="mb-4 w-full " />
              <div className="p-4">
                 <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-justify">
                {feature.description}
              </p>
              </div>
             
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
}

export default WhyChooseUsSimple;