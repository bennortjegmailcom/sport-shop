
import React from 'react';
import { CONTACT_INFO } from '../constants';

const MapPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        {/*
          Suggested image name: location-map.png
          This could be a screenshot from Google Maps or a custom illustration.
        */}
        <img 
          src="https://picsum.photos/seed/map/600/400" 
          alt="Map to Leos Fietse" 
          className="w-full h-auto rounded-lg shadow-md" 
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Find Us</h2>
        <p className="text-lg text-gray-700">{CONTACT_INFO.address}</p>
        <p className="text-lg text-gray-700">{CONTACT_INFO.phone}</p>
        <p className="text-lg text-gray-600 hover:text-emerald-700">
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Opening Hours</h2>
        <ul className="text-lg text-gray-700">
            {/* FIX: Use optional chaining to prevent runtime error if openingHours is not defined. */}
            {CONTACT_INFO.openingHours?.map(line => <li key={line}>{line}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MapPage;