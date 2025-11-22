
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Car, Trophy, Star, ChevronLeft, ChevronRight, Award, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CAROUSEL_IMAGES = [
  {
    url: "src/assets/Gooverment ss gurd.jpg", 
    title: "Professional Security Team",
    subtitle: "Disciplined, Trained, and Ready for Any Challenge"
  },
  {
    url: "src/assets/palce event orgnaer.jpg",
    title: "Celebrity & VIP Protection",
    subtitle: "Trusted by High-Profile Individuals and Events"
  },
  {
    url: "src/assets/ss guard good.jpg",
    title: "Event & Industrial Security",
    subtitle: "Comprehensive Solutions for Weddings, Corporate, and Housing"
  }
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <div className="relative bg-brand-900 h-[600px] overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={CAROUSEL_IMAGES[currentImageIndex].url}
              alt={CAROUSEL_IMAGES[currentImageIndex].title}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-brand-900/30"></div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              key={`text-${currentImageIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-7xl drop-shadow-lg">
                <span className="block">{CAROUSEL_IMAGES[currentImageIndex].title}</span>
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-xl text-gray-200 font-light">
                {CAROUSEL_IMAGES[currentImageIndex].subtitle}
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-900 bg-brand-accent hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-yellow-500/20"
                >
                  Hire Security
                </Link>
                <Link
                  to="/careers"
                  className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Job Openings
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-20 hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-20 hidden md:block"
        >
          <ChevronRight size={32} />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-brand-accent' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>

      {/* Achievements & Gallery Section - UPDATED WITH SPECIFIC CONTENT */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">Our Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Achievements & Trusted Moments
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              From securing Bollywood stars to managing grand weddings, our work speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Achievement 1: Celebrity Protection */}
            <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl h-[400px]">
               {/* REPLACE WITH YOUR IMAGE OF ADITYA ROY KAPUR */}
               <img 
                  src="src/assets/aditya rai kapoor event guards.jpg" 
                  alt="Aditya Roy Kapur Security" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                     <Star className="text-brand-accent fill-brand-accent" size={20} />
                     <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">VVIP Protection</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Escorting Aditya Roy Kapur</h3>
                  <p className="text-gray-300 text-sm">Provided elite bodyguards and close protection services for Bollywood Actor Aditya Roy Kapur during his visit.</p>
               </div>
            </div>

            {/* Achievement 2: Awards */}
            <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl h-[400px]">
               {/* REPLACE WITH YOUR IMAGE OF AMISHA PATEL AWARD */}
               <img 
                  src="src/assets/award.jpg" 
                  alt="Amisha Patel Award" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                     <Trophy className="text-brand-accent fill-brand-accent" size={20} />
                     <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Excellence Award</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Honored by Amisha Patel</h3>
                  <p className="text-gray-300 text-sm">Received the "Best Security Services" award from Actress Amisha Patel at the Rajasthan Tourism Achievers Awards.</p>
               </div>
            </div>

            {/* Achievement 3: Golf Cart Team */}
            <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl h-[300px]">
               {/* REPLACE WITH YOUR IMAGE OF GOLF CARTS */}
               <img 
                  src="src/assets/place event organizer.jpg" 
                  alt="Golf Cart Patrol" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Specialized Patrol Units</h3>
                  <p className="text-gray-300 text-sm">Deployed Golf Cart Patrol teams for large-scale wedding venues and resorts.</p>
               </div>
            </div>

            {/* Achievement 4: Bouncer Team */}
            <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl h-[300px]">
               {/* REPLACE WITH YOUR IMAGE OF BOUNCERS */}
               <img 
                  src="src/assets/ss guard.jpg" 
                  alt="Bouncer Team" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Elite Bouncer Squad</h3>
                  <p className="text-gray-300 text-sm">Our physically imposing and well-trained bouncer team ready for any crowd control situation.</p>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Why Choose Safety Secure?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Managed by ex-police personnel with wide experience in the security field.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="text-brand-accent mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manned Guarding</h3>
              <p className="text-gray-600">
                Trained security guards for societies, factories, and offices. Available for 10hr, 12hr, and 24hr shifts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="text-brand-accent mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Event Security & Bouncers</h3>
              <p className="text-gray-600">
                Professional bouncers and gunmen for events, parties, and VIP protection. Short-term and long-term contracts available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="text-brand-accent mb-4">
                <Car size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drivers & Valet</h3>
              <p className="text-gray-600">
                Reliable drivers and valet parking services for corporate needs and private requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to secure your premises?</span>
            <span className="block text-brand-accent">Check our transparent pricing.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
             <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-900 bg-white hover:bg-gray-50"
              >
                View Rates
              </Link>
             <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-brand-700"
              >
                Contact Us
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
