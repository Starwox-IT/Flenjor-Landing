import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import QuoteImage from '../../../assets/quote.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Flenjor Foods is a lifesaver! The quality of their products reminds me of home, and their kitchen rental service helped me launch my catering business.",
            name: "Amara Johnson",
            title: "Catering Business Owner",
            initial: "A"
        },
        {
            id: 2,
            text: "The authentic African spices have completely transformed my restaurant's menu. Fantastic customer service and incredibly reliable wholesale delivery.",
            name: "David Mensah",
            title: "Restaurant Manager",
            initial: "D"
        },
        {
            id: 3,
            text: "Finding a commercial kitchen that understands my needs was tough until I found Flenjor. Truly an ecosystem built for passionate food entrepreneurs.",
            name: "Sarah Okafor",
            title: "Food Entrepreneur",
            initial: "S"
        }
    ];

    return (
        <section className="py-20 bg-white font-['Inter'] flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className="text-[#569b5e] font-semibold tracking-wider uppercase text-sm mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 font-['Poppins']">
                        Voices from Our Community
                    </h2>
                    <p className="text-gray-600 text-[15px] font-medium leading-relaxed max-w-[80%] md:w-[60%] mx-auto">
                        Hear what our customers and partners have to say about their Flenjor experience
                    </p>
                </div>

                {/* Swiper Custom Styles Injection */}
                <style>{`
                    .testimonial-pagination .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #d1d5db;
                        opacity: 1;
                        transition: all 0.3s ease;
                        margin: 0 4px !important;
                    }
                    .testimonial-pagination .swiper-pagination-bullet-active {
                        width: 32px;
                        background: #569b5e;
                        border-radius: 8px;
                    }
                `}</style>

                {/* Slider Container */}
                <div className="max-w-2xl mx-auto relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        pagination={{
                            el: '.testimonial-pagination',
                            clickable: true,
                        }}
                        className="pb-6"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="bg-white border border-gray-200 rounded-[2rem] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] mx-4 md:mx-0 flex flex-col items-center text-center relative">

                                    {/* Quote Image */}
                                    <div className="mb-4 self-start md:absolute md:top-6 md:left-6">
                                        <img src={QuoteImage} alt="Quote" className="w-12 h-12 object-contain" />
                                    </div>

                                    {/* Responsive Spacer for Desktop to clear absolute icon */}
                                    <div className="hidden md:block h-3"></div>

                                    {/* Stars */}
                                    <div className="flex gap-1.5 mb-5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-[#dd6639] text-xl" />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-800 text-base md:text-[16px] leading-relaxed mb-6 max-w-[70%] font-normal">
                                        "{item.text}"
                                    </p>

                                    {/* User Info */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-[#dd6639] rounded-full flex items-center justify-center text-white text-lg font-medium mb-2">
                                            {item.initial}
                                        </div>
                                        <h4 className="text-gray-900 font-semibold text-[15px]">{item.name}</h4>
                                        <p className="text-gray-500 text-[13px]">{item.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button className="custom-prev w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#569b5e] hover:text-[#569b5e] transition-colors cursor-pointer outline-none">
                            <FiChevronLeft className="w-6 h-6 mr-0.5" />
                        </button>

                        <div className="testimonial-pagination flex items-center justify-center !w-auto"></div>

                        <button className="custom-next w-12 h-12 rounded-full border-2 border-[#569b5e] flex items-center justify-center text-[#569b5e] hover:bg-[#569b5e] hover:text-white transition-colors cursor-pointer outline-none">
                            <FiChevronRight className="w-6 h-6 ml-0.5" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
