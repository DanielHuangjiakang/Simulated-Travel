import React, { useRef, useState } from 'react';
import { Button } from './Button';
import { Camera, Upload, User, Type } from 'lucide-react';

interface Props {
  onComplete: (imageDataUrl: string, name: string) => void;
}

export const StageOnboarding: React.FC<Props> = ({ onComplete }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStart = () => {
    if (preview && name.trim()) {
      onComplete(preview, name.trim());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center max-w-2xl mx-auto">
      <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full">
        <h1 className="text-6xl mb-4 text-blue-600 drop-shadow-md">Simulated Travel</h1>
        <p className="text-2xl mb-6 text-gray-700">Create your traveler profile!</p>

        {/* Name Input */}
        <div className="mb-6 text-left">
           <label className="block text-sm font-bold uppercase mb-2">Passport Name</label>
           <div className="relative">
             <Type className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
             <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full pl-12 pr-4 py-3 text-2xl border-4 border-black pixel-font focus:outline-none focus:bg-yellow-50 focus:border-blue-500 transition-colors"
                maxLength={15}
             />
           </div>
        </div>

        {/* Photo Upload */}
        <div className="text-left mb-2">
            <label className="block text-sm font-bold uppercase">Passport Photo</label>
        </div>
        <div 
          className="w-full h-64 bg-gray-100 border-4 border-dashed border-gray-400 mx-auto mb-8 flex items-center justify-center relative cursor-pointer hover:bg-gray-50 transition-colors rounded-xl overflow-hidden group"
          onClick={() => fileInputRef.current?.click()}
        >
          {preview ? (
            <>
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-xl">Change Photo</span>
                </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <Camera size={48} className="mb-2" />
              <span className="pixel-font text-xl">Click to Upload</span>
            </div>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        <div className="flex gap-4 justify-center">
          {preview && name.trim() ? (
            <Button onClick={handleStart} size="lg" className="w-full">
              Start Journey <Upload className="inline ml-2" />
            </Button>
          ) : (
            <Button disabled variant="secondary" size="lg" className="w-full opacity-50 cursor-not-allowed">
              { !name.trim() ? "Enter Name" : "Upload Photo" }
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};