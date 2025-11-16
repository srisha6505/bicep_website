import React from 'react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg bg-secondary text-secondary-foreground hover:bg-border flex items-center justify-center transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <i className="fas fa-moon text-lg"></i> : <i className="fas fa-sun text-lg"></i>}
        </button>
    );
};
