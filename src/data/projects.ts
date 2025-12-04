export interface Project {
    title: string;
    slug: string;
    theme: string;
    gallery: string[];
    description?: string;
    brand_name?: string;
    role?: string;
    date?: number;
    project_no?: number;
}

export const projects: Project[] = [
    {
        title: 'Sneak Peek',
        slug: 'project-1',
        theme: '#484E88',
        gallery: [
            '/images/sneakpeek.jpeg',
        ],
        description: 'A sneak peek into the future of design.',
        brand_name: 'Sneak Peek',
        role: 'Designer',
        date: Date.now(),
        project_no: 1
    },
    {
        title: 'Image Captioning using PyTorch',
        slug: 'project-2',
        theme: '#E6A85C',
        gallery: [
            '/images/other.jpeg',
            '/images/personal.jpg',
        ],
        description: 'Generating captions for images using Deep Learning.',
        brand_name: 'PyTorch',
        role: 'ML Engineer',
        date: Date.now(),
        project_no: 2
    },
    {
        title: 'Project 3',
        slug: 'project-3',
        theme: '#9C3434',
        gallery: [
            '/images/personal.jpg',
            '/images/personalpic.jpeg',
        ],
        description: 'Another amazing project.',
        brand_name: 'Project 3',
        role: 'Developer',
        date: Date.now(),
        project_no: 3
    }
];
