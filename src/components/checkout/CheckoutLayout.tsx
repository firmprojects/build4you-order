import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CheckoutSteps } from './CheckoutSteps';

interface CheckoutLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  onBack: () => void;
}

export function CheckoutLayout({ children, currentStep, onBack }: CheckoutLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </button>
        </div>
      </div>
      
      <div className="mx-auto max-w-3xl px-6 py-12">
        <CheckoutSteps currentStep={currentStep} />
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}