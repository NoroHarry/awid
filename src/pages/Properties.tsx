import React, { useState } from 'react';
import PropertyGrid from '../components/PropertyGrid';
import PropertyDetail from '../components/PropertyDetail';
import { properties } from '../data/properties';
import { Property } from '../types/Property';
import { Search, Filter, Home as HomeIcon } from 'lucide-react';

const Properties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <HomeIcon className="w-5 h-5 text-amber-400" />
            <span className="text-white text-sm font-medium">Toutes nos Propriétés</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
            Découvrez Nos
            <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Propriétés Exclusives
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Une sélection premium de villas, riads et propriétés d'exception au Maroc
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une propriété..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={properties} 
        onPropertySelect={handlePropertySelect}
      />

      {/* Property Detail Modal */}
      <PropertyDetail
        property={selectedProperty}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Properties;