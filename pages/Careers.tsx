
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Briefcase, Truck, Shield, UserCheck, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Security Guard',
    experience: '',
    height: '',
    about: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `Job Application: ${formData.role} - ${formData.name}`;
    const body = `
Full Name: ${formData.name}
Mobile Number: ${formData.phone}
Position: ${formData.role}
Experience: ${formData.experience} Years
Height: ${formData.height}
Additional Info: ${formData.about}

Sent from Safety Secure Website.
    `;

    // Open mail client
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Join Our Team"
        subtitle="Build a career with Safety Secure. We are hiring dedicated professionals."
        image="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1920&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Job Listings */}
          <div className="lg:col-span-5 space-y-8">
             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-accent">
               <h2 className="text-2xl font-bold text-brand-900 mb-4">Current Openings</h2>
               <p className="text-gray-600 mb-6">We are constantly looking for disciplined and honest individuals for the following roles.</p>
               
               <div className="space-y-4">
                 {/* Job Card 1 */}
                 <div className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex items-center mb-2">
                       <Shield className="text-brand-accent mr-2" size={20} />
                       <h3 className="font-bold text-gray-900">Security Guard</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Residential & Industrial Sites</p>
                    <div className="flex gap-2 text-xs">
                       <span className="bg-gray-200 px-2 py-1 rounded">10/12/24 Hrs Shift</span>
                       <span className="bg-gray-200 px-2 py-1 rounded">Stay + Food Options</span>
                    </div>
                 </div>

                 {/* Job Card 2 */}
                 <div className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex items-center mb-2">
                       <UserCheck className="text-brand-accent mr-2" size={20} />
                       <h3 className="font-bold text-gray-900">Bouncers & PSO</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Events & VIP Protection</p>
                    <div className="flex gap-2 text-xs">
                       <span className="bg-gray-200 px-2 py-1 rounded">Good Physique Req.</span>
                       <span className="bg-gray-200 px-2 py-1 rounded">High Pay</span>
                    </div>
                 </div>

                 {/* Job Card 3 */}
                 <div className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow bg-gray-50">
                    <div className="flex items-center mb-2">
                       <Truck className="text-brand-accent mr-2" size={20} />
                       <h3 className="font-bold text-gray-900">Driver</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Commercial & Private</p>
                    <div className="flex gap-2 text-xs">
                       <span className="bg-gray-200 px-2 py-1 rounded">Valid License</span>
                       <span className="bg-gray-200 px-2 py-1 rounded">Exp Required</span>
                    </div>
                 </div>
               </div>
             </div>

             <div className="bg-brand-900 text-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-4">Required Documents</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex items-center"><div className="w-2 h-2 bg-brand-accent rounded-full mr-2"></div> Aadhar Card (Original + Copy)</li>
                   <li className="flex items-center"><div className="w-2 h-2 bg-brand-accent rounded-full mr-2"></div> PAN Card</li>
                   <li className="flex items-center"><div className="w-2 h-2 bg-brand-accent rounded-full mr-2"></div> Police Verification</li>
                   <li className="flex items-center"><div className="w-2 h-2 bg-brand-accent rounded-full mr-2"></div> 2 Passport Size Photos</li>
                   <li className="flex items-center"><div className="w-2 h-2 bg-brand-accent rounded-full mr-2"></div> Driving License (For Drivers)</li>
                </ul>
             </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
               <div className="bg-brand-100 p-6 border-b border-brand-200">
                  <h3 className="text-2xl font-bold text-brand-900">Career Application</h3>
                  <p className="text-brand-800 text-sm mt-1">Fill out the form below. Clicking Submit will open your email app to send us the details.</p>
               </div>
               
               <div className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name *</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input 
                            type="text" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="focus:ring-brand-accent focus:border-brand-accent block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border" 
                            placeholder="Pradeep Kumar" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Mobile Number *</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="focus:ring-brand-accent focus:border-brand-accent block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border" 
                            placeholder="+91 98..." 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                       <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-gray-700">Position Applying For *</label>
                        <select 
                          name="role" 
                          value={formData.role}
                          onChange={handleChange}
                          className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm rounded-md border"
                        >
                          <option>Security Guard</option>
                          <option>Bouncer</option>
                          <option>PSO (Bodyguard)</option>
                          <option>Gunman</option>
                          <option>Driver</option>
                          <option>Valet</option>
                          <option>Supervisor</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700">Experience (Years)</label>
                        <input 
                          type="number" 
                          name="experience" 
                          value={formData.experience}
                          onChange={handleChange}
                          className="mt-1 focus:ring-brand-accent focus:border-brand-accent block w-full pl-4 sm:text-sm border-gray-300 rounded-md py-3 border" 
                          placeholder="0" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="height" className="block text-sm font-semibold text-gray-700">Height (approx)</label>
                      <input 
                        type="text" 
                        name="height" 
                        value={formData.height}
                        onChange={handleChange}
                        className="mt-1 focus:ring-brand-accent focus:border-brand-accent block w-full pl-4 sm:text-sm border-gray-300 rounded-md py-3 border" 
                        placeholder="e.g. 5'10&quot;" 
                      />
                    </div>

                    <div>
                      <label htmlFor="about" className="block text-sm font-semibold text-gray-700">Additional Information</label>
                      <div className="mt-1">
                        <textarea 
                          name="about" 
                          rows={4} 
                          value={formData.about}
                          onChange={handleChange}
                          className="focus:ring-brand-accent focus:border-brand-accent block w-full pl-4 sm:text-sm border-gray-300 rounded-md py-3 border" 
                          placeholder="Tell us about your previous work..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-brand-900 bg-brand-accent hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all uppercase tracking-wider">
                        <Send size={18} className="mr-2" /> Submit Application via Email
                      </button>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Note: This will open your email client. Please hit 'Send' to complete the application. 
                        <br/>You can then copy the data to Excel from your email inbox.
                      </p>
                    </div>
                  </form>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;
