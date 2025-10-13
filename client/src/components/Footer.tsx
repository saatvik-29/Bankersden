import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">BankersDen</h3>
            <p className="text-sm mb-4">
              Your trusted partner for all financial needs. Get the best deals on loans, credit cards, and insurance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Loans</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/loans/home" className="hover:text-blue-400 transition-colors">Home Loan</Link></li>
              <li><Link to="/loans/personal" className="hover:text-blue-400 transition-colors">Personal Loan</Link></li>
              <li><Link to="/loans/business" className="hover:text-blue-400 transition-colors">Business Loan</Link></li>
              <li><Link to="/loans/car" className="hover:text-blue-400 transition-colors">Car Loan</Link></li>
              <li><Link to="/loans/education" className="hover:text-blue-400 transition-colors">Education Loan</Link></li>
              <li><Link to="/loans/property" className="hover:text-blue-400 transition-colors">Loan Against Property</Link></li>
              <li><Link to="/loans/gold" className="hover:text-blue-400 transition-colors">Gold Loan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/credit-cards" className="hover:text-blue-400 transition-colors">Credit Cards</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-400 transition-colors">Insurance</Link></li>
              <li><Link to="/cibil-score" className="hover:text-blue-400 transition-colors">CIBIL Score Check</Link></li>
              <li><Link to="/emi-calculator" className="hover:text-blue-400 transition-colors">EMI Calculator</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Financial Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>support@bankersden.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 BankersDen. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
