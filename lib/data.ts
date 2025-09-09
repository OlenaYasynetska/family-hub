import { Service, Feature, FamilyMember, Category, Testimonial, ServicesResponse, FeaturesResponse, FamilyResponse, CategoriesResponse, TestimonialsResponse } from '@/types';
import servicesData from '@/data/services.json';
import featuresData from '@/data/features.json';
import familyData from '@/data/family.json';
import categoriesData from '@/data/categories.json';
import testimonialsData from '@/data/testimonials.json';

// Синхронные функции для статических данных
export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getFeatures(): Feature[] {
  return featuresData as Feature[];
}

export function getFamilyMembers(): FamilyMember[] {
  return familyData as FamilyMember[];
}

export function getCategories(): Category[] {
  return categoriesData as Category[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}

// Асинхронные функции для динамической загрузки (если понадобятся)
export async function fetchServices(): Promise<ServicesResponse> {
  try {
    const response = await fetch('/data/services.json');
    if (!response.ok) {
      throw new Error('Failed to fetch services');
    }
    const data: ServicesResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

export async function fetchFeatures(): Promise<FeaturesResponse> {
  try {
    const response = await fetch('/data/features.json');
    if (!response.ok) {
      throw new Error('Failed to fetch features');
    }
    const data: FeaturesResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading features:', error);
    return [];
  }
}

export async function fetchFamilyMembers(): Promise<FamilyResponse> {
  try {
    const response = await fetch('/data/family.json');
    if (!response.ok) {
      throw new Error('Failed to fetch family members');
    }
    const data: FamilyResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading family members:', error);
    return [];
  }
}

// Утилиты для работы с данными
export function getServiceById(services: Service[], id: number): Service | undefined {
  return services.find(service => service.id === id);
}

export function getServicesByCategory(services: Service[], category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getServicesByLocation(services: Service[], location: string): Service[] {
  return services.filter(service => service.location === location);
}

export function searchServices(services: Service[], query: string): Service[] {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.provider.toLowerCase().includes(lowercaseQuery)
  );
}
