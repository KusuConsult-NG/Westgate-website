import { Link } from 'react-router-dom';

export default function Insights() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-[#f8f9fc] transition-colors duration-200">
            {/* Navigation Bar */}
            <header className="flex items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-[#2a3447] px-10 py-4 bg-white dark:bg-[#101622] sticky top-0 z-50">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight uppercase">Westgate Stratagem</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/insights" className="text-sm font-medium hover:text-primary transition-colors text-primary">Insights</Link>
                        <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
                        <Link to="/services/advisory" className="text-sm font-medium hover:text-primary transition-colors">Advisory</Link>
                        <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <label className="hidden lg:flex flex-col min-w-48 !h-9">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#e7ebf3] dark:bg-[#1a2333]">
                            <div className="flex items-center justify-center pl-3 text-[#4c669a]">
                                <span className="material-symbols-outlined text-lg">search</span>
                            </div>
                            <input className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#4c669a]" placeholder="Search Insights" />
                        </div>
                    </label>
                    <Link to="/contact" className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                        Contact Us
                    </Link>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-primary dark:text-white">News & Insights</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#4c669a] dark:text-slate-400 font-light italic">
                        Critical perspectives on research, technology, and institutional strategy for the academic sector.
                    </p>
                </section>

                {/* Featured Insight */}
                <section className="max-w-[1200px] mx-auto px-6 pb-16">
                    <div className="bg-white dark:bg-[#1a2333] border border-[#e7ebf3] dark:border-[#2a3447] rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row items-stretch">
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Latest White Paper</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">The Future of AI in Academic Governance</h2>
                            <p className="text-lg text-[#4c669a] dark:text-slate-300 mb-8 leading-relaxed">
                                A deep dive into institutional ethics and the integration of enduring intelligence within modern research frameworks. How leadership can navigate the shift toward automated discovery.
                            </p>
                            <button className="flex items-center gap-2 text-primary font-bold group">
                                Read the Paper
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-center bg-cover min-h-[300px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhI-6FOBE54V_jNxsuOttZ4hy_nJ2_LaRnvwqYlrc4f4qpCB25ytoti5f-LHtNlz7QGhYTsXfc4VmNkG8O5KNBn_3mYQ7YhtZXUfqNbk0HhnCKoq9lLHZuou96kEzG19pdjhLcm8Ubp-uxY9k_Uky_qZMe78QwR4eA4KjazybnRgcXqglA_LfuidXlKCPsWCG2YnlLLTnAIXfiWachhYts_hG4lj7KNpDvo8TjKvMdiZLDxdiyiMO9upukIcLhSU__ETyONDn2wFU")' }}></div>
                    </div>
                </section>

                {/* Content Filter */}
                <section className="max-w-[1200px] mx-auto px-6 mb-12">
                    <div className="flex gap-4 p-2 flex-wrap border-y border-[#e7ebf3] dark:border-[#2a3447] justify-center md:justify-start">
                        <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium">All</button>
                        <button className="px-6 py-2 rounded-full bg-[#e7ebf3] dark:bg-[#1a2333] hover:bg-primary/10 transition-colors text-sm font-medium">White Papers</button>
                        <button className="px-6 py-2 rounded-full bg-[#e7ebf3] dark:bg-[#1a2333] hover:bg-primary/10 transition-colors text-sm font-medium">AI & Ethics</button>
                        <button className="px-6 py-2 rounded-full bg-[#e7ebf3] dark:bg-[#1a2333] hover:bg-primary/10 transition-colors text-sm font-medium">Institutional Strategy</button>
                        <button className="px-6 py-2 rounded-full bg-[#e7ebf3] dark:bg-[#1a2333] hover:bg-primary/10 transition-colors text-sm font-medium">Technology</button>
                    </div>
                </section>

                {/* Article Grid */}
                <section className="max-w-[1200px] mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video bg-cover rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9VfYnp7a2jBCx8YaLjc_fGzglkqRxgRV3G9rYi4jIH6VxrERMJmGl02N2OJ9RMWifgEi3EbqEW2P44twI108tc7ny8Ju1FrVzd8M-GH8LEXibZdo5k_Kv9I4G8wJ0wJrMQQiwdumZrmX1XkBS5KXfX12lNX7i9qLi6iUDR_4-uPFXmSNUcynW96r2pojej-nIe5ZcHd6Fo46fg7whcVpsWCW0ErM6S8eIskd_mn3_ayRoboBU6UOGVLDD4T5cf0auRnQflE3UBE")' }}></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#4c669a]">
                                    <span>Technology</span>
                                    <span>Oct 14, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Digital Transformation in R1 Research Institutions</h3>
                                <p className="text-sm text-[#4c669a] dark:text-slate-400 line-clamp-3">Evaluating the gap between traditional research methodologies and modern high-compute requirements in the age of generative models.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video bg-cover rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC099IzcvHfCE0Vqmz2SpArvPoHZHvA-JlFa2Gq3uiQsaaD5eAqsVOz5POtRzwaOW55IoorhHGXDIT5HXloBDLbAr6k_HOCbwkukW9fKMoKzVWhiKiOMjgk6WZfkDbkWxerrzLiXLKb6-evnu9FpTuBJOC2JRprhSdxJ3WAzN1PyYxxxcb2aIGZvtC48IcbCrRdx0LF6xqCYyXDCEHKeVoWJK-9uMSppZmjnhIGdGEiB6RCL9IEnCIlIqj5iCQLI1OoYYPtua3uP2M")' }}></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#4c669a]">
                                    <span>Institutional Strategy</span>
                                    <span>Sept 28, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Enduring Intelligence: A New Framework</h3>
                                <p className="text-sm text-[#4c669a] dark:text-slate-400 line-clamp-3">How legacy institutions can leverage their historical data moats to build sustainable advantage in an increasingly automated world.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video bg-cover rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSnhnIybbJvy2BYipHrMO1OjgoH2XAtY948Lz5PLw54usBvJcJtQgj9q1Am024jOgJtHA6z_phiihK_FGe2YAQqOeRws4wghufyvjgNzEpX9zwFUuttZtP4BbFcRQ4Vpr8ZKpWHw8sVS8bXu6xpC3jfZiwSeBy8_YYf3XBUs3IVCCsjx3Q7izCrHhD1Mmcb7bN-xAdMYPyd6M5LFytJDeiO3s1p4J6SDDD5LBu1Tn82pTXqwmgb3yD04u8ic13qcTylfPbBFnJN4I")' }}></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#4c669a]">
                                    <span>AI & Ethics</span>
                                    <span>Sept 12, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">The Ethics of Automated Peer Review</h3>
                                <p className="text-sm text-[#4c669a] dark:text-slate-400 line-clamp-3">A critical examination of the risks and rewards associated with AI-assisted vetting of scientific literature and grant applications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section className="bg-[#f0f2f7] dark:bg-[#1a2333]/50 py-20">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold mb-4">Downloadable Resources</h2>
                                <p className="text-[#4c669a] dark:text-slate-400">Curated toolkits and guides for academic leaders and strategic planners.</p>
                            </div>
                            <a className="text-primary font-bold flex items-center gap-1 mt-4 md:mt-0 underline" href="#">View all resources</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-[#101622] p-6 rounded-lg border border-[#e7ebf3] dark:border-[#2a3447] flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="size-14 bg-primary/10 flex items-center justify-center rounded text-primary">
                                    <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-lg leading-tight">AI Readiness Checklist</h4>
                                    <p className="text-xs text-[#4c669a] mt-1 dark:text-slate-500">For Department Heads & Deans</p>
                                </div>
                                <span className="material-symbols-outlined text-[#4c669a]">download</span>
                            </div>
                            <div className="bg-white dark:bg-[#101622] p-6 rounded-lg border border-[#e7ebf3] dark:border-[#2a3447] flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="size-14 bg-primary/10 flex items-center justify-center rounded text-primary">
                                    <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-lg leading-tight">2025 Strategic Outlook</h4>
                                    <p className="text-xs text-[#4c669a] mt-1 dark:text-slate-500">Executive Summary</p>
                                </div>
                                <span className="material-symbols-outlined text-[#4c669a]">download</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#101622] border-t border-[#e7ebf3] dark:border-[#2a3447] py-12 px-10 text-center">
                <div className="flex flex-col items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined">account_balance</span>
                        <span className="font-bold uppercase tracking-widest text-[#0d121b] dark:text-white">Westgate Stratagem</span>
                    </div>
                    <p className="text-[#41535e] dark:text-slate-500 max-w-lg mx-auto text-sm">
                        Delivering enduring intelligence for the world's leading academic and research institutions.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-[#4c669a] dark:text-slate-400 mb-12">
                    <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                    <a className="hover:text-primary transition-colors" href="#">Twitter / X</a>
                    <a className="hover:text-primary transition-colors" href="#">Substack</a>
                </div>
                <p className="text-xs text-[#4c669a]/50 dark:text-slate-600">© 2025 Westgate Stratagem LTD. All rights reserved.</p>
            </footer>
        </div>
    );
}
