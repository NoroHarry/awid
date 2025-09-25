export interface Property {
  id: string;
  title: string;
  type: 'Villa' | 'Maison' | 'Riad' | 'Appartement';
  status: 'Vente' | 'Location';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  features: string[];
}