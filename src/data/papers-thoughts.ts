export interface PaperThought {
    id: string;
    title: string;
    type: 'Paper' | 'Thought' | 'Documentation' | 'Book';
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
        title: 'Open Source by Big Corporations',
        type: 'Thought',
        description: 'Is the investment in open-source projects by big corporations, such as PyTorch by Meta or Bun by Anthropic, really a good thing for the community, or just a way to control the development ecosystem? I personally feel that both statements are true, ',
        link: {
            url: 'https://arxiv.org/abs/2106.09685',
            label: 'Read on arXiv',
        },
        date: '2023-11-28',
    },
    {
        id: '2',
        title: '“Plantations, Computers, and Industrial Control” – Meredith Whittaker',
        type: 'Book',
        description: 'Just finished reading this book. It is really interesting to see how   ',
        date: '2023-11-25',
    },

];
