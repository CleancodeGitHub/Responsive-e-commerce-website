import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Stylish</h3>
            <p className="text-sm">
              Your one-stop destination for trendy and stylish clothing.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Fashion Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@stylish.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 Stylish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}