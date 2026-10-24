// ============================================
// ZIZI MILARGE - CONFIGURABLE DATA
// Replace placeholder URLs with real images/content
// ============================================

export const WHATSAPP_NUMBER = "2348061930802";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Brand Configuration
export const BRAND = {
  name: "Zizi Milarge",
  tagline: "Find Your Dream Car",
  address: "Ring Road 2, Dakibiu, Abuja, FCT",
  phone: "+234 806 193 0802",
  email: "zizimilarge@gmail.com",
  hours: "Open 24 Hours",
};

// Logo - Replace with real logo URL
export const LOGO_URL = "https://placehold.co/200x60/000000/d4af37?text=ZIZI+MILARGE";

// Hero Section
export const HERO = {
  backgroundImage: "https://placehold.co/1920x1080/1a1a1a/333333?text=Premium+Car+Showroom",
  headline: "Find Your Dream Car at Zizi Milarge",
  subheadline: "Trusted Automotive Dealership in Dakibiu, Abuja. Open 24 Hours.",
};

// Map Placeholder - Replace with Google Maps embed or real image
export const MAP_IMAGE = "https://placehold.co/600x400/333333/666666?text=Google+Maps:+Dakibiu,+Abuja";

// Car Inventory Data
export interface CarItem {
  id: number;
  title: string;
  price: string;
  image: string;
  badges: string[];
  year: string;
  mileage: string;
  transmission: string;
  comingSoon: boolean;
}

export const CARS: CarItem[] = [
  {
    id: 1,
    title: "2023 Toyota Highlander",
    price: "₦25,000,000",
    image: "https://placehold.co/600x400/222222/666666?text=Toyota+Highlander",
    badges: ["New Arrival", "Verified"],
    year: "2023",
    mileage: "12,000 km",
    transmission: "Automatic",
    comingSoon: false,
  },
  {
    id: 2,
    title: "2022 Mercedes-Benz GLE 350",
    price: "₦38,500,000",
    image: "https://placehold.co/600x400/222222/666666?text=Mercedes+GLE",
    badges: ["Verified"],
    year: "2022",
    mileage: "25,000 km",
    transmission: "Automatic",
    comingSoon: false,
  },
  {
    id: 3,
    title: "2024 Lexus RX 350",
    price: "₦42,000,000",
    image: "https://placehold.co/600x400/222222/666666?text=Lexus+RX+350",
    badges: ["New Arrival", "Verified"],
    year: "2024",
    mileage: "5,000 km",
    transmission: "Automatic",
    comingSoon: false,
  },
  {
    id: 4,
    title: "2023 Honda Accord Sport",
    price: "₦18,500,000",
    image: "https://placehold.co/600x400/222222/666666?text=Honda+Accord",
    badges: ["Verified"],
    year: "2023",
    mileage: "18,000 km",
    transmission: "Automatic",
    comingSoon: false,
  },
  {
    id: 5,
    title: "2024 BMW X5 xDrive40i",
    price: "₦55,000,000",
    image: "https://placehold.co/600x400/222222/666666?text=BMW+X5",
    badges: ["New Arrival"],
    year: "2024",
    mileage: "2,000 km",
    transmission: "Automatic",
    comingSoon: true,
  },
  {
    id: 6,
    title: "2023 Range Rover Sport",
    price: "₦62,000,000",
    image: "https://placehold.co/600x400/222222/666666?text=Range+Rover+Sport",
    badges: ["Coming Soon"],
    year: "2023",
    mileage: "8,000 km",
    transmission: "Automatic",
    comingSoon: true,
  },
];

// Features / Why Choose Us
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "ShieldCheck",
    title: "Verified Vehicles",
    description: "Every vehicle undergoes rigorous inspection and verification before listing. Buy with complete confidence.",
  },
  {
    icon: "Clock",
    title: "24/7 Availability",
    description: "We're always open. Browse, inquire, or visit our showroom any time — day or night.",
  },
  {
    icon: "CreditCard",
    title: "Flexible Payment Plans",
    description: "We offer tailored payment solutions to make your dream car affordable. Spread payments your way.",
  },
  {
    icon: "Truck",
    title: "Nationwide Delivery",
    description: "Can't visit Abuja? No problem. We deliver your vehicle safely to any location across Nigeria.",
  },
];

// Social Links - Replace with real URLs
export const SOCIAL_LINKS = {
  instagram: "#",
  facebook: "#",
  twitter: "#",
  youtube: "#",
};
