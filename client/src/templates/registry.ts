import { BioData } from "@/types/biodata";
import React from "react";

export interface TemplateProps {
    data: BioData;
    isPremium?: boolean;
}

export interface TemplateMetadata {
    id: string;
    name: string;
    category: "Traditional" | "Modern" | "Premium";
    preview: string;
    component: React.FC<TemplateProps>;
}

export const templateRegistry: TemplateMetadata[] = [];

export const registerTemplate = (metadata: TemplateMetadata) => {
    templateRegistry.push(metadata);
};
