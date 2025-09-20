import React from 'react';
import { PRODUCT_CATEGORIES } from '../constants';

const ProductsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-600 mt-2">
          We offer a wide range of products for all your outdoor needs.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {PRODUCT_CATEGORIES.map((category) => (
          <div key={category.name} className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src={category.imageUrl} alt={category.alt} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold text-center p-2">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
