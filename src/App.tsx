import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PropertyDetail from './components/PropertyDetail';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Property } from './types/Property';

function App() {
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
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home onPropertySelect={handlePropertySelect} />} 
            />
            <Route path="/proprietes" element={<Properties />} />
            <Route path="/propriete/:id" element={<PropertyDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        <PropertyDetail
          property={selectedProperty}
          isOpen={isDetailOpen}
          onClose={handleCloseDetail}
        />
      </div>
    </Router>
  );
}

export default App;