import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';
import { ProductCard } from './ProductCard';
import { User } from 'lucide-react';

interface ProductCatalogProps {
  onProductSelect: (productId: string) => void;
  onProfileClick: () => void;
}

// ... (keep existing categories, priceRanges, and products arrays)

export function ProductCatalog({ onProductSelect, onProfileClick }: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    const matchesPrice = selectedPrice === 'all' ||
      (selectedPrice === 'under-100' && product.price < 100) ||
      (selectedPrice === '100-200' && product.price >= 100 && product.price <= 200) ||
      (selectedPrice === 'over-200' && product.price > 200);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Website Templates</h1>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect template for your business
            </p>
          </div>
          <button
            onClick={onProfileClick}
            className="rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50"
          >
            <User className="h-5 w-5" />
          </button>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="mt-8">
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRanges={priceRanges}
            selectedPrice={selectedPrice}
            onPriceChange={setSelectedPrice}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDetails={() => onProductSelect(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}