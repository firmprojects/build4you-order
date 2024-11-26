import React from 'react';

interface FilterOption {
  id: string;
  name: string;
  count: number;
}

interface FilterBarProps {
  categories: FilterOption[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRanges: FilterOption[];
  selectedPrice: string;
  onPriceChange: (price: string) => void;
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRanges,
  selectedPrice,
  onPriceChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => onPriceChange(range.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedPrice === range.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}