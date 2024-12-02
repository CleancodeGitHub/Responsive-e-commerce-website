import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with our latest collections, exclusive offers, and fashion tips.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Subscribe
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}