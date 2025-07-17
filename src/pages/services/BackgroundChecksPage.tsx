import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, FileCheck, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const BackgroundChecksPage = () => {
  const checkTypes = [
    'Employment history verification',
    'Educational credentials validation',
    'Criminal background screening',
    'Financial history assessment',
    'Professional references verification',
    'Social media and online presence review'
  ];

  const services = [
    {
      icon: Users,
      title: 'Individual Verification',
      description: 'Comprehensive background checks for key hires, executives, and business partners across African markets.'
    },
    {
      icon: FileCheck,
      title: 'Corporate Due Diligence',
      description: 'Thorough investigation of business entities, their ownership structures, and operational history.'
    },
    {
      icon: Search,
      title: 'Key Hire Screening',
      description: 'Specialized screening for senior executives and positions requiring high security clearance.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify potential risks and red flags before entering into business relationships or partnerships.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-12 w-12 text-green-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Background Checks</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive background verification services for individuals and corporations, 
              helping you make informed decisions about business partnerships and key hires across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Why Background Checks Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Background Checks Are Essential
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In today's complex business environment, especially across diverse African markets, 
                thorough background verification is crucial for protecting your organization from 
                fraud, theft, and reputational damage.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our background check services are specifically designed to navigate the unique 
                challenges of verification across different African countries, accounting for 
                varying record-keeping systems, languages, and legal frameworks.
              </p>
              <div className="space-y-4">
                {checkTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Cost of Not Checking</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Loss</h4>
                  <p className="text-gray-600 text-sm">Employee theft and fraud can cost businesses up to 5% of annual revenue</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Reputation Damage</h4>
                  <p className="text-gray-600 text-sm">Association with questionable individuals can severely damage brand reputation</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Liability</h4>
                  <p className="text-gray-600 text-sm">Negligent hiring can result in significant legal exposure and liability</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Operational Disruption</h4>
                  <p className="text-gray-600 text-sm">Problematic hires can disrupt team dynamics and business operations</p>
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
              Our Background Check Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive verification services tailored to the unique requirements 
              of business operations across African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring thorough, accurate, and legally compliant background verification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Information Gathering</h3>
              <p className="text-gray-600">Collect comprehensive personal and professional information from the subject</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Source Verification</h3>
              <p className="text-gray-600">Cross-reference information through multiple official and unofficial sources</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Field Investigation</h3>
              <p className="text-gray-600">Conduct on-ground verification where necessary for accuracy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Report</h3>
              <p className="text-gray-600">Deliver detailed findings with risk assessment and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust but Verify */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                "Trust but Verify" Approach
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our philosophy combines trust-building with rigorous verification, ensuring you 
                can make confident decisions about business relationships and partnerships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Confidential Process</h4>
                    <p className="text-green-200 text-sm">All investigations are conducted with complete discretion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Legal Compliance</h4>
                    <p className="text-green-200 text-sm">All activities comply with local privacy and employment laws</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Rapid Turnaround</h4>
                    <p className="text-green-200 text-sm">Most background checks completed within 5-7 business days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Actionable Intelligence</h4>
                    <p className="text-green-200 text-sm">Clear recommendations to support your decision-making process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Verify</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Identity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Education</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Employment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">References</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Criminal History</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Financial Status</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Professional Licenses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Social Media</span>
                  </div>
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
            Make Informed Hiring Decisions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your organization with comprehensive background verification services. 
            Contact us today to discuss your screening requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Background Verification
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BackgroundChecksPage;