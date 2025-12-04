export interface TestimonialItem {
    author: {
        name: string;
        avatar?: {
            src: string;
            alt: string;
        };
    };
    content: string;
}

export const testimonialItems: TestimonialItem[] = [
    {
        author: {
            name: "John Doe",
            avatar: {
                src: "/images/personal.jpg",
                alt: "John Doe"
            }
        },
        content: "Ivan is an amazing developer! He delivered the project on time and exceeded our expectations."
    },
    {
        author: {
            name: "Jane Smith",
        },
        content: "Great attention to detail and excellent communication throughout the project."
    }
];

export const testimonialsPageMeta = {
    title: "Testimonials"
};
