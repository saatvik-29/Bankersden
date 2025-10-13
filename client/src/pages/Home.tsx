import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Home as HomeIcon,
  Briefcase,
  Car,
  GraduationCap,
  Building2,
  Coins,
  CreditCard,
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Calculator,
  FileText,
  Clock,
  DollarSign,
} from 'lucide-react';
import { Button } from '../components/Button';

interface Testimonial {
  id: string;
  customer_name: string;
  customer_city: string;
  loan_type: string;
  rating: number;
  testimonial_text: string;
}

interface PartnerBank {
  id: string;
  bank_name: string;
  logo_url: string;
}

export const Home = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [partnerBanks, setPartnerBanks] = useState<PartnerBank[]>([]);
  const [currentHeroCard, setCurrentHeroCard] = useState(0);

  useEffect(() => {
    fetchTestimonials();
    fetchPartnerBanks();
  }, []);

  // Hero cards data
  const heroCards = [
    {
      title: "Personal Loans",
      subtitle: "Quick & Easy Approval",
      description: "Get personal loans up to ₹25 lakhs with competitive interest rates starting from 8.5% p.a. and minimal documentation.",
      icon: DollarSign,
      gradient: "from-primary-600 to-primary-700",
      buttonText: "Apply Now",
      buttonLink: "/loans/personal",
      stats: { label: "Loans Disbursed", value: "₹10,000+ Cr" }
    },
    {
      title: "Home Loans",
      subtitle: "Your Dream Home Awaits",
      description: "Secure your dream home with our comprehensive home loan solutions. Competitive rates and flexible repayment options.",
      icon: HomeIcon,
      gradient: "from-secondary-600 to-secondary-700",
      buttonText: "Explore Home Loans",
      buttonLink: "/loans/home",
      stats: { label: "Happy Customers", value: "5 Lakh+" }
    },
    {
      title: "Business Loans",
      subtitle: "Fuel Your Growth",
      description: "Power your business expansion with our flexible business loan solutions. Quick approval and competitive rates.",
      icon: TrendingUp,
      gradient: "from-accent-600 to-accent-700",
      buttonText: "Get Business Loan",
      buttonLink: "/loans/business",
      stats: { label: "Cities Covered", value: "4,000+" }
    }
  ];

  const nextCard = () => {
    setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
  };

  const prevCard = () => {
    setCurrentHeroCard((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  const fetchTestimonials = async () => {
    // Static testimonials data
    const staticTestimonials: Testimonial[] = [
      {
        id: '1',
        customer_name: 'Priya Sharma',
        customer_city: 'Mumbai',
        loan_type: 'Home Loan',
        rating: 5,
        testimonial_text: 'BankersDen made my home loan process so smooth. The team was professional and helped me get the best rate.'
      },
      {
        id: '2',
        customer_name: 'Rajesh Kumar',
        customer_city: 'Delhi',
        loan_type: 'Personal Loan',
        rating: 5,
        testimonial_text: 'Quick approval and competitive rates. Got my personal loan approved within 24 hours. Highly recommended!'
      },
      {
        id: '3',
        customer_name: 'Sneha Patel',
        customer_city: 'Bangalore',
        loan_type: 'Business Loan',
        rating: 5,
        testimonial_text: 'Excellent service for my business expansion. The loan officer was very knowledgeable and helpful.'
      }
    ];
    setTestimonials(staticTestimonials);
  };

  const fetchPartnerBanks = async () => {
    // Static partner banks data
    const staticBanks: PartnerBank[] = [
      { id: '1', bank_name: 'HDFC Bank', logo_url: '/logos/hdfc.png' },
      { id: '2', bank_name: 'ICICI Bank', logo_url: '/logos/icici.png' },
      { id: '3', bank_name: 'SBI', logo_url: '/logos/sbi.png' },
      { id: '4', bank_name: 'Axis Bank', logo_url: '/logos/axis.png' },
      { id: '5', bank_name: 'Kotak Mahindra', logo_url: '/logos/kotak.png' },
      { id: '6', bank_name: 'Yes Bank', logo_url: '/logos/yes.png' },
      { id: '7', bank_name: 'IndusInd Bank', logo_url: '/logos/indusind.png' },
      { id: '8', bank_name: 'Federal Bank', logo_url: '/logos/federal.png' }
    ];
    setPartnerBanks(staticBanks);
  };

  const loanProducts = [
    {
      icon: HomeIcon,
      title: 'Home Loan',
      description: 'Get your dream home with attractive interest rates starting from 8.5% p.a.',
      link: '/loans/home',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: Briefcase,
      title: 'Personal Loan',
      description: 'Quick personal loans up to ₹25 lakhs with minimal documentation.',
      link: '/loans/personal',
      color: 'bg-secondary-100 text-secondary-600',
    },
    {
      icon: Building2,
      title: 'Business Loan',
      description: 'Fuel your business growth with flexible business loans.',
      link: '/loans/business',
      color: 'bg-accent-100 text-accent-600',
    },
    {
      icon: Car,
      title: 'Car Loan',
      description: 'Drive your dream car with easy EMI options and quick approval.',
      link: '/loans/car',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: GraduationCap,
      title: 'Education Loan',
      description: 'Invest in your future with education loans for India and abroad.',
      link: '/loans/education',
      color: 'bg-secondary-100 text-secondary-600',
    },
    {
      icon: Coins,
      title: 'Gold Loan',
      description: 'Get instant cash against your gold with attractive interest rates.',
      link: '/loans/gold',
      color: 'bg-accent-100 text-accent-600',
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Best Interest Rates',
      description: 'Compare and choose from the most competitive interest rates in the market.',
    },
    {
      icon: Users,
      title: '275+ Bank Partners',
      description: 'Access to a wide network of trusted financial institutions.',
    },
    {
      icon: Award,
      title: 'Quick Approval',
      description: 'Get loan approvals within 24-48 hours with minimal documentation.',
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Your data is protected with bank-grade security standards.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose Your Product',
      description: 'Select from loans, credit cards, or insurance products.',
      icon: Calculator,
    },
    {
      number: '2',
      title: 'Fill Application',
      description: 'Complete a simple online application form.',
      icon: FileText,
    },
    {
      number: '3',
      title: 'Get Instant Approval',
      description: 'Receive approval notification within 24-48 hours.',
      icon: Clock,
    },
    {
      number: '4',
      title: 'Receive Funds',
      description: 'Get your loan amount disbursed directly to your account.',
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cards */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Financial Partner
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Get the best deals on loans, credit cards, and insurance. Compare offers from 275+ banks and NBFCs in one place.
            </p>
          </div>

          {/* Hero Cards Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Card Container */}
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentHeroCard * 100}%)` }}
              >
                {heroCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 md:p-12 text-white shadow-2xl`}>
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Content */}
                        <div className="animate-fade-in">
                          <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                              <card.icon className="w-8 h-8" />
                            </div>
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold">{card.title}</h2>
                              <p className="text-lg text-white/80">{card.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            {card.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link to={card.buttonLink}>
                              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                                {card.buttonText}
                              </Button>
                            </Link>
                            <Link to="/cibil-score">
                              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                Check CIBIL Score
                              </Button>
                            </Link>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl font-bold mb-1">{card.stats.value}</div>
                            <div className="text-white/80 text-sm">{card.stats.label}</div>
                          </div>
                        </div>

                        {/* Quick Form */}
                        <div className="hidden lg:block animate-slide-in">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-6">Quick Eligibility Check</h3>
                            <div className="space-y-4">
                              <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                              />
                              <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                              />
                              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                                <option value="">Select Loan Type</option>
                                <option value="home">Home Loan</option>
                                <option value="personal">Personal Loan</option>
                                <option value="business">Business Loan</option>
                              </select>
                              <Button className="w-full" size="lg" variant="secondary">
                                Check Eligibility
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevCard}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCard}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Card Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {heroCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentHeroCard ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">₹10,000+ Cr</div>
              <div className="text-primary-200 text-sm">Loans Disbursed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5 Lakh+</div>
              <div className="text-primary-200 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4,000+</div>
              <div className="text-primary-200 text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Financial Products
            </h2>
            <p className="text-xl text-secondary-600">
              Choose from a wide range of financial solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-300"
              >
                <div className={`w-14 h-14 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-secondary-600 mb-4">{product.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Link
              to="/credit-cards"
              className="bg-gradient-to-r from-secondary-800 to-secondary-900 text-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CreditCard className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Credit Cards</h3>
              <p className="text-secondary-300 mb-4">
                Compare and apply for credit cards with the best rewards and benefits
              </p>
              <div className="flex items-center font-semibold">
                Explore Cards <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
            <Link
              to="/insurance"
              className="bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Insurance</h3>
              <p className="text-accent-100 mb-4">
                Protect yourself and your family with comprehensive insurance plans
              </p>
              <div className="flex items-center font-semibold">
                Get Insured <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose BankersDen?
            </h2>
            <p className="text-xl text-secondary-600">
              We make your financial journey simple and hassle-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-secondary-600">
              Get your loan approved in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Circle */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600">{step.description}</p>
                
                {/* Animated Glowing Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary-200"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 animate-glow-move"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-secondary-600">
                Real stories from real people
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-700 mb-4 italic">"{testimonial.testimonial_text}"</p>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.customer_name}</div>
                    <div className="text-sm text-secondary-600">{testimonial.customer_city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {partnerBanks.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Partner Banks & NBFCs
              </h2>
              <p className="text-xl text-secondary-600">
                Trusted by leading financial institutions across India
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partnerBanks.map((bank) => (
                <div
                  key={bank.id}
                  className="flex items-center justify-center p-6 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-secondary-700">{bank.bank_name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of satisfied customers and get the best financial products today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/loans/personal">
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                Apply for Loan
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
