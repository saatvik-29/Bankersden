import React from 'react';
import { Calculator, TrendingDown } from 'lucide-react';
import { EMICalculatorWidget } from '../components/EMICalculatorWidget';
import { EligibilityCalculator } from '../components/EligibilityCalculator';
import { PartPaymentCalculator } from '../components/PartPaymentCalculator';

export const Calculators: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Calculators
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Make informed financial decisions with our advanced calculators
            </p>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section - First */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                EMI Calculator
              </h2>
              <p className="text-gray-600">
                Calculate your monthly loan payments and plan your finances better
              </p>
            </div>
            <EMICalculatorWidget />
          </div>
        </div>
      </section>

      {/* Eligibility Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EligibilityCalculator />
        </div>
      </section>

      {/* Part Payment Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartPaymentCalculator />
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Financial Tools
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive suite of financial calculators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CIBIL Score Check</h3>
              <p className="text-gray-600 mb-4">Check your credit score and get improvement tips</p>
              <a href="/cibil-score" className="text-secondary-600 font-semibold hover:text-secondary-700">
                Check Score →
              </a>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SIP Calculator</h3>
              <p className="text-gray-600 mb-4">Plan your systematic investment and wealth creation</p>
              <span className="text-accent-600 font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};