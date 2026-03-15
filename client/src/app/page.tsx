import Navbar from "@/components/layout/Navbar";
import Heart from "@/icons/Heart";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="absolute top-1/2">
        <Heart />
      </div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-pink-50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Create Your Perfect <br />
            <span className="gradient-text font-love">Marriage BioData</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Professional, beautiful, and easy to use. Choose from multiple traditional and modern templates. Download in high-quality PDF.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/builder"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-accent transition-all premium-shadow"
            >
              Start Creating Free
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-xl border border-gray-200 hover:border-primary transition-all"
            >
              Browse Templates
            </Link>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-pink-100/50 blur-3xl -z-10 rounded-full w-2/3 mx-auto"></div>
            <img
              src="/hero.png"
              alt="BioData Preview"
              className="rounded-2xl shadow-2xl border border-white/50 mx-auto max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose ShaadiBio?</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Modern Templates"
              description="Beautifully designed templates that make a great first impression. Traditional and modern options available."
              icon="✨"
            />
            <FeatureCard
              title="Easy to Export"
              description="Download your biodata in high-resolution PDF format. Perfect for printing or sharing digitally."
              icon="📄"
            />
            <FeatureCard
              title="Privacy Focused"
              description="You have full control over your data. Hide sensitive contact information with a single click."
              icon="🔒"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:premium-shadow transition-all group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
