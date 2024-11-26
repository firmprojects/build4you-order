import React, { useState } from 'react';
import { CheckoutLayout } from './CheckoutLayout';
import { CartSummary } from './CartSummary';
import { UserDetails } from './UserDetails';
import { PaymentMethod } from './PaymentMethod';
import { OrderConfirmation } from './OrderConfirmation';

interface CheckoutProps {
  productId: string;
  onBack: () => void;
  onPurchaseComplete: () => void;
}

export function Checkout({ productId, onBack, onPurchaseComplete }: CheckoutProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    paymentMethod: '',
  });

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    if (step === 0) {
      onBack();
    } else {
      setStep((prev) => Math.max(prev - 1, 0));
    }
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <CheckoutLayout currentStep={step} onBack={handleBack}>
      {step === 0 && <CartSummary productId={productId} onNext={handleNext} />}
      {step === 1 && (
        <UserDetails
          formData={formData}
          onChange={updateFormData}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <PaymentMethod
          formData={formData}
          onChange={updateFormData}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <OrderConfirmation 
          formData={formData}
          onContinue={onPurchaseComplete}
        />
      )}
    </CheckoutLayout>
  );
}