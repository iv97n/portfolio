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
        <section className="py-10 lg:pb-14">
            <div className="container">
                <div className="grid grid-cols-1 gap-4 auto-rows-fr md:grid-cols-[3fr,2fr] lg:grid-cols-[650px,1fr] xl:grid-cols-[850px,1fr]">
                    <div className="relative bg-[#FAFAFA] rounded-3xl p-6 overflow-hidden xl:p-10">
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <h1 className="text-2xl leading-[1.1] tracking-[-0.41px] mb-2 md:text-3xl lg:text-4xl xl:text-5xl lg:mb-3">
                                Hi I'm Iván,
                            </h1>
                            <h2 className="text-2xl leading-[1.1] tracking-[-0.41px] mb-4 md:text-3xl lg:text-4xl xl:text-5xl lg:mb-5 whitespace-nowrap">
                                an Artificial Intelligence enthusiast.
                            </h2>
                            <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 pr-[70px] mb-8 md:text-base lg:text-lg lg:leading-[1.5] lg:mb-8">
                                I'm a Data Science graduate and currently studying a MSc in Artificial Intelligence, with specialisation in cybersecurity.
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
                    <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto xl:aspect-[0.8]">
                        <img
                            src="/images/personal.jpg"
                            alt="Hero"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
