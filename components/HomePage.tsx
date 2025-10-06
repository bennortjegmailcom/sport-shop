import React from 'react';
import { Page } from '../types';
import { useAppContext } from '../context/AppContext';
import Slideshow from './shared/Slideshow';
import { PRODUCT_CATEGORIES } from '../constants';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { state } = useAppContext();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative text-center rounded-lg overflow-hidden">
        {/* Suggested image: your 'product-promo.png' or a hero shot of the store */}
        <img 
          src="https://res.cloudinary.com/dsexriquh/image/upload/v1757416210/leo_front_page_ydpbwu.jpg" 
          alt="Promotional image for Leo Cycles store" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Your Adventure Starts Here.</h2>
            <p className="text-yellow-300 mt-2">Ride. Fish. Explore. Leo Cycles Has It All.</p>
            <button 
                onClick={() => onNavigate(Page.PRODUCTS)}
                className="mt-6 bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-transform duration-200 hover:scale-105"
            >
                Explore Products
            </button>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Leo Cycles</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
            Your ultimate destination for all things cycling, fishing, and outdoor sports in Lephalale. We're passionate about helping you get out there and enjoy your favorite activities with the best gear.
        </p>
        <button 
            onClick={() => onNavigate(Page.ABOUT)}
            className="mt-4 text-yellow-600 font-semibold hover:text-yellow-500"
        >
            Learn More About Us &rarr;
        </button>
      </section>

      {/* Products Slideshow */}
      <section>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Explore Our Products</h3>
        <Slideshow images={PRODUCT_CATEGORIES} />
      </section>
    </div>
  );
};

export default HomePage;