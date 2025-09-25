import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../types/Property';
import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const navigate = useNavigate();

  const formatPrice = (price: number, status: string) => {
    if (status === 'Location') {
      return `${price.toLocaleString()} DH/mois`;
    }
    return `${price.toLocaleString()} DH`;
  };

  const handleViewDetails = () => {
    navigate(`/propriete/${property.id}`);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.status === 'Vente' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {property.status}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
            {property.type}
          </span>
        </div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleViewDetails}
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0"
          >
            <Eye className="w-5 h-5" />
            <span>Voir Détails</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price, property.status)}
          </span>
        </div>

        {/* Property Details */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} ch.</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} sdb</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area}m²</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleViewDetails}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Plus d'infos
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;