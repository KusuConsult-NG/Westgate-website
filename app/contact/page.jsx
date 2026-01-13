'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [showScheduler, setShowScheduler] = useState(false);
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
                        <Link href="/about" className="text-sm font-semibold text-slate-300 hover:text-white transition-all relative group">
                            Who We Work With
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
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
                            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white transition-colors py-2">
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
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Engagement</span>
                        </div>
                        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 tracking-tighter text-gradient italic">
                            Begin a Conversation
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            We work with individuals and institutions who value depth, clarity, and long-term thinking. Reach out to discuss your strategic landscape.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 flex flex-col gap-16 reveal">
                            <div className="space-y-12">
                                <h2 className="serif-heading text-3xl font-bold text-white flex items-center gap-4 italic leading-tight">
                                    <span className="size-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                        <span className="material-symbols-outlined text-primary text-xl">info</span>
                                    </span>
                                    Inquiry & Engagement
                                </h2>
                                <div className="space-y-10">
                                    <div className="pl-6 border-l border-white/10 group">
                                        <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-3">Region</p>
                                        <p className="text-2xl font-light text-white group-hover:text-primary transition-colors">Global / London HQ</p>
                                    </div>
                                    <div className="pl-6 border-l border-white/10 group">
                                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-black mb-3">Response Protocol</p>
                                        <p className="text-slate-300 leading-relaxed font-light text-lg">Institutional inquiries are reviewed and addressed within 48 business hours by our advisory team.</p>
                                    </div>
                                    <div className="pl-6 border-l border-white/10 group">
                                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-black mb-3">Philosophy</p>
                                        <p className="italic text-accent-gold text-xl font-light opacity-80 leading-relaxed">"Enduring Intelligence: Depth, clarity, and the synthesis of long-term strategic foresight."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 glass-dark rounded-3xl border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                                    <span className="material-symbols-outlined text-8xl text-primary">hub</span>
                                </div>
                                <p className="text-white font-bold tracking-widest uppercase text-xs mb-6">Global Network</p>
                                <a className="flex items-center gap-4 text-primary hover:text-white transition-all font-bold group/link" href="#">
                                    <span className="size-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                                        <span className="material-symbols-outlined text-sm">link</span>
                                    </span>
                                    LinkedIn: Westgate Stratagem LTD
                                </a>
                            </div>

                            <div className="aspect-video w-full rounded-[2rem] overflow-hidden glass border-white/5 relative group reveal">
                                <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsEdKSmR0TmYGR9qKiN7zDUgVVrHS5O64I6xqhnttCMhd3BLMZr4EOZ8RRIsR75OJ8dG9VynHnmd7VOqa8NDiqZYLWhlAUJAJzuvzmGWqpxpeVRliH7t-PalFMateb-YlimDfiBOx0pIP_VKr7-del_d0Aajen26-U8CKe8X6N_K-bVinCzRBS03i05gXxz1xbgRJ7rig3_9jeDpVvy1_iiBN6_KdmFqNxypiRgAwp9KNt4eOcx4uWMfHm3TP5JQeclmFVcVX5y5o")', backgroundSize: 'cover' }}></div>
                                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div>
                                <div className="absolute bottom-8 left-8 z-10 glass px-6 py-3 rounded-full border-white/10">
                                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">London Operations Hub</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div className="lg:col-span-7 reveal">
                            <div className="glass-dark p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden">
                                <form className="space-y-10 relative z-10" action="https://formsubmit.co/your-email@example.com" method="POST">
                                    <input type="hidden" name="_subject" value="New Westgate Consultation Inquiry" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="box" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Full Name *</span>
                                            <input
                                                name="name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 px-6 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-600 font-light"
                                                placeholder="Dr. Julian West"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Organization</span>
                                            <input
                                                name="institution"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 px-6 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-600 font-light"
                                                placeholder="Global Research Collective"
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Domain of Interest *</span>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 px-6 focus:border-primary focus:bg-white/10 transition-all outline-none text-white appearance-none font-light italic"
                                                required
                                            >
                                                <option value="" className="bg-slate-900 border-none">Select a specialization...</option>
                                                <option value="AI for Research & Scholarship" className="bg-slate-900">AI for Research & Scholarship</option>
                                                <option value="Institutional Training" className="bg-slate-900">Institutional Training</option>
                                                <option value="Tech Strategy & Implementation" className="bg-slate-900">Tech Strategy & Implementation</option>
                                                <option value="Executive Advisory" className="bg-slate-900">Executive Advisory</option>
                                                <option value="Other Inquiry" className="bg-slate-900">Other Inquiry</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Strategic Requirement *</span>
                                        <textarea
                                            name="message"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary focus:bg-white/10 transition-all outline-none text-white resize-none placeholder:text-slate-600 font-light min-h-[200px]"
                                            placeholder="Outline the strategic gap or project requirements..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button className="w-full relative group/submit overflow-hidden rounded-2xl h-16 transition-all shadow-xl" type="submit">
                                        <div className="absolute inset-0 bg-primary group-hover/submit:bg-primary/90 transition-colors"></div>
                                        <div className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs">
                                            Submit Inquiry
                                            <span className="material-symbols-outlined text-sm group-hover/submit:translate-x-2 transition-transform">send</span>
                                        </div>
                                    </button>
                                </form>
                                <p className="text-center text-[10px] font-medium text-slate-600 mt-10 tracking-widest uppercase italic">
                                    Proprietary and Confidential Protocol.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consultation Booking Section */}
                <section className="py-40 bg-slate-900 overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center reveal">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black tracking-[0.4em] uppercase rounded-full mb-8 border border-primary/20">
                            Protocol Alpha
                        </span>
                        <h2 className="serif-heading text-4xl md:text-6xl text-white font-bold mb-10 italic">Schedule an Alignment Call</h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                            For those ready to discuss specific project parameters. Choose a dialogue window in our advisor's calendar for a 20-minute strategic alignment.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <button
                                onClick={() => setShowScheduler(true)}
                                className="group relative px-12 py-6 glass-dark rounded-2xl hover:border-primary transition-all flex items-center gap-6 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">calendar_today</span>
                                <span className="text-xl font-bold tracking-tight text-white relative z-10">Open Scheduler Interface</span>
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">arrow_right_alt</span>
                            </button>
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-gold">Direct Institutional Access</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Scheduler Modal */}
            {showScheduler && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowScheduler(false)}></div>
                    <div className="relative glass-dark rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/5">
                        <div className="flex items-center justify-between p-10 border-b border-white/5 bg-slate-900/50">
                            <h3 className="serif-heading text-3xl font-bold text-white italic">Strategic Alignment Window</h3>
                            <button
                                onClick={() => setShowScheduler(false)}
                                className="group size-12 glass rounded-full flex items-center justify-center hover:border-primary transition-all"
                            >
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">close</span>
                            </button>
                        </div>
                        <div className="p-4 bg-white rounded-b-[2.5rem]">
                            <iframe
                                src="https://calendly.com/martynseric/30min"
                                className="w-full h-[650px] border-0"
                                title="Schedule a consultation"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

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
