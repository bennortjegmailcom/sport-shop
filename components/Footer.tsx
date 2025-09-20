import React from 'react';
import { Page } from '../types';
import { FOOTER_LINKS } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-yellow-900 text-white text-center p-4">
        <div className="flex justify-center space-x-4 mb-4">
            {FOOTER_LINKS.map(link => (
                <button 
                    key={link.label}
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold text-sm"
                >
                    {link.label}
                </button>
            ))}
             <button 
              onClick={() => onNavigate(Page.ADMIN)}
                className="text-gray-400 hover:text-yellow-400 transition-colors font-semibold text-sm"
            >
              Admin Panel
            </button>
        </div>
       <div className="flex justify-center items-center space-x-2 mt-4">
            <p className="text-xs text-gray-500">Designed and built by Ben</p>
            <img src="https://res.cloudinary.com/dsexriquh/image/upload/v1757420870/bendesign_wit_q8ysqb.png" alt="BendeSign Logo" className="h-12 opacity-70"/>
        </div>
    </footer>
  );
};

export default Footer;