import React from 'react';
import { Button } from '@/components/ui/Button';

export function AdminControls() {
  return (
    <div className="flex space-x-4 justify-center mt-4">
      <Button className="bg-purple-600 text-white hover:bg-purple-700">
        Refresh Data
      </Button>
      <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300">
        Export Report
      </Button>
    </div>
  );
}