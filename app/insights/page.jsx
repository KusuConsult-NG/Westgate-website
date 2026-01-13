'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Insights() {
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
            {/* Navigation Bar */}
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
                        <Link href="/insights" className="text-sm font-bold text-white transition-all relative group">
                            Perspective
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all"></span>
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
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-white text-lg font-bold py-2">
                                Perspective
                            </Link>
                            <Link href="/contact" onClick={() => setShowMobileMenu(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-4">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="pt-20 grow">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 px-6 flex flex-col items-center text-center reveal active">
                    <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full">
                            <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Thought Leadership</span>
                        </div>
                        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 tracking-tighter text-gradient italic">
                            News & Insights
                        </h1>
                        <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            Critical perspectives on research, technology, and institutional strategy for the academic sector.
                        </p>
                    </div>
                </section>

                {/* Featured Insight */}
                <section className="max-w-7xl mx-auto px-6 pb-24 reveal">
                    <div className="glass-dark border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch group cursor-pointer hover:border-primary/20 transition-all duration-700">
                        <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <span className="material-symbols-outlined text-[10rem] text-primary">auto_awesome</span>
                            </div>
                            <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Featured White Paper</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-8 leading-tight group-hover:text-primary transition-colors">The Future of AI in Academic Governance</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                                A deep dive into institutional ethics and the integration of enduring intelligence within modern research frameworks. How leadership can navigate the shift toward automated discovery.
                            </p>
                            <div className="flex items-center gap-4 text-white font-bold group/btn">
                                <span className="text-sm tracking-widest uppercase py-3 px-8 rounded-full border border-white/20 group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-300">Read Analysis</span>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-center bg-cover min-h-[400px] relative group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhI-6FOBE54V_jNxsuOttZ4hy_nJ2_LaRnvwqYlrc4f4qpCB25ytoti5f-LHtNlz7QGhYTsXfc4VmNkG8O5KNBn_3mYQ7YhtZXUfqNbk0HhnCKoq9lLHZuou96kEzG19pdjhLcm8Ubp-uxY9k_Uky_qZMe78QwR4eA4KjazybnRgcXqglA_LfuidXlKCPsWCG2YnlLLTnAIXfiWachhYts_hG4lj7KNpDvo8TjKvMdiZLDxdiyiMO9upukIcLhSU__ETyONDn2wFU")' }}>
                            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all"></div>
                        </div>
                    </div>
                </section>

                {/* Content Filter */}
                <section className="max-w-7xl mx-auto px-6 mb-20 reveal">
                    <div className="flex gap-4 p-2 flex-wrap justify-center overflow-x-auto pb-4 no-scrollbar">
                        {['All Perspectives', 'White Papers', 'AI & Ethics', 'Institutional Strategy', 'Technology'].map((filter, idx) => (
                            <button key={filter} className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all border ${idx === 0 ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'glass border-white/10 text-slate-400 hover:text-white hover:border-white/30'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Article Grid */}
                <section className="max-w-7xl mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                        {[
                            {
                                title: 'Digital Transformation in R1 Research institutions',
                                category: 'Technology',
                                date: 'OCT 14, 2024',
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9VfYnp7a2jBCx8YaLjc_fGzglkqRxgRV3G9rYi4jIH6VxrERMJmGl02N2OJ9RMWifgEi3EbqEW2P44twI108tc7ny8Ju1FrVzd8M-GH8LEXibZdo5k_Kv9I4G8wJ0wJrMQQiwdumZrmX1XkBS5KXfX12lNX7i9qLi6iUDR_4-uPFXmSNUcynW96r2pojej-nIe5ZcHd6Fo46fg7whcVpsWCW0ErM6S8eIskd_mn3_ayRoboBU6UOGVLDD4T5cf0auRnQflE3UBE',
                                excerpt: 'Evaluating the gap between traditional research methodologies and modern high-compute requirements in the age of generative models.'
                            },
                            {
                                title: 'Enduring Intelligence: A New Strategic Framework',
                                category: 'Strategy',
                                date: 'SEP 28, 2024',
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC099IzcvHfCE0Vqmz2SpArvPoHZHvA-JlFa2Gq3uiQsaaD5eAqsVOz5POtRzwaOW55IoorhHGXDIT5HXloBDLbAr6k_HOCbwkukW9fKMoKzVWhiKiOMjgk6WZfkDbkWxerrzLiXLKb6-evnu9FpTuBJOC2JRprhSdxJ3WAzN1PyYxxxcb2aIGZvtC48IcbCrRdx0LF6xqCYyXDCEHKeVoWJK-9uMSppZmjnhIGdGEiB6RCL9IEnCIlIqj5iCQLI1OoYYPtua3uP2M',
                                excerpt: 'How legacy institutions can leverage their historical data moats to build sustainable advantage in an increasingly automated world.'
                            },
                            {
                                title: 'The Ethics of Automated Peer Review',
                                category: 'AI & Ethics',
                                date: 'SEP 12, 2024',
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSnhnIybbJvy2BYipHrMO1OjgoH2XAtY948Lz5PLw54usBvJcJtQgj9q1Am024jOgJtHA6z_phiihK_FGe2YAQqOeRws4wghufyvjgNzEpX9zwFUuttZtP4BbFcRQ4Vpr8ZKpWHw8sVS8bXu6xpC3jfZiwSeBy8_YYf3XBUs3IVCCsjx3Q7izCrHhD1Mmcb7bN-xAdMYPyd6M5LFytJDeiO3s1p4J6SDDD5LBu1Tn82pTXqwmgb3yD04u8ic13qcTylfPbBFnJN4I',
                                excerpt: 'A critical examination of the risks and rewards associated with AI-assisted vetting of scientific literature and grant applications.'
                            }
                        ].map((article) => (
                            <Link key={article.title} href="#" className="group overflow-hidden rounded-[2rem] glass border-white/5 hover:border-primary/30 transition-all duration-500">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-widest text-white rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="text-[10px] font-bold text-slate-500 mb-4 tracking-[0.2em]">{article.date}</div>
                                    <h3 className="serif-heading text-xl text-white font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-3 mb-6">{article.excerpt}</p>
                                    <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read More
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Resources Section */}
                <section className="bg-slate-900 py-32 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
                            <div className="max-w-xl">
                                <span className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-6 block">Resource Library</span>
                                <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold mb-6">Downloadable Intelligence</h2>
                                <p className="text-slate-400 text-lg font-light">Curated toolkits and guides for academic leaders and strategic planners.</p>
                            </div>
                            <Link href="#" className="text-primary font-bold tracking-widest uppercase text-xs hover:text-white transition-colors flex items-center gap-2 mt-8 md:mt-0 glass px-6 py-3 rounded-full border-primary/20">
                                View Full Index
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                            {[
                                { title: 'AI Readiness Checklist', subtitle: 'Architecture for Department Heads & Deans', icon: 'architecture' },
                                { title: '2025 Strategic Outlook', subtitle: 'Institutional Executive Summary', icon: 'leaderboard' }
                            ].map((res) => (
                                <div key={res.title} className="glass p-10 rounded-3xl group cursor-pointer hover:bg-white/10 transition-all border-white/5">
                                    <div className="flex items-center gap-8">
                                        <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-primary/20">
                                            <span className="material-symbols-outlined text-3xl">{res.icon}</span>
                                        </div>
                                        <div className="grow">
                                            <h4 className="serif-heading font-bold text-2xl text-white mb-2 leading-tight">{res.title}</h4>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{res.subtitle}</p>
                                        </div>
                                        <div className="size-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary transition-all">
                                            <span className="material-symbols-outlined">download</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
