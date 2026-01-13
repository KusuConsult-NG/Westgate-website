import { Link } from 'react-router-dom';

export default function ServiceAI() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-deep-navy dark:text-slate-50 overflow-x-hidden">
            {/* Top Navigation Bar */}
            <div className="layout-container flex flex-col sticky top-0 z-50">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-4 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="flex items-center gap-4 text-deep-navy dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-deep-navy dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Westgate Stratagem LTD</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link to="/" className="text-deep-navy dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Home</Link>
                            <Link to="/services" className="text-deep-navy dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Services</Link>
                            <Link to="/about" className="text-deep-navy dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">About</Link>
                            <Link to="/insights" className="text-deep-navy dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Insights</Link>
                        </nav>
                        <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-primary/90 transition-all">
                            Consultation
                        </Link>
                    </div>
                </header>
            </div>

            <main className="flex flex-col flex-1">
                {/* Hero Section */}
                <section className="px-6 py-12 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="@container">
                            <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
                                <div className="flex flex-col gap-6 flex-1">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-deep-navy dark:text-white text-4xl font-extrabold leading-[1.1] tracking-tight @[480px]:text-6xl">
                                            AI for Research and <br className="hidden @[1200px]:block" /> Knowledge Work
                                        </h1>
                                        <h2 className="text-slate-gray dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[540px]">
                                            AI as a thinking aid, not a shortcut. We empower academic and institutional clients to use 'Enduring Intelligence' for deeper analysis and intellectual growth.
                                        </h2>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-[0.015em]">
                                            Explore Solutions
                                        </button>
                                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-slate-300 dark:border-slate-700 text-deep-navy dark:text-white text-base font-bold tracking-[0.015em]">
                                            The Philosophy
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full @[864px]:w-[500px] h-[400px] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl shadow-primary/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEb8g_plxg-c9W5BELeHjA7TEZoRwdPos5Jy4nYMFzHe9xCDJffs1g5B2jftYpT7UyJlIt8u5icfM5HvwV9ZZsh-ef67As7oahLpoAL5SI_8lMxSgccnPlEJ_NjXWQR0wdSc-LNzahh2MV52u3Stxka3t0ayY3Zy4YglMZSBA2wf1QeTXHgQhlng-dtuc8wQkCyxu1JvffAFd5JbeZMsP_ncc6BTsv1SZZSvZ7dINMusvS29OvtwTPD3Concr_5M7hxSH2N2TuXjQ")' }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Approach */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-background-light dark:bg-slate-900/30">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="flex-1">
                                <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Our Methodology</h3>
                                <h2 className="text-deep-navy dark:text-white text-3xl font-bold mb-6 leading-tight">The Approach: Thinking With AI</h2>
                                <p className="text-slate-gray dark:text-slate-300 text-lg leading-relaxed mb-8">
                                    We believe technology should amplify the human intellect, not replace it. Our philosophy centers on asking better questions and maintaining absolute intellectual ownership throughout the research process.
                                </p>
                                <div className="flex items-center gap-4 p-6 bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-4xl">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-deep-navy dark:text-white">Cognitive Partnership</h4>
                                        <p className="text-sm text-slate-gray">Moving from generative output to collaborative inquiry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white dark:bg-background-dark p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="text-deep-navy dark:text-white text-xl font-bold mb-8">Key Pillars</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="flex-none h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">menu_book</span>
                                        </div>
                                        <div>
                                            <h4 className="text-deep-navy dark:text-white font-bold text-lg">Understanding</h4>
                                            <p className="text-slate-gray dark:text-slate-400 mt-1">Deep comprehension of complex datasets and academic literature through semantic parsing.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-none h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">analytics</span>
                                        </div>
                                        <div>
                                            <h4 className="text-deep-navy dark:text-white font-bold text-lg">Interpretation</h4>
                                            <p className="text-slate-gray dark:text-slate-400 mt-1">Synthesizing diverse viewpoints into coherent strategic and conceptual frameworks.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-none h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">fingerprint</span>
                                        </div>
                                        <div>
                                            <h4 className="text-deep-navy dark:text-white font-bold text-lg">Intellectual Ownership</h4>
                                            <p className="text-slate-gray dark:text-slate-400 mt-1">Ensuring the human remains the primary driver of all creative and analytical output.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Supports */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto text-center mb-12">
                        <h2 className="text-deep-navy dark:text-white text-3xl font-bold">Who This Supports</h2>
                        <p className="text-slate-gray mt-4 max-w-2xl mx-auto">Tailored strategies for individuals and organizations in the pursuit of knowledge.</p>
                    </div>
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all flex flex-col items-center text-center">
                            <div className="h-14 w-14 mb-6 text-primary bg-primary/5 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-deep-navy dark:text-white">Researchers & Scholars</h3>
                            <p className="text-slate-gray dark:text-slate-400 text-sm leading-relaxed">Tools for literature synthesis and hypothesis generation that respect academic integrity.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all flex flex-col items-center text-center">
                            <div className="h-14 w-14 mb-6 text-primary bg-primary/5 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">diversity_3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-deep-navy dark:text-white">Academic Staff</h3>
                            <p className="text-slate-gray dark:text-slate-400 text-sm leading-relaxed">Strategic assistance for curriculum design and enhancing pedagogical research workflows.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all flex flex-col items-center text-center">
                            <div className="h-14 w-14 mb-6 text-primary bg-primary/5 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">account_tree</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-deep-navy dark:text-white">Institutional Workflows</h3>
                            <p className="text-slate-gray dark:text-slate-400 text-sm leading-relaxed">Scalable AI integration for university departments and institutional knowledge management.</p>
                        </div>
                    </div>
                </section>

                {/* Core Outcomes */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/5 opacity-30 pointer-events-none"></div>
                    <div className="max-w-[1200px] mx-auto relative z-10">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">Core Outcomes</h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-primary">Clarity</h3>
                                <p className="text-slate-400 leading-relaxed">Reducing semantic noise to reveal essential patterns and core arguments within large-scale information sets.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-primary">Judgment</h3>
                                <p className="text-slate-400 leading-relaxed">Augmenting human discernment with data-driven insights while maintaining the final 'human-in-the-loop' sign-off.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-primary">Ethical Use</h3>
                                <p className="text-slate-400 leading-relaxed">Ensuring rigorous adherence to institutional standards of academic integrity and citation ethics.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study / In Practice */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col md:flex-row items-center bg-background-light dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800">
                            <div className="w-full md:w-1/2 h-[450px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0fLUOTvn3TJEAP40iuFiWHUNE7pXOkRNJAOStyr28aUYGw9P05WjSs-GgpebYS6ZO1bOTvqp8_f5_03TNE5qfDCEKw75rq8IGbP0Iw4FRnHVndbBcFHik22Hgshn3x4o69XhKe1NJF8axHNtrMLvuXKVVp8Wpu2ed2TXf4sgLNlTJl10fMKnSOqq8ZC3-GdEsnSZpA9x5u3HN3DEX50_Nq6vMnA4dqMpPBtiOeU2PkCj2bTTZIbYffyiw-XVgbZWTondmznUw7FI")', backgroundSize: 'cover' }}></div>
                            <div className="p-10 md:p-16 w-full md:w-1/2">
                                <span className="text-primary font-bold text-sm tracking-widest uppercase">In Practice</span>
                                <h2 className="text-3xl font-bold mt-4 mb-6 dark:text-white">From Idea to Impact</h2>
                                <p className="text-slate-gray dark:text-slate-400 mb-8 leading-relaxed">
                                    We recently assisted a major research group in synthesizing 50 years of longitudinal data into a real-world policy application. By leveraging our custom "Inquiry Frameworks," the team identified previously obscured correlations while maintaining full auditability of the AI's contribution.
                                </p>
                                <a className="inline-flex items-center text-primary font-bold gap-2 group" href="#">
                                    Read the Full Case Study
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-6 py-24 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 text-center">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-4xl font-extrabold mb-6 dark:text-white">Start a Conversation</h2>
                        <p className="text-lg text-slate-gray mb-10 leading-relaxed">
                            Ready to integrate 'Enduring Intelligence' into your research workflow? Let's discuss how we can tailor our strategies to your specific academic or institutional needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold h-14 px-10 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                Book a Consultation
                            </a>
                            <button className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-deep-navy dark:text-white font-bold h-14 px-10 rounded-lg hover:bg-slate-50 transition-all">
                                Request Brochure
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6 md:px-20 lg:px-40 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="size-4 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="font-bold text-deep-navy dark:text-white">Westgate Stratagem LTD</span>
                </div>
                <p className="text-slate-gray dark:text-slate-500 text-sm">© 2024 Westgate Stratagem LTD. All rights reserved. Intellectual property of Enduring Intelligence methodologies.</p>
            </footer>
        </div>
    );
}
