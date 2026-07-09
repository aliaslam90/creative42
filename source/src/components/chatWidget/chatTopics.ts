export interface ChatTopic {
    id: string;
    label: string;
    keywords: string[];
    reply: string;
}

export const chatTopics: ChatTopic[] = [
    {
        id: "pricing",
        label: "Pricing",
        keywords: ["price", "pricing", "cost", "quote", "budget", "how much"],
        reply:
            "Every project at Creative42.ai is scoped individually, so pricing depends on what you need. Share a few details on our Contact page and we'll get back to you with a tailored quote.",
    },
    {
        id: "services",
        label: "Services",
        keywords: ["service", "services", "what do you do", "offer"],
        reply:
            "We offer Branding, UI/UX Design, Content Creation, Web Development & App Development, Social Media Services, Media Production, and Digital Marketing. Want more detail on any of these?",
    },
    {
        id: "timeline",
        label: "Timeline",
        keywords: ["timeline", "how long", "duration", "turnaround"],
        reply:
            "Timelines vary by project scope, from a focused brand refresh to a full website build. Once we understand your goals we can share a realistic timeline — reach out via our Contact page to start that conversation.",
    },
    {
        id: "portfolio",
        label: "Portfolio",
        keywords: ["portfolio", "work", "projects", "clients", "case study"],
        reply:
            "Take a look at our Our Work section for real client projects, including CMC Holding, Canadian Medical Center, and Sky Dental Center. Visit /projects to see more.",
    },
    {
        id: "branding",
        label: "Branding",
        keywords: ["brand", "branding", "identity", "logo"],
        reply:
            "Our branding work covers strategic brand foundations, stories, names, messaging, identity systems, and positioning — all shaped around a clear Creative42 angle.",
    },
    {
        id: "support",
        label: "Support",
        keywords: ["support", "help", "contact", "email"],
        reply:
            "Need help with something specific? Email us directly at hello@creative42.ai and our team will get back to you.",
    },
];

export const fallbackReply =
    "Thanks for your message! For a detailed answer, please reach out to hello@creative42.ai or pick one of the topics above.";

export function findReply(text: string): string {
    const lower = text.toLowerCase();
    const match = chatTopics.find((topic) => topic.keywords.some((kw) => lower.includes(kw)));
    return match ? match.reply : fallbackReply;
}
