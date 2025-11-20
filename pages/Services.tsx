import React from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICE_RATES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Our Services & Rates"
        subtitle="Transparent pricing for Societies, Industrial, and Events."
        image="https://picsum.photos/seed/building/1920/600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-10 text-center">
           <h2 className="text-2xl font-bold text-brand-900">Standard Rate Card</h2>
           <p className="text-gray-600 mt-2">Charges for Society / Industrial / Corporate etc.</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-brand-800">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Type</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Rate (INR)</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Shift Duration</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Facility Provided by Client</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {SERVICE_RATES.map((service, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{service.type}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-brand-900 font-bold">{service.rate}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{service.shift}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{service.facility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {SERVICE_RATES.map((service, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6 border-l-4 border-brand-accent">
              <h3 className="text-lg font-bold text-gray-900">{service.type}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500 text-sm">Rate</span>
                  <span className="font-bold text-brand-900">{service.rate}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500 text-sm">Shift</span>
                  <span className="text-gray-900">{service.shift}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Client Facility</span>
                  <span className="text-gray-900 capitalize">{service.facility}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GST Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>18% GST is mandatory and applicable on top of the above prices.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;