'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ServiceStrategy() {
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
                {/* Blueprint Hero */}
                <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none blueprint-grid"></div>

                    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                        <div className="max-w-3xl reveal">
                            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 mb-10">
                                <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary leading-none">Sys_Arch_v2.0 // Infrastructure_Design</span>
                            </div>
                            <h1 className="serif-heading text-6xl md:text-8xl font-bold mb-10 italic leading-[1.1]">
                                Architecting the <br /> <span className="text-gradient">Long Term.</span>
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-2xl">
                                We design technology ecosystems that scale with institutional ambition. Engineering clean, interoperable infrastructure without legacy limitations.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-primary px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group">
                                    View Capabilities
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture Grid */}
                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Data Schema Design', icon: 'schema', desc: 'Structured ontologies ensuring data maintains categorical meaning across decades.' },
                                { title: 'Interoperability', icon: 'lan', desc: 'API-first architectures that allow institutional systems to communicate without friction.' },
                                { title: 'Cloud Sovereignty', icon: 'cloud_sync', desc: 'Strategies for hybrid retention, ensuring complete ownership of institutional memory.' },
                                { title: 'Security by Design', icon: 'security', desc: 'Zero-trust frameworks embedded at the architectural level, not just as a perimeter.' }
                            ].map((item, idx) => (
                                <div key={item.title} className="glass p-10 rounded-[2.5rem] border-white/5 hover:bg-white/5 transition-all group reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                                    <div className="size-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Philosophy/Problem */}
                <section className="py-32 relative bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2 reveal">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Strategic Imperative</span>
                                <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-10 italic leading-tight">Eliminating the Friction of <br /> Technical Debt</h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                                    Institutions often acquire technology in disconnected silos—resulting in a fragmented mess that demands perpetual, expensive integration management.
                                </p>
                                <p className="text-white text-lg font-bold italic serif-heading mb-10">
                                    We reverse the paradigm by designing the comprehensive blueprint first.
                                </p>
                                <div className="p-1 w-20 bg-primary/30 rounded-full mb-10"></div>
                            </div>

                            <div className="lg:w-1/2 w-full reveal delay-300">
                                <div className="glass-dark p-10 md:p-14 rounded-[3rem] border-white/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <span className="material-symbols-outlined text-[10rem] text-primary">analytics</span>
                                    </div>
                                    <div className="relative z-10 font-mono text-xs md:text-sm">
                                        <div className="flex justify-between border-b border-white/10 pb-4 mb-8">
                                            <span className="text-slate-500 uppercase tracking-[0.2em] font-black text-[10px]">Architecture Parameter</span>
                                            <span className="text-slate-500 uppercase tracking-[0.2em] font-black text-[10px]">WGS Standard</span>
                                        </div>
                                        <div className="space-y-6">
                                            {[
                                                { label: 'Uptime Integrity', value: '99.99%', status: 'Critical' },
                                                { label: 'Data Interoperability', value: 'Open Standard', status: 'Mandatory' },
                                                { label: 'Protocol Encryption', value: 'AES-256 GCM', status: 'Secure' },
                                                { label: 'Vendor Sovereignty', value: '100% Retained', status: 'Absolute' }
                                            ].map((spec) => (
                                                <div key={spec.label} className="flex justify-between items-center group/row">
                                                    <span className="text-slate-300 font-medium group-hover/row:text-primary transition-colors">{spec.label}</span>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-white font-bold">{spec.value}</span>
                                                        <span className="size-1.5 bg-primary/40 rounded-full"></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-12 pt-6 border-t border-white/10 text-center">
                                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">// Audit_Protocol_Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
                        <h2 className="serif-heading text-5xl md:text-7xl font-bold italic mb-10">Inaugurate the <br /> Framework</h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                            Step into a future of governed, scalable, and institutional-grade technology strategy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer"
                                className="bg-primary px-12 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-4 group">
                                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                Initialize Architecture
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
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-800">Institutional Grade Architecture</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
