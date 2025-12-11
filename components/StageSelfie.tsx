import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { City, Landmark } from '../types';
import { composeSelfie } from '../services/imageService';
import { generateTravelCaption } from '../services/geminiService';
import { Download, RefreshCw, Share2, Sparkles } from 'lucide-react';

interface Props {
  userFace: string;
  landmark: Landmark;
  city: City;
  onReset: () => void;
}

export const StageSelfie: React.FC<Props> = ({ userFace, landmark, city, onReset }) => {
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('Generating travel memories...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        const composed = await composeSelfie(landmark.baseImageUrl, userFace);
        setResultImage(composed);
        
        const aiCaption = await generateTravelCaption(landmark.name, city.name);
        setCaption(aiCaption);
      } catch (error) {
        console.error("Error generating selfie:", error);
        setCaption("Oops! The camera jammed.");
      } finally {
        setLoading(false);
      }
    };

    processImage();
  }, [userFace, landmark, city]);

  const handleDownload = () => {
    if (resultImage) {
      const link = document.createElement('a');
      link.download = `sim-trip-${landmark.id}.png`;
      link.href = resultImage;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full p-6 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
            <h2 className="text-4xl pixel-font text-blue-600">MISSION COMPLETE!</h2>
            <div className="bg-green-400 text-black px-3 py-1 font-bold border-2 border-black transform -rotate-2">
                VACATION MODE
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Image Area */}
            <div className="flex-1 bg-gray-100 border-4 border-black p-2 shadow-inner relative min-h-[300px] flex items-center justify-center">
                {loading ? (
                    <div className="text-center">
                        <RefreshCw className="animate-spin w-12 h-12 mx-auto mb-2 text-blue-500" />
                        <p className="pixel-font text-xl">Developing Photo...</p>
                    </div>
                ) : (
                    resultImage && <img src={resultImage} alt="Selfie" className="w-full h-auto border-2 border-white shadow-md" />
                )}
            </div>

            {/* Info Area */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-bold mb-2 font-sans">{landmark.name}</h3>
                    <p className="text-gray-500 text-lg mb-4">{city.name}</p>
                    
                    <div className="bg-blue-50 p-4 border-2 border-blue-200 rounded-lg mb-6 relative">
                         <Sparkles className="absolute -top-3 -right-3 text-yellow-400 fill-yellow-400 w-8 h-8" />
                         <p className="italic text-gray-700 font-serif text-lg leading-relaxed">
                            "{caption}"
                         </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Button onClick={handleDownload} disabled={loading} className="w-full flex justify-center items-center gap-2">
                        <Download size={20} /> Save to Memory
                    </Button>
                    <div className="flex gap-3">
                         <Button variant="secondary" onClick={() => alert("Shared to SimNet!")} disabled={loading} className="flex-1">
                            <Share2 size={20} className="inline mr-2"/> Share
                         </Button>
                         <Button variant="danger" onClick={onReset} className="flex-1">
                            Play Again
                         </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};