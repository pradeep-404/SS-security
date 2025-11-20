
import { ServiceRate, NavItem } from './types';

export const COMPANY_INFO = {
  name: "Safety Secure Company",
  regNo: "800650012000084",
  address: "121 Mahaveer Nagar 2, Near Maharani Farm, Durgapura, Jaipur (RAJ.)",
  address2:"unity nilay A -515 sirsi road , kanakpura, Jaipur (RAJ.)302012", 
  phone: ["+91 63672 95479", "+91 9680445807"],
  contactPerson: "Mr. Ankit",
  email: "safetysecurecompany@gmail.com" // Updated for Career form destination
};

export const CHARTER_OF_RESPONSIBILITY = [
  "That Officer/Guards & liftman provided to you shall be our employees and we shall be responsible for their salary, uniform and other benefits.",
  "Our guards will carry out all the duties assigned to them as per management instructions.",
  "Our guards will have proper identity cards and will always be in uniform while on duty.",
  "Duty allocation of our security personnel will be our responsibility.",
  "Our security personnel will have basic knowledge of fire fighting and will be trained in handling fire fighting equipment.",
  "Our guards will man the entrance gate and control all movements of visitors and materials.",
  "Our trained supervisor will conduct surprise checks round the clock to control the effective performance of our guards.",
  "For all practical reasons, the guards will be our responsibility.",
  "If allowed, our guards shall open and close office premises as per the requirement of the company.",
  "We shall ensure that your premises are round the clock guarded/secured by our guards.",
  "Please note that you shall not employ directly or indirectly any of our security personnel in your organization without our consent."
];

export const SERVICE_RATES: ServiceRate[] = [
  {
    type: "Security Guard",
    rate: "₹17,000",
    shift: "12 hrs / night",
    facility: "Nill"
  },
  {
    type: "Security Guard",
    rate: "₹15,000",
    shift: "12 hrs",
    facility: "Stay and Food"
  },
  {
    type: "Security Guard",
    rate: "₹14,000",
    shift: "10 hrs",
    facility: "Nill"
  },
  {
    type: "Security Guard",
    rate: "₹25,000",
    shift: "24 hrs",
    facility: "Stay (No Food)"
  },
  {
    type: "Security Guard + Valet Parking",
    rate: "₹18,500",
    shift: "12 hrs",
    facility: "Nill"
  },
  {
    type: "PSO (Personal Security Officer)",
    rate: "₹30,000 - ₹65,000",
    shift: "24 hrs",
    facility: "Stay / Food"
  },
  {
    type: "Bouncer",
    rate: "₹25,000 - ₹45,000",
    shift: "24 hrs",
    facility: "Stay / Food"
  },
  {
    type: "Bouncer (Event)",
    rate: "₹1,700 / event",
    shift: "2 - 8 hrs",
    facility: "Nill"
  },
  {
    type: "Gunman (Event)",
    rate: "₹3,500 / event",
    shift: "8 hrs",
    facility: "Nill"
  },
  {
    type: "Gunman",
    rate: "₹28,000 - ₹70,000",
    shift: "24 hrs",
    facility: "Stay and Food"
  },
  {
    type: "Driver",
    rate: "₹25,000 - ₹45,000",
    shift: "10 hrs",
    facility: "Nill"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services & Rates', path: '/services' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];
