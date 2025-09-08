export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  features: Feature[];
}
