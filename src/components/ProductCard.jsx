import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { calculateDisplayPrice } from '../utils/priceCalculator';
import ProductFeatures from './ProductFeatures';

export default function ProductCard({ product }) {
  const displayPrice = calculateDisplayPrice(product.purchasePrice);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-90 transition-opacity duration-300 lg:h-80">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{product.description}</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Size: {product.size}</p>
            <p className="text-sm text-gray-500">Material: {product.material}</p>
            <ProductFeatures features={product.features} />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-emerald-600">{displayPrice}</p>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}