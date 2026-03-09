import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            ShaadiBio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/templates" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">
                                Templates
                            </Link>
                            <Link href="/pricing" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">
                                Pricing
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">
                                How it works
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-all premium-shadow"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
