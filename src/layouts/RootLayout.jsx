import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            <ScrollToTop />
            <Outlet />
        </div>
    );
}
