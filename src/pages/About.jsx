import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div className="font-display transition-colors duration-300">
            {/* Top Navigation Bar */}
            <div className="flex justify-center border-b border-solid border-[#e9e7f3] dark:border-b-gray-800 bg-ivory dark:bg-background-dark sticky top-0 z-50">
                <header className="flex w-full max-w-[1200px] items-center justify-between whitespace-nowrap px-10 py-3">
                    <div className="flex items-center gap-4 text-primary dark:text-white">
                        <div className="w-6 h-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display">Westgate Stratagem</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link to="/" className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors">Our Approach</Link>
                            <Link to="/about" className="text-primary text-sm font-bold leading-normal">Who We Work With</Link>
                            <Link to="/services" className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors">Services</Link>
                            <Link to="/about" className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors">About</Link>
                        </nav>
                        <Link to="/contact" className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Contact Us</span>
                        </Link>
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="md:hidden p-2 text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">{showMobileMenu ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Menu Dropdown */}
            {showMobileMenu && (
                <div className="md:hidden bg-ivory dark:bg-background-dark border-b border-[#e9e7f3] dark:border-gray-800 shadow-lg sticky top-[73px] z-40 animate-fade-in">
                    <div className="max-w-[1200px] mx-auto px-6 py-4">
                        <nav className="flex flex-col gap-4">
                            <Link
                                to="/"
                                onClick={() => setShowMobileMenu(false)}
                                className="text-slate-700 dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2 border-b border-slate-100 dark:border-gray-700"
                            >
                                Our Approach
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setShowMobileMenu(false)}
                                className="text-primary text-base font-bold py-2 border-b border-slate-100 dark:border-gray-700"
                            >
                                Who We Work With
                            </Link>
                            <Link
                                to="/services"
                                onClick={() => setShowMobileMenu(false)}
                                className="text-slate-700 dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2 border-b border-slate-100 dark:border-gray-700"
                            >
                                Services
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setShowMobileMenu(false)}
                                className="bg-primary text-white text-base font-bold px-5 py-3 rounded-lg hover:bg-primary/90 transition-all shadow-sm text-center mt-2"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="flex flex-1 justify-center py-12 bg-ivory dark:bg-background-dark/50">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <div className="@container">
                        <div className="flex flex-col gap-6 items-center text-center px-4">
                            <h1 className="text-[#100d1b] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl font-display italic">
                                Who We Work With
                            </h1>
                            <div className="h-1 w-24 bg-primary rounded-full"></div>
                            <h2 className="text-slate-accent dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-[700px]">
                                Supporting individuals and institutions whose work depends on credibility, knowledge, and long-term thinking.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Target Audience Grid */}
            <div className="flex flex-1 justify-center py-10">
                <div className="flex flex-col max-w-[1000px] flex-1">
                    <h3 className="text-primary dark:text-gray-200 text-2xl font-bold px-4 mb-8 text-center font-display">Partners in Enduring Intelligence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#d3cfe7] dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex-col shadow-sm hover:shadow-md transition-all">
                            <div className="text-primary dark:text-primary/70">
                                <span className="material-symbols-outlined text-4xl">account_balance</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#100d1b] dark:text-white text-base font-bold leading-tight font-display">Universities & Institutions</h2>
                                <p className="text-slate-accent dark:text-gray-400 text-sm font-normal leading-normal">Strategic guidance for higher education leadership and sustainable institutional growth.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#d3cfe7] dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex-col shadow-sm hover:shadow-md transition-all">
                            <div className="text-primary dark:text-primary/70">
                                <span className="material-symbols-outlined text-4xl">policy</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#100d1b] dark:text-white text-base font-bold leading-tight font-display">Policy & Leadership</h2>
                                <p className="text-slate-accent dark:text-gray-400 text-sm font-normal leading-normal">Providing intelligence for organizations shaping policy and global leadership frameworks.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#d3cfe7] dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex-col shadow-sm hover:shadow-md transition-all">
                            <div className="text-primary dark:text-primary/70">
                                <span className="material-symbols-outlined text-4xl">science</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#100d1b] dark:text-white text-base font-bold leading-tight font-display">Researchers & Scholars</h2>
                                <p className="text-slate-accent dark:text-gray-400 text-sm font-normal leading-normal">Specialized support for scholars navigating complex research landscapes and grant ecosystems.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#d3cfe7] dark:border-gray-700 bg-white dark:bg-gray-900/50 p-6 flex-col shadow-sm hover:shadow-md transition-all">
                            <div className="text-primary dark:text-primary/70">
                                <span className="material-symbols-outlined text-4xl">hub</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#100d1b] dark:text-white text-base font-bold leading-tight font-display">Knowledge Organizations</h2>
                                <p className="text-slate-accent dark:text-gray-400 text-sm font-normal leading-normal">Partnering with entities where intellectual capital is the primary driver of value.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience & Perspective Narrative */}
            <div className="flex flex-1 justify-center py-16 bg-primary/5 dark:bg-primary/10">
                <div className="flex flex-col max-w-[960px] flex-1 px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-4">
                            <h2 className="text-[#100d1b] dark:text-white text-3xl font-bold leading-tight font-display italic">Evolution of Strategy: Since 2018</h2>
                            <p className="text-slate-accent dark:text-gray-300 leading-relaxed text-lg">
                                What began as a focused strategic consulting practice in 2018 has matured into a comprehensive framework for institutional resilience. Our journey reflects the very intelligence we advocate for: deliberate, evidence-based, and forward-looking.
                            </p>
                            <p className="text-slate-accent dark:text-gray-400 leading-relaxed italic">
                                In 2025, Westgate Stratagem transitioned into a Limited Liability Company, formalizing our commitment to serving the academic and policy sectors with sustained professional excellence.
                            </p>
                        </div>
                        <div className="flex-1 w-full max-w-[400px]">
                            {/* Timeline Graphic */}
                            <div className="relative pl-8 border-l-2 border-primary/30 py-4 space-y-12">
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 size-4 bg-primary rounded-full ring-4 ring-primary/20"></div>
                                    <h4 className="font-bold font-display text-xl">2018</h4>
                                    <p className="text-sm text-slate-accent dark:text-gray-400">Inception of strategic consulting services for specialized research units.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 size-4 bg-primary/50 rounded-full"></div>
                                    <h4 className="font-bold font-display text-xl">2021</h4>
                                    <p className="text-sm text-slate-accent dark:text-gray-400">Expansion into national academic policy and institutional intelligence.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 size-4 bg-primary rounded-full ring-4 ring-primary/40 animate-pulse"></div>
                                    <h4 className="font-bold font-display text-xl text-primary">2025</h4>
                                    <p className="text-sm text-slate-accent dark:text-gray-400">Formal incorporation as Westgate Stratagem LTD, focusing on Enduring Intelligence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Depth of Expertise Section */}
            <div className="flex flex-1 justify-center py-16">
                <div className="flex flex-col max-w-[960px] flex-1 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative rounded-2xl overflow-hidden min-h-[300px] bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsSUktQdTZsXWwmwN0l9ryNlH7FmRAXKgfks1b5O8zkYf1w7ik8zgV6gu5s6VKRZgnG6xc51647Y9xlPsEIylo4l30UVQ9hEGtPebABFoPQMqF38-s3ZuLCmz4ASBKbni4Pb5y_8-0K-gsuNZTw6dtbI2gAZH6Euc62mulhRYJv_pHClOT12EAgu2LBUNj04xqtoARmrRa3zRq3GXlI1N8lctwFuiyp02Ah_LyB4kPfR6OhGJi1g3lrZC_QaazrYu9VsqIQiuYwa0")', backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold font-display mb-6">Depth of Expertise</h2>
                            <p className="text-slate-accent dark:text-gray-300 mb-6 font-medium">Over a decade of hands-on experience within universities, research units, and libraries.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-slate-accent dark:text-gray-400">Refined practice through sustained involvement in high-stakes research environments.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-slate-accent dark:text-gray-400">Bridging the gap: Moving from theoretical idea to real-world institutional application.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-slate-accent dark:text-gray-400">Expertise in navigating the nuanced complexities of library systems and information science.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-slate-accent dark:text-gray-400">National and international perspective on academic governance.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Reach & Impact */}
            <div className="flex flex-1 justify-center py-12 bg-ivory dark:bg-background-dark">
                <div className="flex flex-col max-w-[960px] flex-1 px-4 text-center">
                    <h2 className="text-2xl font-bold font-display mb-10">Global Reach & Institutional Environments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl">public</span>
                            <span className="text-xs font-bold tracking-widest uppercase">Global Policy Units</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl">school</span>
                            <span className="text-xs font-bold tracking-widest uppercase">Research Universities</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl">auto_stories</span>
                            <span className="text-xs font-bold tracking-widest uppercase">National Libraries</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl">corporate_fare</span>
                            <span className="text-xs font-bold tracking-widest uppercase">Knowledge Hubs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Closing Thought Quote */}
            <div className="flex flex-1 justify-center py-24 bg-primary text-white">
                <div className="flex flex-col max-w-[960px] flex-1 px-4 text-center">
                    <span className="material-symbols-outlined text-6xl opacity-30 mb-6">format_quote</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light leading-tight italic">
                        Intelligence is not treated as a trend to follow, but as a discipline to sustain.
                    </h2>
                    <div className="mt-10 flex flex-col items-center gap-2">
                        <div className="h-0.5 w-16 bg-white/40"></div>
                        <p className="text-xl font-bold tracking-[0.2em] font-display">ENDURING INTELLIGENCE</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="flex flex-1 justify-center py-10 bg-ivory dark:bg-background-dark border-t border-[#e9e7f3] dark:border-gray-800">
                <div className="flex flex-col max-w-[1200px] flex-1 px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4 text-primary dark:text-white opacity-60">
                            <h2 className="text-sm font-bold leading-tight font-display italic">Westgate Stratagem LTD</h2>
                            <span className="text-xs">© 2025. All Rights Reserved.</span>
                        </div>
                        <div className="flex gap-6 text-sm font-medium text-slate-accent dark:text-gray-400">
                            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                            <Link to="/terms" className="hover:underline">Terms of Service</Link>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}
