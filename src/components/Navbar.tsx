import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Stylish</h1>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#categories" className="text-gray-700 hover:text-gray-900">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#shop" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Shop</a>
            <a href="#categories" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Categories</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`border-t ${isSearchOpen ? 'block' : 'hidden'}`}>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}