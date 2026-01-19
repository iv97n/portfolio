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
    type: 'project' | 'work' | 'other' | 'conference' | 'studies' | 'hackathon' | 'workshop';
}

export const updates: UpdateEntry[] = [
    {
        id: '1',
        date: new Date(2025, 10).getTime(),
        title: 'Just participated in the EPFL Hackathon!',
        description: 'Just returned from Lausanne after a successful hackathon with my amazing teammates Lola and Maria. There, we developed a real-time intrusion detection and notification system for a house’s front door, using state-of-the-art Qwen Visual Language Models, Whisper, and LangGraph to build the agentic workflow.',
        images: ['/images/image.png', '/images/image.png' ],
        link: {
            label: 'View GitHub Project',
            url: 'https://github.com/mgil4/LauzHack2025'
        },
        type: 'hackathon'
    },
    {
        id: '2',
        date: new Date(2025, 10).getTime(),
        title: 'Conducted a LanGraph workshop at the student association EHub',
        description: 'Designed and delivered an introduction to agentic workflows and how to build them using LangGraph to over 60 students.',
        images: ['/images/ehub.jpeg'],
        link: {
            label: 'View LinkedIn Post',
            url: 'https://www.linkedin.com/posts/upfehub_ehub-ia-activity-7397661843558842368-JU3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD69vGUBWwGHcENk7L38nF9eRcS8xmexFNY'
        },
        type: 'workshop'
    },
    {
        id: '3',
        date: new Date(2025, 8).getTime(),
        title: 'Just joined the Erasmus Mundus Joint Master in Artificial Intelligence (EMAI)!',
        description: 'I recently started the EMAI program, the European Union initiated and funded master’s in Artificial Intelligence. I am excited to announce that I have also been awarded an Erasmus Mundus Scholarship, covering all my living and travel expenses for the entire program.',
        images: ['/images/emailogo.png'],
        link: {
            label: 'View Master Webpage',
            url: 'https://www.upf.edu/web/emai/'
        },
        type: 'studies'
    }
];
