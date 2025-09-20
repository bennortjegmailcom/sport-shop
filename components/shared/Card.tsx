
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageSuggestion: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, imageSuggestion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
      <div className="flex-shrink-0">
        {/*
          Suggested image name for this card: ${imageSuggestion}
          Using a placeholder from picsum.photos for now.
        */}
        <img 
          src={imageUrl}
          alt={title} 
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-emerald-800 uppercase">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
