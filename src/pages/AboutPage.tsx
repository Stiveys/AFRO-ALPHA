import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  Shield, 
  Target, 
  Award, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Confidentiality',
      description: 'We maintain the highest standards of discretion and confidentiality in all our operations.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our investigations are thorough, accurate, and focused on delivering actionable intelligence.'
    },
    {
      icon: Globe,
      title: 'Cultural Awareness',
      description: 'We understand and respect the diverse cultural contexts across African markets.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every engagement, ensuring superior results for our clients.'
    }
  ];

  const expertise = [
    'Political Risk Assessment',
    'Cultural Intelligence',
    'Local Market Knowledge',
    'Regulatory Compliance',
    'Crisis Management',
    'Stakeholder Relations'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Afro Alpha Limited
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Your trusted partner for security and investigation services across Africa, 
              with deep expertise in the continent's unique challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Afro Alpha Limited exists to provide world-class security and investigation 
                services that are specifically tailored to the African business environment. 
                We recognize that each African country presents unique political, cultural, 
                and economic challenges that require specialized expertise.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to protect our clients' brands, assets, and business interests 
                through comprehensive security solutions that are both culturally sensitive 
                and operationally effective across all African markets.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Serving clients across 54 African countries
                </span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be Africa's premier security and investigation services provider, 
                recognized for our deep local expertise, cultural intelligence, and 
                unwavering commitment to protecting our clients' interests in even 
                the most challenging environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every aspect of our operations and define 
              how we serve our clients across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <Users className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our highly qualified team combines international security expertise 
                with deep local knowledge. Each team member brings years of experience 
                in their respective fields and intimate understanding of African markets.
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Specialized Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team's expertise spans multiple disciplines, ensuring comprehensive 
                coverage of all security and investigation needs across diverse African markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              We believe that effective security solutions must be tailored to the specific 
              political, cultural, and economic context of each African market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive risk assessment considering local political climate, 
                cultural factors, and regulatory environment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customization</h3>
              <p className="text-gray-600">
                Tailored security solutions designed specifically for your industry, 
                risk profile, and operational requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Professional execution with ongoing monitoring and adjustment 
                to ensure optimal results and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us to discuss how our expertise can help protect and advance 
            your business interests across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;