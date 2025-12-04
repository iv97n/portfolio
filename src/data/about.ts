export interface WorkHistoryItem {
    company_name: string;
    from: number;
    to: number;
}

export interface AwardItem {
    title: string;
    place: string;
    date: number;
}

export const education_degrees = [
    "BSc in Data Science",
    "MSc in Artificial Intelligence"
];

export const education_description = "I studied Computer Science at XYZ University.";

export const work_history_description = "I have worked at several companies.";

export const cover_image = {
    src: "/images/personal.jpg",
    alt: "Ivan Hernandez"
};

export const awards_title = "Honors & Awards";

export const awards_items: AwardItem[] = [
    {
        title: "Best Project Award",
        place: "University",
        date: 1672531200000
    }
];

export const work_history: WorkHistoryItem[] = [
    {
        company_name: "Company A",
        from: 1672531200000,
        to: 1704067200000
    },
    {
        company_name: "Company B",
        from: 1609459200000,
        to: 1640995200000
    }
];
