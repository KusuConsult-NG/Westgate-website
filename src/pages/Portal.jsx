import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Portal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (email && password) {
                setIsLoggedIn(true);
                setIsLoading(false);
            } else {
                setError('Invalid credentials. Please try again.');
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            {/* Back to Home */}
            <Link to="/" className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Home
            </Link>

            {isLoggedIn ? (
                <div className="max-w-2xl w-full">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-2xl text-center">
                        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-4xl text-blue-500">verified_user</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4">Welcome Back</h1>
                        <p className="text-slate-400 mb-8">You have successfully authenticated to the Westgate Stratagem Client Portal.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-600 transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 mb-2">folder_shared</span>
                                <p className="text-sm font-bold text-white">Resources</p>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-600 transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 mb-2">analytics</span>
                                <p className="text-sm font-bold text-white">Insights</p>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-600 transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 mb-2">chat</span>
                                <p className="text-sm font-bold text-white">Advisory</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            ) : (
                <div className="max-w-md w-full">
                    <div className="text-center mb-10">
                        <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="h-16 w-auto mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
                        <p className="text-slate-400">Access your account and resources</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">error</span>
                                {error}
                            </div>
                        )}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-slate-400 cursor-pointer">
                                    <input type="checkbox" className="mr-2 rounded border-slate-700 bg-slate-950 text-blue-600" />
                                    Remember me
                                </label>
                                <a href="#" className="text-blue-600 hover:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-70 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Authenticating...
                                    </>
                                ) : 'Sign In'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-slate-400 text-sm">
                                Don't have an account?{' '}
                                <Link to="/contact" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-slate-500 text-xs mt-8">
                        Protected by industry-standard encryption
                    </p>
                </div>
            )}
        </div>
    );
}
