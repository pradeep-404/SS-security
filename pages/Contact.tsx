
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    requirement: 'Security Guards (12hrs / 24hrs)',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Google Form submission (pre-filled URL)
      const googleFormId = '1FAIpQLSeo2DyYQ7hg2-7cPbWUfuxRPghocYbWzs30tHojrKcpnRInSw'; // Replace with your Google Form ID
      const googleFormUrl = `https://docs.google.com/forms/d/${googleFormId}/formResponse`;

      const googleFormData = new FormData();
      googleFormData.append('entry.COMPANY_FIELD_ID', formData.company);
      googleFormData.append('entry.NAME_FIELD_ID', formData.name);
      googleFormData.append('entry.PHONE_FIELD_ID', formData.phone);
      googleFormData.append('entry.EMAIL_FIELD_ID', formData.email);
      googleFormData.append('entry.REQUIREMENT_FIELD_ID', formData.requirement);
      googleFormData.append('entry.MESSAGE_FIELD_ID', formData.message);

      // Submit to Google Form
      fetch(googleFormUrl, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      }).catch(err => console.log('Form submitted'));

      // Send to Gmail via backend
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: COMPANY_INFO.email // send to company email from constants
        })
      });

      // Save to Excel via backend
      await fetch('/api/save-to-excel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setStatus({
        type: 'success',
        message: 'Thank you! Your inquiry has been submitted successfully. We will contact you soon.'
      });

      // Reset form
      setFormData({
        company: '',
        name: '',
        phone: '',
        email: '',
        requirement: 'Security Guards (12hrs / 24hrs)',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error submitting form. Please try again or contact us directly.'
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Mr. Ankit to discuss your security requirements."
        image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1920&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-900 text-white">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Office Address</h3>
                  <p className="mt-2 text-base text-gray-600">
                    {COMPANY_INFO.address}
                  </p>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Office Address 2</h3>
                  <p className="mt-2 text-base text-gray-600">
                    {COMPANY_INFO.address2}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-900 text-white">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Phone / Mobile</h3>
                  <div className="mt-2 text-base text-gray-600 space-y-1">
                    {COMPANY_INFO.phone.map((phone, idx) => (
                      <p key={idx} className="font-medium">{phone}</p>
                    ))}
                    <p className="text-sm text-gray-500 mt-1">(Mr. Ankit)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-900 text-white">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
                  <p className="mt-2 text-base text-gray-600">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2">Note regarding Recruitment</h4>
              <p className="text-blue-800 text-sm">
                If you are looking for a job, please visit our <a href="/#/careers" className="underline font-bold">Careers Page</a> to apply directly.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">Hire Security Services</h2>
            <p className="text-gray-500 mb-6">Fill out the form below and we will get back to you with a quote.</p>
            
            {status && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                status.type === 'success' 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                ) : (
                  <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
                )}
                <p className={status.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {status.message}
                </p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company / Society Name</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand-900 focus:border-brand-900 border-gray-300 rounded-md border bg-gray-50" 
                    placeholder="Enter name" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Contact Person</label>
                  <div className="mt-1">
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-900 focus:border-brand-900 border-gray-300 rounded-md border bg-gray-50" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1">
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-900 focus:border-brand-900 border-gray-300 rounded-md border bg-gray-50" 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand-900 focus:border-brand-900 border-gray-300 rounded-md border bg-gray-50" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">Requirement Type</label>
                <select 
                  id="requirement" 
                  name="requirement" 
                  value={formData.requirement}
                  onChange={handleInputChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-900 focus:border-brand-900 sm:text-sm">
                  <option>Security Guards (12hrs / 24hrs)</option>
                  <option>Bouncers / Event Security</option>
                  <option>PSO (Personal Security)</option>
                  <option>Gunman</option>
                  <option>Driver</option>
                  <option>Valet Parking</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Specific Requirements</label>
                <div className="mt-1">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand-900 focus:border-brand-900 border-gray-300 rounded-md border bg-gray-50" 
                    placeholder="Describe your location and specific needs..."
                  />
                </div>
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-brand-900 hover:bg-brand-800'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900 transition-colors shadow-lg`}
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
