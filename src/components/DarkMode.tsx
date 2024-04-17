import React, { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeButton: React.FC = () => {
    const [darkMode, setDarkMode] = useState('light');

    useEffect(() => {
        const currentTheme =
            localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setDarkMode(currentTheme);
    }, []);

    const toggleDarkMode = () => {
        const newTheme = darkMode === 'dark' ? 'light' : 'dark';
        setDarkMode(newTheme);
        localStorage.theme = newTheme;
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return darkMode === 'dark' ? (
        <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-3xl text-black dark:text-dark-secondary"
        />
    ) : (
        <BsFillSunFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-3xl text-black dark:text-dark-secondary"
        />
    );
};

export default DarkModeButton;
