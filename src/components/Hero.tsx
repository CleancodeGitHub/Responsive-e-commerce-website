import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Summer Collection 2024
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover our latest collection of trendy and comfortable clothing for every occasion.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}