import React, { useState, useMemo } from 'react';
import { Property } from '../types/Property';
import PropertyCard from './PropertyCard';
import { Filter, Grid, List } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, onPropertySelect }) => {
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const [selectedStatus, setSelectedStatus] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<string>('recent');

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties;

    // Filter by type
    if (selectedType !== 'Tous') {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    // Filter by status
    if (selectedStatus !== 'Tous') {
      filtered = filtered.filter(property => property.status === selectedStatus);
    }

    // Sort properties
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'area-large':
        filtered.sort((a, b) => b.area - a.area);
        break;
      default:
        // Keep original order for 'recent'
        break;
    }

    return filtered;
  }, [properties, selectedType, selectedStatus, sortBy]);

  const propertyTypes = ['Tous', 'Villa', 'Maison', 'Riad', 'Appartement'];
  const statuses = ['Tous', 'Vente', 'Location'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-blue-600">Propriétés</span> Exclusives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de biens d'exception, soigneusement choisis pour répondre à vos attentes
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-900">Filtres:</span>
              </div>
              
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="recent">Plus Récent</option>
                <option value="price-low">Prix Croissant</option>
                <option value="price-high">Prix Décroissant</option>
                <option value="area-large">Plus Grand</option>
              </select>

              <div className="ml-auto text-sm text-gray-600">
                {filteredAndSortedProperties.length} propriété(s) trouvée(s)
              </div>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard
                property={property}
                onViewDetails={onPropertySelect}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune propriété trouvée</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres de recherche</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;