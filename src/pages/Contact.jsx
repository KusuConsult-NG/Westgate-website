import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
    const [showScheduler, setShowScheduler] = useState(false);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-slate-100 transition-colors duration-300">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark px-6 md:px-20 py-4 sticky top-0 z-50">
                <div className="flex items-center gap-3 text-primary">
                    <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="h-10 w-auto" />
                    <h2 class="text-xl font-bold leading-tight tracking-tight">Westgate Stratagem</h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-end items-center gap-10">
                    <nav className="flex items-center gap-8">
                        <Link to="/" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Expertise</Link>
                        <Link to="/insights" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Insights</Link>
                        <Link to="/about" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">About</Link>
                        <Link to="/contact" className="text-primary text-sm font-bold border-b-2 border-primary">Contact</Link>
                    </nav>
                    <Link to="/portal" className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm">
                        Portal
                    </Link>
                </div>
                <button className="lg:hidden p-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </header>

            <main className="max-w-[1200px] mx-auto px-6 py-10">
                {/* Hero Section */}
                <div className="mb-16">
                    <div className="relative overflow-hidden rounded-xl bg-ivory-light dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 md:p-20 text-center">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f49bd 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Begin a Conversation</h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            We work with individuals and institutions who value depth, clarity, and long-term thinking. Reach out to discuss your strategic landscape.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">info</span>
                                Inquiry & Engagement
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="border-l-2 border-primary pl-4 py-1">
                                    <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Office Region</p>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">Global / London HQ</p>
                                </div>
                                <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1">
                                    <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Response Protocol</p>
                                    <p className="text-slate-900 dark:text-slate-200 leading-relaxed">Institutional inquiries are reviewed and addressed within 48 business hours by our advisory team.</p>
                                </div>
                                <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1">
                                    <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Philosophy</p>
                                    <p className="italic text-slate-900 dark:text-slate-200">"Enduring Intelligence: Depth, clarity, and the synthesis of long-term strategic foresight."</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            <p className="font-bold text-sm mb-4 text-slate-900 dark:text-white">Connect with our network</p>
                            <a className="flex items-center gap-3 text-blue-600 hover:underline font-medium" href="#">
                                <span className="material-symbols-outlined">link</span>
                                LinkedIn: Westgate Stratagem LTD
                            </a>
                        </div>
                        <div className="hidden lg:block">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 grayscale opacity-70 border border-slate-300 dark:border-slate-700 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                                    <span className="material-symbols-outlined text-4xl">map</span>
                                    <span className="text-xs font-bold tracking-tighter">LONDON OPERATIONS</span>
                                </div>
                                <img alt="Minimalist map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsEdKSmR0TmYGR9qKiN7zDUgVVrHS5O64I6xqhnttCMhd3BLMZr4EOZ8RRIsR75OJ8dG9VynHnmd7VOqa8NDiqZYLWhlAUJAJzuvzmGWqpxpeVRliH7t-PalFMateb-YlimDfiBOx0pIP_VKr7-del_d0Aajen26-U8CKe8X6N_K-bVinCzRBS03i05gXxz1xbgRJ7rig3_9jeDpVvy1_iiBN6_KdmFqNxypiRgAwp9KNt4eOcx4uWMfHm3TP5JQeclmFVcVX5y5o" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                            <form className="space-y-6" action="https://formsubmit.co/your-email@example.com" method="POST">
                                {/* FormSubmit Configuration - Hidden Fields */}
                                <input type="hidden" name="_subject" value="New Westgate Consultation Inquiry" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="box" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name <span className="text-red-500">*</span></span>
                                        <input
                                            name="name"
                                            className="form-input rounded-lg border-slate-300 dark:border-slate-700 bg-transparent h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary dark:text-white"
                                            placeholder="e.g. Dr. Julian West"
                                            type="text"
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Institution / Organization</span>
                                        <input
                                            name="institution"
                                            className="form-input rounded-lg border-slate-300 dark:border-slate-700 bg-transparent h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary dark:text-white"
                                            placeholder="e.g. Global Research Collective"
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Service of Interest <span className="text-red-500">*</span></span>
                                    <select
                                        name="service"
                                        className="form-select rounded-lg border-slate-300 dark:border-slate-700 bg-transparent h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary dark:text-white"
                                        required
                                    >
                                        <option value="">Select a domain</option>
                                        <option value="AI for Research & Scholarship">AI for Research & Scholarship</option>
                                        <option value="Institutional Training">Institutional Training</option>
                                        <option value="Tech Strategy & Implementation">Tech Strategy & Implementation</option>
                                        <option value="Executive Advisory">Executive Advisory</option>
                                        <option value="Other Inquiry">Other Inquiry</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Briefly describe your challenge <span className="text-red-500">*</span></span>
                                    <textarea
                                        name="message"
                                        className="form-textarea rounded-lg border-slate-300 dark:border-slate-700 bg-transparent p-4 focus:border-primary focus:ring-1 focus:ring-primary dark:text-white resize-none"
                                        placeholder="Outline the strategic gap or project requirements..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </label>
                                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-2" type="submit">
                                    Submit Inquiry
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </form>
                            <p className="text-center text-xs text-slate-400 mt-6">
                                By submitting, you agree to our data handling protocols for institutional privacy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Consultation Booking Section */}
                <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16 pb-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4">READY TO PROCEED?</span>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Schedule an Introductory Call</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                            For those ready to discuss a specific project or partnership, choose a time in our advisor's calendar for a 20-minute alignment call.
                        </p>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <button
                                onClick={() => setShowScheduler(true)}
                                className="relative flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl mx-auto hover:border-primary transition-all group"
                            >
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">calendar_today</span>
                                <span className="text-lg font-bold text-slate-800 dark:text-white">Access Scheduler Widget</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Scheduler Modal */}
            {showScheduler && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowScheduler(false)}
                >
                    <div
                        className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Schedule a Consultation</h3>
                            <button
                                onClick={() => setShowScheduler(false)}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">close</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center">
                                <span className="material-symbols-outlined text-6xl text-blue-600 mb-4 block">calendar_month</span>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Calendly Integration Ready</h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                                    To activate the scheduler, add your Calendly URL to this component. Replace the placeholder iframe src with your booking link.
                                </p>
                                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 text-left">
                                    <p className="text-sm font-mono text-slate-700 dark:text-slate-300">
                                        src="https://calendly.com/your-username/consultation"
                                    </p>
                                </div>
                            </div>
                            {/* Uncomment and add your Calendly URL:
                            <iframe 
                                src="https://calendly.com/your-username/consultation"
                                className="w-full h-[600px] border-0 rounded-lg"
                                title="Schedule a consultation"
                            ></iframe>
                            */}
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 text-primary mb-6">
                            <span className="material-symbols-outlined">shield_with_heart</span>
                            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase">Westgate Stratagem LTD</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                            Advancing the standard of institutional intelligence through rigorous strategy and ethical technology integration.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Engagement</Link></li>
                            <li><Link to="/compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contact</h4>
                        <p className="text-sm text-slate-500 mb-2">London Office: +44 20 8123 4567</p>
                        <p className="text-sm text-slate-500">advisory@westgatestratagem.com</p>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
                    <p>© 2024 Westgate Stratagem LTD. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-primary" href="#">LinkedIn</a>
                        <a className="hover:text-primary" href="#">Journal</a>
                        <a className="hover:text-primary" href="#">Archive</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
