// Service types
export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  location: string;
  provider: string;
  features: string[];
}

// Feature types (for features.json)
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Family member types (for family.json)
export interface FamilyMember {
  id: number;
  name: string;
  role: string;
  age: number;
  image: string;
}

// Service category types
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}

// API Response types
export type ServicesResponse = Service[];
export type FeaturesResponse = Feature[];
export type FamilyResponse = FamilyMember[];

// Re-export other types
export * from './category';
export * from './testimonial';
