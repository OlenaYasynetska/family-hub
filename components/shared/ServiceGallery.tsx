import React from 'react';

interface ServiceGalleryProps {
  images: string[];
  className?: string;
}

export default function ServiceGallery({ images, className = '' }: ServiceGalleryProps) {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={`Service image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}