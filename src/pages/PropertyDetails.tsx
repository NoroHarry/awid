import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import { ArrowLeft, MapPin, Bed, Bath, Square, Star, Share, Heart, Phone } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété non trouvée</h2>
          <button
            onClick={() => navigate('/proprietes')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour aux propriétés
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, status: string) => {
    if (status === 'Location') {
      return `${price.toLocaleString()} DH/mois`;
    }
    return `${price.toLocaleString()} DH`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Retour</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-6 shadow-2xl animate-fade-in">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  property.status === 'Vente' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {property.status}
                </span>
              </div>

              {/* Type Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up animation-delay-200">
              {property.images.slice(1, 4).map((image, index) => (
                <div key={index} className="h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-amber-500 rounded-full mr-3"></div>
                Description Détaillée
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{property.description}</p>
              
              {/* Features */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Équipements & Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-blue-50 rounded-lg p-3"
                  >
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Property Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up animation-delay-600">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
              
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {formatPrice(property.price, property.status)}
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Chambres</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <Bath className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Salles de bain</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Square className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">m²</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="font-bold text-gray-900">{property.type}</div>
                  <div className="text-sm text-gray-600">Type</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Contacter l'Agent
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Sauvegarder</span>
                  </button>
                  <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Share className="w-4 h-4" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Agent Contact */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg animate-fade-in-up animation-delay-800">
              <h3 className="font-bold text-gray-900 mb-4">Votre Agent Immobilier</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <div className="font-bold text-gray-900">Awid Immobilier</div>
                  <div className="text-sm text-blue-600">Agent Certifié</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+212 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>✉️</span>
                  <span>contact@awidimmo.ma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;