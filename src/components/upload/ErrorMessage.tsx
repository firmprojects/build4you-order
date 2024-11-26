import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 p-4">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-red-400" />
        <p className="ml-3 text-sm text-red-700">{message}</p>
      </div>
    </div>
  );
}