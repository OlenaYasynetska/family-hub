'use client';

import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Icon from '../ui/Icon';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-purple-600 text-white ${className}`} style={{padding: '50px 20px 80px 20px'}}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          {/* Yayando */}
          <div className="flex-[2]">
            <h2 className="text-4xl font-bold mb-6" style={{fontWeight: '700'}}>
              Yayando
            </h2>
            <p className="text-white mb-6" style={{marginBottom: '1.5rem', maxWidth: '66.67%'}}>
              Your trusted platform for family services in Moldova. Connecting families with quality childcare, education, and entertainment services.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">📷</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6" style={{marginBottom: '1.5rem'}}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li style={{marginBottom: '1.5rem'}}>
                <a href="/about" className="text-white hover:text-gray-200 transition-colors" style={{color: 'white'}}>
                  About Us
                </a>
              </li>
              <li style={{marginBottom: '1.5rem'}}>
                <a href="/how-it-works" className="text-white hover:text-gray-200 transition-colors" style={{color: 'white'}}>
                  How it Works
                </a>
              </li>
              <li style={{marginBottom: '1.5rem'}}>
                <a href="/safety" className="text-white hover:text-gray-200 transition-colors" style={{color: 'white'}}>
                  Safety & Trust
                </a>
              </li>
              <li style={{marginBottom: '1.5rem'}}>
                <a href="/help" className="text-white hover:text-gray-200 transition-colors" style={{color: 'white'}}>
                  Help Center
                </a>
              </li>
              <li style={{marginBottom: '1.5rem'}}>
                <a href="/terms" className="text-white hover:text-gray-200 transition-colors" style={{color: 'white'}}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6" style={{marginBottom: '1.5rem'}}>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center" style={{gap: '12px'}}>
                <Icon size="lg" color="white">
                  <EnvelopeIcon />
                </Icon>
                <span className="text-white" style={{marginBottom: '1.5rem'}}>
                  hello@yayando.md
                </span>
              </div>
              <div className="flex items-center" style={{gap: '12px'}}>
                <Icon size="lg" color="white">
                  <PhoneIcon />
                </Icon>
                <span className="text-white" style={{marginBottom: '1.5rem'}}>
                  +373 69 123 456
                </span>
              </div>
              <div className="flex items-center" style={{gap: '12px'}}>
                <Icon size="lg" color="white">
                  <MapPinIcon />
                </Icon>
                <span className="text-white" style={{marginBottom: '1.5rem'}}>
                  Chișinău, Moldova
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t text-center" style={{borderColor: 'rgba(255, 255, 255, 0.3)', paddingTop: '2rem', margin: '48px 0 0 0'}}>
          <p className="text-white text-sm">
            © 2024 Yayando. All rights reserved. Made with ❤️ for families in Moldova.
          </p>
        </div>
      </div>
    </footer>
  );
}
