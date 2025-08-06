import React from 'react';
import { Container } from '../lib/dev-container';
import { useAdminData } from '../hooks/useAdminData';
import { AdminStats } from '@/components/admindashboard/AdminStats';
import { AdminControls } from '@/components/admindashboard/AdminControls';
import { AdminLoadingState } from '@/components/admin/AdminLoadingState';
import { AdminErrorState } from '@/components/admin/AdminErrorState';

export const AdminDashboard: React.FC = () => {
  const { data, isLoading, error } = useAdminData();

  if (isLoading) {
    return <AdminLoadingState />;
  }

  if (error || !data) {
    return (
      <AdminErrorState
        error={error instanceof Error ? error.message : 'Failed to load admin data'}
      />
    );
  }

  return (
    <Container componentId="admin-dashboard-page" className="space-y-6 p-6">
      <AdminStats stats={data} />
      <AdminControls />
    </Container>
  );
};

export default AdminDashboard;