import React from 'react';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onContinue: () => void;
}

export function OrderConfirmation({ formData, onContinue }: OrderConfirmationProps) {
  return (
    <div className="text-center">
      <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-12 w-12 text-green-500" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        Thank you for your purchase!
      </h2>
      <p className="mt-2 text-gray-600">
        Hi {formData.firstName}, we've sent a confirmation email to {formData.email}
      </p>
      <div className="mt-12 rounded-lg border bg-white p-6">
        <h3 className="font-medium text-gray-900">Next Steps</h3>
        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          <li>• Upload your content to customize your website</li>
          <li>• Access your template files from your account dashboard</li>
          <li>• Review the documentation to get started</li>
          <li>• Contact support if you need assistance</li>
        </ul>
      </div>
      <button
        onClick={onContinue}
        className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Continue to Content Upload
      </button>
    </div>
  );
}