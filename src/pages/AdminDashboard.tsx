import React from 'react';
import { Container, Div } from '../lib/dev-container';
import { useAdminData } from '@/hooks/useAdminData';
import { AdminStats } from '@/components/admindashboard/AdminStats';
import { AdminControls } from '@/components/admindashboard/AdminControls';
import { AdminLoadingState } from '@/components/admin/stats/AdminLoadingState';
import { AdminErrorState } from '@/components/admin/stats/AdminErrorState';

export function AdminDashboard() {
  const { data: stats, isLoading, error } = useAdminData();

  if (isLoading) {
    return <AdminLoadingState />;
  }

  if (error || !stats) {
    return <AdminErrorState error={error instanceof Error ? error.message : 'Failed to load admin stats'} />;
  }

  return (
    <Container componentId="admin-dashboard-page">
      <Div devId="admin-dashboard-wrapper" className="space-y-6 p-6">
        <AdminStats stats={stats} />
        <AdminControls />
      </Div>
    </Container>
  );
}