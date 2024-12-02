import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1590047519833-29c4f2d3c83e?auto=format&fit=crop&w=2000&q=80"
        alt="Eco-friendly products"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sustainable Living, <br />Stylish Choices
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Discover our collection of eco-friendly bags and accessories, 
            crafted with care for both style and sustainability.
          </p>
        </motion.div>
      </div>
    </div>
  );
}