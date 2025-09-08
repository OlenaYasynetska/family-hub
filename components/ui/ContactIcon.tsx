import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactIconProps {
  type: 'email' | 'phone' | 'location';
  className?: string;
}

const iconMap = {
  email: EnvelopeIcon,
  phone: PhoneIcon,
  location: MapPinIcon
};

export default function ContactIcon({ type, className = '' }: ContactIconProps) {
  const IconComponent = iconMap[type];
  
  return (
    <IconComponent 
      className={`text-white ${className}`} 
      style={{width: '30px', height: '30px'}} 
    />
  );
}
