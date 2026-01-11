import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
            {/* Top Navigation Bar - Reusing Home Style simplified */}
            <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">account_balance</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight serif-heading">Westgate Stratagem</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">About</Link>
                        <Link to="/insights" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Insights</Link>
                        <Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Contact</Link>
                    </nav>
                </div>
            </header>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 serif-heading">Strategic Capabilities</h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Comprehensive intelligence and infrastructure services for the modern institution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <Link to="/services/ai" className="group p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                            <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">psychology</span>
                            </div>
                            <h3 className="serif-heading text-2xl font-bold mb-4">AI for Research</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">Implementing advanced large-scale intelligence models to accelerate data synthesis while preserving academic integrity.</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-2">Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/services/training" className="group p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                            <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">school</span>
                            </div>
                            <h3 className="serif-heading text-2xl font-bold mb-4">Institutional Training</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">Developing bespoke training modules for faculty and leadership to master the next generation of digital tools.</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-2">Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>

                        {/* Card 3 */}
                        <Link to="/services/strategy" className="group p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                            <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">architecture</span>
                            </div>
                            <h3 className="serif-heading text-2xl font-bold mb-4">Tech Strategy</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">Architecting long-term infrastructure that scales with institutional needs without technological debt.</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-2">Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>

                        {/* Card 4 */}
                        <Link to="/services/advisory" className="group p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                            <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">verified_user</span>
                            </div>
                            <h3 className="serif-heading text-2xl font-bold mb-4">Advisory</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">High-level decision support for executive boards navigating the complexities of digital transformation.</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-2">Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-white/10 pt-12 pb-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">© 2025 Westgate Stratagem Ltd.</p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
