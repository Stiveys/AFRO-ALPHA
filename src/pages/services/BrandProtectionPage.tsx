import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingDown, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const BrandProtectionPage = () => {
  const challenges = [
    'Counterfeit products damaging brand reputation',
    'Unauthorized distribution channels',
    'Parallel imports undermining pricing strategies',
    'Intellectual property theft and infringement',
    'Revenue loss from illicit trading',
    'Consumer safety risks from fake products'
  ];

  const solutions = [
    {
      title: 'Market Surveillance',
      description: 'Continuous monitoring of African markets to identify unauthorized use of your brand and intellectual property.'
    },
    {
      title: 'Supply Chain Security',
      description: 'Comprehensive assessment and protection of your distribution channels across multiple African countries.'
    },
    {
      title: 'Enforcement Support',
      description: 'Coordination with local authorities and legal teams to take action against infringers and counterfeiters.'
    },
    {
      title: 'Prevention Programs',
      description: 'Proactive strategies to prevent brand infringement before it impacts your business operations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-red-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Brand Protection</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive brand protection services to combat illicit trading and safeguard 
              your intellectual property across African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Global Impact of Illicit Trading
            </h2>
            <p className="text-lg text-gray-700">
              Understanding the scale of the challenge facing businesses today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <TrendingDown className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-600 mb-2">10%+</div>
              <p className="text-gray-700">
                of global consumption originates from illicit trading (WTO)
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">Higher</div>
              <p className="text-gray-700">
                impact in African markets due to regulatory challenges
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">All</div>
              <p className="text-gray-700">
                governments, businesses, and consumers are affected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Brand Protection Challenges in Africa
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                African markets present unique challenges for brand protection due to diverse 
                regulatory environments, complex distribution networks, and varying enforcement capabilities. 
                Our specialized approach addresses these challenges with culturally sensitive solutions.
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
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Brand Protection Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Revenue Protection</h4>
                    <p className="text-gray-300 text-sm">Prevent revenue loss from counterfeit sales and unauthorized distribution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Brand Reputation</h4>
                    <p className="text-gray-300 text-sm">Maintain brand integrity and consumer trust across African markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Consumer Safety</h4>
                    <p className="text-gray-300 text-sm">Protect consumers from potentially dangerous counterfeit products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Brand Protection Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategies designed specifically for the African business environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Protection Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A systematic approach to identifying, investigating, and addressing brand protection threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive risk evaluation across target markets</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investigation</h3>
              <p className="text-gray-600 text-sm">Detailed investigation of suspected infringement activities</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Action</h3>
              <p className="text-gray-600 text-sm">Strategic enforcement actions and legal proceedings</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">04</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevention</h3>
              <p className="text-gray-600 text-sm">Ongoing monitoring and prevention strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Protect Your Brand Across Africa
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let illicit trading damage your brand reputation and revenue. 
            Contact us today for a comprehensive brand protection assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Brand Protection Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandProtectionPage;