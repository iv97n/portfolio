import React from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { updates } from '../../data/updates';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './portfolio.css';

const HomeRecentStuff: React.FC = () => {
    const title = "What I've been doing recently";

    // Sort updates by date descending
    const sortedUpdates = [...updates].sort((a, b) => b.date - a.date);

    const sliderOptions = {
        modules: [A11y, Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    };

    return (
        <section className="pb-10 lg:pb-14">
            <div className="container">
                <div className="mb-8 md:flex md:items-start md:justify-between md:gap-16 lg:gap-20 lg:mb-10">
                    <div className="mb-[14px] md:mt-4">
                        <div className="w-12 h-[2px] bg-appText mb-4 lg:w-16" />
                        <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] lg:leading-none">
                            {title}
                        </h2>
                    </div>
                </div>

                <Swiper {...sliderOptions} className="w-full !pb-12 recent-stuff-swiper">
                    {sortedUpdates.map((update) => (
                        <SwiperSlide key={update.id} className="h-auto">
                            <div className="flex flex-col h-full p-6 bg-[#FAFAFA] rounded-3xl border border-appGray-100 transition-colors hover:border-appGray-200">
                                <div className="flex items-center gap-3 text-sm text-appGray-400 mb-4">
                                    <span>
                                        {new Date(update.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                        })}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-appGray-400" />
                                    <span className="uppercase tracking-wider text-xs font-medium">
                                        {update.type}
                                    </span>
                                </div>

                                {update.images && update.images.length > 0 && (
                                    <div className="w-full aspect-[1.6] rounded-2xl overflow-hidden bg-appGray-100 mb-4 relative group">
                                        {update.images.length > 1 ? (
                                            <Swiper
                                                modules={[Pagination, Navigation]}
                                                pagination={{ clickable: true }}
                                                navigation
                                                nested={true}
                                                className="w-full h-full nested-swiper"
                                            >
                                                {update.images.map((img, index) => (
                                                    <SwiperSlide key={index}>
                                                        <img
                                                            src={img}
                                                            alt={`${update.title} ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        ) : (
                                            <img
                                                src={update.images[0]}
                                                alt={update.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                )}

                                <h3 className="text-xl font-Helvetica tracking-[-0.41px] leading-tight mb-3">
                                    {update.title}
                                </h3>

                                <p className="text-appGray-500 text-sm leading-relaxed mb-6 flex-1">
                                    {update.description}
                                </p>

                                {update.link && (
                                    <div className="mt-auto">
                                        <a
                                            href={update.link.url}
                                            className="inline-flex items-center gap-2 text-sm text-appText font-medium hover:opacity-70 transition-opacity"
                                        >
                                            {update.link.label}
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeRecentStuff;
