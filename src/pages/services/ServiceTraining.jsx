import { Link } from 'react-router-dom';

export default function ServiceTraining() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white transition-colors duration-200">
            {/* Navigation Bar */}
            <div className="layout-container flex flex-col sticky top-0 z-50">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7ebf3] dark:border-[#2a3447] px-6 py-4 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="flex items-center gap-4 text-[#0d121b] dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Westgate Stratagem</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link to="/" className="text-[#0d121b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Home</Link>
                            <Link to="/about" className="text-[#0d121b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">About</Link>
                            <Link to="/services" className="text-[#0d121b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Services</Link>
                            <Link to="/case-studies" className="text-[#0d121b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Case Studies</Link>
                        </nav>
                        <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-[#e7ebf3] dark:bg-slate-800 text-[#0d121b] dark:text-white text-sm font-bold tracking-[0.015em] hover:bg-[#dbe0e9] dark:hover:bg-slate-700 transition-colors">
                            Book Workshop
                        </Link>
                    </div>
                </header>
            </div>

            <main className="flex flex-col flex-1">
                {/* Hero Section */}
                <section className="px-6 py-12 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full w-fit">
                                <span className="material-symbols-outlined text-primary text-sm">school</span>
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Institutional Learning</span>
                            </div>
                            <h1 className="text-[#0d121b] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                Upskilling the <br /> Academic Workforce
                            </h1>
                            <p className="text-[#41535e] dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed">
                                Bespoke training programs designed to bridge the digital skills gap for faculty, researchers, and administrative leadership.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                    Our Curricula
                                </button>
                                <button className="flex items-center justify-center rounded-lg h-12 px-8 border border-[#d1dce5] dark:border-slate-700 text-[#0d121b] dark:text-white text-base font-bold tracking-[0.015em] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    Pedagogy
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-xl opacity-70"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                <img alt="Workshop setting" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzm_270jK0JvVtxk4v2KryTvb7oD23aD-r-6B-kR8W5Lg-pC0e7i945lP-M9Hk554E-8p5tV0J3BqK_sZ3C8i5O_9o8P4L5E_5xH5_5yI4G5_5E4J5K5L_4M5N5O5P5Q_R5S5T5U5V5W5X_5Y5Z5a5b5c5d5e5f5g5h5i5j5k5l5m5n5o5p5q5r5s5t5u5v5w5x5y5z5A5B5C5D5E5F5G5H5I5J5K5L5M5N5O5P5Q5R5S5T5U5V5W5X5Y" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-lg">Live Seminars & Remote Modules</p>
                                        <p className="text-sm opacity-80">Tailored to your institution's LMS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modules Grid */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-[#f8f9fc] dark:bg-[#1a2333]/30">
                    <div className="max-w-[1200px] mx-auto mb-16 text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Competency Areas</span>
                        <h2 className="text-3xl font-bold mt-2 dark:text-white">Core Training Modules</h2>
                    </div>

                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Module 1 */}
                        <div className="bg-white dark:bg-[#101622] rounded-xl p-8 shadow-sm border border-[#e7ebf3] dark:border-[#2a3447] hover:shadow-md transition-all group">
                            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">data_object</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Data Literacy for Faculty</h3>
                            <p className="text-[#41535e] dark:text-slate-400 text-sm leading-relaxed mb-6">Equiping non-technical staff with the ability to interpret, visualize, and critique complex datasets.</p>
                            <a className="text-primary font-bold text-sm flex items-center gap-1 group/link" href="#">
                                View Syllabus
                                <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                        {/* Module 2 */}
                        <div className="bg-white dark:bg-[#101622] rounded-xl p-8 shadow-sm border border-[#e7ebf3] dark:border-[#2a3447] hover:shadow-md transition-all group">
                            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Generative AI in the Classroom</h3>
                            <p className="text-[#41535e] dark:text-slate-400 text-sm leading-relaxed mb-6">Practical workshops on integrating LLMs into coursework while maintaining academic rigor and assessments.</p>
                            <a className="text-primary font-bold text-sm flex items-center gap-1 group/link" href="#">
                                View Syllabus
                                <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                        {/* Module 3 */}
                        <div className="bg-white dark:bg-[#101622] rounded-xl p-8 shadow-sm border border-[#e7ebf3] dark:border-[#2a3447] hover:shadow-md transition-all group">
                            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">admin_panel_settings</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Cyber-Hygiene for Admin</h3>
                            <p className="text-[#41535e] dark:text-slate-400 text-sm leading-relaxed mb-6">Essential security protocols for administrative staff handling sensitive student and research data.</p>
                            <a className="text-primary font-bold text-sm flex items-center gap-1 group/link" href="#">
                                View Syllabus
                                <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Delivery Formats */}
                <section className="px-6 py-20 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">Flexible Delivery Formats</h2>
                            <p className="text-[#41535e] dark:text-slate-400 text-lg leading-relaxed mb-8">
                                We recognize that every academic calendar is different. Our training can be delivered in intensive bursts or longitudinal cohorts.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 p-4 rounded-lg bg-[#f8f9fc] dark:bg-[#1a2333]/50">
                                    <span className="material-symbols-outlined text-primary">event_note</span>
                                    <div>
                                        <h4 className="font-bold dark:text-white">Intensive Bootcamps</h4>
                                        <p className="text-xs text-[#41535e] dark:text-slate-400">1-3 Day onsite workshops for rapid upskilling.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 p-4 rounded-lg bg-[#f8f9fc] dark:bg-[#1a2333]/50">
                                    <span className="material-symbols-outlined text-primary">cast_for_education</span>
                                    <div>
                                        <h4 className="font-bold dark:text-white">Remote Asynchronous</h4>
                                        <p className="text-xs text-[#41535e] dark:text-slate-400">Self-paced modules hosted on your LMS.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 p-4 rounded-lg bg-[#f8f9fc] dark:bg-[#1a2333]/50">
                                    <span className="material-symbols-outlined text-primary">groups</span>
                                    <div>
                                        <h4 className="font-bold dark:text-white">Executive Coaching</h4>
                                        <p className="text-xs text-[#41535e] dark:text-slate-400">1-on-1 digital upskilling for Deans and VCs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 relative">
                            <img alt="Training session" className="rounded-2xl shadow-xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9VfYnp7a2jBCx8YaLjc_fGzglkqRxgRV3G9rYi4jIH6VxrERMJmGl02N2OJ9RMWifgEi3EbqEW2P44twI108tc7ny8Ju1FrVzd8M-GH8LEXibZdo5k_Kv9I4G8wJ0wJrMQQiwdumZrmX1XkBS5KXfX12lNX7i9qLi6iUDR_4-uPFXmSNUcynW96r2pojej-nIe5ZcHd6Fo46fg7whcVpsWCW0ErM6S8eIskd_mn3_ayRoboBU6UOGVLDD4T5cf0auRnQflE3UBE" />
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg max-w-[200px]">
                                <p className="text-3xl font-black mb-1">94%</p>
                                <p className="text-xs font-medium opacity-90">Faculty reported immediate applicability to their research.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary py-24 px-6 text-center text-white">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-4xl font-bold mb-6">Invest in Your Human Capital</h2>
                        <p className="text-lg opacity-90 mb-10 leading-relaxed">
                            Tools change, but critical thinking endures. Empower your staff to master the tools of tomorrow, today.
                        </p>
                        <Link to="/contact" className="bg-white text-primary font-bold h-14 px-12 rounded-full hover:scale-105 transition-transform inline-flex items-center justify-center shadow-xl">
                            Discuss Training Needs
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-[#2a3447] py-10 px-6 text-center">
                <div className="flex justify-center gap-8 mb-6">
                    <a className="text-[#41535e] hover:text-primary font-medium text-sm" href="#">Curriculum Design</a>
                    <a className="text-[#41535e] hover:text-primary font-medium text-sm" href="#">LMS Integration</a>
                    <a className="text-[#41535e] hover:text-primary font-medium text-sm" href="#">Impact Assessment</a>
                </div>
                <p className="text-xs text-[#41535e] opacity-60">© 2024 Westgate Stratagem LTD. Institutional Training Division.</p>
            </footer>
        </div>
    );
}
