import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Portal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log('Login attempted with:', email);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            {/* Back to Home */}
            <Link to="/" className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Home
            </Link>

            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <img src="/assets/wgs-logo.jpg" alt="WGS Logo" className="h-16 w-auto mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
                    <p className="text-slate-400">Access your account and resources</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
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
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
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
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-slate-400">
                                <input type="checkbox" className="mr-2 rounded border-slate-700 bg-slate-950" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-600/20"
                        >
                            Sign In
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
        </div>
    );
}
