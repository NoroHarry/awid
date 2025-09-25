import React from 'react';
import { Search, MapPin, Home } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Welcome Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <Home className="w-5 h-5 text-amber-400" />
          <span className="text-white text-sm font-medium">Bienvenue chez Awid Immobilier</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
          Trouvez Votre
          <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            Maison de Rêve
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
          Découvrez notre sélection exclusive de villas, riads et propriétés d'exception au Maroc
        </p>

        {/* Search Bar */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ville, quartier..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Type de bien</option>
              <option>Villa</option>
              <option>Maison</option>
              <option>Riad</option>
              <option>Appartement</option>
            </select>
            <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Vente / Location</option>
              <option>Vente</option>
              <option>Location</option>
            </select>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Rechercher</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
          {[
            { number: '500+', label: 'Propriétés' },
            { number: '1200+', label: 'Clients Satisfaits' },
            { number: '15+', label: 'Années d\'Expérience' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;