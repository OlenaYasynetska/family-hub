'use client';

import React from 'react';
import { Service } from '../../types';
import Image from 'next/image';

interface ServicesGridProps {
  services: Service[];
  className?: string;
}

export default function ServicesGrid({ services, className = '' }: ServicesGridProps) {
  if (services.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Услуги не найдены
        </h3>
        <p className="text-gray-600">
          Попробуйте изменить параметры поиска или фильтры
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {/* Изображение услуги */}
          <div className="relative h-48 bg-gray-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            
            {/* Рейтинг */}
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                ⭐ {service.rating}
              </span>
            </div>

            {/* Категория */}
            <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              {service.category}
            </div>
          </div>

          {/* Контент карточки */}
          <div className="p-4">
            {/* Заголовок и цена */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {service.title}
              </h3>
              <span className="text-purple-600 font-bold text-lg ml-2">
                ${service.price}
              </span>
            </div>

            {/* Описание */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {service.description}
            </p>

            {/* Локация и провайдер */}
            <div className="space-y-1 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">📍</span>
                <span>{service.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">👤</span>
                <span>{service.provider}</span>
              </div>
            </div>

            {/* Особенности */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    +{service.features.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-2">
              <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm">
                Забронировать
              </button>
              <button className="border border-purple-600 text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition-colors text-sm">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
