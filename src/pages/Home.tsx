import React from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import { properties } from '../data/properties';
import { Property } from '../types/Property';

interface HomeProps {
  onPropertySelect: (property: Property) => void;
}

const Home: React.FC<HomeProps> = ({ onPropertySelect }) => {
  return (
    <>
      <Hero />
      <PropertyGrid 
        properties={properties} 
        onPropertySelect={onPropertySelect}
      />
    </>
  );
};

export default Home;