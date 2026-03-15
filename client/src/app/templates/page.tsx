import Navbar from "@/components/layout/Navbar";
import { TEMPLATES } from "@/templates";
import Link from "next/link";

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our Premium <span className="gradient-text font-love">Templates</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from a wide variety of professionally designed marriage biodata templates. Traditional, modern, and designer options.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEMPLATES.map((template) => (
                        <div key={template.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:premium-shadow transition-all group">
                            <div className="aspect-[3/4] bg-pink-50 relative group">
                                {/* Mock Template Preview */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-2/3 h-3/4 bg-white shadow-lg border border-pink-100 p-4 transform group-hover:scale-105 transition-transform">
                                        <div className="h-4 w-1/2 bg-pink-100 mb-2"></div>
                                        <div className="h-2 w-full bg-gray-100 mb-1"></div>
                                        <div className="h-2 w-full bg-gray-100 mb-1"></div>
                                        <div className="h-2 w-2/3 bg-gray-100"></div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Link
                                        href={`/builder?template=${template.id}`}
                                        className="px-6 py-2 bg-primary text-white rounded-full font-bold premium-shadow"
                                    >
                                        Use Template
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                                    <p className="text-sm text-gray-500">{template.category}</p>
                                </div>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Free
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
