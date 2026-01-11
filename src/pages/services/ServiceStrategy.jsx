import { Link } from 'react-router-dom';

export default function ServiceStrategy() {
    return (
        <div className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f49bd] selection:text-white">
            {/* Top Navigation Bar */}
            <div className="flex flex-col sticky top-0 z-50">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
                    <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                        <div className="size-6 text-[#0f49bd]">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0f49bd] text-lg font-bold leading-tight tracking-[-0.015em] font-mono">WS_TECH_STRAT</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link to="/services/ai" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-[#0f49bd] transition-colors">AI</Link>
                            <Link to="/services/training" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-[#0f49bd] transition-colors">Training</Link>
                            <Link to="/services/strategy" className="text-[#0f49bd] text-sm font-bold border-b-2 border-[#0f49bd]">Strategy</Link>
                        </nav>
                        <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-sm h-10 px-6 border border-[#0f49bd] text-[#0f49bd] text-sm font-bold tracking-[0.015em] hover:bg-[#0f49bd] hover:text-white transition-all uppercase">
                            Initialize
                        </Link>
                    </div>
                </header>
            </div>

            <main className="flex flex-col flex-1 bg-white dark:bg-slate-950 blueprint-bg">
                {/* Blueprint Hero */}
                <section className="px-10 py-24 min-h-[60vh] flex items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none line-pattern"></div>
                    <div className="max-w-[1200px] mx-auto w-full relative z-10">
                        <div className="flex flex-col gap-6 max-w-3xl">
                            <div className="flex items-center gap-2 text-[#0f49bd] font-mono text-xs mb-4">
                                <span className="px-2 py-0.5 border border-[#0f49bd]">SYS_ARCH_V2.0</span>
                                <span>// INFRASTRUCTURE_DESIGN</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Architecting the <br /> <span className="text-[#0f49bd]">Long Term.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl">
                                We design technology ecosystems that scale with institutional ambition. No dead ends, no vendor lock-in, just clean, interoperable infrastructure.
                            </p>
                            <div className="flex gap-6 mt-8">
                                <button className="h-12 px-8 bg-[#0f49bd] text-white font-mono text-sm font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                                    &gt; VIEW_CAPABILITIES
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Grid */}
                <section className="px-10 py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                            {/* Card 1 */}
                            <div className="bg-white dark:bg-slate-950 p-10 hover:bg-slate-50 transition-colors group">
                                <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">schema</span>
                                <h3 className="font-bold text-lg mb-3">Data Schema Design</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Structured ontologies ensuring your data remains meaningful across decades.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white dark:bg-slate-950 p-10 hover:bg-slate-50 transition-colors group">
                                <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">lan</span>
                                <h3 className="font-bold text-lg mb-3">Interoperability</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">API-first architectures that allow systems to talk without translation layers.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white dark:bg-slate-950 p-10 hover:bg-slate-50 transition-colors group">
                                <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">cloud_sync</span>
                                <h3 className="font-bold text-lg mb-3">Cloud Sovereignty</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Strategies for hybrid retention, ensuring you own your institutional memory.</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white dark:bg-slate-950 p-10 hover:bg-slate-50 transition-colors group">
                                <span className="material-symbols-outlined text-[#0f49bd] text-4xl mb-6">security</span>
                                <h3 className="font-bold text-lg mb-3">Security by Design</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Zero-trust frameworks embedded at the architectural level, not patched on.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spec Sheet / Details */}
                <section className="px-10 py-24 bg-white dark:bg-slate-950">
                    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20">
                        <div className="flex-1">
                            <h2 className="font-mono text-[#0f49bd] text-xs mb-6">/// THE_PROBLEM</h2>
                            <h3 className="text-3xl font-bold mb-6">Breaking the Cycle of Technical Debt</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Institutions often buy technology in silos—hiring a vendor for a CRM, another for a website, and a third for research data. The result is a fragmented mess that requires expensive "integration consultants" to fix.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                                We flip the script. We design the blueprint first.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 font-mono text-xs md:text-sm">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
                                <span className="text-slate-400">PARAMETER</span>
                                <span className="text-slate-400">STANDARD</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Uptime Requirement</span>
                                    <span className="text-[#0f49bd]">99.99%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Data Format</span>
                                    <span className="text-[#0f49bd]">Open Standard (JSON/CSV)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Encryption</span>
                                    <span className="text-[#0f49bd]">AES-256 At Rest</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Vendor Lock-in</span>
                                    <span className="text-red-500">0% (Strict Prohibition)</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
                                <span className="text-slate-400">// AUDIT_PASSED</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer with unique Grid */}
                <footer className="bg-slate-900 text-white py-20 px-10 border-t-4 border-[#0f49bd]">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm">
                        <div>
                            <h4 className="text-[#0f49bd] mb-6">Connect</h4>
                            <ul className="space-y-2 opacity-70">
                                <li>SSH_KEY: 8f:3d:2a...</li>
                                <li>secure@westgate.io</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#0f49bd] mb-6">Protocols</h4>
                            <ul className="space-y-2 opacity-70">
                                <li>ISO 27001</li>
                                <li>GDPR Compliant</li>
                                <li>WCAG 2.1 AA</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2 text-right">
                            <h2 className="text-2xl font-bold tracking-tighter mb-2">WESTGATE STRATAGEM</h2>
                            <p className="opacity-50">Engineering the Backbone of Intelligence.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
