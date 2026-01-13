'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Portal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Modal States
    const [showAccessModal, setShowAccessModal] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    // Access Code Form
    const [accessForm, setAccessForm] = useState({
        fullName: '',
        organization: '',
        email: '',
        message: ''
    });

    // Reset Form
    const [resetEmail, setResetEmail] = useState('');

    // Persistence & Initialization
    useEffect(() => {
        // Check for existing session
        const session = localStorage.getItem('wgs_portal_session');
        if (session === 'active') {
            setIsLoggedIn(true);
        }

        // Check for remembered ID
        const savedEmail = localStorage.getItem('wgs_portal_remembered_id');
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true);
        }

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
    }, [isLoggedIn]);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate secure validation (Strategic Partner Credentials)
        const VALID_EMAIL = 'admin@westgate.com';
        const VALID_PASS = 'intelligence2025';

        setTimeout(() => {
            if (email.toLowerCase() === VALID_EMAIL && password === VALID_PASS) {
                setIsLoggedIn(true);
                localStorage.setItem('wgs_portal_session', 'active');

                if (rememberMe) {
                    localStorage.setItem('wgs_portal_remembered_id', email);
                } else {
                    localStorage.removeItem('wgs_portal_remembered_id');
                }

                setIsLoading(false);
            } else {
                setError('Authentication failure. Please verify strategic credentials.');
                setIsLoading(false);
            }
        }, 1500);
    };

    const handleAccessRequest = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setModalSuccess(true);
        }, 1500);
    };

    const handleIdentityReset = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setModalSuccess(true);
        }, 1500);
    };

    const closeModal = () => {
        setShowAccessModal(false);
        setShowResetModal(false);
        setModalSuccess(false);
        setIsLoading(false);
        setAccessForm({ fullName: '', organization: '', email: '', message: '' });
        setResetEmail('');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('wgs_portal_session');
    };

    return (
        <div className="font-sans min-h-screen bg-slate-950 text-white selection:bg-primary/30 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 size-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Back to Home */}
            <Link href="/" className="fixed top-8 left-8 glass px-5 py-2.5 rounded-full text-slate-400 hover:text-white transition-all flex items-center gap-3 z-50 border-white/5 group">
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="text-xs font-black uppercase tracking-widest text-[10px]">Return to Public Site</span>
            </Link>

            {isLoggedIn ? (
                <div className="max-w-4xl w-full relative z-10 reveal active">
                    <div className="glass-dark border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <span className="material-symbols-outlined text-[12rem] text-primary">security</span>
                        </div>

                        <div className="size-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-primary/20 relative group">
                            <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <span className="material-symbols-outlined text-5xl text-primary">verified_user</span>
                        </div>

                        <h1 className="serif-heading text-4xl md:text-5xl font-bold text-white mb-6 italic leading-tight">Welcome, Strategic Partner</h1>
                        <p className="text-slate-400 text-lg font-light mb-16 max-w-xl mx-auto leading-relaxed">
                            You have successfully authenticated to the Westgate Stratagem Client Portal. Your proprietary resources and active engagements are below.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { icon: 'folder_shared', label: 'Knowledge Base', sub: 'White papers & toolkits' },
                                { icon: 'analytics', label: 'Active Insights', sub: 'Custom data visualizations' },
                                { icon: 'chat', label: 'Advisory Access', sub: 'Direct strategic support' }
                            ].map((item) => (
                                <div key={item.label} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all cursor-pointer group text-left relative overflow-hidden">
                                    <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-5 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl text-white">{item.icon}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-primary mb-6 block text-3xl">{item.icon}</span>
                                    <p className="text-white font-bold tracking-tight text-xl mb-2">{item.label}</p>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-3 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all group"
                        >
                            De-authenticate Session
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">logout</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="max-w-md w-full relative z-10 reveal active">
                    <div className="text-center mb-12">
                        <div className="relative inline-block mb-10 group">
                            <div className="absolute -inset-2 bg-primary blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="relative h-20 w-auto rounded-2xl shadow-2xl mx-auto" />
                        </div>
                        <h1 className="serif-heading text-4xl font-bold text-white mb-4 italic">Client Portal</h1>
                        <p className="text-slate-400 font-light tracking-wide text-sm">Access proprietary intelligence and advisory assets</p>
                    </div>

                    <div className="glass-dark border border-white/5 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {error && (
                            <div className="mb-8 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-3 text-center justify-center animate-shake">
                                <span className="material-symbols-outlined text-sm">error</span>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                            <div className="space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 ml-4">Credential ID</span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 px-6 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 font-light text-sm"
                                    placeholder="institutional@domain.com"
                                    required
                                />
                            </div>

                            <div className="space-y-4 relative">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 ml-4">Secure Passkey</span>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl h-16 px-6 pr-14 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 font-light text-sm"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] px-2">
                                <button
                                    type="button"
                                    onClick={() => setRememberMe(!rememberMe)}
                                    className="flex items-center text-slate-500 cursor-pointer group/check"
                                >
                                    <div className={`size-5 rounded border ${rememberMe ? 'border-primary bg-primary/20' : 'border-white/10 bg-white/5'} mr-3 flex items-center justify-center transition-all`}>
                                        <span className={`material-symbols-outlined text-[10px] transition-transform text-primary ${rememberMe ? 'scale-100' : 'scale-0'}`}>done</span>
                                    </div>
                                    Remember Entity
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowResetModal(true)}
                                    className="text-primary hover:text-white transition-colors"
                                >
                                    Identity Reset
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group/submit overflow-hidden rounded-2xl h-16 transition-all shadow-xl"
                            >
                                <div className="absolute inset-0 bg-primary group-hover/submit:bg-primary/90 transition-colors"></div>
                                <div className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs">
                                    {isLoading ? (
                                        <>
                                            <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            Authenticate
                                            <span className="material-symbols-outlined text-sm">lock_open</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>

                        <div className="mt-10 text-center relative z-10">
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                No access code?
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    console.log('Access modal clicked!');
                                    setShowAccessModal(true);
                                }}
                                className="mt-2 text-primary hover:text-white transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-widest underline underline-offset-2"
                            >
                                Request Strategic Onboarding
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
                        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Encrypted Channel</div>
                        <div className="w-12 h-px bg-white/20"></div>
                        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-white">WGS Secure Net</div>
                    </div>
                </div>
            )}

            {/* Access Code Request Modal */}
            {showAccessModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in" onClick={closeModal}>
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
                    <div className="relative max-w-lg w-full glass-dark border border-white/10 rounded-[2.5rem] p-10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {!modalSuccess ? (
                            <>
                                <div className="text-center mb-8">
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                        <span className="material-symbols-outlined text-3xl text-primary">key</span>
                                    </div>
                                    <h2 className="serif-heading text-3xl font-bold text-white mb-3 italic">Request Access Code</h2>
                                    <p className="text-slate-400 text-xs font-light">Submit your details for strategic onboarding</p>
                                </div>

                                <form onSubmit={handleAccessRequest} className="space-y-6">
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Full Name</span>
                                        <input
                                            type="text"
                                            value={accessForm.fullName}
                                            onChange={(e) => setAccessForm({ ...accessForm, fullName: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-5 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 text-sm"
                                            placeholder="Dr. Jane Smith"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Organization</span>
                                        <input
                                            type="text"
                                            value={accessForm.organization}
                                            onChange={(e) => setAccessForm({ ...accessForm, organization: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-5 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 text-sm"
                                            placeholder="University or Institution"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email Address</span>
                                        <input
                                            type="email"
                                            value={accessForm.email}
                                            onChange={(e) => setAccessForm({ ...accessForm, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-5 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 text-sm"
                                            placeholder="jane.smith@university.edu"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Message (Optional)</span>
                                        <textarea
                                            value={accessForm.message}
                                            onChange={(e) => setAccessForm({ ...accessForm, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl h-24 px-5 py-3 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 text-sm resize-none"
                                            placeholder="Tell us about your needs..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full relative group/submit overflow-hidden rounded-xl h-14 transition-all shadow-xl"
                                    >
                                        <div className="absolute inset-0 bg-primary group-hover/submit:bg-primary/90 transition-colors"></div>
                                        <div className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs">
                                            {isLoading ? (
                                                <>
                                                    <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <span className="material-symbols-outlined text-sm">send</span>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="size-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                    <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                                </div>
                                <h2 className="serif-heading text-2xl font-bold text-white mb-4 italic">Request Received</h2>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Thank you for your interest. Our team will review your request and contact you within 2-3 business days regarding strategic onboarding.
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="text-primary hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Identity Reset Modal */}
            {showResetModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in" onClick={closeModal}>
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
                    <div className="relative max-w-md w-full glass-dark border border-white/10 rounded-[2.5rem] p-10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {!modalSuccess ? (
                            <>
                                <div className="text-center mb-8">
                                    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                        <span className="material-symbols-outlined text-3xl text-primary">lock_reset</span>
                                    </div>
                                    <h2 className="serif-heading text-3xl font-bold text-white mb-3 italic">Identity Reset</h2>
                                    <p className="text-slate-400 text-xs font-light">Enter your email to receive reset instructions</p>
                                </div>

                                <form onSubmit={handleIdentityReset} className="space-y-6">
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Registered Email</span>
                                        <input
                                            type="email"
                                            value={resetEmail}
                                            onChange={(e) => setResetEmail(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-5 focus:border-primary focus:bg-white/10 transition-all outline-none text-white placeholder:text-slate-700 text-sm"
                                            placeholder="your.email@institution.edu"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full relative group/submit overflow-hidden rounded-xl h-14 transition-all shadow-xl"
                                    >
                                        <div className="absolute inset-0 bg-primary group-hover/submit:bg-primary/90 transition-colors"></div>
                                        <div className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs">
                                            {isLoading ? (
                                                <>
                                                    <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Reset Link
                                                    <span className="material-symbols-outlined text-sm">mail</span>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="size-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                    <span className="material-symbols-outlined text-5xl text-green-500">mark_email_read</span>
                                </div>
                                <h2 className="serif-heading text-2xl font-bold text-white mb-4 italic">Reset Link Sent</h2>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    If an account exists with <span className="text-white font-medium">{resetEmail}</span>, you will receive password reset instructions shortly.
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="text-primary hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
