'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ServiceAdvisory() {
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
                        <span className="relative text-[10px] font-black uppercase tracking-[0.3em]">Inquire</span>
                    </Link>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                        <div className="max-w-3xl reveal">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-8">Executive Advisory Board</span>
                            <h1 className="serif-heading text-6xl md:text-8xl font-bold mb-10 italic leading-[1.1]">
                                Counsel for the <br /> <span className="text-gradient">Long Now.</span>
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-2xl border-l-2 border-primary/30 pl-8">
                                We support University Presidents, Library Deans, and Research Directors in making high-stakes decisions that define institutional trajectories for the next decade and beyond.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <section className="py-32 relative bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Uncompromised Clarity', icon: 'visibility', desc: 'We are not vendors. We have no software to sell. Our only product is unvarnished truth and strategic objective clarity.' },
                                { title: 'Governance & Ethics', icon: 'balance', desc: 'Navigating the moral hazards of AI and data monetization. We help you build frameworks that protect institutional reputation.' },
                                { title: 'Generational Planning', icon: 'timeline', desc: 'Moving beyond the immediate funding cycle to architect systems that endure for 20, 50, or 100 years.' }
                            ].map((item, idx) => (
                                <div key={item.title} className="glass p-12 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <span className="material-symbols-outlined text-primary text-4xl mb-8 block">{item.icon}</span>
                                    <h3 className="serif-heading text-2xl font-bold mb-6 italic">{item.title}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Structures */}
                <section className="py-32 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24 reveal">
                            <h2 className="serif-heading text-4xl md:text-6xl font-bold italic mb-6">Engagement Models</h2>
                            <p className="text-slate-500 text-lg font-light tracking-widest uppercase">Structured for Institutional Stewardship</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Retainer */}
                            <div className="glass-dark p-12 md:p-16 rounded-[4rem] border-white/10 hover:border-primary/50 transition-all group reveal">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-8">The Retainer</span>
                                <h3 className="serif-heading text-3xl md:text-4xl font-bold mb-10 italic">Executive Counsel</h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        'Unlimited Access to Senior Partners',
                                        'Weekly Strategic Roundtables',
                                        'Crisis Communication Support',
                                        'Institutional Representative Presence'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-slate-400 group-hover:text-slate-200 transition-colors">
                                            <div className="size-1.5 bg-primary/40 rounded-full"></div>
                                            <span className="text-sm font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-white/5 hover:bg-primary transition-all py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 group-hover:border-transparent">
                                    Request Availability
                                </button>
                            </div>

                            {/* Project */}
                            <div className="glass p-12 md:p-16 rounded-[4rem] border-white/5 hover:bg-white/10 transition-all group reveal delay-200">
                                <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-8">The Sprint</span>
                                <h3 className="serif-heading text-3xl md:text-4xl font-bold mb-10 italic text-white">Strategic Audit</h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        '6-Week Intensive Review',
                                        'Infrastructure Stress Testing',
                                        'Full Capability Assessment',
                                        'The 5-Year Generational Roadmap'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-slate-500 group-hover:text-slate-300 transition-colors">
                                            <div className="size-1.5 bg-slate-700 rounded-full"></div>
                                            <span className="text-sm font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-primary px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all shadow-xl">
                                    View Audit Scope
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophical Callout */}
                <section className="py-40 relative bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-20"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
                        <span className="material-symbols-outlined text-primary text-6xl mb-12 opacity-50">format_quote</span>
                        <p className="serif-heading text-3xl md:text-5xl italic leading-tight mb-12 text-white/90">
                            "The function of leadership is to produce more leaders, not more followers. We help you build the systems that build your people."
                        </p>
                        <div className="h-px w-24 bg-primary/30 mx-auto mb-8"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Westgate Principle № 4</span>
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
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-800">Institutional Grade Architecture</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
