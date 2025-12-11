import React, { useEffect, useState } from 'react';
import { MOCK_FLIGHT_DURATION_MS } from '../constants';
import { Plane } from 'lucide-react';
import { City } from '../types';

interface Props {
  destination: City | null;
  onArrival: () => void;
}

export const StageFlight: React.FC<Props> = ({ destination, onArrival }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / MOCK_FLIGHT_DURATION_MS) * 100, 100);
      
      setProgress(newProgress);

      if (elapsed >= MOCK_FLIGHT_DURATION_MS) {
        clearInterval(interval);
        onArrival();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onArrival]);

  return (
    <div className="fixed inset-0 bg-sky-300 flex flex-col items-center justify-center overflow-hidden z-50">
      {/* Moving Clouds Background (Simulated with simple div animations) */}
      <div className="absolute top-20 left-10 text-white opacity-60 animate-[pulse_3s_infinite]">
         <CloudIcon size={120} />
      </div>
      <div className="absolute bottom-40 right-20 text-white opacity-40 animate-[pulse_4s_infinite]">
         <CloudIcon size={180} />
      </div>

      {/* Plane Animation */}
      <div className="relative w-full max-w-4xl h-64 flex items-center">
        <div 
            className="absolute transition-all duration-75 ease-linear text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
            style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
        >
            <Plane size={96} fill="white" stroke="black" strokeWidth={1.5} className="rotate-45" />
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 border-2 border-black text-black pixel-font whitespace-nowrap">
                Flight to {destination?.name || 'Unknown'}
            </div>
        </div>
        
        {/* Trail */}
        <div className="absolute left-0 h-4 bg-white opacity-50 border-y-2 border-white" style={{ width: `${progress}%`, top: '50%', transform: 'translateY(-50%)' }}></div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl text-white font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4">
            Next stop: <span className="text-yellow-300">{destination?.name}</span>!
        </h2>
        {/* Loading Bar */}
        <div className="w-80 h-8 bg-black p-1 mx-auto">
            <div 
                className="h-full bg-yellow-400 transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>
      </div>
    </div>
  );
};

const CloudIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size * 0.6} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 19C4.23858 19 2 16.7614 2 14C2 11.95 3.1407 10.18 4.84656 9.3243C4.82136 9.05593 4.80874 8.78441 4.80874 8.51163C4.80874 5.37878 7.27278 2.83337 10.3344 2.83337C12.8228 2.83337 14.9298 4.49247 15.6322 6.70321C16.1557 6.47644 16.7262 6.36647 17.3093 6.36647C19.8998 6.36647 22 8.46669 22 11.0572C22 11.2332 21.9904 11.4072 21.9715 11.5786C21.981 11.7176 21.9858 11.8582 21.9858 12C21.9858 15.866 18.8518 19 14.9858 19H7Z" />
    </svg>
);