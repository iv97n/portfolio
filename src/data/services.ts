export interface ServiceItem {
    title: string;
    description: string;
    start_price: number;
}

export const servicesItems: ServiceItem[] = [
    {
        title: "Web Development",
        description: "Custom websites built with modern technologies like React, Astro, and Tailwind CSS.",
        start_price: 1000
    },
    {
        title: "UI/UX Design",
        description: "User-centered design for web and mobile applications.",
        start_price: 800
    },
    {
        title: "Consulting",
        description: "Technical consulting for your digital projects.",
        start_price: 150
    }
];

export const servicesPageMeta = {
    title: "Services"
};
