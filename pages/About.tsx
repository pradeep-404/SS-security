
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, ShieldCheck, Award, FileText, Users, MapPin, Phone, Briefcase, Star, Send } from 'lucide-react';
import { CHARTER_OF_RESPONSIBILITY, COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState<Array<{ name: string; comment: string }>>([
    { name: 'Rajesh Kumar', comment: 'Excellent security services. Very professional and reliable team.' },
    { name: 'Priya Singh', comment: 'Outstanding service quality. Our premises are well-protected 24/7.' },
  ]);
  const [formData, setFormData] = useState({ name: '', comment: '' });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.comment.trim()) {
      setReviews([...reviews, formData]);
      setFormData({ name: '', comment: '' });
      setShowReviewForm(false);
      alert('Thank you for your review!');
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="About Safety Secure"
        subtitle="Managed by Ex-Police Personnel. Dedicated to protecting people, property, and assets."
        image="https://images.unsplash.com/photo-1555529771-7888783a18d3?q=80&w=1920&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-800 mb-4">
              Regd. No: {COMPANY_INFO.regNo}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Professional Security with a Police Background
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Safety Secure Company</strong> is managed by an <strong>Ex-Police Person</strong> with extensive experience in the security field. We provide comprehensive security services for industrial establishments, housing societies, and various facilities across Rajasthan. Our expertise & guidance have earned us a proven track record of success and client satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We supply qualified security personnel including watchmen, bodyguards, security guards, and other specialized security staff to corporate offices, housing societies, open plots, hotels, companies, palaces, and all other establishments. Our commitment is to provide round-the-clock protection and peace of mind for your premises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
               <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <ShieldCheck className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-900">Expert Management</h4>
                    <p className="text-sm text-gray-500">Managed by ex-police personnel with deep security expertise.</p>
                  </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <Award className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-900">Trained Staff</h4>
                    <p className="text-sm text-gray-500">All personnel are company employees with verified credentials.</p>
                  </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <Users className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-900">Fire Safety Training</h4>
                    <p className="text-sm text-gray-500">Guards trained in fire fighting and emergency response.</p>
                  </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <CheckCircle className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-brand-900">24/7 Supervision</h4>
                    <p className="text-sm text-gray-500">Trained supervisors conduct round-the-clock checking.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-xl transform rotate-2"></div>
            <img
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop"
              alt="Security Team"
            />
            {/* Overlay box */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
               <p className="text-brand-900 font-bold text-lg">"Your safety is our profession."</p>
               <p className="text-gray-500 text-sm mt-2">- {COMPANY_INFO.contactPerson}</p>
            </div>
          </div>
        </div>

        {/* Charter of Responsibility */}
        <div className="mt-24">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-900 text-white mb-4">
               <FileText size={32} />
             </div>
             <h2 className="text-3xl font-extrabold text-gray-900">Charter of Responsibility</h2>
             <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
               Our commitment to our clients is absolute. Here is how we ensure professional service delivery.
             </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {CHARTER_OF_RESPONSIBILITY.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mr-4 mt-1" size={20} />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white mb-4">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Service Scope</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              We provide security solutions tailored to your specific needs across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase size={24} />, title: 'Corporate Offices', desc: 'Professional security for office spaces and business premises' },
              { icon: <Users size={24} />, title: 'Housing Societies', desc: 'Round-the-clock security for residential communities' },
              { icon: <ShieldCheck size={24} />, title: 'Hotels & Hospitality', desc: 'Specialized security for guest safety and asset protection' },
              { icon: <CheckCircle size={24} />, title: 'Industrial Establishments', desc: 'Comprehensive security for factories and production units' },
              { icon: <Award size={24} />, title: 'Open Plots & Land', desc: 'Perimeter security and asset protection for vacant properties' },
              { icon: <ShieldCheck size={24} />, title: 'Special Events', desc: 'Security personnel for events, functions, and gatherings' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-accent">
                <div className="text-brand-accent mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Personnel Section */}
        <div className="mt-24 bg-brand-900 text-white rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Our Security Personnel</h2>
            <p className="text-xl text-gray-200">
              We supply qualified and trained security professionals for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {[
              'Watchmen & Security Guards',
              'Professional Bodyguards',
              'Trained Supervisors',
              'Event Security Personnel',
              'Armed Guards',
              'Driver Security',
              'Fire Safety Personnel',
              'Emergency Response Teams'
            ].map((role, index) => (
              <div key={index} className="bg-brand-800 p-6 rounded-lg">
                <CheckCircle className="text-brand-accent mx-auto mb-3" size={28} />
                <p className="text-lg font-semibold">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Safety Secure?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              What sets us apart in the security industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Company Employees</h3>
                <p className="mt-2 text-gray-600">All security personnel are direct employees of Safety Secure Company. We handle their salaries, uniforms, and complete benefits.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                  <Award size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Trained & Verified</h3>
                <p className="mt-2 text-gray-600">All guards are properly trained with verified credentials and basic fire-fighting knowledge to handle emergencies.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                  <CheckCircle size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">24/7 Supervision</h3>
                <p className="mt-2 text-gray-600">Trained supervisors conduct surprise rounds round the clock to ensure effective performance and compliance.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                  <Users size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Professional Experience</h3>
                <p className="mt-2 text-gray-600">Managed by ex-police personnel with extensive experience in security operations and risk management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-24 bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Contact Information</h2>
            <p className="text-xl text-gray-200">Get in touch with us for security solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-accent rounded-full p-4 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Office Address</h3>
              <p className="text-gray-200">
                121 Mahaveer Nagar 2<br />
                Near Maharani Farm<br />
                Durgapura, Jaipur<br />
                Rajasthan
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-accent rounded-full p-4 mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Mobile Numbers</h3>
              <div className="space-y-2">
                <p className="text-gray-200">
                  <a href="tel:6367295479" className="hover:text-brand-accent transition-colors">6367295479</a>
                </p>
                <p className="text-gray-200">
                  <a href="tel:9610059901" className="hover:text-brand-accent transition-colors">9610059901</a>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-accent rounded-full p-4 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Operating Since</h3>
              <p className="text-gray-200">
                Professional security services<br />
                across Rajasthan with proven<br />
                track record and client satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Client Reviews & Testimonials</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              See what our satisfied clients have to say about our security services
            </p>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="mt-6 inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <Star size={20} className="mr-2" />
              Write a Review
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-12 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border-2 border-brand-accent">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
                  <textarea
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Share your experience with our security services..."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-brand-accent hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    <Send size={20} className="mr-2" />
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Reviews Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-accent">
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.comment}"</p>
                <p className="font-semibold text-gray-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
