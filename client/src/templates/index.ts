import StandardTemplate from "./StandardTemplate";
import { TemplateMetadata } from "./registry";

export const TEMPLATES: TemplateMetadata[] = [
    {
        id: "standard",
        name: "Standard Classic",
        category: "Traditional",
        preview: "/previews/standard.png",
        component: StandardTemplate,
    },
    // Add more templates here
];

export const getTemplateById = (id: string) => {
    return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
};
