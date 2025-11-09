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
  IndianRupee,
} from 'lucide-react';
import { Button } from '../components/Button';
import { FAQ } from '../components/FAQ';
import { FloatingElements } from '../components/AnimatedGraphics';

// ✅ Use your three images instead of calculator/Lottie
import hero1 from '../assets/hero-illustration-1.png?url';
import hero2 from '../assets/hero-illustration-2.png?url';
import hero3 from '../assets/hero-illustration-3.png?url';

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

  // keep old content (three cards with content)
  const heroCards = [
    {
      title: "Personal Loans",
      subtitle: "Quick & Easy Approval",
      description: "Get personal loans up to ₹25 lakhs with competitive interest rates starting from 8.5% p.a. and minimal documentation.",
      icon: IndianRupee,
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

  // Auto-swipe (looping)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const nextCard = () => {
    setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
  };

  const prevCard = () => {
    setCurrentHeroCard((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  const fetchTestimonials = async () => {
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

  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Banking Theme */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Financial Partner
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Helping you choose the best loan solutions with expert comparisons and lowest rates across leading banks
            </p>
          </div>

          {/* Hero Cards Slider - Full Width */}
          <div className="relative w-full">
            <div className="relative overflow-hidden">
              {/* Card Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentHeroCard * 100}%)` }}
              >
                {heroCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 text-white">
                      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        {/* Content */}
                        <div className="animate-fade-in">
                          <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-amber-500/90 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                              <card.icon className="w-7 h-7 text-blue-900" />
                            </div>
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold">{card.title}</h2>
                              <p className="text-lg text-blue-100">{card.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-xl mb-8 text-blue-50 leading-relaxed">
                            {card.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link to={card.buttonLink}>
                              <Button size="lg" variant="secondary" className="bg-amber-500 text-blue-900 hover:bg-amber-400 font-semibold shadow-lg">
                                {card.buttonText}
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Right visual - Blended with background */}
                        <div className="hidden lg:block animate-slide-in">
                          <div className="relative">
                            <img
                              src={heroImages[index]}
                              alt={`${card.title} illustration`}
                              className="w-full max-w-lg mx-auto opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {heroCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroCard(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentHeroCard ? 'bg-amber-400 w-8' : 'bg-blue-300 w-6'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-amber-400">585+ Cr</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-amber-400">24-48 Hours</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">Quick Approval</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-amber-400">100% Secure</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">Safe & Trusted</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Financial Products
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of financial solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white border border-blue-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 animate-bounce-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">{product.description}</p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Choose BankersDen?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make your financial journey simple and hassle-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in border border-blue-100" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 text-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your loan approved in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: `${index * 0.3}s`}}>
                    <step.icon className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 overflow-hidden">
                    <div className="absolute inset-0 bg-teal-200"></div>
                    <div className="absolute inset-0 bg-teal-500 opacity-0 animate-glow-move"></div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from real people who trusted us with their financial journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="group bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 hover:border-teal-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex mb-6 group-hover:scale-110 transition-transform duration-300">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                    "{testimonial.testimonial_text}"
                  </p>
                  <div className="border-t border-teal-200 pt-4 group-hover:border-teal-300 transition-colors">
                    <div className="font-bold text-blue-900 text-lg group-hover:text-teal-700 transition-colors">
                      {testimonial.customer_name}
                    </div>
                    <div className="text-gray-600 font-medium">{testimonial.customer_city}</div>
                    <div className="text-teal-600 text-sm font-semibold mt-1">{testimonial.loan_type}</div>
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
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
};
