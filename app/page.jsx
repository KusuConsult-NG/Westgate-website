'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans selection:bg-primary/30 selection:text-white">
            {/* Top Navigation Bar */}
            <header className="fixed top-0 w-full z-50 glass-dark">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-10 w-auto rounded shadow-2xl" />
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading group-hover:text-primary transition-colors">Westgate Stratagem</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        {['Why We Exist', 'Services', 'Principles', 'Experience'].map((item) => (
                            <a
                                key={item}
                                className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group"
                                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
                            Consultation
                        </Link>
                    </div>
                </div>
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10"></div>
                        <div className="absolute inset-0 bg-radial-glow z-10 pointer-events-none opacity-60"></div>
                        <img
                            alt="Institutional Architecture"
                            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-soft"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWhOdhvOEf0ONw5rg5irX95p54NJn0k_Kk6C2abTFHELpCeHpJHqYap8qgb0w1U_d8qIIjGYAYHUaXyhIGLL3BouUtno2PJrcwa_NKyNWGgSFRwTxnDJFrKMU45usIdZMffu6zX5hYV3tzpyzV96XH8StwCpwq08qtz-H1vY0wp-MRm6FA3rmip2jwSzGxZRB95ozJU4_J2RuvF0d00Hpr22Cu3hW5qHZJuNwHHKc9UP8Rg90eiSaAWRi5mJwt1xDSaN1yZiBqro"
                        />
                    </div>
                    <div className="relative z-20 max-w-5xl px-6 text-center reveal active">
                        <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full animate-fade-in">
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                                Architects of Institutional Longevity
                            </span>
                        </div>
                        <h1 className="serif-heading text-6xl md:text-8xl lg:text-9xl text-white font-bold leading-[1] mb-8 tracking-tighter text-gradient">
                            Enduring <br />
                            <span className="italic text-accent-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.4)]">Intelligence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                            Strategic consulting and technology for academic leadership.
                            <span className="block mt-4 text-slate-400">Restoring coherence through structure, wisdom, and longevity.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(19,127,236,0.6)] transition-all flex items-center justify-center gap-2 group">
                                <span className="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">calendar_today</span>
                                Start Dialogue
                            </a>
                            <Link href="/about" className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                Our Thesis
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                        <span className="material-symbols-outlined text-white">expand_more</span>
                    </div>
                </section>

                {/* Why We Exist Section */}
                <section className="py-40 bg-slate-950 relative overflow-hidden" id="why-we-exist">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center reveal">
                        <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Our Mandate</span>
                        <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-10 leading-tight">Restoring Institutional <br />Coherence</h2>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"></div>
                        <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed italic serif-heading">
                            "In an era of fragmentation, we focus on restoring coherence to institutional intelligence. Our mission is to bridge the gap between traditional academic wisdom and modern technological capability."
                        </p>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-40 px-6 bg-slate-950 blueprint-bg" id="services">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 reveal">
                            <div className="max-w-xl">
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Capabilities</span>
                                <h2 className="serif-heading text-5xl text-white font-bold">Strategic Pillars</h2>
                            </div>
                            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">Specialized expertise tailored for complex institutional frameworks and research-heavy environments.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                            {[
                                { title: 'AI for Research', icon: 'psychology', desc: 'Implementing advanced large-scale intelligence models to accelerate data synthesis while preserving academic integrity.', link: '/services/ai' },
                                { title: 'Institutional Training', icon: 'school', desc: 'Developing bespoke training modules for faculty and leadership to master the next generation of digital tools.', link: '/services/training' },
                                { title: 'Tech Strategy', icon: 'architecture', desc: 'Architecting long-term infrastructure that scales with institutional needs without technological debt.', link: '/services/strategy' },
                                { title: 'Advisory', icon: 'verified_user', desc: 'High-level decision support for executive boards navigating the complexities of digital transformation.', link: '/services/advisory' }
                            ].map((service) => (
                                <Link
                                    key={service.title}
                                    href={service.link}
                                    className="group p-12 glass hover:bg-white/10 transition-all duration-500 block rounded-3xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-9xl">{service.icon}</span>
                                    </div>
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{service.icon}</span>
                                    </div>
                                    <h3 className="serif-heading text-3xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg max-w-sm">{service.desc}</p>
                                    <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        Explore Domain <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Principles Section (3-Column) */}
                <section className="py-40 bg-slate-900 overflow-hidden" id="principles">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Foundation</span>
                            <h2 className="serif-heading text-5xl text-white font-bold">Inviolable Principles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal">
                            {[
                                { num: '01.', title: 'Practice', desc: 'Grounded in the realities of academic administration and the rigor of peer-reviewed research protocols.' },
                                { num: '02.', title: 'Continuity', desc: 'Building systems that outlast personnel cycles, ensuring institutional memory remains intact and accessible.' },
                                { num: '03.', title: 'Judgment', desc: 'Applying human discernment to automated systems, ensuring technology serves the mission, not the reverse.' }
                            ].map((principle) => (
                                <div key={principle.num} className="p-12 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                                    <span className="text-accent-gold text-2xl serif-heading italic block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{principle.num}</span>
                                    <h4 className="text-xl text-white font-bold mb-6 tracking-[0.2em] uppercase">{principle.title}</h4>
                                    <p className="text-slate-400 font-light leading-relaxed text-lg">{principle.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience & Timeline Section */}
                <section className="py-40 bg-slate-950 blueprint-bg" id="experience">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="reveal">
                                <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-6 block">Evolution</span>
                                <h2 className="serif-heading text-5xl text-white font-bold mb-10 leading-tight">Seven Years of <br />Strategic Maturity</h2>
                                <p className="text-slate-300 text-xl leading-relaxed mb-12 font-light">
                                    Since 2018, Westgate Stratagem has partnered with leading global institutions to navigate the shift from digital emergence to intelligence maturity.
                                </p>
                                <ul className="space-y-8">
                                    {['Advisory for 50+ Global Universities', 'Pioneering AI Ethics in Higher Ed', 'Strategic Roadmaps for 2030+'].map((item) => (
                                        <li key={item} className="flex gap-6 items-center group">
                                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary transition-colors">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white text-lg">check</span>
                                            </div>
                                            <span className="text-white text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Stylized Timeline Graphic */}
                            <div className="relative py-20 reveal">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2"></div>
                                <div className="flex justify-between items-center relative z-10">
                                    {[2018, 2020].map((year) => (
                                        <div key={year} className="flex flex-col items-center group">
                                            <div className="size-5 rounded-full bg-slate-800 mb-6 border-4 border-slate-950 group-hover:bg-primary transition-colors shadow-2xl"></div>
                                            <span className="text-slate-500 font-bold tracking-widest text-sm">{year}</span>
                                        </div>
                                    ))}
                                    <div className="flex flex-col items-center group">
                                        <div className="size-8 rounded-full bg-primary mb-6 border-4 border-slate-950 shadow-[0_0_30px_rgba(19,127,236,0.5)] scale-110"></div>
                                        <span className="text-white font-bold tracking-widest text-sm">2025</span>
                                    </div>
                                </div>
                                <div className="mt-20 p-10 glass rounded-3xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <span className="material-symbols-outlined text-6xl">timeline</span>
                                    </div>
                                    <p className="text-accent-gold font-bold mb-4 tracking-[0.3em] text-xs uppercase">Current Era</p>
                                    <p className="text-white text-2xl serif-heading italic leading-relaxed group-hover:text-primary transition-colors">"The Coherence Protocol: Orchestrating the Institutional Mind."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-4 mb-10 group">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined text-white text-2xl">account_balance</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                            </div>
                            <p className="text-slate-400 max-w-sm mb-10 text-lg leading-relaxed font-light">
                                Independent strategic advisors for the world's most vital academic and institutional entities.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Network</h5>
                            <ul className="text-slate-500 space-y-5 text-sm">
                                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-primary">location_on</span> London • New York • Singapore</li>
                                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-primary">mail</span> inquiry@westgate.com</li>
                                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-primary">call</span> +44 (0) 20 7946 0123</li>
                                <li className="pt-4">
                                    <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group">
                                        <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">calendar_today</span>
                                        Schedule Briefing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Engagement</h5>
                            <ul className="text-slate-500 space-y-5 text-sm">
                                <li><Link className="hover:text-primary transition-colors" href="/portal">Client Portal</Link></li>
                                <li><Link href="/insights" className="hover:text-primary transition-colors">Perspective Reports</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/privacy">Privacy Charter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em]">© 2025 Westgate Stratagem Ltd. All Rights Reserved.</p>
                        <div className="serif-heading text-slate-500 italic text-2xl opacity-40">Enduring Intelligence</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
