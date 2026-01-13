import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-900/50 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold font-display text-accent-gradient mb-4 block">
                            Westgate Stratagem
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Enduring Intelligence. We help people and institutions do serious work well — supported by technology that lasts.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-accent text-sm">Home</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-accent text-sm">Our Services</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-accent text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-accent text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Our Expertise</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-gray-400 hover:text-accent text-sm">AI for Research</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-accent text-sm">Institutional Training</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-accent text-sm">Technology Strategy</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-accent text-sm">Advisory Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-accent shrink-0" />
                                <span>123 Innovation Drive, Tech City, TC 90210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>info@westgatestratagem.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm mt-4">
                                <a href="https://calendly.com/martynseric/30min" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                                    Schedule a Call
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Westgate Stratagem LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
