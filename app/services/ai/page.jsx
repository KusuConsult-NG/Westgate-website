'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ServiceAI() {
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
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30">
            {/* Header */}
            <nav className="fixed w-full z-50 px-6 py-8 md:px-12">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-primary blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-12 w-auto rounded-lg shadow-2xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-[0.3em] uppercase leading-none">Westgate</span>
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mt-1">Stratagem</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-12 glass px-10 py-4 rounded-full border-white/5 shadow-2xl">
                        {[
                            { name: 'Our Approach', href: '/about' },
                            { name: 'Who We Work With', href: '/services' },
                            { name: 'Perspectives', href: '/insights' }
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contact" className="glass-dark px-8 py-3.5 rounded-full border-white/5 hover:border-primary/50 transition-all group overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative text-[10px] font-black uppercase tracking-[0.3em]">Consultation</span>
                    </Link>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-40"></div>
                    <div className="absolute -bottom-24 -right-24 size-[600px] bg-primary/10 rounded-full blur-[120px]"></div>

                    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="reveal">
                                <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 mb-8">
                                    <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Core Competency</span>
                                </div>
                                <h1 className="serif-heading text-6xl md:text-8xl font-bold mb-8 italic leading-[1.1]">
                                    AI for <span className="text-gradient">Intelligent</span> Research
                                </h1>
                                <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-xl">
                                    Moving beyond automation: utilizing artificial intelligence as a thinking aid to amplify human intellect and institutional knowledge.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <button className="bg-primary px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">
                                        Explore Frameworks
                                    </button>
                                    <button className="glass px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] border-white/5 hover:bg-white/5 transition-all">
                                        The Philosophy
                                    </button>
                                </div>
                            </div>
                            <div className="relative reveal delay-200">
                                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-[3rem]"></div>
                                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEb8g_plxg-c9W5BELeHjA7TEZoRwdPos5Jy4nYMFzHe9xCDJffs1g5B2jftYpT7UyJlIt8u5icfM5HvwV9ZZsh-ef67As7oahLpoAL5SI_8lMxSgccnPlEJ_NjXWQR0wdSc-LNzahh2MV52u3Stxka3t0ayY3Zy4YglMZSBA2wf1QeTXHgQhlng-dtuc8wQkCyxu1JvffAFd5JbeZMsP_ncc6BTsv1SZZSvZ7dINMusvS29OvtwTPD3Concr_5M7hxSH2N2TuXjQ"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                                        alt="AI Research"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Methodology */}
                <section className="py-32 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/2 reveal">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Execution Strategy</span>
                                <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-10 italic">Cognitive Partnership: Thinking with AI</h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                                    True strategic advantage comes from the synthesis of machine precision and human intuition. We implement AI systems that function as analytical extensions of your team, not replacements for them.
                                </p>
                                <div className="glass-dark p-8 rounded-[2rem] border-white/5 flex items-start gap-6 group hover:border-primary/30 transition-all">
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Adaptive Inquiry</h4>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed">Systematically moving from generic generative output to highly specific, expert-level collaborative inquiry.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 grid grid-cols-1 gap-6 reveal delay-300">
                                {[
                                    { title: 'Semantic Understanding', icon: 'menu_book', desc: 'Deep comprehension of complex datasets and academic literature through advanced semantic parsing.' },
                                    { title: 'Data Interpretation', icon: 'analytics', desc: 'Synthesizing diverse, multi-dimensional viewpoints into coherent strategic and conceptual frameworks.' },
                                    { title: 'Intellectual Ownership', icon: 'fingerprint', desc: 'Ensuring rigorous human governance over every analytical vector generated by AI modules.' }
                                ].map((pillar) => (
                                    <div key={pillar.title} className="glass p-10 rounded-[2.5rem] border-white/5 hover:bg-white/5 transition-all group">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="size-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-primary text-2xl">{pillar.icon}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                                        </div>
                                        <p className="text-slate-400 font-light leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes */}
                <section className="py-32 bg-slate-900/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-20"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-24 reveal">
                            <h2 className="serif-heading text-4xl font-bold italic mb-6">Strategic Outcomes</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto font-light">The tangible return on institutional AI integration.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: 'Absolute Clarity', desc: 'Filtering semantic noise to reveal essential patterns and core arguments within oceanic information sets.' },
                                { title: 'Human Judgment', desc: 'Augmenting discernment with data-driven vectors while maintaining human-in-the-loop sovereign sign-off.' },
                                { title: 'Rigorous Integrity', desc: 'Adherence to the highest institutional standards of academic integrity and citation ethics in every output.' }
                            ].map((outcome, idx) => (
                                <div key={outcome.title} className="reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <h3 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-6">0{idx + 1} — {outcome.title.split(' ')[1]}</h3>
                                    <h4 className="text-2xl font-bold mb-6 italic serif-heading">{outcome.title}</h4>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                                        {outcome.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="glass-dark rounded-[4rem] border-white/5 overflow-hidden flex flex-col lg:flex-row items-stretch reveal">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0fLUOTvn3TJEAP40iuFiWHUNE7pXOkRNJAOStyr28aUYGw9P05WjSs-GgpebYS6ZO1bOTvqp8_f5_03TNE5qfDCEKw75rq8IGbP0Iw4FRnHVndbBcFHik22Hgshn3x4o69XhKe1NJF8axHNtrMLvuXKVVp8Wpu2ed2TXf4sgLNlTJl10fMKnSOqq8ZC3-GdEsnSZpA9x5u3HN3DEX50_Nq6vMnA4dqMpPBtiOeU2PkCj2bTTZIbYffyiw-XVgbZWTondmznUw7FI"
                                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                                    alt="Case Study"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
                            </div>
                            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Institutional Case Study</span>
                                <h3 className="serif-heading text-4xl font-bold italic mb-8">Knowledge Impact at Scale</h3>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                                    Synthesizing five decades of longitudinal data into active policy frameworks. By leveraging our custom Inquiry Frameworks, the research team identified previously obscured correlations while maintaining a direct audit trail.
                                </p>
                                <Link href="#" className="inline-flex items-center gap-4 group">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Full Validation Report</span>
                                    <div className="size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 relative overflow-hidden text-center bg-slate-900/30">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
                        <h2 className="serif-heading text-5xl md:text-7xl font-bold italic mb-10">Start a Strategic <br /> Conversation</h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                            Discuss how enduring intelligence can integrate into your institutional research or corporate advisory workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer"
                                className="bg-primary px-12 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-4 group">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                Schedule Consultation
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Global Footer */}
            <footer className="py-20 px-6 border-t border-white/5 relative bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="md:col-span-2">
                            <Link href="/" className="flex items-center gap-4 mb-8">
                                <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="h-10 w-auto rounded opacity-80" />
                                <div className="flex flex-col">
                                    <span className="text-lg font-black tracking-[0.3em] uppercase leading-none">Westgate</span>
                                    <span className="text-[8px] font-black tracking-[0.5em] uppercase text-primary mt-1">Stratagem</span>
                                </div>
                            </Link>
                            <p className="text-slate-500 font-light leading-relaxed max-w-md">
                                A strategic advisory firm providing 'Enduring Intelligence' to help academic and institutional clients navigate high-complexity environments.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Firm</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Our Approach</Link></li>
                                <li><Link href="/insights" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Insights</Link></li>
                                <li><Link href="/contact" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Engagement</h4>
                            <ul className="space-y-4">
                                <li><Link href="/portal" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Client Portal</Link></li>
                                <li><Link href="/services" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Advisory Services</Link></li>
                                <li><Link href="/terms" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Legal Notice</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
                            © 2024 Westgate Stratagem LTD. All rights reserved.
                        </p>
                        <div className="flex items-center gap-8">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-800">ISO 27001 Compliant Flow</span>
                            <div className="w-12 h-px bg-white/5"></div>
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-800">Institutional Grade Advisory</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
