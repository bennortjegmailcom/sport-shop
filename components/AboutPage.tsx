import React from 'react';
import { useAppContext } from '../context/AppContext';

const AboutPage: React.FC = () => {
    const { state } = useAppContext();

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: state.aboutContent }}
            >
            </div>
        </div>
    );
};

export default AboutPage;
