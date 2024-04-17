import React from 'react';
import DarkModeButton from './DarkMode';

const Header: React.FC = () => {
    return (
        <div id="top" className="w-full px-44 py-10 flex flex-row justify-between items-center">
            <DarkModeButton />
            <button className="text-primary dark:text-dark-primary border border-primary dark:border-dark-secondary px-4 py-2 rounded-lg text-lg">
                Resume
            </button>
        </div>
    );
};

export default Header;
