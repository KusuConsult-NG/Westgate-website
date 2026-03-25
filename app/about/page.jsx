'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30 selection:text-white">
            <header className="fixed top-0 w-full z-50 glass-dark">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-10 w-auto rounded shadow-2xl" />
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading group-hover:text-primary transition-colors">Westgate Stratagem</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/about" className="text-sm font-bold text-white relative group">About<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span></Link>
                        <Link href="/services/digital" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Digital Dev<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/services/ai" className="text-sm font-semibold text-slate-300 hover:text-white relative group">AI Training<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/insights" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/contact" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40">Book a Call</Link>
                        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden p-2 text-primary hover:bg-white/10 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">{showMobileMenu ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {showMobileMenu && (
                <div className="md:hidden glass-dark fixed top-20 left-0 w-full z-40 animate-fade-in border-t border-white/5">
                    <div className="px-6 py-8">
                        <nav className="flex flex-col gap-4">
                            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-white text-lg font-bold py-2">About</Link>
                            <Link href="/services/digital" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Digital Product Development</Link>
                            <Link href="/services/ai" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">AI Training</Link>
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Blog</Link>
                            <Link href="/contact" onClick={() => setShowMobileMenu(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-2 text-center">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="pt-20">
                {/* Hero */}
                <section className="relative py-32 px-6 flex flex-col items-center text-center reveal active">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full">
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">About Westgate Stratagem</span>
                        </div>
                        <h1 className="serif-heading text-5xl md:text-7xl text-white font-bold leading-tight mb-8 tracking-tighter text-gradient italic">
                            Technology Meets Knowledge Work
                        </h1>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"></div>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            Since 2018, we've worked at the intersection of technology and knowledge work, building digital systems and training teams across academic, public, and private sectors.
                        </p>
                    </div>
                </section>

                {/* Story */}
                <section className="py-32 px-6 bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="reveal">
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Our Story</span>
                                <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-10 leading-tight">Built from Real Experience in Real Institutions</h2>
                                <p className="text-slate-300 leading-relaxed text-lg font-light mb-6">
                                    Our work is grounded in over a decade of hands-on experience within universities, research institutions, and policy environments. We understand how organizations think, work, and grow—and we build technology that serves those realities.
                                </p>
                                <p className="text-slate-400 leading-relaxed text-lg font-light mb-10">
                                    We don't parachute in with generic solutions. We engage deeply with our clients' contexts, their people, and their long-term objectives.
                                </p>
                                <div className="p-8 glass rounded-2xl border border-accent-gold/20">
                                    <p className="text-accent-gold text-xl italic font-light leading-relaxed">
                                        "Enduring Intelligence isn't just our tagline. It's our approach: building systems and capabilities that remain useful long after trends have passed."
                                    </p>
                                </div>
                            </div>
                            <div className="relative reveal">
                                <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white/5"></div>
                                <div className="space-y-16 relative">
                                    {[
                                        { year: '2018', title: 'Founded', desc: 'Began as a focused technology and research consulting practice serving institutional clients.' },
                                        { year: '2021', desc: 'Expanded into AI training and capability building for academic and policy environments.' },
                                        { year: '2025', desc: 'Formal incorporation as Westgate Stratagem LTD—committed to Enduring Intelligence across Nigeria and beyond.', active: true },
                                    ].map((milestone, idx) => (
                                        <div key={milestone.year} className="pl-12 relative group">
                                            <div className={`absolute -left-[4px] top-1 size-2 rounded-full ring-4 transition-all ${milestone.active ? 'bg-primary ring-primary/40' : 'bg-slate-700 ring-transparent group-hover:bg-primary group-hover:ring-primary/20'}`}></div>
                                            <h4 className={`font-bold text-2xl mb-3 transition-colors ${milestone.active ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>{milestone.year}{milestone.title ? ` — ${milestone.title}` : ''}</h4>
                                            <p className="text-slate-400 font-light text-lg max-w-sm leading-relaxed">{milestone.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Work With */}
                <section className="py-32 px-6 bg-slate-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Our Clients</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">Who We Work With</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">We partner with individuals and organizations whose work depends on credibility, specialized knowledge, and long-term thinking.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                            {[
                                { title: 'Universities', icon: 'account_balance', desc: 'Strategic guidance and digital products for higher education leadership and institutions.' },
                                { title: 'Research Institutions', icon: 'science', desc: 'Supporting scholars and research units with tools, training, and technology strategy.' },
                                { title: 'NGOs & Development Orgs', icon: 'volunteer_activism', desc: 'Building platforms and capabilities for organizations driving social impact.' },
                                { title: 'Policy & Government', icon: 'policy', desc: 'Providing technology solutions and AI training for policy research and government agencies.' },
                            ].map(item => (
                                <div key={item.title} className="group p-10 glass hover:bg-white/10 transition-all duration-500 flex flex-col rounded-3xl">
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

                {/* Leadership */}
                <section className="py-32 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Leadership</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">The People Behind the Work</h2>
                        </div>
                        <div className="max-w-3xl mx-auto reveal">
                            <div className="glass-dark p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-[10rem] text-primary">person</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
                                            <span className="material-symbols-outlined text-primary text-4xl">person</span>
                                        </div>
                                        <div>
                                            <h3 className="serif-heading text-2xl text-white font-bold">Eric Martyns</h3>
                                            <p className="text-primary text-sm font-black uppercase tracking-widest mt-1">Founder &amp; Principal</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-lg font-light leading-relaxed mb-6">
                                        Eric has over a decade of experience at the intersection of technology, research, and institutional capacity building. He has worked within universities, research institutes, and policy environments across Nigeria, supporting work that spans from individual scholarship to institutional digital transformation.
                                    </p>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        His approach combines technical capability with deep understanding of how knowledge work happens, shaped by years as a researcher, trainer, and technology strategist.
                                    </p>
                                    <div className="mt-10 pt-8 border-t border-white/5">
                                        <p className="text-accent-gold italic text-lg font-light">&ldquo;Enduring Intelligence: building systems and capabilities that remain useful long after trends have passed.&rdquo;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center reveal">
                        <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-8">Ready to Work Together?</h2>
                        <p className="text-slate-300 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">Whether it's a digital platform, AI training, or strategic guidance—let's start a conversation.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(19,127,236,0.5)] transition-all">Contact Us</Link>
                            <Link href="/services/ai" className="px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">Explore AI Training</Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white text-lg">devices</span></div>
                            <span className="text-white font-bold serif-heading">Westgate Stratagem</span>
                        </div>
                        <div className="flex flex-wrap gap-8 text-slate-500 text-sm">
                            <Link href="/services/digital" className="hover:text-primary transition-colors">Digital Dev</Link>
                            <Link href="/services/ai" className="hover:text-primary transition-colors">AI Training</Link>
                            <Link href="/insights" className="hover:text-primary transition-colors">Blog</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                        <p className="text-slate-700 text-[10px] uppercase tracking-[0.4em]">© 2025 Westgate Stratagem Ltd.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
