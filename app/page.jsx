'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
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
        <div className="font-sans selection:bg-primary/30 selection:text-white">
            <header className="fixed top-0 w-full z-50 glass-dark">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-10 w-auto rounded shadow-2xl" />
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading group-hover:text-primary transition-colors">Westgate Stratagem</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/about" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        <div className="relative group/nav">
                            <button className="text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1">Services<span className="material-symbols-outlined text-sm">expand_more</span></button>
                            <div className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-xl border border-white/5 shadow-2xl opacity-0 group-hover/nav:opacity-100 pointer-events-none group-hover/nav:pointer-events-auto transition-all duration-200 translate-y-2 group-hover/nav:translate-y-0">
                                <div className="p-3 flex flex-col gap-1">
                                    <Link href="/services/digital" className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">devices</span>Digital Product Development</Link>
                                    <Link href="/services/ai" className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">psychology</span>AI Training &amp; Capability Building</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/insights" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        <Link href="/contact" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact?type=consultation" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5">Book a Call</Link>
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
                            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">About</Link>
                            <Link href="/services/digital" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Digital Product Development</Link>
                            <Link href="/services/ai" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">AI Training</Link>
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Blog</Link>
                            <Link href="/contact?type=consultation" onClick={() => setShowMobileMenu(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-2 text-center">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="pt-20">
                {/* Hero */}
                <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950 z-10"></div>
                        <div className="absolute inset-0 bg-radial-glow z-10 pointer-events-none opacity-60"></div>
                        <img alt="Digital Solutions" className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-soft" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWhOdhvOEf0ONw5rg5irX95p54NJn0k_Kk6C2abTFHELpCeHpJHqYap8qgb0w1U_d8qIIjGYAYHUaXyhIGLL3BouUtno2PJrcwa_NKyNWGgSFRwTxnDJFrKMU45usIdZMffu6zX5hYV3tzpyzV96XH8StwCpwq08qtz-H1vY0wp-MRm6FA3rmip2jwSzGxZRB95ozJU4_J2RuvF0d00Hpr22Cu3hW5qHZJuNwHHKc9UP8Rg90eiSaAWRi5mJwt1xDSaN1yZiBqro" />
                    </div>
                    <div className="relative z-20 max-w-5xl px-6 text-center reveal active">
                        <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full animate-fade-in">
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Enduring Intelligence</span>
                        </div>
                        <h1 className="serif-heading text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-8 tracking-tighter">
                            We Build Digital Solutions and{' '}
                            <span className="italic text-accent-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.4)]">Train Teams</span>{' '}
                            to Work Intelligently
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                            From web and mobile applications to AI training programs, we help universities, NGOs, and forward-thinking organizations turn technology into capability.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                            <Link href="/services/digital" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(19,127,236,0.6)] transition-all flex items-center justify-center gap-2 group">
                                <span className="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">rocket_launch</span>Start a Project
                            </Link>
                            <Link href="/services/ai" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">school</span>Book Training
                            </Link>
                            <Link href="/contact?type=consultation" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">calendar_today</span>Schedule Consultation
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                        <span className="material-symbols-outlined text-white">expand_more</span>
                    </div>
                </section>

                {/* Two Core Services */}
                <section className="py-32 px-6 bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">What We Do</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">Two Core Services</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
                            <div className="group p-10 md:p-14 glass hover:bg-white/10 transition-all duration-500 rounded-3xl relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><span className="material-symbols-outlined text-9xl">devices</span></div>
                                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">devices</span>
                                </div>
                                <h3 className="serif-heading text-3xl text-white font-bold mb-4">Digital Product Development</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">Build systems that work. We design and develop web platforms, mobile applications, and custom digital tools for institutions and businesses across Nigeria and beyond.</p>
                                <div className="mb-8">
                                    <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">What we build:</p>
                                    <ul className="space-y-2">
                                        {['Web and mobile applications', 'Institutional portals and platforms', 'Learning management systems', 'Custom software solutions'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-400"><span className="size-1.5 rounded-full bg-primary flex-shrink-0"></span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <Link href="/services/digital" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all group/link">
                                        Contact Us <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="group p-10 md:p-14 glass hover:bg-white/10 transition-all duration-500 rounded-3xl relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><span className="material-symbols-outlined text-9xl">psychology</span></div>
                                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">psychology</span>
                                </div>
                                <h3 className="serif-heading text-3xl text-white font-bold mb-4">AI Training &amp; Capability Building</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">Equip your team with practical AI skills. We deliver customized training programs for researchers, academics, professionals, and institutional teams, tailored to your specific needs.</p>
                                <div className="mb-8">
                                    <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">We train:</p>
                                    <ul className="space-y-2">
                                        {['Individual researchers and scholars', 'University leadership and faculty', 'Departments, faculties, and research units', 'Group cohorts and professional teams'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-400"><span className="size-1.5 rounded-full bg-primary flex-shrink-0"></span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <Link href="/services/ai" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all group/link">
                                        Schedule a Training Consultation <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="py-24 px-6 bg-slate-900 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Trusted By</span>
                            <h2 className="serif-heading text-3xl md:text-4xl text-white font-bold">Organizations That Work With Us</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                            {[
                                { name: 'National Institute for Policy and Strategic Studies', abbr: 'NIPSS', icon: 'account_balance' },
                                { name: 'Global Health and Infectious Disease Control Institute, Nasarawa State University', abbr: 'GHIDI', icon: 'health_and_safety' },
                                { name: 'Crest Research and Development Institute', abbr: 'CRADI', icon: 'science' },
                                { name: 'Federal University of Health Sciences Otukpo', abbr: 'FUHSO', icon: 'school' },
                                { name: 'Easy Sales Export LTD', abbr: 'ESE', icon: 'business' },
                            ].map(client => (
                                <div key={client.abbr} className="p-6 glass rounded-2xl flex items-center gap-5 group hover:bg-white/10 transition-all">
                                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">{client.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-accent-gold font-bold text-sm">{client.abbr}</p>
                                        <p className="text-slate-400 text-xs leading-relaxed">{client.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Westgate */}
                <section className="py-40 bg-slate-950 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="reveal">
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">About Westgate Stratagem</span>
                                <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-8 leading-tight">Built at the Intersection of Technology and Knowledge Work</h2>
                                <p className="text-slate-300 text-xl leading-relaxed mb-6 font-light">Since 2018, we've worked at the intersection of technology and knowledge work, building digital systems and training teams across academic, public, and private sectors.</p>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">Our work is grounded in over a decade of hands-on experience within universities, research institutions, and policy environments. We understand how organizations think, work, and grow—and we build technology that serves those realities.</p>
                                <div className="p-8 glass rounded-2xl border border-accent-gold/20 mb-10">
                                    <p className="text-accent-gold text-lg italic font-light leading-relaxed">"Enduring Intelligence isn't just our tagline. It's our approach: building systems and capabilities that remain useful long after trends have passed."</p>
                                </div>
                                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all group">
                                    Learn More About Us <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="relative reveal">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { num: '2018', label: 'Founded' },
                                        { num: '7+', label: 'Years Experience' },
                                        { num: '5+', label: 'Partner Organizations' },
                                        { num: '100%', label: 'Tailored Programs' },
                                    ].map(stat => (
                                        <div key={stat.num} className="p-8 glass rounded-3xl text-center group hover:bg-white/10 transition-all">
                                            <p className="serif-heading text-4xl text-white font-bold mb-2 group-hover:text-primary transition-colors">{stat.num}</p>
                                            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get Started CTA */}
                <section className="py-32 bg-slate-900 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
                        <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Get Started</span>
                        <h2 className="serif-heading text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">Ready to Build Something?</h2>
                        <p className="text-slate-300 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">Whether you need a digital platform, team training, or strategic guidance, we're here to help.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                            <Link href="/contact?type=consultation" className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(19,127,236,0.5)] transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">mail</span>Contact Us
                            </Link>
                            <Link href="/services/digital" className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">View Services</Link>
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base">calendar_today</span>Book a Call
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                        <div className="md:col-span-2">
                            <Link href="/" className="flex items-center gap-4 mb-8 group">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined text-white text-2xl">devices</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                            </Link>
                            <p className="text-slate-400 max-w-sm mb-4 text-lg leading-relaxed font-light">Building digital solutions and training teams since 2018.</p>
                            <p className="text-slate-500 text-sm italic">Enduring Intelligence</p>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Services</h5>
                            <ul className="text-slate-500 space-y-4 text-sm">
                                <li><Link href="/services/digital" className="hover:text-primary transition-colors">Digital Product Development</Link></li>
                                <li><Link href="/services/ai" className="hover:text-primary transition-colors">AI Training &amp; Capability Building</Link></li>
                                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link href="/insights" className="hover:text-primary transition-colors">Blog &amp; Resources</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Contact</h5>
                            <ul className="text-slate-500 space-y-4 text-sm">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm text-primary mt-0.5">mail</span>hello@westgatestratagem.com</li>
                                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-primary">call</span>+234 8065810868</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm text-primary mt-0.5">location_on</span>No 9B, Beach Road Jos, Plateau State, Nigeria</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em]">© 2025 Westgate Stratagem Ltd. All Rights Reserved.</p>
                        <div className="flex items-center gap-6 text-slate-700 text-[10px] uppercase tracking-widest">
                            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
                            <span>•</span>
                            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
