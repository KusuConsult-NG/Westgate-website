import { Link } from 'react-router-dom';

export default function ServiceAdvisory() {
    return (
        <div className="font-display bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
            {/* Navigation Bar */}
            <div className="layout-container flex flex-col sticky top-0 z-50">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-5 md:px-20 lg:px-40 bg-white dark:bg-slate-950">
                    <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                        <div className="size-6 text-[#0f49bd]">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0f49bd] text-lg font-bold leading-tight tracking-[0.2em] uppercase">Westgate Advisory</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-12">
                        <nav className="hidden md:flex items-center gap-10">
                            <Link to="/about" className="text-slate-500 hover:text-[#0f49bd] text-sm font-medium transition-colors">Firm</Link>
                            <Link to="/services" className="text-slate-500 hover:text-[#0f49bd] text-sm font-medium transition-colors">Capabilities</Link>
                            <Link to="/insights" className="text-slate-500 hover:text-[#0f49bd] text-sm font-medium transition-colors">Perspectives</Link>
                        </nav>
                        <Link to="/contact" className="text-sm font-bold text-[#0f49bd] border-b-2 border-[#0f49bd] pb-0.5 hover:opacity-70 transition-opacity">
                            Inquire
                        </Link>
                    </div>
                </header>
            </div>

            <main className="flex flex-col flex-1">
                {/* Hero Section */}
                <section className="px-6 py-24 md:px-20 lg:px-40 bg-white dark:bg-slate-950">
                    <div className="max-w-[900px]">
                        <span className="block text-[#0f49bd] font-bold tracking-[0.2em] uppercase text-xs mb-6">Executive Advisory Board</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white font-medium leading-[1.1] mb-10">
                            Counsel for the <br /> <i className="font-serif italic text-slate-400">Long Now.</i>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl border-l-[3px] border-[#0f49bd] pl-8">
                            We support University Presidents, Library Deans, and Research Directors in making high-stakes decisions that will define their institution's trajectory for the next decade.
                        </p>
                    </div>
                </section>

                {/* The Value Prop */}
                <section className="px-6 py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div>
                            <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">visibility</span>
                            <h3 className="text-xl font-bold mb-4 font-serif">Uncompromised Clarity</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                We are not vendors. We have no software to sell you. Our only product is unvarnished truth and strategic clarity.
                            </p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">balance</span>
                            <h3 className="text-xl font-bold mb-4 font-serif">Governance & Ethics</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Navigating the moral hazards of AI and data monetization. We help you build frameworks that protect institutional reputation.
                            </p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">timeline</span>
                            <h3 className="text-xl font-bold mb-4 font-serif">Generational Planning</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Moving beyond the 3-year funding cycle to architect systems that endure for 20, 50, or 100 years.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="px-6 py-24 md:px-20 lg:px-40 bg-white dark:bg-slate-950">
                    <div className="max-w-[1200px] mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-16 text-center">Engagement Structures</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Retainer */}
                            <div className="p-10 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-[#0f49bd] transition-colors">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">The Retainer</h3>
                                <h4 className="text-2xl font-bold mb-6 font-serif">Executive Counsel</h4>
                                <ul className="space-y-4 mb-8 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-[#0f49bd] rounded-full"></div>
                                        <span>Unlimited Access to Senior Partners</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-[#0f49bd] rounded-full"></div>
                                        <span>Weekly Strategic Roundtables</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-[#0f49bd] rounded-full"></div>
                                        <span>Crisis Communication Support</span>
                                    </li>
                                </ul>
                                <button className="text-[#0f49bd] font-bold text-sm uppercase tracking-wider border-b border-[#0f49bd] pb-1">
                                    Request Availability
                                </button>
                            </div>

                            {/* Project */}
                            <div className="p-10 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-[#0f49bd] transition-colors shadow-lg">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">The Sprint</h3>
                                <h4 className="text-2xl font-bold mb-6 font-serif">Strategic Audit</h4>
                                <ul className="space-y-4 mb-8 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-slate-300 rounded-full"></div>
                                        <span>6-Week Intensive Review</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-slate-300 rounded-full"></div>
                                        <span>Infrastructure Stress Testing</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="size-1.5 bg-slate-300 rounded-full"></div>
                                        <span>Deliverable: The 5-Year Roadmap</span>
                                    </li>
                                </ul>
                                <button className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote */}
                <section className="py-24 bg-[#0f49bd] text-white text-center px-6">
                    <div className="max-w-3xl mx-auto">
                        <p className="font-serif text-3xl md:text-4xl italic leading-relaxed mb-10 opacity-90">
                            "The function of leadership is to produce more leaders, not more followers. We help you build the systems that build your people."
                        </p>
                        <span className="font-bold tracking-widest text-xs uppercase opacity-70">— Westgate Principle No. 4</span>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 px-6">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-[#0f49bd]">account_balance</span>
                                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-widest">Westgate Advisory</span>
                            </div>
                            <p className="max-w-sm">Reserved for the serious work of institutional stewardship.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Offices</h4>
                            <ul className="space-y-3">
                                <li>London, UK</li>
                                <li>New York, USA</li>
                                <li>Singapore</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
                            <ul className="space-y-3">
                                <li>Privacy Charter</li>
                                <li>Conflict of Interest Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs opacity-50">
                        &copy; 2025 Westgate Stratagem LTD. All Rights Reserved.
                    </div>
                </footer>
            </main>
        </div>
    );
}
