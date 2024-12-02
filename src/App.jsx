import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { categories, products } from './data/products';
import CategorySection from './components/CategorySection';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Hero />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <CategorySection title={categories.JUTE} products={products.juteBags} />
                <CategorySection title={categories.COTTON} products={products.cottonBags} />
              </>
            } />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Eco-Friendly Products</h3>
              <p className="text-gray-400">Sustainable solutions for a better tomorrow</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;