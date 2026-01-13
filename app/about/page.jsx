'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30 selection:text-white">
            {/* Top Navigation Bar */}
            <header className="fixed top-0 w-full z-50 glass-dark">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-10 w-auto rounded shadow-2xl" />
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading group-hover:text-primary transition-colors">Westgate Stratagem</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">
                            Our Approach
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="text-sm font-bold text-white transition-all relative group">
                            Who We Work With
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all"></span>
                        </Link>
                        <Link href="/insights" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">
                            Perspective
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
                            Consultation
                        </Link>
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="md:hidden p-2 text-primary hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">{showMobileMenu ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            {showMobileMenu && (
                <div className="md:hidden glass-dark fixed top-20 left-0 w-full z-40 animate-fade-in border-t border-white/5">
                    <div className="px-6 py-8">
                        <nav className="flex flex-col gap-6 text-center">
                            <Link href="/" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white transition-colors py-2">
                                Our Approach
                            </Link>
                            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-white text-lg font-bold py-2">
                                Who We Work With
                            </Link>
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white transition-colors py-2">
                                Perspective
                            </Link>
                            <Link href="/contact" onClick={() => setShowMobileMenu(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-4">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-32 px-6 flex flex-col items-center text-center reveal active">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full">
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Institutional Partners</span>
                        </div>
                        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 tracking-tighter text-gradient italic">
                            Who We Work With
                        </h1>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"></div>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            Supporting individuals and organizations whose work depends on credibility, specialized knowledge, and long-term thinking.
                        </p>
                    </div>
                </section>

                {/* Target Audience Grid */}
                <section className="py-24 px-6 relative bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-24 reveal">
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-6">Partners in Enduring Intelligence</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We architect solutions for those navigating complex info-dynamic environments.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                            {[
                                { title: 'Universities', icon: 'account_balance', desc: 'Strategic guidance for higher education leadership and sustainable institutional growth.' },
                                { title: 'Policy & Leadership', icon: 'policy', desc: 'Providing intelligence for organizations shaping policy and global leadership frameworks.' },
                                { title: 'Researchers', icon: 'science', desc: 'Specialized support for scholars navigating complex research landscapes and grant ecosystems.' },
                                { title: 'Knowledge Hubs', icon: 'hub', desc: 'Partnering with entities where intellectual capital is the primary driver of value.' }
                            ].map((item) => (
                                <div key={item.title} className="group p-10 glass hover:bg-white/10 transition-all duration-500 flex flex-col rounded-3xl relative overflow-hidden">
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="serif-heading text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience & Perspective Narrative */}
                <section className="py-40 px-6 bg-slate-900 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="reveal">
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Our Trajectory</span>
                                <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-10 leading-tight italic">Evolution of Strategy: Since 2018</h2>
                                <p className="text-slate-300 leading-relaxed text-xl font-light mb-8">
                                    What began as a focused strategic consulting practice in 2018 has matured into a comprehensive framework for institutional resilience. Our journey reflects the very intelligence we advocate for: deliberate, evidence-based, and forward-looking.
                                </p>
                                <div className="p-10 glass-dark rounded-3xl border-white/5">
                                    <p className="text-accent-gold leading-relaxed italic text-lg opacity-80">
                                        In 2025, Westgate Stratagem transitioned into a Limited Liability Company, formalizing our commitment to serving the academic and policy sectors with sustained professional excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="relative py-20 reveal">
                                {/* Timeline Graphic */}
                                <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white/5"></div>
                                <div className="space-y-20 relative">
                                    {[
                                        { year: '2018', desc: 'Inception of strategic consulting services for specialized research units.' },
                                        { year: '2021', desc: 'Expansion into national academic policy and institutional intelligence.' },
                                        { year: '2025', desc: 'Formal incorporation as Westgate Stratagem LTD, focusing on Enduring Intelligence.' }
                                    ].map((milestone, idx) => (
                                        <div key={milestone.year} className="pl-12 relative group">
                                            <div className={`absolute -left-[4px] top-1 size-2 rounded-full ring-4 transition-all duration-700 ${idx === 2 ? 'bg-primary ring-primary/40' : 'bg-slate-700 ring-transparent group-hover:bg-primary group-hover:ring-primary/20'}`}></div>
                                            <h4 className={`font-bold font-display text-2xl mb-4 transition-colors ${idx === 2 ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>{milestone.year}</h4>
                                            <p className="text-slate-400 font-light text-lg max-w-sm leading-relaxed">{milestone.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Depth of Expertise Section */}
                <section className="py-40 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="relative rounded-3xl overflow-hidden min-h-[500px] reveal group">
                                <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsSUktQdTZsXWwmwN0l9ryNlH7FmRAXKgfks1b5O8zkYf1w7ik8zgV6gu5s6VKRZgnG6xc51647Y9xlPsEIylo4l30UVQ9hEGtPebABFoPQMqF38-s3ZuLCmz4ASBKbni4Pb5y_8-0K-gsuNZTw6dtbI2gAZH6Euc62mulhRYJv_pHClOT12EAgu2LBUNj04xqtoARmrRa3zRq3GXlI1N8lctwFuiyp02Ah_LyB4kPfR6OhGJi1g3lrZC_QaazrYu9VsqIQiuYwa0")', backgroundSize: 'cover' }}></div>
                                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all border border-white/10 rounded-3xl"></div>
                            </div>
                            <div className="reveal">
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Foundation</span>
                                <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-10 leading-tight">Depth of Expertise</h2>
                                <p className="text-slate-300 text-xl leading-relaxed mb-12 font-light">
                                    Over a decade of hands-on experience within universities, research units, and libraries, moving beyond theory into real-world institutional application.
                                </p>
                                <ul className="space-y-8">
                                    {[
                                        'Refined practice through sustained involvement in high-stakes research environments.',
                                        'Expertise in navigating the nuanced complexities of library systems and information science.',
                                        'National and international perspective on academic governance.',
                                        'Bridging the gap between traditional wisdom and automated systems.'
                                    ].map((point) => (
                                        <li key={point} className="flex gap-6 items-start group">
                                            <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mt-1 flex-shrink-0 group-hover:bg-primary transition-colors">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white text-xs">check</span>
                                            </div>
                                            <span className="text-slate-300 text-lg leading-relaxed font-light">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing Thought Quote */}
                <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none"></div>
                    <div className="max-w-5xl mx-auto px-6 text-center reveal">
                        <span className="material-symbols-outlined text-8xl opacity-10 mb-10 text-primary">format_quote</span>
                        <h2 className="serif-heading text-4xl md:text-6xl text-white font-light leading-snug italic mb-16">
                            "Intelligence is not treated as a trend to follow, but as a discipline to sustain."
                        </h2>
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                            <p className="text-2xl font-bold tracking-[0.4em] font-display text-accent-gold uppercase">Enduring Intelligence</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-16 mb-24">
                        <div className="md:col-span-1">
                            <Link href="/" className="flex items-center gap-4 mb-10 group">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined text-white text-2xl">account_balance</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                            </Link>
                            <p className="text-slate-500 text-sm italic leading-relaxed font-light">
                                Architects of institutional longevity through enduring intelligence.
                            </p>
                        </div>
                        <div className="md:col-span-2 flex flex-wrap justify-end gap-16 md:gap-32">
                            <div>
                                <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Firm</h5>
                                <ul className="text-slate-500 space-y-4 text-sm">
                                    <li><Link href="/" className="hover:text-primary transition-colors">Our Approach</Link></li>
                                    <li><Link href="/about" className="hover:text-primary transition-colors">Who We Work With</Link></li>
                                    <li><Link href="/insights" className="hover:text-primary transition-colors">Perspectives</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Engagement</h5>
                                <ul className="text-slate-500 space-y-4 text-sm">
                                    <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                                    <li><Link href="/portal" className="hover:text-primary transition-colors">Client Portal</Link></li>
                                    <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Charter</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <p className="text-slate-700 text-[10px] uppercase tracking-[0.5em]">© 2025 Westgate Stratagem Ltd. All Rights Reserved.</p>
                        <div className="serif-heading text-slate-600 italic text-xl opacity-30">Enduring Intelligence</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
