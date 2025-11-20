import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative bg-brand-900 py-20 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;