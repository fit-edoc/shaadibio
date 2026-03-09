import { TemplateProps } from "./registry";

const StandardTemplate: React.FC<TemplateProps> = ({ data }) => {
    const { personalDetails, familyDetails, educationProfession, contactDetails, themeColor, fontFamily } = data;

    return (
        <div
            className="p-8 bg-white shadow-lg mx-auto max-w-[800px] min-h-[1100px]"
            style={{ color: themeColor, fontFamily: fontFamily }}
        >
            <div className="border-4 p-6 border-double h-full" style={{ borderColor: themeColor }}>
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">Bio-Data</h1>
                    <div className="h-1 w-24 bg-current mx-auto"></div>
                </header>

                <main className="space-y-8">
                    {/* Personal Details */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 mb-4 pb-1 uppercase tracking-wider" style={{ borderColor: themeColor }}>
                            Personal Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DetailRow label="Full Name" value={personalDetails.name} />
                            <DetailRow label="Gender" value={personalDetails.gender} />
                            <DetailRow label="Date of Birth" value={personalDetails.dob} />
                            <DetailRow label="Birth Time" value={personalDetails.birthTime} />
                            <DetailRow label="Birth Place" value={personalDetails.birthPlace} />
                            <DetailRow label="Height" value={personalDetails.height} />
                            <DetailRow label="Caste" value={personalDetails.caste} />
                            <DetailRow label="Religion" value={personalDetails.religion} />
                        </div>
                    </section>

                    {/* Education & Profession */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 mb-4 pb-1 uppercase tracking-wider" style={{ borderColor: themeColor }}>
                            Education & Profession
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <DetailRow label="Education" value={educationProfession.education} />
                            <DetailRow label="Profession" value={educationProfession.profession} />
                            <DetailRow label="Annual Income" value={educationProfession.income} />
                        </div>
                    </section>

                    {/* Family Details */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 mb-4 pb-1 uppercase tracking-wider" style={{ borderColor: themeColor }}>
                            Family Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DetailRow label="Father Name" value={familyDetails.fatherName} />
                            <DetailRow label="Mother Name" value={familyDetails.motherName} />
                            <DetailRow label="Family Type" value={familyDetails.familyType} />
                            <DetailRow label="Native Place" value={familyDetails.nativePlace} />
                        </div>
                    </section>

                    {/* Contact Details */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 mb-4 pb-1 uppercase tracking-wider" style={{ borderColor: themeColor }}>
                            Contact Details
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <DetailRow label="Mobile" value={contactDetails.mobile} />
                            <DetailRow label="Email" value={contactDetails.email} />
                            <DetailRow label="Address" value={contactDetails.address} />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
    <div className="flex">
        <span className="font-semibold w-1/3 text-gray-700">{label}</span>
        <span className="w-4 text-gray-500">:</span>
        <span className="w-2/3 text-gray-900 font-medium">{value || "-"}</span>
    </div>
);

export default StandardTemplate;
