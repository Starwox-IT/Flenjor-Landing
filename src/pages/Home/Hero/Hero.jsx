import React from "react";
import HeroBg from "../../../assets/Hero.png";
import HeroMobileBg from "../../../assets/HeroMobile.png";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center font-['Inter'] pb-10 md:pb-15 md:pt-15 overflow-hidden bg-gray-900">
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${HeroMobileBg})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block mt-16 sm:mt-0 mb-2 px-6 py-4 rounded-full border border-white/30 bg-white/20  backdrop-blur-md ">
          <p className="text-gray-200 text-xs sm:text-sm font-medium tracking-wider uppercase">
            Authentic African Experience
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white mb-2 leading-tight font-['Poppins']">
          Where African Flavor
          <br />
          Meets Modern
          <br />
          Convenience
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From groceries to commercial kitchens, your one-stop destination for
          authentic African food experiences
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a href="https://www.flenjorfoods.com/s1/home" target="_blank" rel="noopener noreferrer ">
            <button className="w-full cursor-pointer sm:w-auto px-8 py-2 rounded-md text-white font-medium bg-[#569b5e] hover:bg-[#437d49] transition-colors shadow-lg">
              Shop from our store
            </button>
          </a>
          <a href="https://www.flenjorfoods.com/s1/services" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-8 cursor-pointer py-2 rounded-md text-[#569b5e] font-medium bg-white hover:bg-gray-100 transition-colors shadow-lg">
              Explore our services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
