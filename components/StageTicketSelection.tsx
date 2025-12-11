import React from 'react';
import { CITIES } from '../constants';
import { City } from '../types';
import { Ticket } from 'lucide-react';
import { Button } from './Button';

interface Props {
  onSelectCity: (city: City) => void;
  onBack: () => void;
}

export const StageTicketSelection: React.FC<Props> = ({ onSelectCity, onBack }) => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center p-8 relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
          <Button onClick={onBack} variant="secondary" size="sm">
              ← Edit Profile
          </Button>
      </div>

      <div className="text-center mb-8 mt-4">
        <h1 className="text-5xl pixel-font text-blue-800 mb-2 drop-shadow-sm">Travel Agency</h1>
        <p className="text-xl text-blue-600 font-bold">Where do you want to go today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {CITIES.map((city) => (
          <button
            key={city.id}
            onClick={() => onSelectCity(city)}
            className="group relative bg-white border-4 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left flex flex-col h-40 overflow-hidden"
          >
            {/* Ticket Header */}
            <div className="bg-red-500 text-white px-4 py-2 border-b-4 border-black flex justify-between items-center">
              <span className="font-bold pixel-font text-xl">BOARDING PASS</span>
              <Ticket size={20} />
            </div>
            
            {/* Ticket Body */}
            <div className="p-4 flex-grow flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
              <div className="flex justify-between items-end">
                <div>
                    <span className="text-gray-500 text-xs font-bold block mb-1">DESTINATION</span>
                    <span className="text-3xl font-bold font-sans text-gray-800">{city.name}</span>
                </div>
                <div className="text-4xl group-hover:scale-125 transition-transform duration-200">
                    {/* Show first landmark emoji as preview */}
                    {city.landmarks[0].emoji}
                </div>
              </div>
            </div>

            {/* Perforated Edge Effect */}
            <div className="absolute left-0 bottom-4 w-2 h-2 bg-black rounded-full -ml-1"></div>
            <div className="absolute right-0 bottom-4 w-2 h-2 bg-black rounded-full -mr-1"></div>
            <div className="absolute left-0 bottom-4 w-full h-[2px] border-b-2 border-dashed border-gray-400"></div>
          </button>
        ))}
      </div>
    </div>
  );
};