import React from 'react';
import { City } from '../types';
import { Button } from './Button';
import { Plane, QrCode, CreditCard } from 'lucide-react';

interface Props {
  city: City;
  userName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const StageTicketPreview: React.FC<Props> = ({ city, userName, onConfirm, onCancel }) => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden">
        
        {/* Ticket Top - Airline Header */}
        <div className="bg-blue-600 p-6 flex justify-between items-center border-b-4 border-black text-white">
          <div className="flex items-center gap-2">
            <Plane className="transform -rotate-45" size={32} />
            <span className="text-3xl pixel-font tracking-widest">SIM AIR</span>
          </div>
          <span className="text-xl font-bold font-mono">ECONOMY</span>
        </div>

        {/* Ticket Content */}
        <div className="flex flex-col md:flex-row">
            {/* Main Info */}
            <div className="flex-grow p-6 space-y-6">
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-4">
                    <div>
                        <span className="block text-gray-400 text-sm font-bold">FROM</span>
                        <span className="block text-4xl font-black text-gray-800">HOME</span>
                    </div>
                    <Plane className="text-gray-300 mb-2 transform rotate-45" size={32}/>
                    <div className="text-right">
                        <span className="block text-gray-400 text-sm font-bold">TO</span>
                        <span className="block text-4xl font-black text-blue-600">{city.id}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="block text-gray-400 text-xs font-bold uppercase">Passenger</span>
                        <span className="block text-lg font-bold uppercase text-blue-600 truncate max-w-[150px]" title={userName}>
                            {userName}
                        </span>
                    </div>
                    <div>
                        <span className="block text-gray-400 text-xs font-bold uppercase">Date</span>
                        <span className="block text-lg font-bold">{today}</span>
                    </div>
                    <div>
                        <span className="block text-gray-400 text-xs font-bold uppercase">Flight</span>
                        <span className="block text-lg font-bold">VX-{Math.floor(Math.random() * 900) + 100}</span>
                    </div>
                    <div>
                        <span className="block text-gray-400 text-xs font-bold uppercase">Gate</span>
                        <span className="block text-lg font-bold">A{Math.floor(Math.random() * 20)}</span>
                    </div>
                </div>
            </div>

            {/* Right Side / Perforated Stub */}
            <div className="md:w-64 bg-yellow-50 p-6 border-l-4 border-dashed border-gray-800 flex flex-col justify-between relative">
                {/* Punch Hole effect */}
                <div className="absolute -left-2 top-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>

                <div className="text-center">
                    <span className="block text-gray-400 text-xs font-bold uppercase mb-1">Total Price</span>
                    <span className="block text-4xl font-black text-green-600 font-mono">${city.price}</span>
                </div>

                <div className="flex flex-col items-center justify-center py-4 opacity-80">
                    <QrCode size={96} />
                </div>
                
                <div className="text-center">
                   <p className="text-xs text-gray-500 mb-2">Scan to Board</p>
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-100 p-4 border-t-4 border-black flex gap-4 justify-end">
             <Button variant="secondary" onClick={onCancel}>
                Cancel
             </Button>
             <Button onClick={onConfirm} className="flex items-center gap-2">
                Purchase & Fly <CreditCard size={20}/>
             </Button>
        </div>
      </div>
    </div>
  );
};