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

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}
