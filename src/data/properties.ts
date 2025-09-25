import { Property } from '../types/Property';

// Import des images de la villa
import vilaMain from '../assets/vila1/vila_main.jpg';
import vila1 from '../assets/vila1/vila1.jpg';
import villa2 from '../assets/vila1/villa2.jpg';
import vila3 from '../assets/vila1/vila3.jpg';
import vila4 from '../assets/vila1/vila4.jpg';
import vila5 from '../assets/vila1/vila5.jpg';
import vila6 from '../assets/vila1/vila6.jpg';
import vila7 from '../assets/vila1/vila7.jpg';
import vila8 from '../assets/vila1/vila8.jpg';

export const properties: Property[] = [
  
  {
    id: '7',
    title: 'Villa Sidi Rahal',
    type: 'Villa',
    status: 'Vente',
    price: 3200000,
    location: 'Sidi Rahal, Maroc',
    bedrooms: 4,
    bathrooms: 3,
    area: 380,
    images: [
      vilaMain,
      vila1,
      villa2,
      vila3,
      vila4,
      vila5,
      vila6,
      vila7,
      vila8
    ],
    description: 'Magnifique villa moderne de 380m² située dans la prestigieuse région de Sidi Rahal au Maroc. Cette propriété d\'exception offre 4 chambres spacieuses avec vue sur l\'océan, 3 salles de bains luxueuses, un salon principal lumineux, une salle à manger élégante avec accès direct à la terrasse, et une cuisine moderne entièrement équipée. La villa dispose d\'un grand jardin paysager, d\'une terrasse panoramique avec vue sur l\'Atlantique, et se trouve à seulement quelques minutes des plus belles plages de la côte marocaine. Architecture contemporaine alliant confort moderne et charme marocain traditionnel. Parfaite pour une résidence secondaire ou un investissement touristique de prestige.',
    features: ['Vue Océan', 'Grand Jardin', 'Terrasse', 'Proche Plage', 'Garage', 'Climatisation']
  },
  {
    id: '1',
    title: 'Villa de Luxe avec Piscine',
    type: 'Villa',
    status: 'Vente',
    price: 4500000,
    location: 'Casablanca, Californie',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    description: 'Magnifique villa moderne de 450m² située dans le prestigieux quartier de Californie à Casablanca. Cette propriété d\'exception offre 5 chambres spacieuses, 4 salles de bains luxueuses, un salon principal de 60m², une salle à manger élégante, une cuisine équipée moderne, et un bureau. La villa dispose d\'une piscine privée de 12x6m, d\'un jardin paysager de 800m², et d\'une vue panoramique imprenable. Finitions haut de gamme avec marbre italien, parquet en chêne massif, et domotique intégrée. Garage pour 3 voitures et système de sécurité 24h/24.',
    features: ['Piscine', 'Jardin', 'Garage', 'Climatisation', 'Sécurité 24h']
  },
  {
    id: '2',
    title: 'Riad Authentique Médina',
    type: 'Riad',
    status: 'Vente',
    price: 2800000,
    location: 'Marrakech, Médina',
    bedrooms: 6,
    bathrooms: 5,
    area: 320,
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
    ],
    description: 'Riad traditionnel de 320m² entièrement rénové au cœur de la médina historique de Marrakech. Cette demeure authentique comprend 6 chambres avec salles de bains privatives, un salon marocain traditionnel, une salle à manger, une cuisine moderne, et des espaces de détente. Le patio central avec fontaine en zellige crée une atmosphère unique. La terrasse panoramique de 80m² offre une vue exceptionnelle sur les montagnes de l\'Atlas. Matériaux nobles : tadelakt, bois de cèdre, fer forgé artisanal. Hammam privé et système de chauffage au sol.',
    features: ['Patio Central', 'Terrasse', 'Hammam', 'Cheminée', 'Parking']
  },
  {
    id: '3',
    title: 'Appartement Standing',
    type: 'Appartement',
    status: 'Location',
    price: 8500,
    location: 'Rabat, Agdal',
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    ],
    description: 'Appartement de standing de 140m² situé dans une résidence haut de gamme à Agdal, Rabat. Comprend 3 chambres dont une suite parentale, 2 salles de bains modernes, un salon-séjour de 45m², une cuisine américaine équipée, et un balcon de 15m² avec vue dégagée. Prestations premium : climatisation réversible, parquet flottant, cuisine équipée Siemens, dressing intégré. La résidence offre un concierge 24h/24, ascenseur, parking souterrain sécurisé, et espaces verts aménagés. Proche des commodités et transports.',
    features: ['Balcon', 'Ascenseur', 'Concierge', 'Parking', 'Climatisation']
  },
  {
    id: '4',
    title: 'Maison Familiale',
    type: 'Maison',
    status: 'Vente',
    price: 1950000,
    location: 'Salé, Hay Riad',
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    description: 'Maison familiale de 220m² idéalement située dans le quartier résidentiel de Hay Riad à Salé. Cette propriété comprend 4 chambres confortables, 3 salles de bains, un salon spacieux de 35m², une salle à manger, une cuisine moderne, et un bureau. Le jardin paysager de 300m² avec arbres fruitiers offre un cadre verdoyant. Garage double, cave de 20m², buanderie, et cheminée dans le salon principal. Quartier calme avec écoles, commerces et transports à proximité. Finitions soignées et entretien impeccable.',
    features: ['Jardin', 'Garage Double', 'Cheminée', 'Buanderie', 'Cave']
  },
  {
    id: '5',
    title: 'Villa Vue Mer',
    type: 'Villa',
    status: 'Location',
    price: 25000,
    location: 'Mohammedia, Bord de Mer',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg'
    ],
    description: 'Villa d\'exception de 350m² avec vue mer panoramique à Mohammedia. Cette propriété unique offre 4 chambres avec vue mer, 3 salles de bains luxueuses, un salon principal de 50m² avec baies vitrées, une salle à manger, une cuisine moderne équipée, et une suite parentale avec dressing. Accès direct à la plage privée, piscine à débordement de 15x7m, terrasse de 100m² avec pergola, et jardin méditerranéen. Espaces de réception extérieurs avec barbecue intégré. Garage, local technique, et système d\'arrosage automatique. Location saisonnière ou annuelle.',
    features: ['Vue Mer', 'Accès Plage', 'Piscine', 'Terrasse', 'Barbecue']
  },
  {
    id: '6',
    title: 'Riad Rénové',
    type: 'Riad',
    status: 'Location',
    price: 18000,
    location: 'Fès, Médina',
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    images: [
      'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    ],
    description: 'Riad authentique de 280m² entièrement rénové dans la médina historique de Fès. Cette demeure d\'époque comprend 5 chambres traditionnelles, 4 salles de bains, un salon marocain avec cheminée, une salle à manger, une cuisine moderne, et des espaces de détente. Le patio central avec fontaine en marbre et colonnes sculptées crée une ambiance unique. Terrasse panoramique de 60m² avec vue sur la médina. Matériaux nobles : zellige de Fès, bois de cèdre, tadelakt coloré. WiFi haut débit, climatisation, et chauffage central. Idéal pour maison d\'hôtes ou résidence de charme.',
    features: ['Patio', 'Fontaine', 'Terrasse', 'WiFi', 'Climatisation']
  }
];