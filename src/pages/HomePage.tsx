import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Eye, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Globe,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Comprehensive protection against illicit trading and brand infringement across African markets.',
      link: '/services/brand-protection'
    },
    {
      icon: Search,
      title: 'Mystery Shopping',
      description: 'Quality measurement, compliance testing, and market intelligence gathering services.',
      link: '/services/mystery-shopping'
    },
    {
      icon: AlertTriangle,
      title: 'Anti-Counterfeiting',
      description: 'Combat domestic and imported counterfeit products with our specialized investigation services.',
      link: '/services/anti-counterfeiting'
    },
    {
      icon: Users,
      title: 'Background Checks',
      description: 'Thorough verification of individuals and corporations for key hires and business partnerships.',
      link: '/services/background-checks'
    },
    {
      icon: TrendingUp,
      title: 'Illegal Imports Investigation',
      description: 'Identify and investigate unauthorized imports and parallel trade activities.',
      link: '/services/illegal-imports'
    },
    {
      icon: Eye,
      title: 'Fraud & Forensic Investigation',
      description: 'Comprehensive business crime investigation and financial loss recovery services.',
      link: '/services/fraud-investigation'
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Africa Expertise',
      description: 'Deep understanding of African markets, politics, and cultural nuances across the continent.'
    },
    {
      icon: Award,
      title: 'Highly Qualified Team',
      description: 'Experienced professionals with specialized training in security and investigation methodologies.'
    },
    {
      icon: CheckCircle,
      title: 'Tailored Solutions',
      description: 'Customized approaches designed for your specific requirements and risk environment.'
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Track record of successful investigations and brand protection across high-risk environments.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Protecting Your Brand and Business 
              <span className="text-blue-400"> Across Africa</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300">
              Expert security and investigation services tailored to Africa's unique challenges. 
              We understand the political and cultural complexities of each market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Challenge is Real
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              According to the World Trade Organization (WTO)
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="text-5xl font-bold text-red-600 mb-4">10%+</div>
              <p className="text-xl text-gray-800 mb-4">
                of global consumption originates from illicit trading
              </p>
              <p className="text-lg text-gray-600">
                This impact is even more pronounced across African markets, where businesses face 
                unique challenges in brand protection and security management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security and investigation services designed specifically 
              for the African business environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:scale-105 hover:border-blue-200 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Afro Alpha Limited
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep understanding of African markets and culturally sensitive approach 
              sets us apart from other security service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 mx-auto group-hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a confidential consultation. Our team will assess your specific 
            needs and develop a tailored security solution for your African operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;