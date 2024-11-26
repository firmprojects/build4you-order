import React from 'react';
import { User, ShoppingBag, Files } from 'lucide-react';

interface ProfileNavProps {
  activeTab: 'account' | 'orders' | 'files';
  onTabChange: (tab: 'account' | 'orders' | 'files') => void;
}

const tabs = [
  { id: 'account', label: 'Account Information', icon: User },
  { id: 'orders', label: 'Order History', icon: ShoppingBag },
  { id: 'files', label: 'File Manager', icon: Files },
] as const;

export function ProfileNav({ activeTab, onTabChange }: ProfileNavProps) {
  return (
    <nav className="space-y-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <tab.icon className="h-5 w-5" />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}