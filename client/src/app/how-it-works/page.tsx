import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Enter Your Details",
            description: "Fill in your personal, family, and educational information using our intuitive builder. No technical skills required.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Choose a Template",
            description: "Browse through our collection of professionally designed templates. Select the one that matches your personality and background.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Download & Share",
            description: "Preview your biodata and download it as a high-quality PDF. It's ready to be shared with families and marriage bureaus.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            )
        }
    ];

    const faqs = [
        {
            question: "Is my data secure?",
            answer: "Yes, we prioritize your privacy. Your data is encrypted and only used to generate your biodata. We do not share your information with third parties."
        },
        {
            question: "Can I edit my biodata later?",
            answer: "Absolutely! You can log in anytime to update your details or change your template. Your changes are saved instantly."
        },
        {
            question: "What formats do you support?",
            answer: "Currently, we focus on high-quality PDF downloads which are perfect for printing or sharing on WhatsApp and email."
        },
        {
            question: "Are there any hidden charges?",
            answer: "No. We have a clear Free and Premium plan. Premium features are available for a one-time payment with no recurring subscription."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-pink-50 to-transparent -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-pink-50 rounded-full">
                        Process
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Create Your Biodata in <br />
                        <span className="gradient-text">3 Simple Steps</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We&apos;ve simplified the process of creating a professional marriage biodata. No design skills needed.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Dashed) */}
                        <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-pink-200 -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white border-2 border-pink-100 rounded-3xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:shadow-md group-hover:border-primary transition-all relative">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-xl">
                                        {step.number}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-600">Everything you need to know about ShaadiBio.</p>
                    </div>

                    <div className="grid gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-linear-to-r from-primary to-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden premium-shadow">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                            Ready to create your biodata?
                        </h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of others who have successfully created their biodata with ShaadiBio. Get started today for free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/signup"
                                className="px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-pink-50 transition-all shadow-lg"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/templates"
                                className="px-10 py-4 bg-primary-dark/20 text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                View Templates
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Placeholder */}
            <footer className="py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
                <p>&copy; 2024 ShaadiBio. All rights reserved.</p>
            </footer>
        </div>
    );
}
