import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Search, Scale, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const IllegalImportsPage = () => {
  const challenges = [
    'Counterfeit products masquerading as legal imports',
    'Unauthorized parallel imports bypassing official channels',
    'Products violating import regulations and standards',
    'Mislabeled or misclassified goods to avoid duties',
    'Smuggled goods entering through unofficial borders',
    'Products lacking proper documentation or certifications'
  ];

  const services = [
    {
      icon: Search,
      title: 'Intelligence & Market Search',
      description: 'Comprehensive market surveillance to identify illegal imports and unauthorized products in African markets.'
    },
    {
      icon: Package,
      title: 'Supply Chain Analysis',
      description: 'Detailed investigation of import routes, distribution channels, and supply chain vulnerabilities.'
    },
    {
      icon: Scale,
      title: 'Legal vs. Counterfeited Product ID',
      description: 'Expert analysis to distinguish between legitimate imports and counterfeit or unauthorized products.'
    },
    {
      icon: AlertTriangle,
      title: 'Enforcement Support',
      description: 'Coordination with customs authorities and legal teams to take action against illegal import operations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Package className="h-12 w-12 text-indigo-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Illegal Imports Investigation</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Specialized investigation services to identify and combat illegal imports, unauthorized 
              parallel trade, and customs violations across African markets.
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
                The Illegal Imports Challenge
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Illegal imports represent a significant threat to legitimate businesses across Africa, 
                undermining fair competition, government revenues, and consumer safety. These operations 
                often involve sophisticated networks that exploit regulatory gaps and border vulnerabilities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From counterfeit pharmaceuticals to unauthorized electronics, illegal imports affect 
                virtually every industry. Our specialized investigation services help identify, track, 
                and combat these operations while protecting your legitimate business interests.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact on Business</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Market Share Loss</h4>
                  <p className="text-gray-600 text-sm">Illegal imports undercut legitimate products with artificially low prices</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Revenue Impact</h4>
                  <p className="text-gray-600 text-sm">Direct sales losses and pricing pressure from unauthorized competitors</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Brand Damage</h4>
                  <p className="text-gray-600 text-sm">Substandard illegal imports can damage brand reputation and consumer trust</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Unfair Competition</h4>
                  <p className="text-gray-600 text-sm">Companies following legal import procedures face disadvantaged competition</p>
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
              Our Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to identify, investigate, and combat illegal import operations 
              affecting your business across African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
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
              Our Investigation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to uncovering illegal import operations and building actionable intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Monitoring</h3>
              <p className="text-gray-600">Continuous surveillance of import markets, ports, and distribution channels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Authentication</h3>
              <p className="text-gray-600">Expert analysis to verify product authenticity and legal import status</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply Chain Tracing</h3>
              <p className="text-gray-600">Track products back through import routes to identify sources and methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enforcement Coordination</h3>
              <p className="text-gray-600">Work with customs and legal authorities to take appropriate action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Programs */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prevention Program Development
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Beyond investigation, we help develop comprehensive prevention programs to reduce 
                the risk of illegal imports affecting your business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Supply Chain Security</h4>
                    <p className="text-indigo-200 text-sm">Strengthen your authorized distribution channels and import procedures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Authentication Technology</h4>
                    <p className="text-indigo-200 text-sm">Implement advanced product authentication and tracking systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-indigo-200 text-sm">Ensure full compliance with import regulations across target markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-indigo-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Monitoring Systems</h4>
                    <p className="text-indigo-200 text-sm">Establish ongoing surveillance to detect illegal imports early</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Illegal Imports</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Counterfeit branded products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Unauthorized parallel imports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Mislabeled or misclassified goods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Products violating safety standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Smuggled goods without documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Duty evasion schemes</span>
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
            Combat Illegal Imports Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your legitimate business interests and market position. 
            Contact us for a comprehensive assessment of illegal import threats in your market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Investigation Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IllegalImportsPage;