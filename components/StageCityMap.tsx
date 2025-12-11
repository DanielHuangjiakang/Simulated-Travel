import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { CITIES } from '../constants';
import { City, Landmark } from '../types';
import { Button } from './Button';
import { MapPin, Camera } from 'lucide-react';

interface Props {
    initialCity: City;
    onLandmarkSelect: (landmark: Landmark, city: City) => void;
    onBack: () => void;
}

export const StageCityMap: React.FC<Props> = ({ initialCity, onLandmarkSelect, onBack }) => {
    // If no city is passed, default to first one
    const activeCity = initialCity || CITIES[0];

    const createPhotoMarker = (imageUrl: string, markerUrl: string | undefined, name: string) => {
        // Use the specific marker icon if available, otherwise fallback to the photo
        const imageToUse = markerUrl || imageUrl;

        return L.divIcon({
            className: 'custom-photo-marker',
            html: `
        <div class="flex flex-col items-center group relative" style="transform: translate(-50%, -50%);">
            <!-- Voxel/Pixel Style Pin Head -->
            <div class="relative z-10 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-2">
                <div class="w-16 h-16 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <img src="${imageToUse}" class="w-full h-full object-cover pixelated-img" alt="${name}"/>
                </div>
                <!-- Pin Leg simulated with pseudo-elements in CSS or simple div -->
                <div class="w-4 h-4 bg-black absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 z-[-1]"></div>
            </div>
            
            <!-- Shadow on ground -->
            <div class="w-12 h-3 bg-black/30 rounded-[100%] mt-1 blur-[2px]"></div>

            <!-- Tooltip Label -->
            <div class="absolute bottom-full mb-2 bg-yellow-300 border-4 border-black px-2 py-1 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20 pixel-font shadow-lg">
                ${name}
            </div>
        </div>
        `,
            iconSize: [0, 0], // Handled by CSS transform in HTML
            iconAnchor: [0, 0],
            popupAnchor: [0, -50]
        });
    };

    // Determine initial center and zoom (default or override)
    const centerPosition: [number, number] = activeCity.initialCenterOverride
        ? [activeCity.initialCenterOverride.lat, activeCity.initialCenterOverride.lng]
        : [activeCity.coordinates.lat, activeCity.coordinates.lng];

    const zoomLevel = activeCity.initialZoom || 13;

    return (
        <div className="relative w-full h-screen flex flex-col bg-[#a5d5f2]">
            {/* HUD Header */}
            <div className="absolute top-0 left-0 right-0 z-[1000] p-4 flex justify-between items-start pointer-events-none">
                <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto transform -rotate-1">
                    <h2 className="text-4xl pixel-font leading-none flex items-center gap-2 text-blue-600">
                        <MapPin className="text-red-500 fill-red-500" />
                        {activeCity.name}
                    </h2>
                </div>

                <Button onClick={onBack} size="sm" variant="secondary" className="pointer-events-auto transform rotate-1">
                    Back to Airport
                </Button>
            </div>

            {/* Map */}
            <MapContainer
                center={centerPosition}
                zoom={zoomLevel}
                zoomControl={false}
                attributionControl={false}
                dragging={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                touchZoom={true}
                className="w-full flex-grow z-0 bg-[#fbf8f3]"
            >

                {/* CartoDB Voyager Tiles - Cleaner, cartoon-like base */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
                    className="cartoon-tiles"
                />

                {activeCity.landmarks.map((landmark) => {
                    let pos: [number, number];

                    if (landmark.coordinates) {
                        // Use precise coordinates if available (New York)
                        pos = [landmark.coordinates.lat, landmark.coordinates.lng];
                    } else {
                        // Fallback deterministic random for other cities
                        const seed = landmark.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                        const latOffset = ((seed % 100) / 100) * 0.03 - 0.015;
                        const lngOffset = ((seed % 50) / 50) * 0.03 - 0.015;
                        pos = [activeCity.coordinates.lat + latOffset, activeCity.coordinates.lng + lngOffset];
                    }

                    return (
                        <Marker
                            key={landmark.id}
                            position={pos}
                            icon={createPhotoMarker(landmark.baseImageUrl, landmark.markerUrl, landmark.name)}
                        >
                            <Popup className="voxel-popup" closeButton={false} autoPan={true} offset={[0, -50]}>
                                <div className="text-center min-w-[200px] p-1">
                                    <h3 className="text-xl font-bold mb-1 font-sans">{landmark.name}</h3>
                                    <div className="w-full h-24 bg-gray-200 mb-2 border-2 border-black overflow-hidden relative group">
                                        <img src={landmark.baseImageUrl} alt={landmark.name} className="w-full h-full object-cover" />
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="primary"
                                        onClick={() => onLandmarkSelect(landmark, activeCity)}
                                        className="w-full"
                                    >
                                        Take Selfie! <Camera className="inline w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            <div className="absolute bottom-6 left-6 z-[1000] bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs pointer-events-none transform rotate-1">
                <h4 className="font-bold mb-1 flex items-center gap-2">
                    <MapPin className="text-blue-500" /> Explorer Mode
                </h4>
                <p className="text-sm text-gray-600 font-sans">
                    Welcome to {activeCity.name}! Tap a photo pin to visit.
                </p>
            </div>

            <style>{`
        .cartoon-tiles {
            filter: contrast(1.1) saturate(1.4) brightness(1.05);
        }
        .leaflet-container {
            background: #a5d5f2; 
        }
        /* CSS Pixelation for the marker image */
        .pixelated-img {
            image-rendering: pixelated;
        }
      `}</style>
        </div>
    );
};