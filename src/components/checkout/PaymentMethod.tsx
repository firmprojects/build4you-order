import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';

interface PaymentMethodProps {
  formData: {
    paymentMethod: string;
  };
  onChange: (data: Partial<PaymentMethodProps['formData']>) => void;
  onNext: () => void;
}

export function PaymentMethod({ formData, onChange, onNext }: PaymentMethodProps) {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
        <div className="mt-6 space-y-4">
          <button
            type="button"
            onClick={() => onChange({ paymentMethod: 'card' })}
            className={`flex w-full items-center justify-between rounded-lg border p-4 transition-colors ${
              formData.paymentMethod === 'card'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-600'
            }`}
          >
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6 text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Credit Card</p>
                <p className="text-sm text-gray-500">
                  Pay securely with your credit card
                </p>
              </div>
            </div>
            <div
              className={`h-4 w-4 rounded-full border ${
                formData.paymentMethod === 'card'
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}
            />
          </button>
          <button
            type="button"
            onClick={() => onChange({ paymentMethod: 'paypal' })}
            className={`flex w-full items-center justify-between rounded-lg border p-4 transition-colors ${
              formData.paymentMethod === 'paypal'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-600'
            }`}
          >
            <div className="flex items-center space-x-4">
              <Wallet className="h-6 w-6 text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">PayPal</p>
                <p className="text-sm text-gray-500">
                  Pay with your PayPal account
                </p>
              </div>
            </div>
            <div
              className={`h-4 w-4 rounded-full border ${
                formData.paymentMethod === 'paypal'
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}
            />
          </button>
        </div>
      </div>
      <button
        onClick={onNext}
        disabled={!formData.paymentMethod}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300"
      >
        Complete Purchase
      </button>
    </div>
  );
}