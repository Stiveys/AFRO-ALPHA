import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, DollarSign, Scale, CheckCircle, ArrowRight } from 'lucide-react';

const FraudInvestigationPage = () => {
  const fraudTypes = [
    'Employee embezzlement and theft',
    'Financial statement manipulation',
    'Procurement and vendor fraud',
    'Insurance claim fraud',
    'Cybercrime and digital fraud',
    'Identity theft and impersonation'
  ];

  const services = [
    {
      icon: Search,
      title: 'Business Crime Investigation',
      description: 'Comprehensive investigation of internal and external fraud affecting your organization across African markets.'
    },
    {
      icon: DollarSign,
      title: 'Financial Loss Recovery',
      description: 'Strategic approaches to recover assets and minimize financial losses from fraudulent activities.'
    },
    {
      icon: Scale,
      title: 'Legal Support & Compliance',
      description: 'Expert support for legal proceedings and regulatory compliance requirements in fraud cases.'
    },
    {
      icon: AlertTriangle,
      title: 'Reputation Protection',
      description: 'Crisis management and reputation protection strategies during and after fraud investigations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-12 w-12 text-red-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Fraud & Forensic Investigation</h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Expert fraud investigation and forensic analysis services to protect your business, 
              recover losses, and maintain operational integrity across African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Business Crime Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Understanding Business Crime Impact
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Business crime affects organizations of all sizes across Africa, with fraud losses 
                often exceeding 5% of annual revenue. The complexity of African business environments 
                can make detection and investigation particularly challenging.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our specialized fraud investigation services are designed to navigate the unique 
                legal, cultural, and operational challenges present in African markets while 
                providing comprehensive forensic analysis and recovery support.
              </p>
              <div className="space-y-4">
                {fraudTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Hidden Costs of Fraud</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Direct Financial Loss</h4>
                  <p className="text-gray-600 text-sm">Immediate monetary losses from fraudulent activities and theft</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Operational Disruption</h4>
                  <p className="text-gray-600 text-sm">Business interruption and productivity losses during investigations</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Reputation Damage</h4>
                  <p className="text-gray-600 text-sm">Long-term brand damage affecting customer and investor confidence</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal & Compliance Costs</h4>
                  <p className="text-gray-600 text-sm">Regulatory fines, legal fees, and compliance remediation expenses</p>
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
              Our Fraud Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive forensic investigation services designed to uncover fraud, 
              preserve evidence, and support recovery efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-6">
                    <IconComponent className="h-6 w-6 text-red-600" />
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
              A systematic forensic approach ensuring thorough investigation and evidence preservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">Rapid evaluation of fraud allegations and evidence preservation requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence Collection</h3>
              <p className="text-gray-600">Systematic gathering and preservation of digital and physical evidence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forensic Analysis</h3>
              <p className="text-gray-600">Detailed examination of financial records, digital data, and transaction patterns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting & Recovery</h3>
              <p className="text-gray-600">Comprehensive reporting and support for legal proceedings and asset recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Proceedings Support */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Criminal Proceedings Assistance
              </h2>
              <p className="text-xl text-red-100 mb-8">
                We provide comprehensive support throughout criminal proceedings, from initial 
                evidence gathering to courtroom testimony, ensuring your case is properly presented.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Testimony</h4>
                    <p className="text-red-200 text-sm">Professional expert witnesses for court proceedings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Evidence Preparation</h4>
                    <p className="text-red-200 text-sm">Proper documentation and presentation of forensic evidence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Legal Coordination</h4>
                    <p className="text-red-200 text-sm">Close collaboration with legal teams and law enforcement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Asset Recovery Support</h4>
                    <p className="text-red-200 text-sm">Assistance with asset tracing and recovery proceedings</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Call Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Suspected employee theft or embezzlement</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Unexplained financial discrepancies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Vendor or supplier fraud allegations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Insurance claim irregularities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Cybercrime or digital fraud incidents</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">Whistleblower reports or tips</span>
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
            Protect Your Business from Fraud
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Time is critical in fraud investigations. Contact us immediately for rapid response 
            and professional forensic investigation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Emergency Fraud Response
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FraudInvestigationPage;