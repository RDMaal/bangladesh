export const parsePrice = (priceString) => {
  if (!priceString) return 0;
  
  // Handle strings like "US$ 0.85"
  if (typeof priceString === 'string') {
    const match = priceString.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  }
  
  // Handle numeric values
  return typeof priceString === 'number' ? priceString : 0;
};

export const transformProductData = (rawData) => {
  if (!rawData || !Array.isArray(rawData)) return [];
  
  return rawData.map((item, index) => ({
    id: item.id || `product-${index}`,
    name: item.name || 'Unnamed Product',
    size: item.size || '',
    material: item.material || '',
    features: Array.isArray(item.features) ? item.features : [],
    purchasePrice: parsePrice(item.purchasePrice),
    image: item.image || '',
    description: item.description || ''
  }));
};