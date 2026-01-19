import React from 'react';
import LinkedInIcon from '../../assets/icons/linkedin.svg?raw';
import GitHubIcon from '../../assets/icons/github.svg?raw';

const HomeHero: React.FC = () => {
    const socials = [
        {
            label: 'LinkedIn',
            icon: LinkedInIcon,
            href: 'https://www.linkedin.com/in/iv97n/',
        },
        {
            label: 'GitHub',
            icon: GitHubIcon,
            href: 'https://github.com/iv97n',
        },

    ];

    return (
        <section className="py-6 lg:pb-8">
            <div className="container">
                <div className="w-full">
                    <div className="relative bg-[#FAFAFA] rounded-3xl p-5 overflow-hidden xl:p-6">
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <h1 className="text-xl leading-[1.1] tracking-[-0.41px] mb-2 md:text-2xl lg:text-3xl xl:text-4xl lg:mb-2">
                                Hi, I'm Iván,
                            </h1>
                            <h2 className="text-xl leading-[1.1] tracking-[-0.41px] mb-2 md:text-2xl lg:text-3xl xl:text-4xl lg:mb-3 whitespace-nowrap">
                                an <span className="font-bold">Artificial Intelligence</span>
                            </h2>
                            <h2 className="text-xl leading-[1.1] tracking-[-0.41px] mb-2 md:text-2xl lg:text-3xl xl:text-4xl lg:mb-3 whitespace-nowrap">
                                and <span className="font-bold">Cybersecurity</span> enthusiast.
                            </h2>
                            <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 pr-[70px] mb-6 md:text-base lg:text-lg lg:leading-[1.5] lg:mb-6">
                                I'm a Data Science graduate and am currently enrolled in the EMAI program, the European Union initiated and funded master's in Artificial Intelligence.
                            </p>
                            <ul className="flex items-center gap-3 mt-auto lg:gap-5">
                                {socials.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item.icon,
                                                }}
                                                className="w-4 h-4 mr-1.5"
                                            />
                                            <span className="text-xs leading-none tracking-[-0.41px] lg:text-base lg:leading-none">
                                                {item.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute top-0 right-0 w-[244px] h-[244px] translate-x-1/2 -translate-y-1/2 bg-[#3A437E] bg-blend-overlay rounded-full opacity-50 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-[244px] h-[244px] -translate-x-1/2 translate-y-1/2 bg-[#FFBF4B] bg-blend-overlay rounded-full opacity-50 blur-[100px] xl:-translate-y-1/3" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeHero;
