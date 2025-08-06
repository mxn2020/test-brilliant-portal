import React from 'react';
import { Button } from '@/components/ui/button';

export const AdminControls: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Button variant="primary">Add New User</Button>
      <Button variant="secondary">Generate Report</Button>
    </div>
  );
};