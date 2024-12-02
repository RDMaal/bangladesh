import React from 'react';

export default function ProductFeatures({ features }) {
  if (!features || features.length === 0) return null;
  
  return (
    <ul className="mt-2 text-sm text-gray-500">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
  );
}