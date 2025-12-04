export interface LegalItem {
    title: string;
    content: {
        type: string;
        text: string;
    }[];
}

export const legalItems: LegalItem[] = [
    {
        title: "Privacy Policy",
        content: [
            {
                type: "paragraph",
                text: "This is a placeholder for the privacy policy. We value your privacy and are committed to protecting your personal data."
            }
        ]
    },
    {
        title: "Terms of Service",
        content: [
            {
                type: "paragraph",
                text: "This is a placeholder for the terms of service. By using this website, you agree to these terms."
            }
        ]
    }
];
