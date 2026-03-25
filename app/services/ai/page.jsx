'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ServiceAI() {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const audiences = [
        { title: 'Individual Researchers & Scholars', icon: 'person', items: ['Postgraduate students (Master\'s and PhD candidates)', 'Early-career researchers', 'Independent scholars and consultants', 'Professionals writing research reports or policy papers'] },
        { title: 'Academic Leadership & Faculty', icon: 'supervisor_account', items: ['University Deans and Directors', 'Heads of Departments (HoDs)', 'Academic staff and lecturers', 'Research coordinators'] },
        { title: 'Institutional Teams & Departments', icon: 'apartment', items: ['University faculties and departments', 'Research units and centers', 'Graduate schools and postgraduate programs', 'University libraries and research support services'] },
        { title: 'Group Sessions & Cohorts', icon: 'groups', items: ['Research groups and collaborators', 'Peer learning cohorts', 'Professional associations', 'Graduate student groups'] },
        { title: 'Organizations & Agencies', icon: 'business', items: ['Government policy units', 'NGOs and development organizations', 'Research institutions and think tanks', 'Professional bodies and associations'] },
    ];

    const topics = [
        { title: 'AI for Research & Analysis', icon: 'science', items: ['Literature review and research synthesis', 'Data analysis and interpretation support', 'Research question development and refinement', 'Identifying research gaps and patterns'] },
        { title: 'AI for Academic Writing', icon: 'edit_note', items: ['Structuring arguments and chapters', 'Drafting and editing with AI assistance', 'Citation management and reference formatting', 'Maintaining academic voice and integrity'] },
        { title: 'AI for Grantsmanship & Proposals', icon: 'description', items: ['Grant proposal development and review', 'Research methodology design', 'Budget justification and planning', 'Proposal editing and strengthening'] },
        { title: 'Ethical & Responsible AI Use', icon: 'shield', items: ['Understanding AI capabilities and limitations', 'Avoiding plagiarism and AI detection issues', 'Maintaining intellectual ownership', 'Building institutional AI guidelines'] },
        { title: 'Practical Workflows & Tools', icon: 'widgets', items: ['Prompt engineering for better results', 'Tool comparison: ChatGPT, Claude, Perplexity, and more', 'Integration into existing research workflows', 'Time-saving strategies for daily academic work'] },
    ];

    const deliveryModes = [
        { title: 'Individual Coaching', icon: 'person', desc: 'One-on-one or small group sessions designed around your specific research project, thesis, or writing challenge. Hands-on, personalized guidance with direct application to your work.' },
        { title: 'Institutional Workshops', icon: 'apartment', desc: 'Half-day or full-day training sessions for university departments, faculties, or organizational teams. Tailored to your institutional context and delivered on-site or remotely.' },
        { title: 'Custom Programs', icon: 'tune', desc: 'Multi-session training programs designed for specific audiences—graduate schools, research units, professional bodies—with follow-up support and ongoing guidance.' },
        { title: 'Faculty & Leadership Training', icon: 'school', desc: 'Executive-level programs for Deans, Directors, HoDs, and academic leaders focused on strategic AI adoption, policy development, and institutional capacity building.' },
    ];

    const faqs = [
        { q: 'Do I need technical experience?', a: 'No. Our training is designed for researchers, academics, and professionals—not programmers. If you can write, you can learn this.' },
        { q: 'What tools will we learn?', a: 'We focus on widely accessible tools like ChatGPT, Claude, Perplexity, Research Rabbit, and others relevant to your work. You don\'t need paid subscriptions to benefit.' },
        { q: 'Can training be delivered remotely?', a: 'Yes. All programs can be delivered online or in-person depending on your location and preference.' },
        { q: 'Do you offer training in specific disciplines?', a: 'Yes. We tailor content to your field—whether that\'s health sciences, social sciences, humanities, engineering, or policy research.' },
        { q: 'How long does training take?', a: 'It depends on your needs. Individual sessions can be 2-4 hours, institutional workshops range from half-day to multi-day programs, and custom engagements can span weeks or months.' },
        { q: 'What if our needs don\'t fit a standard format?', a: 'That\'s exactly why we don\'t offer rigid packages. Schedule a consultation and we\'ll design something that fits your specific situation.' },
    ];

    return (
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30">
            {/* Header */}
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
                        <Link href="/about" className="text-sm font-semibold text-slate-300 hover:text-white relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        <Link href="/services/digital" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Digital Dev<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        <Link href="/insights" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        <Link href="/contact" className="text-sm font-semibold text-slate-300 hover:text-white relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                    </nav>
                    <Link href="/contact?type=ai" className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5">Book Training</Link>
                </div>
            </header>

            <main className="pt-20">
                {/* Hero */}
                <section className="relative py-32 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-radial-glow opacity-40"></div>
                    <div className="absolute -bottom-24 -right-24 size-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="max-w-3xl reveal active">
                            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 mb-8">
                                <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Service</span>
                            </div>
                            <h1 className="serif-heading text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                                AI Training <span className="text-gradient italic">Tailored to Your Needs</span>
                            </h1>
                            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
                                From individual researchers to institutional teams, we provide practical AI training designed specifically for the people who do serious work—academics, researchers, professionals, and knowledge workers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact?type=ai" className="bg-primary px-10 py-5 rounded-2xl text-sm font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">Schedule a Training Consultation</Link>
                                <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="glass px-10 py-5 rounded-2xl text-sm font-bold border-white/5 hover:bg-white/5 transition-all">Book a Call</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why This Training Matters */}
                <section className="py-24 px-6 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto reveal">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-6 block">Why This Training Matters</span>
                                <h2 className="serif-heading text-4xl text-white font-bold mb-8 leading-tight">AI Is Reshaping Research. Use It Well.</h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                                    AI tools like ChatGPT are reshaping research, writing, and knowledge work. But using them well requires understanding, not just access.
                                </p>
                                <p className="text-slate-400 text-base leading-relaxed font-light italic mb-8">
                                    This isn't generic AI hype. This is practical skill-building grounded in real academic and professional work.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    'Ask better questions and design effective prompts',
                                    'Use AI for literature review, analysis, and structured writing',
                                    'Manage citations, references, and academic integrity',
                                    'Navigate ethical concerns and AI detection',
                                    'Build workflows that save time without compromising quality',
                                ].map(item => (
                                    <div key={item} className="flex items-start gap-4 p-4 glass rounded-xl group hover:bg-white/10 transition-all">
                                        <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mt-0.5 flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <span className="material-symbols-outlined text-primary group-hover:text-white text-xs">check</span>
                                        </div>
                                        <span className="text-slate-300 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Train */}
                <section className="py-32 px-6 bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Audiences</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">Who We Train</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Our programs are designed for diverse audiences across the academic, research, and professional landscape.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                            {audiences.map(audience => (
                                <div key={audience.title} className="p-8 glass rounded-3xl group hover:bg-white/10 transition-all border border-white/5 hover:border-primary/20">
                                    <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">{audience.icon}</span>
                                    </div>
                                    <h3 className="text-xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{audience.title}</h3>
                                    <ul className="space-y-2">
                                        {audience.items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                                                <span className="size-1 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What We Cover */}
                <section className="py-32 px-6 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Curriculum</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">What We Cover</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Every training program is tailored to your specific needs, but typical topics include:</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                            {topics.map(topic => (
                                <div key={topic.title} className="p-8 glass rounded-3xl group hover:bg-white/10 transition-all">
                                    <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">{topic.icon}</span>
                                    </div>
                                    <h3 className="text-lg text-white font-bold mb-4">{topic.title}</h3>
                                    <ul className="space-y-2">
                                        {topic.items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                                                <span className="size-1 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Deliver */}
                <section className="py-32 px-6 bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Delivery</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">How We Deliver Training</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
                            {deliveryModes.map(mode => (
                                <div key={mode.title} className="p-10 glass-dark rounded-3xl border border-white/5 group hover:border-primary/20 transition-all">
                                    <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">{mode.icon}</span>
                                    </div>
                                    <h3 className="serif-heading text-2xl text-white font-bold mb-4">{mode.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{mode.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="glass rounded-3xl p-10 border border-primary/20 reveal">
                            <h3 className="text-white font-bold text-lg mb-6 text-center">All programs include:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    'Pre-session consultation to understand your needs',
                                    'Hands-on, practical exercises with real tools',
                                    'Materials and resources for continued learning',
                                    'Post-training support and follow-up',
                                    'Certificates of completion (for institutional programs)',
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Client */}
                <section className="py-24 px-6 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="glass-dark rounded-3xl p-10 md:p-16 border border-white/5 reveal">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-4xl">account_balance</span>
                                </div>
                                <div>
                                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3 block">Featured Client</span>
                                    <h3 className="serif-heading text-2xl text-white font-bold mb-3">National Institute for Policy and Strategic Studies (NIPSS)</h3>
                                    <p className="text-slate-300 text-lg leading-relaxed">Capacity building programs for policy researchers and strategic analysts, helping government professionals leverage AI for evidence-based policy work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Our Training Works */}
                <section className="py-32 px-6 bg-slate-950 blueprint-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">Our Approach</span>
                            <h2 className="serif-heading text-4xl md:text-5xl text-white font-bold">Why Our Training Works</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                            {[
                                { title: 'Grounded in Real Academic Practice', icon: 'school', desc: 'Our training isn\'t built from generic content. It\'s shaped by over a decade of work within universities, research environments, and institutional contexts. We understand how research actually happens.' },
                                { title: 'Tailored, Not Templated', icon: 'tune', desc: 'We don\'t offer one-size-fits-all packages. Every program is designed around your specific needs, challenges, and goals.' },
                                { title: 'Practical, Not Theoretical', icon: 'build', desc: 'Participants leave with skills they can apply immediately. We work with real research projects, real writing challenges, and real institutional contexts.' },
                                { title: 'Ethical & Responsible', icon: 'verified_user', desc: 'We teach AI as a thinking aid, not a shortcut. Our approach emphasizes maintaining academic integrity, intellectual ownership, and responsible use.' },
                            ].map(item => (
                                <div key={item.title} className="p-10 glass rounded-3xl group hover:bg-white/10 transition-all">
                                    <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl text-white font-bold mb-4">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-32 px-6 bg-slate-900/50">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 reveal">
                            <span className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 block">FAQ</span>
                            <h2 className="serif-heading text-4xl text-white font-bold">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4 reveal">
                            {faqs.map((faq, i) => (
                                <div key={i} className="glass rounded-2xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-white font-bold pr-8">{faq.q}</span>
                                        <span className={`material-symbols-outlined text-primary transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-6">
                                            <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6 relative overflow-hidden text-center bg-slate-950">
                    <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
                    <div className="max-w-4xl mx-auto relative z-10 reveal">
                        <h2 className="serif-heading text-4xl md:text-6xl text-white font-bold mb-8 italic">Ready to Get Started?</h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                            Whether you're an individual researcher, leading a department, or planning institutional training, let's discuss how we can design a program that meets your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                            <Link href="/contact?type=ai" className="bg-primary px-12 py-5 rounded-2xl text-sm font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                Schedule a Training Consultation
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        <p className="text-slate-500 text-sm">Not ready to schedule? Email us at <a href="mailto:hello@westgatestratagem.com" className="text-primary hover:underline">hello@westgatestratagem.com</a></p>
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
                            <Link href="/services/digital" className="hover:text-primary transition-colors">Digital Dev</Link>
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
