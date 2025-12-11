import { City } from './types';

export const CITIES: City[] = [
  {
    id: 'NYC',
    name: 'New York',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    initialZoom: 12,
    initialCenterOverride: { lat: 40.74, lng: -74.00 }, // Centers nicely on Manhattan
    color: '#3b82f6',
    price: 180,
    landmarks: [
      id: 'LIBERTY',
      name: 'Statue of Liberty',
      description: 'Symbol of freedom.',
      baseImageUrl: '/landmarks/nyc/photo_liberty.png',
      markerUrl: '/landmarks/nyc/icon_liberty.png',
      emoji: '🗽',
      coordinates: { lat: 40.6892, lng: -74.0445 }
      },
  {
    id: 'BULL',
    name: 'Charging Bull',
    description: 'Wall St Symbol.',
    baseImageUrl: '/landmarks/nyc/photo_bull.png',
    markerUrl: '/landmarks/nyc/icon_bull.png',
    emoji: '🐂',
    coordinates: { lat: 40.7055, lng: -74.0134 }
  },
  {
    id: 'BROOKLYN_BRIDGE',
    name: 'Brooklyn Bridge',
    description: 'Iconic suspension bridge.',
    baseImageUrl: '/landmarks/nyc/photo_brooklyn_bridge.png',
    markerUrl: '/landmarks/nyc/icon_brooklyn_bridge.png',
    emoji: '🌉',
    coordinates: { lat: 40.7061, lng: -73.9969 }
  },
  {
    id: 'WTC',
    name: 'One World Trade',
    description: '9/11 Memorial & Tower.',
    baseImageUrl: '/landmarks/nyc/photo_wtc.png',
    markerUrl: '/landmarks/nyc/icon_wtc.png',
    emoji: '🕊️',
    coordinates: { lat: 40.7118, lng: -74.0131 }
  },
  {
    id: 'WASHINGTON_SQ',
    name: 'Washington Sq Park',
    description: 'Famous arch & fountain.',
    baseImageUrl: '/landmarks/nyc/photo_washington_sq.png',
    markerUrl: '/landmarks/nyc/icon_washington_sq.png',
    emoji: '⛲',
    coordinates: { lat: 40.7308, lng: -73.9973 }
  },
  {
    id: 'FLATIRON',
    name: 'Flatiron Building',
    description: 'Triangular architecture.',
    baseImageUrl: '/landmarks/nyc/photo_flatiron.png',
    markerUrl: '/landmarks/nyc/icon_flatiron.png',
    emoji: '📐',
    coordinates: { lat: 40.7411, lng: -73.9897 }
  },
  {
    id: 'CHELSEA',
    name: 'Chelsea Market',
    description: 'Food hall & shopping.',
    baseImageUrl: '/landmarks/nyc/photo_chelsea.png',
    markerUrl: '/landmarks/nyc/icon_chelsea.png',
    emoji: '🦞',
    coordinates: { lat: 40.7420, lng: -74.0048 }
  },
  {
    id: 'EMPIRE',
    name: 'Empire State',
    description: 'The King Kong building!',
    baseImageUrl: '/landmarks/nyc/photo_empire.png',
    markerUrl: '/landmarks/nyc/icon_empire.png',
    emoji: '🦍',
    coordinates: { lat: 40.7484, lng: -73.9857 }
  },
  {
    id: 'VESSEL',
    name: 'The Vessel',
    description: 'Honeycomb structure.',
    baseImageUrl: 'https://images.unsplash.com/photo-1559810573-b7891fa4954f?auto=format&fit=crop&w=800&q=80',
    markerUrl: '/landmarks/nyc/icon_vessel.png',
    emoji: '🧬',
    coordinates: { lat: 40.7538, lng: -74.0022 }
  },
  {
    id: 'TIMES_SQUARE',
    name: 'Times Square',
    description: 'The crossroads of the world.',
    baseImageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
    markerUrl: '/landmarks/nyc/icon_times_square.png',
    emoji: '✨',
    coordinates: { lat: 40.7580, lng: -73.9855 }
  },
  {
    id: 'GRAND_CENTRAL',
    name: 'Grand Central',
    description: 'Historic train terminal.',
    baseImageUrl: 'https://images.unsplash.com/photo-1563812852-50d242767078?auto=format&fit=crop&w=800&q=80',
    emoji: '🚂',
    coordinates: { lat: 40.7527, lng: -73.9772 }
  },
  {
    id: 'UNION_SQUARE',
    name: 'Union Square Park',
    description: 'Urban park & market.',
    baseImageUrl: 'https://images.unsplash.com/photo-1596256973347-1965a3967814?auto=format&fit=crop&w=800&q=80',
    emoji: '🌳',
    coordinates: { lat: 40.7359, lng: -73.9911 }
  },
  {
    id: 'CENTRAL_PARK',
    name: 'Central Park',
    description: 'The lungs of NYC.',
    baseImageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e7?auto=format&fit=crop&w=800&q=80',
    emoji: '🚣',
    coordinates: { lat: 40.7850, lng: -73.9682 }
  },
  {
    id: 'MET',
    name: 'The Met Museum',
    description: 'World-class art collection.',
    baseImageUrl: 'https://images.unsplash.com/photo-1520263115673-611416eb2719?auto=format&fit=crop&w=800&q=80',
    emoji: '🏛️',
    coordinates: { lat: 40.7794, lng: -73.9632 }
  },
  {
    id: 'GUGGENHEIM',
    name: 'Guggenheim',
    description: 'Modern art in a spiral.',
    baseImageUrl: 'https://images.unsplash.com/photo-1512406886616-e5c98616c68a?auto=format&fit=crop&w=800&q=80',
    emoji: '🌀',
    coordinates: { lat: 40.7830, lng: -73.9590 }
  }
]
  },
{
  id: 'PAR',
    name: 'Paris',
      coordinates: { lat: 48.8566, lng: 2.3522 },
  initialZoom: 13,
    color: '#ef4444',
      price: 850,
        landmarks: [
          {
            id: 'EIFFEL',
            name: 'Eiffel Tower',
            description: 'The Iron Lady of Paris.',
            baseImageUrl: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=80',
            emoji: '🏗️'
          },
          {
            id: 'LOUVRE',
            name: 'The Louvre',
            description: 'Home of the Mona Lisa.',
            baseImageUrl: 'https://images.unsplash.com/photo-1565099824688-e93eb20fe622?auto=format&fit=crop&w=800&q=80',
            emoji: '🎨'
          },
          {
            id: 'ARC',
            name: 'Arc de Triomphe',
            description: 'Honoring those who fought for France.',
            baseImageUrl: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=800&q=80',
            emoji: '🚪'
          },
          {
            id: 'NOTRE',
            name: 'Notre Dame',
            description: 'Medieval Catholic cathedral.',
            baseImageUrl: 'https://images.unsplash.com/photo-1478391679964-b71261805abb?auto=format&fit=crop&w=800&q=80',
            emoji: '⛪'
          },
          {
            id: 'SACRE',
            name: 'Sacré-Cœur',
            description: 'Basilica of the Sacred Heart.',
            baseImageUrl: 'https://images.unsplash.com/photo-1541795795328-f073b463eb44?auto=format&fit=crop&w=800&q=80',
            emoji: '🕍'
          },
          {
            id: 'MOULIN',
            name: 'Moulin Rouge',
            description: 'Birthplace of the can-can dance.',
            baseImageUrl: 'https://images.unsplash.com/photo-1551696472-358eb2354a55?auto=format&fit=crop&w=800&q=80',
            emoji: '💃'
          }
        ]
},
{
  id: 'LDN',
    name: 'London',
      coordinates: { lat: 51.5074, lng: -0.1278 },
  initialZoom: 13,
    color: '#dc2626',
      price: 920,
        landmarks: [
          {
            id: 'BIGBEN',
            name: 'Big Ben',
            description: 'The Great Bell of the striking clock.',
            baseImageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
            emoji: '🕰️'
          },
          {
            id: 'BRIDGE',
            name: 'Tower Bridge',
            description: 'Iconic suspension bridge.',
            baseImageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
            emoji: '🌉'
          },
          {
            id: 'EYE',
            name: 'London Eye',
            description: 'Observation wheel on the South Bank.',
            baseImageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=80',
            emoji: '🎡'
          },
          {
            id: 'BUCKINGHAM',
            name: 'Buckingham Palace',
            description: 'The London residence of the monarch.',
            baseImageUrl: 'https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=800&q=80',
            emoji: '💂'
          },
          {
            id: 'SHARD',
            name: 'The Shard',
            description: 'A 72-storey skyscraper.',
            baseImageUrl: 'https://images.unsplash.com/photo-1517424686367-7e61a6c11b23?auto=format&fit=crop&w=800&q=80',
            emoji: '💎'
          },
          {
            id: 'PHONE',
            name: 'Red Telephone Box',
            description: 'Classic British design.',
            baseImageUrl: 'https://images.unsplash.com/photo-1490259838084-2579b291d9d4?auto=format&fit=crop&w=800&q=80',
            emoji: '📞'
          }
        ]
},
{
  id: 'ROM',
    name: 'Rome',
      coordinates: { lat: 41.9028, lng: 12.4964 },
  initialZoom: 14,
    color: '#f59e0b',
      price: 890,
        landmarks: [
          {
            id: 'COL',
            name: 'Colosseum',
            description: 'The largest ancient amphitheatre.',
            baseImageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
            emoji: '🏟️'
          },
          {
            id: 'TREVI',
            name: 'Trevi Fountain',
            description: 'Make a wish!',
            baseImageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba30c3?auto=format&fit=crop&w=800&q=80',
            emoji: '⛲'
          },
          {
            id: 'PANTHEON',
            name: 'The Pantheon',
            description: 'Former Roman temple.',
            baseImageUrl: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=800&q=80',
            emoji: '🏛️'
          },
          {
            id: 'VATICAN',
            name: 'St. Peter\'s Basilica',
            description: 'The heart of the Vatican.',
            baseImageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80',
            emoji: '🇻🇦'
          },
          {
            id: 'SPANISH',
            name: 'Spanish Steps',
            description: 'Famous stairway in Rome.',
            baseImageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=80',
            emoji: '🪜'
          }
        ]
},
{
  id: 'CAI',
    name: 'Cairo',
      coordinates: { lat: 30.0444, lng: 31.2357 },
  initialZoom: 13,
    color: '#d97706',
      price: 750,
        landmarks: [
          {
            id: 'PYRAMID',
            name: 'Giza Pyramids',
            description: 'Ancient wonders of the world.',
            baseImageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
            emoji: '🔺'
          },
          {
            id: 'SPHINX',
            name: 'Great Sphinx',
            description: 'Limestone statue of a reclining sphinx.',
            baseImageUrl: 'https://images.unsplash.com/photo-1562613628-98e8d82d4174?auto=format&fit=crop&w=800&q=80',
            emoji: '🦁'
          },
          {
            id: 'NILE',
            name: 'Nile River',
            description: 'The longest river in Africa.',
            baseImageUrl: 'https://images.unsplash.com/photo-1539650116455-29cb556f06f3?auto=format&fit=crop&w=800&q=80',
            emoji: '⛵'
          },
          {
            id: 'CAIROTOWER',
            name: 'Cairo Tower',
            description: 'Concrete television tower.',
            baseImageUrl: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80',
            emoji: '🍤'
          },
          {
            id: 'MARKET',
            name: 'Khan el-Khalili',
            description: 'Famous bazaar and souq.',
            baseImageUrl: 'https://images.unsplash.com/photo-1599926676342-994191d4e0ce?auto=format&fit=crop&w=800&q=80',
            emoji: '🏺'
          }
        ]
},
{
  id: 'TYO',
    name: 'Tokyo',
      coordinates: { lat: 35.6762, lng: 139.75 },
  initialZoom: 12,
    color: '#a855f7',
      price: 1200,
        landmarks: [
          {
            id: 'TOWER',
            name: 'Tokyo Tower',
            description: 'Communications and observation tower.',
            baseImageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
            emoji: '🗼'
          },
          {
            id: 'SHIBUYA',
            name: 'Shibuya Crossing',
            description: 'The busiest pedestrian crossing.',
            baseImageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
            emoji: '🚶'
          },
          {
            id: 'SENSOJI',
            name: 'Senso-ji',
            description: 'Ancient Buddhist temple in Asakusa.',
            baseImageUrl: 'https://images.unsplash.com/photo-1583905061416-0857908c6970?auto=format&fit=crop&w=800&q=80',
            emoji: '⛩️'
          },
          {
            id: 'FUJI',
            name: 'Mount Fuji',
            description: 'Active volcano and cultural icon.',
            baseImageUrl: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80',
            emoji: '🗻'
          },
          {
            id: 'SKYTREE',
            name: 'Tokyo Skytree',
            description: 'Tallest tower in Japan.',
            baseImageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
            emoji: '🏙️'
          },
          {
            id: 'AKIHABARA',
            name: 'Akihabara',
            description: 'Hub for anime and electronics.',
            baseImageUrl: 'https://images.unsplash.com/photo-1569931727763-3669bd7ee6d9?auto=format&fit=crop&w=800&q=80',
            emoji: '👾'
          }
        ]
}
];

export const MOCK_FLIGHT_DURATION_MS = 3500;