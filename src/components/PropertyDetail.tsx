import React, { useState } from 'react';
import { Property } from '../types/Property';
import { X, MapPin, Bed, Bath, Square, Star, Share, Heart, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

interface PropertyDetailProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property || !isOpen) return null;

  const formatPrice = (price: number, status: string) => {
    if (status === 'Location') {
      return `${price.toLocaleString()} DH/mois`;
    }
    return `${price.toLocaleString()} DH`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{property.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-white/90 text-sm">{property.type} • {property.status}</p>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-24 rounded-xl overflow-hidden border-3 transition-all duration-300 hover:scale-105 shadow-lg ${
                      index === currentImageIndex 
                        ? 'border-blue-500 scale-105 shadow-blue-200' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-amber-500 rounded-full mr-3"></div>
                  Description Détaillée
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
              </div>

              {/* Property Specifications */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-amber-500 rounded-full mr-3"></div>
                  Spécifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Chambres</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-xl">
                    <Bath className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Salles de bain</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Square className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-600">m² Surface</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">{property.type}</div>
                    <div className="text-sm text-gray-600">Type de bien</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-amber-500 rounded-full mr-3"></div>
                  Équipements & Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
                      <Star className="w-5 h-5 text-amber-500" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Price & Status */}
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.status === 'Vente' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {property.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                    {property.type}
                  </span>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  {formatPrice(property.price, property.status)}
                </div>
                <p className="text-gray-600 text-sm">Prix {property.status === 'Location' ? 'mensuel' : 'de vente'}</p>
              </div>

              {/* Location Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Localisation
                </h4>
                <p className="text-gray-700 mb-4">{property.location}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">📍 Quartier prisé avec tous commerces et services à proximité</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
                  Contacter l'Agent
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Sauvegarder</span>
                  </button>
                  <button className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Share className="w-5 h-5" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>

              {/* Agent Contact */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Votre Agent Immobilier</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    AI
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Awid Immobilier</div>
                    <div className="text-sm text-blue-600 font-medium">Agent Certifié Premium</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-600 ml-2">4.9/5 (127 avis)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">+212 6 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <span className="text-blue-600">✉️</span>
                    <span className="text-gray-700 font-medium">contact@awidimmo.ma</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">💡 Réponse garantie sous 2h • Visite possible 7j/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;