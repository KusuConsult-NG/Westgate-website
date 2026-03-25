'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/insights' },
    { name: 'Contact', href: '/contact' },
];

function SharedHeader({ active }) {
    const [showMobile, setShowMobile] = useState(false);
    return (
        <>
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
                        {NAV_LINKS.map(l => (
                            <Link key={l.name} href={l.href} className={`text-sm font-semibold transition-all relative group ${active === l.href ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                                {l.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${active === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5">Book a Call</Link>
                        <button onClick={() => setShowMobile(!showMobile)} className="md:hidden p-2 text-primary hover:bg-white/10 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">{showMobile ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </header>
            {showMobile && (
                <div className="md:hidden glass-dark fixed top-20 left-0 w-full z-40 animate-fade-in border-t border-white/5">
                    <div className="px-6 py-8">
                        <nav className="flex flex-col gap-4">
                            <Link href="/about" onClick={() => setShowMobile(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">About</Link>
                            <Link href="/services/digital" onClick={() => setShowMobile(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Digital Product Development</Link>
                            <Link href="/services/ai" onClick={() => setShowMobile(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">AI Training</Link>
                            <Link href="/insights" onClick={() => setShowMobile(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Blog</Link>
                            <Link href="/contact" onClick={() => setShowMobile(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-2 text-center">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

export default function DigitalService() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const whatWeBuild = [
        { title: 'Web Platforms & Portals', icon: 'web', desc: 'Institutional websites, student portals, administrative systems, and public-facing platforms designed for usability and long-term maintenance.' },
        { title: 'Mobile Applications', icon: 'smartphone', desc: 'Native and cross-platform mobile apps for iOS and Android, from concept to launch and beyond.' },
        { title: 'Custom Software Solutions', icon: 'code', desc: 'Bespoke tools and systems built to solve specific organizational challenges, from workflow automation to data management.' },
    ];

    const process = [
        { num: '01', title: 'Discovery & Strategy', desc: 'We start by understanding your organization, your users, and your goals. No templates, no assumptions—just clarity about what needs to be built and why.' },
        { num: '02', title: 'Design & Planning', desc: 'We map user journeys, design interfaces, and create technical specifications that align with your budget, timeline, and institutional realities.' },
        { num: '03', title: 'Development & Testing', desc: 'We build with modern, stable technologies. Throughout development, you see progress, provide feedback, and stay involved.' },
        { num: '04', title: 'Deployment & Training', desc: 'We launch your system, train your team, and ensure everything works as intended before we hand over the keys.' },
        { num: '05', title: 'Ongoing Support', desc: "Technology doesn't end at launch. We provide maintenance, updates, and support as your needs evolve." },
    ];

    const whoWeWorkWith = ['Universities and educational institutions', 'NGOs and development organizations', 'Government agencies and policy institutions', 'Private sector businesses and startups', 'Research and knowledge organizations'];

    return (
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30">
            <SharedHeader active="/services/digital" />

            <main className="pt-20">
                {/* Hero */}
                <section className="relative py-32 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 size-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="max-w-3xl reveal active">
                            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 mb-8">
                                <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Service</span>
                            </div>
                            <h1 className="serif-heading text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                                Digital Product Development That <span className="text-gradient italic">Delivers</span>
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
                                We build web platforms, mobile applications, and custom software for universities, NGOs, government agencies, and businesses. From strategy to deployment and ongoing support.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-primary px-10 py-5 rounded-2xl text-sm font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">Start a Project</Link>
                                <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="glass px-10 py-5 rounded-2xl text-sm font-bold border-white/5 hover:bg-white/5 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>Schedule Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Build */}
                <section className="py-24 px-6 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Capabilities</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">What We Build</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
                            {whatWeBuild.map(item => (
                                <div key={item.title} className="p-10 glass rounded-3xl group hover:bg-white/10 transition-all">
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="serif-heading text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="py-32 px-6 bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">How We Work</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">Our Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                            {process.map(step => (
                                <div key={step.num} className="p-10 glass rounded-3xl group hover:bg-white/10 transition-all hover:border-primary/30 border border-white/5">
                                    <span className="text-accent-gold text-3xl serif-heading italic block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{step.num}.</span>
                                    <h3 className="text-xl text-white font-bold mb-4 tracking-tight">{step.title}</h3>
                                    <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Project */}
                <section className="py-32 px-6 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Featured Project</span>
                            <h2 className="serif-heading text-4xl text-white font-bold">Work We're Proud Of</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
                            <div className="glass-dark rounded-3xl p-10 border border-white/5 group hover:border-primary/20 transition-all">
                                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">smartphone</span>
                                </div>
                                <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3 block">CRADI · Mobile App</span>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">CRADI Climate Mobile App</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Client</p>
                                        <p className="text-slate-300">Crest Research and Development Institute (CRADI)</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Challenge</p>
                                        <p className="text-slate-300">CRADI needed a mobile platform to deliver climate information, resources, and community engagement tools to users across Nigeria.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Solution</p>
                                        <p className="text-slate-300">We designed and built a cross-platform mobile application with offline capabilities, real-time data integration, and community features.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Impact</p>
                                        <p className="text-accent-gold font-medium">Expanded CRADI's reach to remote communities with limited internet connectivity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-dark rounded-3xl p-10 border border-white/5 group hover:border-primary/20 transition-all">
                                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">storefront</span>
                                </div>
                                <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3 block">Easy Sales Export · Platform</span>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-4">Easy Sales Export Platform</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Client</p>
                                        <p className="text-slate-300">Easy Sales Export LTD</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Challenge</p>
                                        <p className="text-slate-300">Needed a comprehensive digital platform to support export operations, training academies, and cooperative management.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Solution</p>
                                        <p className="text-slate-300">Full-stack web platform with multi-role access, Academy LMS, cooperative features, and integrated payment processing.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Impact</p>
                                        <p className="text-accent-gold font-medium">Digitized and unified multiple business operations into one cohesive platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Work With */}
                <section className="py-24 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal">
                            <div>
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Who We Work With</span>
                                <h2 className="serif-heading text-4xl text-white font-bold mb-8">Built for Organizations That Do Real Work</h2>
                                <ul className="space-y-4">
                                    {whoWeWorkWith.map(item => (
                                        <li key={item} className="flex items-center gap-4 group">
                                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary transition-colors flex-shrink-0">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white text-base">check</span>
                                            </div>
                                            <span className="text-slate-300 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-dark rounded-3xl p-12 border border-white/5">
                                <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Pricing & Engagement</span>
                                <h3 className="serif-heading text-3xl text-white font-bold mb-4">Every Project is Different</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">Our engagements typically start from ₦30,000+ depending on scope, complexity, and timeline. We provide detailed proposals with clear milestones, deliverables, and payment schedules.</p>
                                <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20 mb-8">
                                    <p className="text-slate-300 text-sm leading-relaxed">Ready to start? <Link href="/contact" className="text-primary font-bold hover:underline">Schedule a consultation →</Link></p>
                                </div>
                                <Link href="/contact" className="w-full bg-primary px-8 py-4 rounded-xl text-white font-bold text-center block hover:bg-primary/90 transition-all">Start a Project</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white text-lg">devices</span></div>
                            <span className="text-white font-bold serif-heading">Westgate Stratagem</span>
                        </div>
                        <div className="flex flex-wrap gap-8 text-slate-500 text-sm">
                            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
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
