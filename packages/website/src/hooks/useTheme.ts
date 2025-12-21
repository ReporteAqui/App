import { useEffect, useState } from 'react';
import type { Theme } from '@types';

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>(function() {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme') as Theme;
            if (stored) return stored;
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        }
        return 'light';
    });

    useEffect(function() {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}
