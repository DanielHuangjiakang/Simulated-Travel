import { GoogleGenAI } from "@google/genai";

const FALLBACK_TEMPLATES = [
  "Living my best blocky life at {landmark}! 🟥",
  "Pixels perfect views in {city}! 📸",
  "Just another day in the voxel verse visiting {landmark}. 🌍",
  "Rendering {landmark}... 100% complete! 🖼️",
  "No filter needed for {city}, just pure voxels. ✨",
  "Wish you were here at {landmark} (in 8-bit)! 💌",
  "Collecting memories at {landmark}, one pixel at a time. 💾",
  "Voxel vibes only at {landmark}. ✌️"
];

export const generateTravelCaption = async (landmarkName: string, cityName: string): Promise<string> => {
  const getFallback = () => {
     const template = FALLBACK_TEMPLATES[Math.floor(Math.random() * FALLBACK_TEMPLATES.length)];
     return template.replace('{landmark}', landmarkName).replace('{city}', cityName);
  };

  if (!process.env.API_KEY) {
    return getFallback();
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, funny, 1-sentence social media caption for a voxel-style game character visiting ${landmarkName} in ${cityName}. Keep it under 20 words. Use emojis.`,
    });

    return response.text.trim();
  } catch (error: any) {
    // Check for quota exhaustion (429) or other likely API errors
    const isQuotaError = error?.status === 429 || error?.code === 429 || error?.message?.includes('429') || error?.message?.includes('quota');
    
    if (isQuotaError) {
        // Log a warning instead of an error for quota limits to reduce console noise
        console.warn("Gemini API Quota exhausted. Switching to offline mode for captions.");
    } else {
        console.error("Gemini API Error:", error);
    }
    
    return getFallback();
  }
};