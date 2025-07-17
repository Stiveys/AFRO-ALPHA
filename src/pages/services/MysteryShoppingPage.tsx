import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, BarChart3, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

const MysteryShoppingPage = () => {
  const benefits = [
    'Objective assessment of service quality',
    'Competitor analysis and benchmarking',
    'Staff performance evaluation',
    'Brand compliance verification',
    'Customer experience insights',
    'Market intelligence gathering'
  ];

  const services = [
    {
      icon: Target,
      title: 'Quality Measurement',
      description: 'Comprehensive evaluation of service standards, staff performance, and operational compliance across your locations.'
    },
    {
      icon: BarChart3,
      title: 'Compliance Testing',
      description: 'Verification that your brand standards, policies, and procedures are being followed consistently.'
    },
    {
      icon: Users,
      title: 'Competitor Analysis',
      description: 'Strategic intelligence gathering on competitor offerings, pricing, and service levels in African markets.'
    },
    {
      icon: Eye,
      title: 'Market Intelligence',
      description: 'Real-time insights into market conditions, consumer behavior, and emerging trends across target regions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-12 w-12 text-purple-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Mystery Shopping</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Professional mystery shopping services providing valuable insights into service quality, 
              compliance, and competitive positioning across African markets.
            </p>
          </div>
        </div>
      </section>

      {/* What is Mystery Shopping */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is Mystery Shopping?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mystery shopping is a market research methodology where trained evaluators visit 
                your business locations or competitor establishments as regular customers to assess 
                service quality, compliance, and overall customer experience.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our professional mystery shoppers are trained to blend seamlessly into the local 
                culture while conducting thorough, objective evaluations that provide actionable 
                insights for business improvement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Use Mystery Shopping?</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Objective Evaluation</h4>
                  <p className="text-gray-600 text-sm">Get unbiased assessment of your operations from the customer's perspective</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Cultural Sensitivity</h4>
                  <p className="text-gray-600 text-sm">Evaluators understand local customs and expectations in African markets</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Actionable Insights</h4>
                  <p className="text-gray-600 text-sm">Detailed reports with specific recommendations for improvement</p>
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
              Our Mystery Shopping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation services tailored to your specific business needs and market requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring accurate, reliable, and actionable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Develop customized evaluation criteria and scenarios specific to your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600">Brief mystery shoppers on objectives, protocols, and cultural considerations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Conduct visits following predetermined scenarios and evaluation criteria</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting</h3>
              <p className="text-gray-600">Deliver detailed reports with findings, scores, and improvement recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Detailed Reporting Process
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Our comprehensive reporting provides the insights you need to make informed 
                business decisions and drive continuous improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quantitative Scores</h4>
                    <p className="text-purple-200 text-sm">Numerical ratings across all evaluation criteria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Qualitative Feedback</h4>
                    <p className="text-purple-200 text-sm">Detailed narrative observations and recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Trend Analysis</h4>
                    <p className="text-purple-200 text-sm">Performance trends over time and across locations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Benchmarking</h4>
                    <p className="text-purple-200 text-sm">Comparison with industry standards and competitors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Report Delivery</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">24h</span>
                  </div>
                  <span className="text-gray-700">Initial findings summary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">3d</span>
                  </div>
                  <span className="text-gray-700">Detailed written report</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">1w</span>
                  </div>
                  <span className="text-gray-700">Presentation and action plan</span>
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
            Improve Your Customer Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover what your customers really experience and gain valuable insights 
            to enhance your operations across African markets.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Mystery Shopping Program
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MysteryShoppingPage;