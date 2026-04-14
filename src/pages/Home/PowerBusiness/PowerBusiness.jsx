import React from 'react';
import Powerbusiness from '../../../assets/Powerbusiness.png';
import Powerbusinessmobile from '../../../assets/Powerbusinessmobile.png';
import Powertick from '../../../assets/Powertick.png';

const PowerBusiness = () => {
    const features = [
        "Competitive bulk pricing",
        "Consistent supply & quality",
        "Flexible delivery options",
        "Product varieties"
    ];

    return (
        <section className="py-20 bg-[#fdfbf9] font-['Inter'] overflow-hidden border-y border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content - (Order 2 on mobile, 1 on desktop) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Pill Badge */}
                        <div className="inline-block px-5 py-2 rounded-full border border-[#569b5e] bg-[#f0f7f1] mb-3">
                            <span className="text-[#3b6b41] text-xs font-semibold tracking-wider uppercase">
                                For Business
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 leading-tight font-['Poppins']">
                            Power Your Business with Authentic Ingredients
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 text-[15px] mb-10 w-full">
                            Wholesale solutions for restaurants, retailers, caterers, and food service providers.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-[#f5faf6] rounded-xl px-4 py-3 border border-gray-100"
                                >
                                    <img src={Powertick} alt="tick" className="w-7 h-7 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium text-[15px]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-md text-white font-medium bg-[#569b5e] hover:bg-[#437d49] transition-colors shadow-sm">
                                <span className="hidden sm:inline">Request Wholesale Quote</span>
                                <span className="inline sm:hidden">View Pricing & Book Now</span>
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-md text-[#569b5e] font-medium border border-[#569b5e] hover:bg-gray-50 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Right: Image Content - (Order 1 on mobile, 2 on desktop) */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 relative flex justify-center">
                        <div className="relative w-full max-w-lg lg:max-w-none">
                            {/* Mobile Image */}
                            <img
                                src={Powerbusinessmobile}
                                alt="Power Your Business"
                                className="lg:hidden w-full object-cover rounded-2xl shadow-sm"
                            />
                            {/* Desktop Image */}
                            <img
                                src={Powerbusiness}
                                alt="Power Your Business"
                                className="hidden lg:block w-[90%] object-cover rounded-3xl shadow-sm"
                            />

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-2 sm:-left-8  rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50 bg-white/50 backdrop-blur-sm z-10 w-40 sm:w-52">
                                <h3 className="text-4xl sm:text-5xl font-bold text-[#dd6639] mb-2 font-['Inter']">
                                    50+
                                </h3>
                                <p className="text-gray-800 font-medium text-sm sm:text-base">
                                    Business Partners
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PowerBusiness;
