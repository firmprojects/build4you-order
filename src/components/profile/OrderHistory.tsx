import React from 'react';
import { format } from 'date-fns';
import { Download, ExternalLink } from 'lucide-react';

const orders = [
  {
    id: 'ORD-001',
    template: 'Agency Pro Template',
    date: new Date('2024-03-15'),
    status: 'completed',
    amount: 149,
  },
  {
    id: 'ORD-002',
    template: 'E-Store Plus Template',
    date: new Date('2024-02-28'),
    status: 'completed',
    amount: 199,
  }
];

export function OrderHistory() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-white">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Order History</h2>
        </div>
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{order.template}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Order ID: {order.id} • {format(order.date, 'MMM d, yyyy')}
                  </p>
                </div>
                <p className="text-lg font-medium text-gray-900">${order.amount}</p>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
                  <Download className="mr-1.5 h-4 w-4" />
                  Download Files
                </button>
                <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
                  <ExternalLink className="mr-1.5 h-4 w-4" />
                  View Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}