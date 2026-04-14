import React from 'react';
import ApartAuthentic from '../../../assets/ApartAuthentic.png';
import ApartCommunity from '../../../assets/ApartCommunity.png';
import ApartQuality from '../../../assets/ApartQuality.png';
import ApartOnestop from '../../../assets/ApartOnestop.png';
import ApartKnowledge from '../../../assets/ApartKnowledge.png';
import ApartFlexible from '../../../assets/ApartFlexible.png';

const SetApart = () => {
    const pillars = [
        {
            id: 1,
            title: "Authenticity Guaranteed",
            description: "Sourced directly from trusted suppliers across Africa.",
            icon: ApartAuthentic
        },
        {
            id: 2,
            title: "Community First",
            description: "Supporting local food entrepreneurs.",
            icon: ApartCommunity
        },
        {
            id: 3,
            title: "Quality and Freshness",
            description: "Rigorous standards for every product and service",
            icon: ApartQuality
        },
        {
            id: 4,
            title: "One Stop Solution",
            description: "From retail to wholesale, groceries to kitchen space",
            icon: ApartOnestop
        },
        {
            id: 5,
            title: "Expert Knowledge",
            description: "Passionate team with deep culinary and cultural expertise.",
            icon: ApartKnowledge
        },
        {
            id: 6,
            title: "Flexible Options",
            description: "Retail, bulk, rental, services that adapt to your needs",
            icon: ApartFlexible
        }
    ];

    return (
        <section className="py-20 bg-[#fbf6f1] font-['Inter']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[#dd6639] font-semibold tracking-wider uppercase text-sm mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                        What Sets Us Apart
                    </h2>
                    <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
                        More than just a store, we're your partner in authentic African culinary experiences
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="bg-white rounded-xl p-6 flex flex-row items-start gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#E5E3E3]"
                        >
                            {/* Icon */}
                            <img src={pillar.icon} alt={pillar.title} className="w-10 h-10 object-contain flex-shrink-0 mt-0.5" />

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SetApart;
