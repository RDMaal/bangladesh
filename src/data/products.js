import { transformProductData } from '../utils/dataTransformer';

export const categories = {
  JUTE: 'Jute Bags',
  COTTON: 'Cotton Bags',
  SHOPPING: 'Shopping Bags',
  BASKETS: 'Baskets',
  PLACEMATS: 'Placemats'
};

const rawJuteBags = [
  {
    id: 'OPOJT0001',
    name: 'Natural Jute Tote',
    size: '35x38x18cm',
    material: '14x14 natural jute fabric, without lamination, 4% starch coating',
    features: ['cotton rope handle'],
    purchasePrice: 0.85,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    description: 'Eco-friendly natural jute tote bag with cotton rope handles, perfect for everyday use.'
  },
  {
    id: 'OPOJT0002',
    name: 'Basic Jute Bag',
    size: '35x40x20cm',
    material: '12x12 natural jute fabric, without lamination, 4% starch coating',
    purchasePrice: 0.70,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Simple and sturdy jute bag for sustainable shopping.'
  }
];

const rawCottonBags = [
  {
    id: 'OPOCT0001',
    name: 'Canvas Tote',
    size: '28x28x8cm',
    material: '380 GSM cotton canvas',
    purchasePrice: 0.65,
    image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight canvas tote perfect for daily essentials.'
  },
  {
    id: 'OPOCT0002',
    name: 'Cotton Canvas Tote',
    size: '40x37x14cm',
    material: '380 GSM cotton canvas',
    features: ['Front pocket'],
    purchasePrice: 1.80,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    description: 'Premium cotton canvas tote with convenient front pocket storage.'
  }
];

export const products = {
  juteBags: transformProductData(rawJuteBags),
  cottonBags: transformProductData(rawCottonBags)
};