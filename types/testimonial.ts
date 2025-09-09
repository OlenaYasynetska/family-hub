export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatarColor: string;
}

export type TestimonialsResponse = Testimonial[];
