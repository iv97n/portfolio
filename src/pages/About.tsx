import React from 'react';
import Layout from '../layouts/Layout';
import AnimatedTitle from '../components/AnimatedTitle';
import {
    education_degrees,
    education_description,
    work_history,
    work_history_description,
    cover_image,
    awards_title,
    awards_items
} from '../data/about';

const About: React.FC = () => {
    return (
        <Layout title="About Iv97n.">
            <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
                <div className="container mb-10 lg:mb-[128px] xl:pr-[220px]">
                    <AnimatedTitle
                        title="About"
                        className="mb-10 md:mb-20 lg:mb-[192px]"
                        titleClassName="text-[114px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[190px] md:text-[220px] lg:text-[300px] lg:tracking-[5.59px] xl:text-[464px]"
                    />
                    <div className="mb-8 lg:flex lg:items-start lg:gap-[98px] lg:mb-14">
                        <div className="flex items-center mb-[14px] flex-shrink-0 lg:w-[200px]">
                            <div className="w-1.5 h-1.5 flex-shrink-0 bg-appText rounded-full mr-2 lg:w-2 lg:h-2 lg:mr-4" />
                            <div className="text-lg leading-none font-Helvetica tracking-[-0.41px] lg:text-[32px]">
                                Education
                            </div>
                        </div>
                        <div>
                            <div className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 mb-6 lg:text-base lg:leading-[1.4] lg:mb-8">
                                {education_description}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {education_degrees.map((degree, index) => (
                                    <div key={index} className="flex text-sm leading-none tracking-[-0.41px] text-appGray-500 font-medium px-4 py-3 border border-appGray-200 rounded-[32px] lg:text-base lg:leading-none">
                                        {degree}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex lg:items-start lg:gap-[98px]">
                        <div className="flex items-center mb-[14px] flex-shrink-0 lg:w-[200px]">
                            <div className="w-1.5 h-1.5 flex-shrink-0 bg-appText rounded-full mr-2 lg:w-2 lg:h-2 lg:mr-4" />
                            <div className="text-lg leading-none font-Helvetica tracking-[-0.41px] lg:text-[32px]">
                                Work History
                            </div>
                        </div>
                        <div>
                            <div className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 mb-6 lg:text-base lg:leading-[1.4] lg:mb-8">
                                {work_history_description}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {work_history.map((item, index) => (
                                    <div key={index} className="flex items-center text-sm leading-none tracking-[-0.41px] text-appGray-500 px-4 py-3 border border-appGray-200 rounded-[32px] lg:text-base lg:leading-none">
                                        <span>{item.company_name}</span>
                                        <span className="w-[3px] h-[3px] rounded-full bg-appGray-500 mx-1.5 lg:mx-2" />
                                        <span>
                                            {new Date(item.from).getFullYear()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={cover_image.src}
                    alt={cover_image.alt}
                    className="w-full object-cover aspect-[1.84] mb-10 lg:aspect-[2.59] lg:mb-20"
                />
                <div className="container">
                    <div className="max-w-[969px] mx-auto">
                        <div className="text-lg leading-[1.2] tracking-[-0.41px] font-Helvetica mb-6 lg:text-[40px] lg:mb-16">
                            {awards_title}
                        </div>
                        <div className="grid grid-cols-1 gap-[14px] lg:gap-6">
                            {awards_items.map((award, index) => (
                                <div key={index} className="flex items-center justify-between pb-[14px] border-b border-appGray-200 lg:pb-6">
                                    <div className="flex">
                                        <span className="text-xs leading-none tracking-[-0.41px] mr-1 lg:text-base lg:leading-none lg:mr-2">
                                            {award.place}
                                        </span>
                                        <span className="text-sm leading-none tracking-[-0.41px] text-appGray-400 lg:text-2xl lg:leading-none">
                                            {award.title}
                                        </span>
                                    </div>
                                    <div className="text-sm leading-none tracking-[-0.41px] lg:text-base lg:leading-none">
                                        ({new Date(award.date).getFullYear()})
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
