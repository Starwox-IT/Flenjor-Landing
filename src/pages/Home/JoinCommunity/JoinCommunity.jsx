import React from "react";

const JoinCommunity = () => {
  return (
    <section className="py-20 md:py-20 font-['Inter'] relative overflow-hidden bg-gradient-to-r from-[#E15B2E] to-[#7B3219]">
      {/* Optional subtle overlay pattern to add depth, if needed */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-block px-5 py-2 rounded-full border border-white/30 bg-white/30 mb-5 backdrop-blur-sm">
          <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
            Join Our Community
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white mb-3 leading-tight font-['Poppins']">
          Ready to Experience Flenjor?
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-[15px] sm:text-[15px] max-w-[100%] md:max-w-[60%] mx-auto mb-6 leading-relaxed font-light">
          Whether you're shopping, baking, or building your food business, we're
          here for you.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md mx-auto">
          <a
            href="https://www.flenjorfoods.com/s1/home"
            target="_blank"
            rel="noopener noreferrer"
            className="full w-full sm:w-auto"
          >
            <button className="w-full cursor-pointer px-8 py-2.5 rounded-lg bg-white text-[#E15B2E] font-medium text-[15px] hover:bg-gray-100 transition-colors shadow-lg">
              Shop Now
            </button>
          </a>
          <a
            href="https://flenjor-foods.netlify.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="full w-full sm:w-auto"
          >
            <button className="w-full cursor-pointer px-6 py-2.5 rounded-lg border border-white text-white font-medium text-[15px] hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
