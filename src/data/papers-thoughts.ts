export interface PaperThought {
    id: string;
    title: string;
    type: 'Paper' | 'Thought' | 'Documentation';
    description: string;
    link?: {
        url: string;
        label: string;
    };
    date: string;
}

export const papersAndThoughts: PaperThought[] = [
    {
        id: '1',
        title: 'Attention Is All You Need',
        type: 'Paper',
        description: 'Revisiting the seminal transformer paper. The self-attention mechanism is still fascinatingly elegant.',
        link: {
            url: 'https://arxiv.org/abs/1706.03762',
            label: 'Read on arXiv',
        },
        date: '2023-11-15',
    },
    {
        id: '2',
        title: 'Thoughts on Agentic Workflows',
        type: 'Thought',
        description: 'Agents are moving from simple chain-of-thought to complex, multi-step planning and execution loops. The future is agentic.',
        date: '2023-11-20',
    },
    {
        id: '3',
        title: 'Rust for Web Development',
        type: 'Documentation',
        description: 'Documenting my journey learning Rust for backend development. The borrow checker is a harsh but fair mistress.',
        link: {
            url: '#',
            label: 'View Notes',
        },
        date: '2023-11-25',
    },
    {
        id: '4',
        title: 'LoRA: Low-Rank Adaptation',
        type: 'Paper',
        description: 'Efficient fine-tuning of large language models. A game changer for democratizing AI model customization.',
        link: {
            url: 'https://arxiv.org/abs/2106.09685',
            label: 'Read on arXiv',
        },
        date: '2023-11-28',
    },
];
