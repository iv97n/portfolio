import React from 'react';
import { papersAndThoughts } from '../../data/papers-thoughts';

const PapersAndThoughts: React.FC = () => {
    return (
        <section className="pb-10 lg:pb-14">
            <div className="container">
                <div className="mb-8 lg:mb-10">
                    <div className="mb-[14px] md:mt-4">
                        <div className="w-12 h-[2px] bg-appText mb-4 lg:w-16" />
                        <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica mb-2.5 lg:text-[32px] lg:leading-none lg:mb-4">
                            Thoughts and readings
                        </h2>
                        <p className="text-xs leading-[1.4] tracking-[-0.41px] text-appGray-400 lg:text-base lg:leading-[1.4]">
                            This is truly what has been going through my mind lately.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {papersAndThoughts.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#FAFAFA] rounded-3xl p-6 border border-appGray-100 transition-all hover:border-appGray-200 hover:shadow-sm"
                        >
                            <div className="flex items-center gap-3 text-sm text-appGray-400 mb-3">
                                <span className="uppercase tracking-wider text-xs font-medium px-2 py-1 bg-white rounded-md border border-appGray-100">
                                    {item.type}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-appGray-400" />
                                <span>{item.date}</span>
                            </div>

                            <h3 className="text-xl font-Helvetica tracking-[-0.41px] leading-tight mb-3">
                                {item.title}
                            </h3>

                            <p className="text-appGray-500 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-appText font-medium hover:opacity-70 transition-opacity"
                                >
                                    {item.link.label}
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PapersAndThoughts;
