import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  onViewDetails: () => void;
}

export function ProductCard({
  title,
  description,
  image,
  price,
  rating,
  reviews,
  category,
  onViewDetails,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="ml-1">{rating}</span>
              <span className="mx-1">·</span>
              <span>{reviews} reviews</span>
            </div>
            <p className="text-lg font-bold text-blue-600">${price}</p>
          </div>
          <button
            onClick={onViewDetails}
            className="group/btn flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}