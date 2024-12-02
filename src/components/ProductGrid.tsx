import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'T-Shirts'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Jackets'
  },
  {
    id: 3,
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Casual Sneakers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Shoes'
  },
  // Add more products as needed
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-[300px] w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart size={20} />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{product.category}</p>
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">${product.price}</p>
              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}