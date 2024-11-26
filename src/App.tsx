import React, { useState } from 'react';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetails } from './components/ProductDetails';
import { ContentUpload } from './components/ContentUpload';
import { Profile } from './components/profile/Profile';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  if (showProfile) {
    return <Profile onBack={() => setShowProfile(false)} />;
  }

  if (showUpload) {
    return (
      <ContentUpload 
        onComplete={() => {
          setShowUpload(false);
          setSelectedProduct(null);
          setShowProfile(true);
        }} 
      />
    );
  }

  return selectedProduct ? (
    <ProductDetails 
      productId={selectedProduct} 
      onBack={() => setSelectedProduct(null)}
      onPurchaseComplete={() => setShowUpload(true)}
      onProfileClick={() => setShowProfile(true)}
    />
  ) : (
    <ProductCatalog 
      onProductSelect={setSelectedProduct} 
      onProfileClick={() => setShowProfile(true)}
    />
  );
}

export default App;