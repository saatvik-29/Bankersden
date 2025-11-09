import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-900 hover:text-blue-900 transition-colors">
              BankersDen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-secondary-700 hover:text-primary-600 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200">
                Loans
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-primary-100">
                <Link to="/loans/home" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Home Loan</Link>
                <Link to="/loans/property" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Loan Against Property</Link>
                <Link to="/loans/car" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Car Loan</Link>
                <Link to="/loans/personal" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Personal Loan</Link>
                <Link to="/loans/business" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Business Loan</Link>
                <Link to="/loans/education" className="block px-6 py-3 hover:bg-primary-50 text-secondary-700 hover:text-primary-600 transition-colors">Education Loan</Link>
              </div>
            </div>
            <Link to="/calculators" className="text-secondary-700 hover:text-primary-600 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200">
              Calculators
            </Link>
            <Link to="/about" className="text-secondary-700 hover:text-primary-600 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200">
              About
            </Link>
            <Link to="/blog" className="text-secondary-700 hover:text-primary-600 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200">
              Blog
            </Link>
            <Link to="/contact" className="text-secondary-700 hover:text-primary-600 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition-all duration-200">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/loans/home" className="text-gray-700 hover:text-blue-600 font-medium">Home Loan</Link>
              <Link to="/loans/property" className="text-gray-700 hover:text-blue-600 font-medium">Loan Against Property</Link>
              <Link to="/loans/car" className="text-gray-700 hover:text-blue-600 font-medium">Car Loan</Link>
              <Link to="/loans/personal" className="text-gray-700 hover:text-blue-600 font-medium">Personal Loan</Link>
              <Link to="/loans/business" className="text-gray-700 hover:text-blue-600 font-medium">Business Loan</Link>
              <Link to="/loans/education" className="text-gray-700 hover:text-blue-600 font-medium">Education Loan</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
              <Link to="/bd-partner" className="text-gray-700 hover:text-blue-600 font-medium">BD Partner</Link>
              <Link to="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">Insurance</Link>
              <Link to="/calculators" className="text-gray-700 hover:text-blue-600 font-medium">Calculators</Link>
              <Link to="/cibil-score" className="text-gray-700 hover:text-blue-600 font-medium">CIBIL Score</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium text-center">Get Started</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
