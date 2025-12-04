export interface UpdateEntry {
    id: string;
    date: number;
    title: string;
    description: string;
    images?: string[];
    link?: {
        label: string;
        url: string;
    };
    type: 'project' | 'work' | 'other' | 'conference' | 'studies' | 'hackathon';
}

export const updates: UpdateEntry[] = [
    {
        id: '1',
        date: new Date(2025, 10).getTime(),
        title: 'EPFL Hackathon',
        description: 'Just came back from Lausanne.',
        images: ['/images/image.png', '/images/image.png' ],
        link: {
            label: 'View Project',
            url: '/portfolio/project-1'
        },
        type: 'hackathon'
    },
    {
        id: '2',
        date: new Date(2025, 10).getTime(),
        title: 'LanGraph Workshop at the EHub',
        description: 'Deep diving into Computer Vision. Built a model to generate captions for images using PyTorch and LSTM.',
        images: ['/images/ehub.jpeg'],
        type: 'conference'
    },
    {
        id: '3',
        date: new Date(2025, 8).getTime(),
        title: 'Just joined the Erasmus Mundus Joint Master in Artificial Intelligence!',
        description: 'Just joined the Erasmus Mundus Joint Master in Artificial Intelligence (EMAI)!',
        images: ['/images/emailogo.png'],
        link: {
            label: 'View Master Webpage',
            url: 'https://www.upf.edu/web/emai/'
        },
        type: 'studies'
    }
];
