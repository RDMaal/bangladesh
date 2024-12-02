export const calculateDisplayPrice = (purchasePrice) => {
  // Ensure we're working with a number
  const price = typeof purchasePrice === 'string' 
    ? parseFloat(purchasePrice.replace(/[^0-9.]/g, ''))
    : purchasePrice;
    
  if (isNaN(price)) {
    return '$0.00';
  }
  
  // Calculate 300% margin (original price + 300% = 4x)
  const marginPrice = price * 4;
  
  // Round to 2 decimal places and format
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(marginPrice);
};