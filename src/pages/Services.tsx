import React from 'react';
import { Home, Key, Calculator, FileText, Users, Shield, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Vente de Propriétés',
      description: 'Nous vous accompagnons dans la vente de votre bien immobilier avec une expertise reconnue et un réseau étendu.',
      features: ['Estimation gratuite', 'Marketing digital', 'Négociation experte', 'Suivi personnalisé'],
      color: 'blue'
    },
    {
      icon: Key,
      title: 'Location & Gestion',
      description: 'Services complets de location et gestion locative pour optimiser la rentabilité de vos investissements.',
      features: ['Recherche locataires', 'Gestion administrative', 'Maintenance', 'Encaissement loyers'],
      color: 'green'
    },
    {
      icon: Calculator,
      title: 'Estimation Gratuite',
      description: 'Obtenez une estimation précise et gratuite de votre bien grâce à notre expertise du marché local.',
      features: ['Analyse de marché', 'Rapport détaillé', 'Conseils personnalisés', 'Sans engagement'],
      color: 'amber'
    },
    {
      icon: FileText,
      title: 'Conseil Juridique',
      description: 'Accompagnement juridique complet pour sécuriser toutes vos transactions immobilières.',
      features: ['Vérification documents', 'Conseil fiscal', 'Rédaction contrats', 'Suivi notarial'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Investissement',
      description: 'Conseils en investissement immobilier pour constituer et optimiser votre patrimoine.',
      features: ['Analyse rentabilité', 'Sélection biens', 'Montage financier', 'Stratégie fiscale'],
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Assurance & Garanties',
      description: 'Protection complète avec nos partenaires assureurs pour sécuriser vos transactions.',
      features: ['Assurance habitation', 'Garantie loyers', 'Protection juridique', 'Assistance 24h/7j'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200',
      green: 'from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200',
      amber: 'from-amber-500 to-amber-600 bg-amber-50 text-amber-600 border-amber-200',
      purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200',
      red: 'from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-white text-sm font-medium">Services Premium</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
            Nos <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Services</span>
            <span className="block">Immobiliers</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Une gamme complète de services gratuits et premium pour tous vos projets immobiliers
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-in-up animation-delay-600">
            {[
              { number: '100%', label: 'Services Gratuits' },
              { number: '24/7', label: 'Support Client' },
              { number: '15+', label: 'Années d\'Expertise' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Des Services <span className="text-blue-600">Complets</span> et <span className="text-amber-500">Gratuits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bénéficiez de notre expertise et de nos services premium sans frais cachés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${colorClasses.split(' ')[2]}`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full mt-6 py-3 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                    En Savoir Plus
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Commencer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg">
              Consultation Gratuite
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;