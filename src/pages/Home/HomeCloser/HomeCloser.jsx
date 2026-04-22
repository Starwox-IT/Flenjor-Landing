import React from 'react';
import HomeCloserDesktop from '../../../assets/HomeCloserDesktop.png';
import HomeCloserMobile from '../../../assets/HomeCloserMobile.png';
import closerproducts from '../../../assets/closerproducts.png';
import closerserving from '../../../assets/closerserving.png';
import closerowened from '../../../assets/closerowened.png';

const HomeCloser = () => {
    const stats = [
        {
            id: 1,
            icon: closerproducts,
            value: "500+",
            label: "Products"
        },
        {
            id: 2,
            icon: closerserving,
            value: "10+",
            label: "Years Serving"
        },
        {
            id: 3,
            icon: closerowened,
            value: "100%",
            label: "Family Owned"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Images Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {/* Mobile Image */}
                        <img
                            src={HomeCloserMobile}
                            alt="Flenjor Foods Facilities and Kitchen"
                            className="lg:hidden w-full max-w-lg object-contain rounded-2xl"
                        />
                        {/* Desktop Image */}
                        <img
                            src={HomeCloserDesktop}
                            alt="Flenjor Foods Facilities and Kitchen"
                            className="hidden lg:block w-full object-contain rounded-2xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <p className="text-[#569b5e] font-semibold tracking-wider uppercase text-sm mb-3">
                            Our Story
                        </p>
                        <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 font-['Poppins']">
                            Bringing Home Closer
                        </h2>

                        <div className="text-gray-700 text-[15px] font-normal leading-relaxed space-y-5 mb-10 text-center lg:text-left font-light">
                            <p>
                                For over a decade, Flenjor Foods has been more than just a grocery store.
                                We're a cultural bridge, connecting our community with the authentic tastes
                                and traditions of Africa.
                            </p>
                            <p>
                                Founded by a family passionate about preserving heritage while embracing
                                innovation, we've grown from a small shop to a comprehensive food
                                ecosystem serving retail customers and business partners alike.
                            </p>
                            <p>
                                Every product we source, every recipe we bake, and every service we offer
                                reflects our commitment to authenticity, quality, and community
                                empowerment.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 w-full mb-10">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-[#fff5ee] rounded-xl flex items-center justify-center mb-3">
                                        <img src={stat.icon} alt={stat.label} className="w-7 h-7 object-contain" />
                                    </div>
                                    <span className="text-[#da643f] font-bold text-lg">{stat.value}</span>
                                    <span className="text-gray-500 text-sm whitespace-nowrap">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a href="https://flenjor-foods.netlify.app/about" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 cursor-pointer py-3 rounded-md border-2 border-[#569b5e] text-[#569b5e] font-medium hover:bg-[#569b5e] hover:text-white transition-colors duration-300">
                                Learn More About Us
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeCloser;
