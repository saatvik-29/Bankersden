import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CibilScore = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CIBIL Score Check</h1>
          <p className="text-xl text-gray-600">
            Check your credit score and get personalized loan recommendations
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We're integrating CIBIL score checking functionality. Check back soon!
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
