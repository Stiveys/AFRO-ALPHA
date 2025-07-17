import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, Shield, Scale, CheckCircle, ArrowRight } from 'lucide-react';

const AntiCounterfeitingPage = () => {
  const threats = [
    'Domestic counterfeit production facilities',
    'Imported fake products from international sources',
    'Online marketplaces selling counterfeit goods',
    'Street vendors and informal markets',
    'Sophisticated packaging replication',
    'Cross-border smuggling operations'
  ];

  const services = [
    {
      icon: Search,
      title: 'Source Identification',
      description: 'Investigate and identify the origins of counterfeit products entering African markets through our extensive network.'
    },
    {
      icon: Shield,
      title: 'Enforcement Action Support',
      description: 'Coordinate with local authorities and legal teams to take decisive action against counterfeiters and their networks.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance Assistance',
      description: 'Navigate complex African legal systems to ensure proper documentation and legal procedures are followed.'
    },
    {
      icon: AlertTriangle,
      title: 'Prevention Program Design',
      description: 'Develop comprehensive strategies to prevent counterfeiting before it impacts your brand and customers.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-12 w-12 text-orange-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Anti-Counterfeiting</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive anti-counterfeiting services to combat domestic and imported fake products, 
              protecting your brand integrity and consumer safety across African markets.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Counterfeiting Challenge
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Counterfeiting has become a sophisticated global enterprise that particularly impacts 
                African markets. From luxury goods to essential pharmaceuticals, counterfeit products 
                pose serious threats to brand integrity, consumer safety, and economic stability.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                African markets face unique challenges with both domestic production of counterfeit 
                goods and the importation of fake products from international sources. Our specialized 
                approach addresses these multi-faceted threats with targeted strategies.
              </p>
              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{threat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact on Businesses</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Revenue Loss</h4>
                  <p className="text-gray-600 text-sm">Counterfeit products divert sales and undermine pricing strategies</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Brand Damage</h4>
                  <p className="text-gray-600 text-sm">Poor quality fakes damage brand reputation and consumer trust</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Risks</h4>
                  <p className="text-gray-600 text-sm">Substandard counterfeits can pose serious health and safety risks</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Liability</h4>
                  <p className="text-gray-600 text-sm">Companies may face legal challenges related to counterfeit products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Anti-Counterfeiting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to identify, investigate, and eliminate counterfeiting operations 
              targeting your products and brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Investigation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identifying and dismantling counterfeiting operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Surveillance</h3>
              <p className="text-gray-600">Monitor markets, online platforms, and distribution channels for counterfeit products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence Collection</h3>
              <p className="text-gray-600">Gather comprehensive evidence including purchase records and product samples</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Source Tracking</h3>
              <p className="text-gray-600">Trace counterfeit products back to their source and distribution networks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enforcement Action</h3>
              <p className="text-gray-600">Coordinate with authorities and legal teams for raids and prosecutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prevention Strategies
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                While investigation and enforcement are crucial, prevention is the most effective 
                long-term strategy against counterfeiting.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Authentication Technology</h4>
                    <p className="text-orange-200 text-sm">Implement advanced authentication features in your products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Supply Chain Security</h4>
                    <p className="text-orange-200 text-sm">Secure your distribution channels and authorized retailers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Consumer Education</h4>
                    <p className="text-orange-200 text-sm">Educate consumers on how to identify authentic products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Regular Monitoring</h4>
                    <p className="text-orange-200 text-sm">Continuous surveillance of markets and online platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Success Factors</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Local market expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Strong relationships with authorities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Advanced investigation techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Rapid response capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Comprehensive documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stop Counterfeiters in Their Tracks
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let counterfeiters damage your brand and endanger your customers. 
            Contact us today for a comprehensive anti-counterfeiting strategy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Anti-Counterfeiting Program
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AntiCounterfeitingPage;