import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProfileNav } from './ProfileNav';
import { AccountInfo } from './AccountInfo';
import { OrderHistory } from './OrderHistory';
import { FileManager } from './FileManager';

interface ProfileProps {
  onBack: () => void;
}

type TabType = 'account' | 'orders' | 'files';

export function Profile({ onBack }: ProfileProps) {
  const [activeTab, setActiveTab] = useState<TabType>('account');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-64">
            <ProfileNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="flex-1">
            {activeTab === 'account' && <AccountInfo />}
            {activeTab === 'orders' && <OrderHistory />}
            {activeTab === 'files' && <FileManager />}
          </div>
        </div>
      </div>
    </div>
  );
}