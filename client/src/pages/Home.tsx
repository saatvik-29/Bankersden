import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Home as HomeIcon,
  Briefcase,
  Car,
  GraduationCap,
  Building2,
  Shield,
  TrendingUp,
  Users,
  Award,
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
import { FAQ } from '../components/FAQ';
import { FloatingElements } from '../components/AnimatedGraphics';
import { LoanCardAnimation, CalculatorSideAnimation } from '../components/LottieStyleAnimations';


interface Testimonial {
  id: string;
  customer_name: string;
  customer_city: string;
  loan_type: string;
  rating: number;
  testimonial_text: string;
}



export const Home = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [currentHeroCard, setCurrentHeroCard] = useState(0);

  // Hero cards data - moved before useEffect
  const heroCards = [
    {
      title: "Personal Loans",
      subtitle: "Quick & Easy Approval",
      description: "Get personal loans up to ₹25 lakhs with competitive interest rates starting from 8.5% p.a. and minimal documentation.",
      icon: DollarSign,
      gradient: "from-primary-600 to-primary-700",
      buttonText: "Apply Now",
      buttonLink: "/loans/personal",
      stats: { label: "Interest Rate", value: "8.5% p.a." }
    },
    {
      title: "Home Loans",
      subtitle: "Your Dream Home Awaits",
      description: "Secure your dream home with our comprehensive home loan solutions. Competitive rates and flexible repayment options.",
      icon: HomeIcon,
      gradient: "from-secondary-600 to-secondary-700",
      buttonText: "Explore Home Loans",
      buttonLink: "/loans/home",
      stats: { label: "Loan Amount", value: "Up to ₹5 Cr" }
    },
    {
      title: "Business Loans",
      subtitle: "Fuel Your Growth",
      description: "Power your business expansion with our flexible business loan solutions. Quick approval and competitive rates.",
      icon: TrendingUp,
      gradient: "from-accent-600 to-accent-700",
      buttonText: "Get Business Loan",
      buttonLink: "/loans/business",
      stats: { label: "Approval Time", value: "24-48 Hours" }
    }
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-swipe disabled - manual navigation only
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
  //   }, 5000);
  //   
  //   return () => clearInterval(interval);
  // }, [heroCards.length]);

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
        customer_name: 'Piyush Bhujbal',
        customer_city: 'Pune',
        loan_type: 'Home Loan',
        rating: 5,
        testimonial_text: 'I had an amazing experience with this company. The customer service is best. They solve your queries immediately. I highly recommend them to anyone looking for Home Loan and excellent service.'
      },
      {
        id: '2',
        customer_name: 'Kishor Pokharkar',
        customer_city: 'Mumbai',
        loan_type: 'Personal Loan',
        rating: 5,
        testimonial_text: 'The overall experience with bankers den services was good. The process was completed as expected, and the staff provided proper guidance. I look forward to even faster communication in future interactions.'
      },
      {
        id: '3',
        customer_name: 'Nikhil Pardeshi',
        customer_city: 'Pune',
        loan_type: 'Business Loan',
        rating: 5,
        testimonial_text: 'Banker\'s den team is indeed good. Support staff for operations is well disciplined and do have proper knowledge about loan processes. Ms Mayuri and Ms Sonal from their team coordinates very well both with clients and Bank authorities for smooth and perfect execution.'
      }
    ];
    setTestimonials(staticTestimonials);
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
      icon: Building2,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property with competitive interest rates.',
      link: '/loans/property',
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
      title: 'Expert Guidance',
      description: 'Personalized advice from experienced financial consultants.',
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
      description: 'Select from our wide range of loan and financial products.',
      icon: Calculator,
    },
    {
      number: '2',
      title: 'Consult with Us',
      description: 'Our experts will guide you through the entire process and help you get it done.',
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
      <section className="bg-blue-600 text-white py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Financial Partner
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Get the best deals on loans with competitive rates. Compare offers from 275+ banks and NBFCs in one place.
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
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 animate-card-float">
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

                        {/* Animated Graphics */}
                        <div className="hidden lg:block animate-slide-in">
                          <div className="text-center mb-8">
                            {index === 0 && <LoanCardAnimation type="personal" />}
                            {index === 1 && <LoanCardAnimation type="home" />}
                            {index === 2 && <LoanCardAnimation type="business" />}
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                            <div className="mb-6">
                              <CalculatorSideAnimation />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Ready to Calculate?</h3>
                            <p className="text-white/80 mb-6">Use our advanced calculators to plan your financial journey</p>
                            <Link to="/calculators">
                              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Open Calculators
                              </button>
                            </Link>
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
              <div className="text-3xl font-bold">275+ Banks</div>
              <div className="text-primary-200 text-sm">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24-48 Hours</div>
              <div className="text-primary-200 text-sm">Quick Approval</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100% Secure</div>
              <div className="text-primary-200 text-sm">Safe & Trusted</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white/90 backdrop-blur-sm border border-primary-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary-400 animate-bounce-in hover:bg-white"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:bg-purple-500">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-primary-600 mb-6 leading-relaxed group-hover:text-primary-700 transition-colors">{product.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Why Choose BankersDen?
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              We make your financial journey simple and hassle-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-blue-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:bg-purple-500 transition-colors duration-300 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Get your loan approved in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Step Circle */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl hover:bg-purple-500 transition-colors duration-300 animate-float" style={{animationDelay: `${index * 0.3}s`}}>
                    <step.icon className="w-10 h-10" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">{step.description}</p>
                
                {/* Animated Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-200"></div>
                    <div className="absolute inset-0 bg-blue-500 opacity-0 animate-glow-move"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                Real stories from real people who trusted us with their financial journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="group bg-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 hover:border-blue-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex mb-6 group-hover:scale-110 transition-transform duration-300">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-primary-700 mb-6 italic text-lg leading-relaxed group-hover:text-primary-800 transition-colors">
                    "{testimonial.testimonial_text}"
                  </p>
                  <div className="border-t border-blue-200 pt-4 group-hover:border-blue-300 transition-colors">
                    <div className="font-bold text-primary-900 text-lg group-hover:text-blue-600 transition-colors">
                      {testimonial.customer_name}
                    </div>
                    <div className="text-primary-600 font-medium">{testimonial.customer_city}</div>
                    <div className="text-blue-600 text-sm font-semibold mt-1">{testimonial.loan_type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}





      {/* FAQ Section */}
      <FAQ />

      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join thousands of satisfied customers and get the best financial products today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/loans/personal">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Apply for Loan
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
};
