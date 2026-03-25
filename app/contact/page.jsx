'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', org: '', type: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get('type');
        if (typeParam && ['digital', 'ai', 'consultation', 'other'].includes(typeParam)) {
            setFormData(prev => ({ ...prev, type: typeParam }));
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30">
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
                        <Link href="/about" className="text-sm font-semibold text-slate-300 hover:text-white relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/services/digital" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Digital Dev<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/services/ai" className="text-sm font-semibold text-slate-300 hover:text-white relative group">AI Training<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/insights" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span></Link>
                        <Link href="/contact" className="text-sm font-bold text-white relative group">Contact<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span></Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40">Get in Touch</Link>
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
                            <Link href="/services/digital" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Digital Dev</Link>
                            <Link href="/services/ai" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">AI Training</Link>
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Blog</Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="pt-20">
                {/* Hero */}
                <section className="py-32 px-6 relative reveal active">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full">
                                <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Get in Touch</span>
                            </div>
                            <h1 className="serif-heading text-5xl md:text-7xl text-white font-bold mb-8 leading-[1.1]">
                                Let's Start a <span className="text-gradient italic">Conversation</span>
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed">
                                Whether you're exploring a digital project, planning AI training, or just want to understand how we work—reach out and let's talk.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="pb-32 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 reveal">
                            {/* Form */}
                            <div className="lg:col-span-3">
                                {submitted ? (
                                    <div className="glass-dark rounded-3xl p-12 border border-primary/20 text-center h-full flex flex-col items-center justify-center">
                                        <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-lg shadow-primary/40">
                                            <span className="material-symbols-outlined text-white text-4xl">check</span>
                                        </div>
                                        <h2 className="serif-heading text-3xl text-white font-bold mb-4">Message Received</h2>
                                        <p className="text-slate-300 text-lg font-light mb-8">Thank you for reaching out. We'll be in touch within 24–48 hours.</p>
                                        <button onClick={() => setSubmitted(false)} className="text-primary text-sm font-bold hover:underline">Send another message</button>
                                    </div>
                                ) : (
                                    <div className="glass-dark rounded-3xl p-10 md:p-12 border border-white/5">
                                        <h2 className="serif-heading text-2xl text-white font-bold mb-8">Send a Message</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Name</label>
                                                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full glass-dark border border-white/10 rounded-xl py-4 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/40 transition-colors bg-transparent" placeholder="Your name" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Email</label>
                                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full glass-dark border border-white/10 rounded-xl py-4 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/40 transition-colors bg-transparent" placeholder="your@email.com" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Organization (Optional)</label>
                                                <input type="text" name="org" value={formData.org} onChange={handleChange} className="w-full glass-dark border border-white/10 rounded-xl py-4 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/40 transition-colors bg-transparent" placeholder="Your institution or organization" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Inquiry Type</label>
                                                <select name="type" value={formData.type} onChange={handleChange} className="w-full glass-dark border border-white/10 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-primary/40 transition-colors bg-slate-900">
                                                    <option value="" className="bg-slate-900">Select an option</option>
                                                    <option value="digital" className="bg-slate-900">Digital Product Development</option>
                                                    <option value="ai" className="bg-slate-900">AI Training &amp; Capability Building</option>
                                                    <option value="consultation" className="bg-slate-900">General Consultation</option>
                                                    <option value="other" className="bg-slate-900">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Message</label>
                                                <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full glass-dark border border-white/10 rounded-xl py-4 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/40 transition-colors resize-none bg-transparent" placeholder="Tell us about your project, training needs, or question..." />
                                            </div>
                                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 group shadow-lg shadow-primary/20">
                                                <span className="material-symbols-outlined text-base">send</span>
                                                Send Message
                                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                <div className="glass-dark rounded-3xl p-10 border border-white/5">
                                    <h3 className="serif-heading text-xl text-white font-bold mb-8">Contact Information</h3>
                                    <div className="space-y-6">
                                        <a href="mailto:hello@westgatestratagem.com" className="flex items-start gap-5 group">
                                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all flex-shrink-0">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white text-xl">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-0.5">Email</p>
                                                <p className="text-white font-medium group-hover:text-primary transition-colors">hello@westgatestratagem.com</p>
                                            </div>
                                        </a>
                                        <a href="tel:+2348065810868" className="flex items-start gap-5 group">
                                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all flex-shrink-0">
                                                <span className="material-symbols-outlined text-primary group-hover:text-white text-xl">call</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-0.5">Phone</p>
                                                <p className="text-white font-medium group-hover:text-primary transition-colors">+234 8065810868</p>
                                            </div>
                                        </a>
                                        <div className="flex items-start gap-5">
                                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0">
                                                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-0.5">Location</p>
                                                <p className="text-white font-medium">No 9B, Beach Road</p>
                                                <p className="text-slate-400">Jos, Plateau State, Nigeria</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-dark rounded-3xl p-10 border border-primary/20">
                                    <h3 className="serif-heading text-xl text-white font-bold mb-4">Schedule a Call</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">Prefer to talk directly? Book a 30-minute consultation at a time that works for you.</p>
                                    <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-base">calendar_today</span>
                                        Book on Calendly
                                    </a>
                                </div>

                                <div className="glass-dark rounded-3xl p-10 border border-white/5">
                                    <h3 className="serif-heading text-xl text-white font-bold mb-6">Quick Links</h3>
                                    <div className="space-y-3">
                                        <Link href="/services/digital" className="flex items-center justify-between p-4 glass rounded-xl hover:bg-white/10 transition-all group">
                                            <span className="text-slate-300 text-sm">Digital Product Development</span>
                                            <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                        <Link href="/services/ai" className="flex items-center justify-between p-4 glass rounded-xl hover:bg-white/10 transition-all group">
                                            <span className="text-slate-300 text-sm">AI Training &amp; Capability Building</span>
                                            <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                        <Link href="/about" className="flex items-center justify-between p-4 glass rounded-xl hover:bg-white/10 transition-all group">
                                            <span className="text-slate-300 text-sm">About Westgate Stratagem</span>
                                            <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                            <Link href="/services/digital" className="hover:text-primary transition-colors">Digital Dev</Link>
                            <Link href="/services/ai" className="hover:text-primary transition-colors">AI Training</Link>
                            <Link href="/insights" className="hover:text-primary transition-colors">Blog</Link>
                        </div>
                        <p className="text-slate-700 text-[10px] uppercase tracking-[0.4em]">© 2025 Westgate Stratagem Ltd.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
