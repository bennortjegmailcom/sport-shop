import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';

const Logo = () => (
    <div className="text-center p-4 bg-gray-800">
        <img 
            src="https://res.cloudinary.com/dsexriquh/image/upload/v1757416137/leo_naam_hhznam.jpg" 
            alt="Leo Fietse & Hengel Logo" 
            className="mx-auto h-12" 
        />
    </div>
);

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="bg-gray-900 shadow-md">
        <Logo />
        <nav className="bg-gray-700 text-white flex justify-center">
            {NAV_LINKS.map(link => {
                const isActive = currentPage === link.page;
                return (
                    <button 
                        key={link.label}
                        onClick={() => onNavigate(link.page)}
                        className={`w-full py-3 px-2 text-center uppercase tracking-wider font-semibold text-xs sm:text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                            isActive 
                            ? 'bg-yellow-500 text-gray-900' 
                            : 'hover:bg-gray-600'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {link.label}
                    </button>
                )
            })}
        </nav>
    </header>
  );
};

export default Header;