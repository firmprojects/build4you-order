import React from 'react';
import { Check } from 'lucide-react';

const steps = ['Cart', 'Details', 'Payment', 'Confirmation'];

interface CheckoutStepsProps {
  currentStep: number;
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
      <div
        className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-blue-600 transition-all duration-500"
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      />
      <div className="relative z-10 flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                index < currentStep
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : index === currentStep
                  ? 'border-blue-600 bg-white text-blue-600'
                  : 'border-gray-300 bg-white text-gray-300'
              }`}
            >
              {index < currentStep ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm">{index + 1}</span>
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}