import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              BankersDen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">
                Loans
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/loans/home" className="block px-4 py-2 hover:bg-gray-50">Home Loan</Link>
                <Link to="/loans/personal" className="block px-4 py-2 hover:bg-gray-50">Personal Loan</Link>
                <Link to="/loans/business" className="block px-4 py-2 hover:bg-gray-50">Business Loan</Link>
                <Link to="/loans/car" className="block px-4 py-2 hover:bg-gray-50">Car Loan</Link>
                <Link to="/loans/education" className="block px-4 py-2 hover:bg-gray-50">Education Loan</Link>
                <Link to="/loans/property" className="block px-4 py-2 hover:bg-gray-50">Loan Against Property</Link>
                <Link to="/loans/gold" className="block px-4 py-2 hover:bg-gray-50">Gold Loan</Link>
              </div>
            </div>
            <Link to="/credit-cards" className="text-gray-700 hover:text-blue-600 font-medium">
              Credit Cards
            </Link>
            <Link to="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">
              Insurance
            </Link>
            <Link to="/cibil-score" className="text-gray-700 hover:text-blue-600 font-medium">
              CIBIL Score
            </Link>
            <Link to="/emi-calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              EMI Calculator
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
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
              <Link to="/loans/personal" className="text-gray-700 hover:text-blue-600 font-medium">Personal Loan</Link>
              <Link to="/loans/business" className="text-gray-700 hover:text-blue-600 font-medium">Business Loan</Link>
              <Link to="/loans/car" className="text-gray-700 hover:text-blue-600 font-medium">Car Loan</Link>
              <Link to="/loans/education" className="text-gray-700 hover:text-blue-600 font-medium">Education Loan</Link>
              <Link to="/credit-cards" className="text-gray-700 hover:text-blue-600 font-medium">Credit Cards</Link>
              <Link to="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">Insurance</Link>
              <Link to="/cibil-score" className="text-gray-700 hover:text-blue-600 font-medium">CIBIL Score</Link>
              <Link to="/emi-calculator" className="text-gray-700 hover:text-blue-600 font-medium">EMI Calculator</Link>
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
