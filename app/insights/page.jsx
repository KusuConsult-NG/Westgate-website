'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Insights() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const categories = ['All', 'Technology Strategy', 'AI in Academia', 'Digital Transformation', 'Case Studies'];

    const articles = [
        {
            title: 'The AI Dilemma in Academic Research: Tool or Crutch?',
            excerpt: 'Exploring how researchers can leverage AI to accelerate literature reviews without compromising intellectual ownership or academic integrity.',
            category: 'AI in Academia',
            date: 'Mar 15, 2026',
            readTime: '5 min read',
            icon: 'school'
        },
        {
            title: 'Why Most Institutional Portals Fail (And How to Fix Them)',
            excerpt: 'A look at the common architectural and UX mistakes universities make when building internal systems, and a better approach to digital infrastructure.',
            category: 'Digital Transformation',
            date: 'Feb 28, 2026',
            readTime: '7 min read',
            icon: 'devices'
        },
        {
            title: 'Case Study: Empowering Policy Researchers at NIPSS',
            excerpt: 'How our customized AI training program helped senior policy analysts integrate generative AI into their strategic reporting workflows safely.',
            category: 'Case Studies',
            date: 'Feb 10, 2026',
            readTime: '6 min read',
            icon: 'account_balance'
        },
        {
            title: 'Building Resilience into NGO Data Systems',
            excerpt: 'Strategies for deploying offline-first mobile applications for data collection in areas with intermittent internet connectivity across Nigeria.',
            category: 'Technology Strategy',
            date: 'Jan 22, 2026',
            readTime: '8 min read',
            icon: 'wifi_off'
        },
        {
            title: 'Prompt Engineering for Literature Synthesis',
            excerpt: 'Practical examples of how to structure prompts to extract patterns, contradictions, and gaps across multiple research papers simultaneously.',
            category: 'AI in Academia',
            date: 'Jan 05, 2026',
            readTime: '10 min read',
            icon: 'history_edu'
        },
        {
            title: 'Transitioning from Legacy Systems: A Phased Approach',
            excerpt: 'A roadmap for institutions looking to modernize their digital infrastructure without disrupting day-to-day academic and administrative operations.',
            category: 'Digital Transformation',
            date: 'Dec 12, 2025',
            readTime: '6 min read',
            icon: 'sync'
        }
    ];

    const filteredArticles = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

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
                        <Link href="/insights" className="text-sm font-bold text-white relative group">Blog<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span></Link>
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
                            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">About</Link>
                            <Link href="/services/digital" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">Digital Dev</Link>
                            <Link href="/services/ai" onClick={() => setShowMobileMenu(false)} className="text-slate-300 text-lg font-medium hover:text-white py-2">AI Training</Link>
                            <Link href="/insights" onClick={() => setShowMobileMenu(false)} className="text-white text-lg font-bold py-2">Blog</Link>
                            <Link href="/contact" onClick={() => setShowMobileMenu(false)} className="bg-primary text-white text-lg font-bold px-5 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-2 text-center">Contact Us</Link>
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
                                <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Insights &amp; Articles</span>
                            </div>
                            <h1 className="serif-heading text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-8">
                                Thinking on <span className="text-gradient italic">Technology</span> and Knowledge
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed">
                                Essays, case studies, and practical guides on digital product development, AI adoption, and institutional strategy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-32 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-3 mb-16 reveal">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'glass text-slate-400 border-white/5 hover:text-white hover:border-white/20'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                            {filteredArticles.map((article, i) => (
                                <article key={i} className="glass-dark rounded-3xl p-8 border border-white/5 group hover:border-primary/30 transition-all flex flex-col h-full cursor-pointer relative overflow-hidden">
                                     <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-9xl text-primary">{article.icon}</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 relative z-10">
                                        <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all">
                                            <span className="material-symbols-outlined text-primary group-hover:text-white text-lg">{article.icon}</span>
                                        </div>
                                        <div>
                                            <span className="text-primary text-[10px] font-black uppercase tracking-widest block mb-1">{article.category}</span>
                                            <span className="text-slate-500 text-xs font-medium">{article.date} · {article.readTime}</span>
                                        </div>
                                    </div>
                                    <h2 className="serif-heading text-xl text-white font-bold mb-4 group-hover:text-primary transition-colors relative z-10 leading-snug">
                                        {article.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto relative z-10">
                                        <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-20 glass rounded-3xl border border-white/5">
                                <span className="material-symbols-outlined text-slate-500 text-5xl mb-4 block">article</span>
                                <h3 className="serif-heading text-2xl text-white font-bold mb-2">No articles found</h3>
                                <p className="text-slate-400">There are currently no articles in this category.</p>
                                <button onClick={() => setActiveCategory('All')} className="mt-6 text-primary hover:underline font-semibold">View all articles</button>
                            </div>
                        )}

                    </div>
                </section>
                
                {/* Newsletter CTA */}
                <section className="py-24 px-6 bg-slate-900 border-t border-white/5">
                    <div className="max-w-4xl mx-auto text-center reveal">
                        <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 mx-auto mb-8">
                            <span className="material-symbols-outlined text-primary text-3xl">mark_email_unread</span>
                        </div>
                        <h2 className="serif-heading text-3xl md:text-4xl text-white font-bold mb-6">Subscribe to Our Insights</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Occasional thinking on technology, institutional change, and AI adoption. No spam, just substantive ideas.
                        </p>
                        <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" className="flex-grow glass-dark border border-white/10 rounded-xl py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors bg-transparent" required />
                            <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all whitespace-nowrap shadow-lg shadow-primary/20">Subscribe</button>
                        </form>
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
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                        <p className="text-slate-700 text-[10px] uppercase tracking-[0.4em]">© 2025 Westgate Stratagem Ltd.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
