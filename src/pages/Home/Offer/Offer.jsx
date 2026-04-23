import React from 'react';
import Offerauthentic from '../../../assets/Offerauthentic.png';
import Offerkithen from '../../../assets/Offerkithen.png';
import Offerbakery from '../../../assets/Offerbakery.png';
import Offerpartner from '../../../assets/Offerpartner.png';

const Offer = () => {
    const offers = [
        {
            id: 1,
            title: "Authentic African Groceries",
            description: "Premium spices, grains, sauces, and fresh produce from across the continent.",
            linkText: "Shop now",
            linkUrl: "https://www.flenjorfoods.com/s1/home",
            icon: Offerauthentic,
            bgColor: "bg-[#35533e]" // Dark Green
        },
        {
            id: 2,
            title: "Kitchen Rentals",
            description: "Fully equipped, certified commercial kitchen space for food entrepreneurs and businesses.",
            linkText: "Book Space",
            linkUrl: "https://flenjor-foods.netlify.app/pricing-booking",
            icon: Offerkithen,
            bgColor: "bg-[#da643f]" // Orange
        },
        {
            id: 3,
            title: "Fresh Bakery",
            description: "Traditional and fusion baked goods made daily with authentic recipes and quality ingredients.",
            linkText: "View Menu",
            linkUrl: "https://flenjor-foods.netlify.app/the-kitchen/#bakery",
            icon: Offerbakery,
            bgColor: "bg-[#794936]" // Brown
        },
        {
            id: 4,
            title: "Wholesale Partners",
            description: "Bulk supply solutions for restaurants, retailers, and businesses seeking authentic ingredients",
            linkText: "Get Quote",
            linkUrl: "/wholesale",
            icon: Offerpartner,
            bgColor: "bg-[#d39e3b]" // Yellow/Gold
        }
    ];

    return (
        <section className="py-20 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className="text-[#569b5e] font-semibold tracking-wider uppercase text-sm mb-3">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 font-['Poppins']">
                        What we Offer
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Discover our comprehensive suite of services designed to bring authentic
                        <br className="hidden md:block" /> African flavors to your table and business
                    </p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`${offer.bgColor} rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 shadow-sm`}
                        >
                            {/* Icon Container */}
                            <div className="bg-white/20 p-2.5 rounded-xl mb-5">
                                <img src={offer.icon} alt={offer.title} className="w-9 h-9 object-contain" />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                {offer.title}
                            </h3>
                            <p className="text-white/90 text-[15px] sm:text-base leading-relaxed mb-6 flex-grow">
                                {offer.description}
                            </p>

                            {/* Action Link */}
                            <a
                                href={offer.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors group mt-auto"
                            >
                                {offer.linkText}
                                <svg
                                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Offer;
