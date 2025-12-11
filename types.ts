export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  baseImageUrl: string; // Background for selfie
  markerUrl?: string; // Custom icon for map marker
  emoji: string; // Cartoon icon for map marker
  coordinates?: Coordinates; // Optional specific coordinates
}

export interface City {
  id: string;
  name: string;
  coordinates: Coordinates;
  initialZoom?: number; // Manual zoom level for fixed view
  initialCenterOverride?: Coordinates; // Manual center if different from city coords
  landmarks: Landmark[];
  color: string; // For map marker color
  price: number; // Average flight price
}

export enum AppStage {
  ONBOARDING = 'ONBOARDING',
  TICKET_SELECTION = 'TICKET_SELECTION',
  TICKET_PREVIEW = 'TICKET_PREVIEW',
  FLIGHT = 'FLIGHT',
  MAP = 'MAP',
  SELFIE = 'SELFIE',
}

export interface TravelState {
  currentStage: AppStage;
  userFaceImage: string | null; // Base64 data URL
  userName: string; // User's name
  selectedCity: City | null;
  selectedLandmark: Landmark | null;
}