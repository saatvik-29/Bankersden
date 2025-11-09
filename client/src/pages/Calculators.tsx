import React, { useState } from 'react';
import { Calculator, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { EMICalculatorWidget } from '../components/EMICalculatorWidget';
import { EligibilityCalculator } from '../components/EligibilityCalculator';
import { PartPaymentCalculator } from '../components/PartPaymentCalculator';

type CalculatorType = 'emi' | 'eligibility' | 'partPayment';

export const Calculators: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('emi');

  const calculatorOptions = [
    {
      id: 'emi' as CalculatorType,
      name: 'EMI Calculator',
      icon: Calculator,
      description: 'Calculate monthly payments'
    },
    {
      id: 'eligibility' as CalculatorType,
      name: 'Eligibility Calculator',
      icon: DollarSign,
      description: 'Check loan eligibility'
    },
    {
      id: 'partPayment' as CalculatorType,
      name: 'Part Payment Calculator',
      icon: Percent,
      description: 'Plan early repayment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Background Image and Illustration - Lighter Design */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Financial Calculators
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Make informed financial decisions with our advanced calculators
              </p>
              
              {/* Calculator Options */}
              <div className="grid grid-cols-1 gap-3">
                {calculatorOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setActiveCalculator(option.id);
                      // Smooth scroll to calculator section
                      setTimeout(() => {
                        document.getElementById('calculator-section')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }, 100);
                    }}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 text-left ${
                      activeCalculator === option.id
                        ? 'bg-blue-600 text-white shadow-xl scale-105'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:shadow-lg shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      activeCalculator === option.id ? 'bg-blue-700' : 'bg-blue-100'
                    }`}>
                      <option.icon className={`w-6 h-6 ${activeCalculator === option.id ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{option.name}</div>
                      <div className={`text-sm ${activeCalculator === option.id ? 'text-blue-100' : 'text-gray-600'}`}>
                        {option.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Illustration - Calculator Workspace Image */}
            <div className="hidden lg:block">
              <div className="relative animate-float">
                <img 
                  src="/calculator-hero.jpg" 
                  alt="Financial Calculator Workspace" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content Section */}
      <section id="calculator-section" className="py-16 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* EMI Calculator */}
          {activeCalculator === 'emi' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
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
          )}

          {/* Eligibility Calculator */}
          {activeCalculator === 'eligibility' && (
            <div className="animate-fade-in">
              <EligibilityCalculator />
            </div>
          )}

          {/* Part Payment Calculator */}
          {activeCalculator === 'partPayment' && (
            <div className="animate-fade-in">
              <PartPaymentCalculator />
            </div>
          )}
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