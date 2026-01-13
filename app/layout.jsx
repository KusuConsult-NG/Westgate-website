import { Inter, Playfair_Display } from 'next/font/google';
import './styles.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif',
});

export const metadata = {
    title: 'Westgate Stratagem | Enduring Intelligence',
    description: 'Strategic consulting and technology for academic and institutional leadership.',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>
            <body className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-primary/30 antialiased">
                {children}
            </body>
        </html>
    );
}
