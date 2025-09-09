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
              {/* Facebook */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
                <span className="text-purple-600 font-bold text-lg group-hover:text-purple-700 transition-colors duration-300">f</span>
              </div>
              {/* Instagram */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
                <div className="relative group-hover:animate-pulse">
                  <div className="w-6 h-6 border-2 border-purple-600 rounded-lg group-hover:border-purple-700 transition-colors duration-300"></div>
                  <div className="absolute top-1 left-1 w-3 h-3 border-2 border-purple-600 rounded-full group-hover:border-purple-700 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-600 rounded-full group-hover:bg-purple-700 transition-colors duration-300"></div>
                </div>
              </div>
              {/* Twitter */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
                <div className="text-purple-600 font-bold text-lg group-hover:text-purple-700 transition-colors duration-300 group-hover:animate-bounce">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
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
            © 2024 Yayando. All rights reserved. Made with for families in Moldova.
          </p>
        </div>
      </div>
    </footer>
  );
}
