import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-pink-50 to-transparent -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Simple, Transparent <br />
                        <span className="gradient-text">Pricing Plans</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that's right for you. Whether you want to try it out or need a premium looking biodata, we have you covered.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                    {/* Free Plan */}
                    <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-5xl font-extrabold tracking-tight text-gray-900">₹0</span>
                                <span className="text-gray-500 ml-2">/ lifetime</span>
                            </div>
                            <p className="text-gray-600">Perfect for getting started and exploring our platform.</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-center text-gray-600">
                                <span className="bg-pink-50 text-primary p-1 rounded-full mr-3">✓</span>
                                Access to basic templates
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="bg-pink-50 text-primary p-1 rounded-full mr-3">✓</span>
                                Unlimited edits
                            </li>
                            <li className="flex items-center text-gray-600 opacity-50">
                                <span className="bg-gray-50 text-gray-400 p-1 rounded-full mr-3">✕</span>
                                High-quality PDF export (with watermark)
                            </li>
                            <li className="flex items-center text-gray-600 opacity-50">
                                <span className="bg-gray-50 text-gray-400 p-1 rounded-full mr-3">✕</span>
                                Premium templates
                            </li>
                        </ul>

                        <Link
                            href="/signup"
                            className="w-full py-4 px-8 rounded-2xl border-2 border-primary text-primary font-bold text-center hover:bg-primary hover:text-white transition-all"
                        >
                            Get Started Free
                        </Link>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-3xl p-10 border-2 border-primary premium-shadow relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-5xl font-extrabold tracking-tight text-gray-900">₹299</span>
                                <span className="text-gray-500 ml-2">/ one-time</span>
                            </div>
                            <p className="text-gray-600">Everything you need for a stunning professional biodata.</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-center text-gray-900 font-medium">
                                <span className="bg-primary text-white p-1 rounded-full mr-3">✓</span>
                                All premium templates included
                            </li>
                            <li className="flex items-center text-gray-900 font-medium">
                                <span className="bg-primary text-white p-1 rounded-full mr-3">✓</span>
                                High-quality watermark-free PDF
                            </li>
                            <li className="flex items-center text-gray-900 font-medium">
                                <span className="bg-primary text-white p-1 rounded-full mr-3">✓</span>
                                Priority customer support
                            </li>
                            <li className="flex items-center text-gray-900 font-medium">
                                <span className="bg-primary text-white p-1 rounded-full mr-3">✓</span>
                                Lifetime access to your biodata
                            </li>
                        </ul>

                        <Link
                            href="/signup"
                            className="w-full py-4 px-8 rounded-2xl bg-primary text-white font-bold text-center hover:bg-accent transition-all premium-shadow"
                        >
                            Upgrade to Premium
                        </Link>
                    </div>

                </div>
            </section>

            {/* FAQ or Comparison - To be added if needed */}
        </div>
    );
}
