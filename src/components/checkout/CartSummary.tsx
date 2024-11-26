import React from 'react';
import { Shield } from 'lucide-react';

interface CartSummaryProps {
  productId: string;
  onNext: () => void;
}

export function CartSummary({ onNext }: CartSummaryProps) {
  return (
    <div className="rounded-lg border bg-white">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-medium text-gray-900">Agency Pro Template</h3>
              <p className="mt-1 text-sm text-gray-500">Regular License</p>
            </div>
            <p className="text-lg font-medium text-gray-900">$149</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <p className="font-medium text-gray-900">Total</p>
            <p className="text-xl font-semibold text-gray-900">$149</p>
          </div>
        </div>
      </div>
      <div className="border-t bg-gray-50 p-6">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-green-500" />
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-900">Secure Purchase</p>
            <p className="mt-1">
              Your payment information is encrypted and secure. We never store your
              credit card details.
            </p>
          </div>
        </div>
        <button
          onClick={onNext}
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Continue to Details
        </button>
      </div>
    </div>
  );
}