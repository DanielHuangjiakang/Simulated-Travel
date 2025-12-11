import React, { useState } from 'react';
import { StageOnboarding } from './components/StageOnboarding';
import { StageTicketSelection } from './components/StageTicketSelection';
import { StageTicketPreview } from './components/StageTicketPreview';
import { StageFlight } from './components/StageFlight';
import { StageCityMap } from './components/StageCityMap';
import { StageSelfie } from './components/StageSelfie';
import { AppStage, City, Landmark, TravelState } from './types';
import { CITIES } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<TravelState>({
    currentStage: AppStage.ONBOARDING,
    userFaceImage: null,
    userName: '',
    selectedCity: null,
    selectedLandmark: null,
  });

  const handleOnboardingComplete = (imageDataUrl: string, name: string) => {
    setState(prev => ({
      ...prev,
      userFaceImage: imageDataUrl,
      userName: name,
      currentStage: AppStage.TICKET_SELECTION
    }));
  };

  const handleBackToOnboarding = () => {
    setState(prev => ({
        ...prev,
        currentStage: AppStage.ONBOARDING
    }));
  };

  const handleCitySelect = (city: City) => {
    setState(prev => ({
      ...prev,
      selectedCity: city,
      currentStage: AppStage.TICKET_PREVIEW // Go to preview instead of flight
    }));
  };

  const handleTicketConfirm = () => {
    setState(prev => ({
        ...prev,
        currentStage: AppStage.FLIGHT
    }));
  };

  const handleTicketCancel = () => {
    setState(prev => ({
        ...prev,
        selectedCity: null,
        currentStage: AppStage.TICKET_SELECTION
    }));
  };

  const handleFlightArrival = () => {
    setState(prev => ({
      ...prev,
      currentStage: AppStage.MAP
    }));
  };

  const handleLandmarkSelect = (landmark: Landmark, city: City) => {
    setState(prev => ({
      ...prev,
      selectedLandmark: landmark,
      selectedCity: city,
      currentStage: AppStage.SELFIE
    }));
  };

  const handleReset = () => {
    // Return to map to explore other landmarks in the same city
    setState(prev => ({
      ...prev,
      selectedLandmark: null,
      currentStage: AppStage.MAP
    }));
  };
  
  const handleBackToAirport = () => {
    setState(prev => ({
        ...prev,
        selectedCity: null,
        selectedLandmark: null,
        currentStage: AppStage.TICKET_SELECTION
    }));
  };

  return (
    <main className="w-full h-screen bg-[#e0f2fe]">
      {state.currentStage === AppStage.ONBOARDING && (
        <StageOnboarding onComplete={handleOnboardingComplete} />
      )}

      {state.currentStage === AppStage.TICKET_SELECTION && (
        <StageTicketSelection 
            onSelectCity={handleCitySelect} 
            onBack={handleBackToOnboarding}
        />
      )}

      {state.currentStage === AppStage.TICKET_PREVIEW && state.selectedCity && (
        <StageTicketPreview 
            city={state.selectedCity}
            userName={state.userName}
            onConfirm={handleTicketConfirm}
            onCancel={handleTicketCancel}
        />
      )}

      {state.currentStage === AppStage.FLIGHT && (
        <StageFlight 
            destination={state.selectedCity} 
            onArrival={handleFlightArrival} 
        />
      )}

      {state.currentStage === AppStage.MAP && state.selectedCity && (
        <StageCityMap 
            initialCity={state.selectedCity} 
            onLandmarkSelect={handleLandmarkSelect} 
            onBack={handleBackToAirport}
        />
      )}

      {state.currentStage === AppStage.SELFIE && 
       state.selectedLandmark && 
       state.selectedCity && 
       state.userFaceImage && (
        <StageSelfie 
          userFace={state.userFaceImage}
          landmark={state.selectedLandmark}
          city={state.selectedCity}
          onReset={handleReset}
        />
      )}
    </main>
  );
};

export default App;