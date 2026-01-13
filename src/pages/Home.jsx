import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="font-sans">
            {/* Top Navigation Bar */}
            <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="h-10 w-auto" />
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        <a className="text-sm font-bold text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" href="#why">Why We Exist</a>
                        <a className="text-sm font-bold text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" href="#services">Services</a>
                        <a className="text-sm font-bold text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" href="#principles">Principles</a>
                        <a className="text-sm font-bold text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" href="#experience">Experience</a>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
                            Consultation
                        </Link>
                    </div>
                </div>
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* Stronger, more sophisticated dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95 z-10"></div>
                        {/* Additional radial gradient for focus */}
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/40 to-slate-950 z-10"></div>
                        <img alt="Institutional Architecture" className="w-full h-full object-cover opacity-40" data-alt="Modern minimalist library shelving with architectural lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWhOdhvOEf0ONw5rg5irX95p54NJn0k_Kk6C2abTFHELpCeHpJHqYap8qgb0w1U_d8qIIjGYAYHUaXyhIGLL3BouUtno2PJrcwa_NKyNWGgSFRwTxnDJFrKMU45usIdZMffu6zX5hYV3tzpyzV96XH8StwCpwq08qtz-H1vY0wp-MRm6FA3rmip2jwSzGxZRB95ozJU4_J2RuvF0d00Hpr22Cu3hW5qHZJuNwHHKc9UP8Rg90eiSaAWRi5mJwt1xDSaN1yZiBqro" />
                    </div>
                    <div className="relative z-20 max-w-4xl px-6 text-center">
                        {/* Enhanced badge with glow and shadow */}
                        <div className="inline-block px-6 py-2.5 mb-8 border-2 border-primary/60 bg-primary/20 backdrop-blur-sm rounded-full shadow-[0_0_30px_rgba(19,127,236,0.4)] hover:shadow-[0_0_50px_rgba(19,127,236,0.6)] transition-all duration-300">
                            <span className="text-white text-sm font-black uppercase tracking-[0.25em] drop-shadow-[0_2px_8px_rgba(19,127,236,0.8)]">
                                Architects of Institutional Longevity
                            </span>
                        </div>
                        {/* Enhanced headline with multiple shadow layers for maximum visibility */}
                        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                            Enduring <span className="italic text-accent-gold drop-shadow-[0_4px_20px_rgba(197,160,89,0.6)]">Intelligence</span>
                        </h1>
                        {/* Enhanced subtitle with better contrast */}
                        <p className="text-xl md:text-2xl text-slate-100 font-normal leading-relaxed mb-12 max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                            Strategic consulting and technology for academic and institutional leadership.
                            <span className="block mt-2 font-light text-slate-200">Restoring coherence through structure, wisdom, and longevity.</span>
                        </p>
                        {/* Enhanced CTAs with glows */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:translate-y-[-2px] hover:bg-blue-700 transition-all text-center shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                Book Consultation
                            </a>
                            <Link to="/about" className="w-full sm:w-auto px-8 py-4 border-2 border-white/40 bg-white/5 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                                Our Perspective
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why We Exist Section */}
                <section className="py-32 bg-slate-50" id="why">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="text-blue-600 text-sm font-black tracking-[0.3em] uppercase mb-4 block">Our Purpose</span>
                        <h2 className="serif-heading text-3xl md:text-4xl text-slate-900 font-bold mb-8">Restoring Coherence</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>
                        <p className="text-xl md:text-2xl text-slate-700 font-normal leading-relaxed italic">
                            "In an era of fragmentation, we focus on restoring coherence to institutional intelligence.
                            Our mission is to bridge the gap between traditional academic wisdom and modern technological capability."
                        </p>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-32 px-6 bg-slate-950" id="services">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                            <div className="max-w-xl">
                                <span className="text-blue-400 text-sm font-black tracking-[0.3em] uppercase mb-4 block">Services</span>
                                <h2 className="serif-heading text-4xl text-white font-bold">Strategic Pillars</h2>
                            </div>
                            <p className="text-white max-w-sm">Specialized expertise tailored for complex institutional frameworks and research-heavy environments.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <Link to="/services/ai" className="group p-10 bg-slate-900/40 border border-white/5 rounded-xl hover:border-blue-500/50 transition-all duration-500 block">
                                <div className="size-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-3xl">psychology</span>
                                </div>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">AI for Research</h3>
                                <p className="text-white leading-relaxed">Implementing advanced large-scale intelligence models to accelerate data synthesis while preserving academic integrity.</p>
                            </Link>

                            {/* Card 2 */}
                            <Link to="/services/training" className="group p-10 bg-slate-900/40 border border-white/5 rounded-xl hover:border-blue-500/50 transition-all duration-500 block">
                                <div className="size-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-3xl">school</span>
                                </div>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">Institutional Training</h3>
                                <p className="text-white leading-relaxed">Developing bespoke training modules for faculty and leadership to master the next generation of digital tools.</p>
                            </Link>

                            {/* Card 3 */}
                            <Link to="/services/strategy" className="group p-10 bg-slate-900/40 border border-white/5 rounded-xl hover:border-blue-500/50 transition-all duration-500 block">
                                <div className="size-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-3xl">architecture</span>
                                </div>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">Tech Strategy</h3>
                                <p className="text-white leading-relaxed">Architecting long-term infrastructure that scales with institutional needs without technological debt.</p>
                            </Link>

                            {/* Card 4 */}
                            <Link to="/services/advisory" className="group p-10 bg-slate-900/40 border border-white/5 rounded-xl hover:border-blue-500/50 transition-all duration-500 block">
                                <div className="size-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-3xl">verified_user</span>
                                </div>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">Advisory</h3>
                                <p className="text-white leading-relaxed">High-level decision support for executive boards navigating the complexities of digital transformation.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Principles Section (3-Column) */}
                <section className="py-32 bg-slate-50 relative" id="principles">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="serif-heading text-4xl text-slate-900 font-bold">Our Principles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-slate-200">
                            <div className="p-12 md:border-r border-slate-200 text-center">
                                <span className="text-amber-600 text-lg serif-heading italic block mb-4">01.</span>
                                <h4 className="text-xl text-slate-900 font-bold mb-6 tracking-widest uppercase">Practice</h4>
                                <p className="text-slate-600 font-light leading-relaxed">Grounded in the realities of academic administration and the rigor of peer-reviewed research protocols.</p>
                            </div>
                            <div className="p-12 md:border-r border-slate-200 text-center">
                                <span className="text-amber-600 text-lg serif-heading italic block mb-4">02.</span>
                                <h4 className="text-xl text-slate-900 font-bold mb-6 tracking-widest uppercase">Continuity</h4>
                                <p className="text-slate-600 font-light leading-relaxed">Building systems that outlast personnel cycles, ensuring institutional memory remains intact and accessible.</p>
                            </div>
                            <div className="p-12 text-center">
                                <span className="text-amber-600 text-lg serif-heading italic block mb-4">03.</span>
                                <h4 className="text-xl text-slate-900 font-bold mb-6 tracking-widest uppercase">Judgment</h4>
                                <p className="text-slate-600 font-light leading-relaxed">Applying human discernment to automated systems, ensuring technology serves the mission, not the reverse.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Timeline Section */}
                <section className="py-32 bg-slate-950 overflow-hidden" id="experience">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Timeline</span>
                                <h2 className="serif-heading text-4xl text-white font-bold mb-8">Seven Years of Strategic Evolution</h2>
                                <p className="text-white text-lg leading-relaxed mb-8">
                                    Since 2018, Westgate Stratagem has partnered with leading global institutions to navigate the shift from digital emergence to intelligence maturity.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-blue-400">check_circle</span>
                                        <span className="text-white">Advisory for 50+ Global Universities</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-blue-400">check_circle</span>
                                        <span className="text-white">Pioneering AI Ethics in Higher Ed</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-blue-400">check_circle</span>
                                        <span className="text-white">Strategic Roadmaps for 2030+</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Stylized Timeline Graphic */}
                            <div className="relative py-20">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="flex flex-col items-center">
                                        <div className="size-4 rounded-full bg-slate-600 mb-4 outline outline-4 outline-slate-900"></div>
                                        <span className="text-slate-400 font-bold">2018</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="size-4 rounded-full bg-slate-600 mb-4 outline outline-4 outline-slate-900"></div>
                                        <span className="text-slate-400 font-bold">2020</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="size-6 rounded-full bg-blue-600 mb-4 outline outline-4 outline-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                                        <span className="text-white font-bold">2025</span>
                                    </div>
                                </div>
                                <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <p className="text-yellow-500 font-bold mb-2 tracking-widest text-xs uppercase">Current Era</p>
                                    <p className="text-white italic">"The Coherence Protocol: Orchestrating the Institutional Mind."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-xl">account_balance</span>
                                </div>
                                <h2 className="text-white text-xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                            </div>
                            <p className="text-slate-500 max-w-sm mb-8">
                                Independent strategic advisors for the world's most vital academic and institutional entities.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6">Contact</h5>
                            <ul className="text-slate-500 space-y-4 text-sm">
                                <li>London • New York • Singapore</li>
                                <li>inquiry@westgate-stratagem.com</li>
                                <li>+44 (0) 20 7946 0123</li>
                                <li className="pt-2">
                                    <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        Schedule a Call
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6">Engagement</h5>
                            <ul className="text-slate-500 space-y-4 text-sm">
                                <li><a className="hover:text-primary transition-colors" href="#">Client Portal</a></li>
                                <li><Link to="/insights" className="hover:text-primary transition-colors">Perspective Reports</Link></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Privacy Charter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">© 2025 Westgate Stratagem Ltd. All Rights Reserved.</p>
                        <div className="serif-heading text-slate-400 italic text-xl">Enduring Intelligence</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
