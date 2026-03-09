"use client";

import { useBioData } from "@/hooks/useBioData";
import { getTemplateById, TEMPLATES } from "@/templates";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

export default function BuilderPage() {
    const {
        data,
        updatePersonal,
        updateEducation,
        updateFamily,
        updateContact,
        setTheme,
        setTemplate
    } = useBioData();

    const [activeTab, setActiveTab] = useState("personal");

    const SelectedTemplate = getTemplateById(data.templateId).component;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-20 px-4 h-screen flex flex-col md:flex-row gap-6">
                {/* Left Side: Form Editor */}
                <div className="w-full md:w-1/2 overflow-y-auto pb-10 pr-2 custom-scrollbar">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Your BioData</h1>

                        {/* Tabs */}
                        <div className="flex space-x-2 mb-8 border-b overflow-x-auto pb-2">
                            <TabButton active={activeTab === "personal"} onClick={() => setActiveTab("personal")} label="Personal" />
                            <TabButton active={activeTab === "family"} onClick={() => setActiveTab("family")} label="Family" />
                            <TabButton active={activeTab === "education"} onClick={() => setActiveTab("education")} label="Education" />
                            <TabButton active={activeTab === "contact"} onClick={() => setActiveTab("contact")} label="Contact" />
                            <TabButton active={activeTab === "design"} onClick={() => setActiveTab("design")} label="Design" />
                        </div>

                        {/* Form Content */}
                        <div className="space-y-6">
                            {activeTab === "personal" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField label="Full Name" value={data.personalDetails.name} onChange={(v) => updatePersonal("name", v)} />
                                    <InputField label="Date of Birth" type="date" value={data.personalDetails.dob} onChange={(v) => updatePersonal("dob", v)} />
                                    <InputField label="Caste" value={data.personalDetails.caste} onChange={(v) => updatePersonal("caste", v)} />
                                    <InputField label="Religion" value={data.personalDetails.religion} onChange={(v) => updatePersonal("religion", v)} />
                                    <InputField label="Height" value={data.personalDetails.height} onChange={(v) => updatePersonal("height", v)} />
                                    <InputField label="Birth Place" value={data.personalDetails.birthPlace} onChange={(v) => updatePersonal("birthPlace", v)} />
                                </div>
                            )}

                            {activeTab === "family" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField label="Father's Name" value={data.familyDetails.fatherName} onChange={(v) => updateFamily("fatherName", v)} />
                                    <InputField label="Mother's Name" value={data.familyDetails.motherName} onChange={(v) => updateFamily("motherName", v)} />
                                    <InputField label="Family Type" value={data.familyDetails.familyType} onChange={(v) => updateFamily("familyType", v)} />
                                    <InputField label="Native Place" value={data.familyDetails.nativePlace} onChange={(v) => updateFamily("nativePlace", v)} />
                                </div>
                            )}

                            {activeTab === "education" && (
                                <div className="grid grid-cols-1 gap-4">
                                    <InputField label="Education" value={data.educationProfession.education} onChange={(v) => updateEducation("education", v)} />
                                    <InputField label="Profession" value={data.educationProfession.profession} onChange={(v) => updateEducation("profession", v)} />
                                    <InputField label="Income" value={data.educationProfession.income} onChange={(v) => updateEducation("income", v)} />
                                </div>
                            )}

                            {activeTab === "contact" && (
                                <div className="grid grid-cols-1 gap-4">
                                    <InputField label="Mobile" value={data.contactDetails.mobile} onChange={(v) => updateContact("mobile", v)} />
                                    <InputField label="Email" value={data.contactDetails.email} onChange={(v) => updateContact("email", v)} />
                                    <InputField label="Address" value={data.contactDetails.address} onChange={(v) => updateContact("address", v)} />
                                </div>
                            )}

                            {activeTab === "design" && (
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700 mb-3">Choose Template</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {TEMPLATES.map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => setTemplate(t.id)}
                                                    className={`p-2 rounded-lg border-2 transition-all ${data.templateId === t.id ? "border-primary bg-pink-50" : "border-gray-200"}`}
                                                >
                                                    <div className="aspect-[3/4] bg-gray-100 rounded mb-2 overflow-hidden">
                                                        {/* Preview Image here */}
                                                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">Preview</div>
                                                    </div>
                                                    <p className="text-xs font-medium text-center">{t.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700 mb-3">Theme Color</h3>
                                        <div className="flex space-x-3">
                                            {["#be185d", "#1e40af", "#065f46", "#92400e", "#000000"].map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setTheme(color)}
                                                    className={`w-10 h-10 rounded-full border-2 transition-all ${data.themeColor === color ? "border-gray-900 scale-110" : "border-transparent"}`}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-10 flex justify-between">
                            <button className="px-6 py-2 rounded-xl text-gray-600 font-medium">Reset</button>
                            <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold premium-shadow">Download PDF</button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Real-time Preview */}
                <div className="hidden md:block w-1/2 bg-gray-200 rounded-t-2xl p-8 overflow-y-auto pb-20 border-x border-t border-gray-300">
                    <div className="sticky top-0 mb-4 flex justify-between items-center bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-white/50">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Live Preview</span>
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>

                    <div className="transform scale-90 origin-top">
                        <SelectedTemplate data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const TabButton = ({ active, onClick, label }: any) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-all ${active ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-gray-700"}`}
    >
        {label}
    </button>
);

const InputField = ({ label, value, onChange, type = "text" }: any) => (
    <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</label>
        <input
            type={type}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${label}`}
        />
    </div>
);
