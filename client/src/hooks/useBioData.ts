"use client";

import { BioData } from "@/types/biodata";
import { useState } from "react";

const initialData: BioData = {
    personalDetails: {
        name: "",
        gender: "Male",
        dob: "",
        birthTime: "",
        birthPlace: "",
        height: "",
        weight: "",
        bloodGroup: "",
        complexion: "",
        religion: "",
        caste: "",
        subCaste: "",
        gotra: "",
        rashi: "",
        nakshatra: "",
        maritalStatus: "Never Married",
        nationality: "Indian",
        motherTongue: "",
    },
    educationProfession: {
        education: "",
        profession: "",
        income: "",
        jobLocation: "",
        companyName: "",
    },
    familyDetails: {
        fatherName: "",
        fatherOccupation: "",
        motherName: "",
        motherOccupation: "",
        brothers: 0,
        sisters: 0,
        marriedBrothers: 0,
        marriedSisters: 0,
        familyType: "Nuclear",
        nativePlace: "",
    },
    contactDetails: {
        mobile: "",
        email: "",
        address: "",
    },
    templateId: "standard",
    themeColor: "#be185d",
    fontFamily: "serif",
};

export const useBioData = () => {
    const [data, setData] = useState<BioData>(initialData);

    const updatePersonal = (field: keyof BioData["personalDetails"], value: string) => {
        setData((prev) => ({
            ...prev,
            personalDetails: { ...prev.personalDetails, [field]: value },
        }));
    };

    const updateEducation = (field: keyof BioData["educationProfession"], value: string) => {
        setData((prev) => ({
            ...prev,
            educationProfession: { ...prev.educationProfession, [field]: value },
        }));
    };

    const updateFamily = (field: keyof BioData["familyDetails"], value: string | number) => {
        setData((prev) => ({
            ...prev,
            familyDetails: { ...prev.familyDetails, [field]: value },
        }));
    };

    const updateContact = (field: keyof BioData["contactDetails"], value: string) => {
        setData((prev) => ({
            ...prev,
            contactDetails: { ...prev.contactDetails, [field]: value },
        }));
    };

    const setTheme = (color: string) => setData((prev) => ({ ...prev, themeColor: color }));
    const setTemplate = (id: string) => setData((prev) => ({ ...prev, templateId: id }));

    return {
        data,
        updatePersonal,
        updateEducation,
        updateFamily,
        updateContact,
        setTheme,
        setTemplate,
    };
};
