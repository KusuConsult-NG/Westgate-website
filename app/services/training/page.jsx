'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ServiceTraining() {
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
                        <span className="relative text-[10px] font-black uppercase tracking-[0.3em]">Book Workshop</span>
                    </Link>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="reveal">
                                <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 mb-10">
                                    <span className="material-symbols-outlined text-primary text-sm">school</span>
                                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary leading-none">Institutional Learning</span>
                                </div>
                                <h1 className="serif-heading text-6xl md:text-8xl font-bold mb-10 italic leading-[1.1]">
                                    Upskilling the <br /> <span className="text-gradient">Academic Workforce</span>
                                </h1>
                                <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-xl">
                                    Bespoke training programs designed to bridge the digital skills gap for faculty, researchers, and administrative leadership.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <button className="bg-primary px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group">
                                        Our Curricula
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative reveal delay-300">
                                <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-20"></div>
                                <div className="glass p-4 rounded-[3rem] border-white/5 relative group overflow-hidden">
                                    <img alt="Workshop setting" className="w-full h-auto rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzm_270jK0JvVtxk4v2KryTvb7oD23aD-r-6B-kR8W5Lg-pC0e7i945lP-M9Hk554E-8p5tV0J3BqK_sZ3C8i5O_9o8P4L5E_5xH5_5yI4G5_5E4J5K5L_4M5N5O5P5Q_R5S5T5U5V5W5X_5Y5Z5a5b5c5d5e5f5g5h5i5j5k5l5m5n5o5p5q5r5s5t5u5v5w5x5y5z5A5B5C5D5E5F5G5H5I5J5K5L5M5N5O5P5Q5R5S5T5U5V5W5X5Y" />
                                    <div className="absolute bottom-10 left-10 glass px-8 py-4 rounded-2xl border-white/10">
                                        <p className="font-bold text-sm tracking-tight">Live Seminars & Remote Modules</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Tailored Institutional LMS Integration</p>
                                    </div>
                                </div>

                                {/* Floating Stat Card */}
                                <div className="absolute -bottom-10 -right-5 glass-dark p-8 rounded-3xl border-primary/20 shadow-2xl max-w-[200px] hidden md:block">
                                    <p className="text-4xl serif-heading italic font-bold text-primary mb-2">94%</p>
                                    <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Faculty reported immediate applicability to research.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modules Grid */}
                <section className="py-32 relative bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24 reveal">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Competency Areas</span>
                            <h2 className="serif-heading text-4xl md:text-6xl font-bold italic">Core Training Modules</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Data Literacy for Faculty', icon: 'data_object', desc: 'Equiping non-technical staff with the ability to interpret, visualize, and critique complex institutional datasets.' },
                                { title: 'Generative AI Integration', icon: 'auto_fix_high', desc: 'Practical workshops on integrating LLMs into coursework and research while maintaining absolute academic rigor.' },
                                { title: 'Cyber-Hygiene for Admin', icon: 'admin_panel_settings', desc: 'Essential security protocols for administrative staff handling sensitive student and high-value research data.' }
                            ].map((item, idx) => (
                                <div key={item.title} className="glass p-12 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                                    <div className="size-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="serif-heading text-2xl font-bold mb-6 italic">{item.title}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed text-sm mb-10">
                                        {item.desc}
                                    </p>
                                    <button className="text-primary font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 group/link">
                                        View Syllabus
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Formats */}
                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2 reveal">
                                <h2 className="serif-heading text-4xl md:text-5xl font-bold italic mb-8">Flexible Delivery Formats</h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                                    We recognize that every academic calendar is unique. Our training can be calibrated for intensive bursts or longitudinal cohorts.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Intensive Bootcamps', icon: 'event_note', desc: '1-3 Day onsite workshops for rapid institutional upskilling.' },
                                        { title: 'Remote Asynchronous', icon: 'cast_for_education', desc: 'Self-paced modules hosted specifically on your existing LMS.' },
                                        { title: 'Executive Coaching', icon: 'groups', desc: '1-on-1 private digital upskilling for Deans and Vice-Chancellors.' }
                                    ].map((format) => (
                                        <div key={format.title} className="flex gap-6 p-8 rounded-3xl glass-dark border-white/5 hover:border-white/10 transition-all">
                                            <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary text-xl">{format.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">{format.title}</h4>
                                                <p className="text-slate-500 text-xs font-light leading-relaxed">{format.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 reveal delay-300">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-primary/10 blur-[100px] opacity-20"></div>
                                    <div className="relative rounded-[3rem] overflow-hidden border-white/10 glass p-2">
                                        <img alt="Training session" className="rounded-[2.5rem] w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9VfYnp7a2jBCx8YaLjc_fGzglkqRxgRV3G9rYi4jIH6VxrERMJmGl02N2OJ9RMWifgEi3EbqEW2P44twI108tc7ny8Ju1FrVzd8M-GH8LEXibZdo5k_Kv9I4G8wJ0wJrMQQiwdumZrmX1XkBS5KXfX12lNX7i9qLi6iUDR_4-uPFXmSNUcynW96r2pojej-nIe5ZcHd6Fo46fg7whcVpsWCW0ErM6S8eIskd_mn3_ayRoboBU6UOGVLDD4T5cf0auRnQflE3UBE" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
                        <h2 className="serif-heading text-5xl md:text-7xl font-bold italic mb-10">Invest in Your <br /> Human Capital</h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                            Tools change, but critical thinking endures. Empower your staff to master the methodologies of tomorrow, today.
                        </p>
                        <div className="flex justify-center">
                            <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer"
                                className="bg-primary px-12 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-4 group">
                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                                Discuss Training Needs
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
