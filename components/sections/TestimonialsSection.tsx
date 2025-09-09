import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import SectionHeader from '../ui/SectionHeader';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarColor: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsSection({ 
  testimonials, 
  className = '' 
}: TestimonialsSectionProps) {
  return (
    <div className={className}>
      <SectionHeader 
        title="What Parents Say"
        subtitle="Real reviews from real families"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            avatarColor={testimonial.avatarColor}
          />
        ))}
      </div>
    </div>
  );
}
