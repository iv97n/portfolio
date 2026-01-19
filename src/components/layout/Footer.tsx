import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    /* {
    const nav = [
        
            label: '(+1) 734 8123 8162',
            href: 'tel:+173481238162',
        },
        {
            label: 'ivan.heg.03@gmail.com',
            href: 'mailto:ivan.heg.03@gmail.com',
        },
        {
            label: 'Legal page',
            href: '/legal',
        },
    ];
    */
    return (
        <footer className="pb-10">
            <div className="container">
                <div className="border-t border-appGray-100 pt-6 md:pt-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="text-lg leading-[1.2] tracking-[-0.41px] font-Helvetica whitespace-nowrap md:text-3xl md:leading-[1.2] lg:text-[40px]">
                            Let's build something impactful together.
                        </div>
                        {/*
                        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                            {nav.map((item, index) => (
                                <div key={index}>
                                    {item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
                                        <a
                                            href={item.href}
                                            className="text-sm leading-none tracking-[-0.41px] lg:text-base lg:leading-none text-appGray-500 hover:text-appText transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="text-sm leading-none tracking-[-0.41px] lg:text-base lg:leading-none text-appGray-500 hover:text-appText transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        */}
                        <div className="text-sm leading-none tracking-[-0.41px] lg:text-base lg:leading-none text-appGray-500">
                            &copy; {currentYear} Personal website. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
