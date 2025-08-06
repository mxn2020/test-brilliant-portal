import { useQuery } from '@tanstack/react-query';

export interface AdminStatsData {
  totalUsers: number;
  activeSessions: number;
  recentActivities: { id: string; description: string }[];
}

export function useAdminData() {
  return useQuery<AdminStatsData, Error>(['adminStats'], async () => {
    const response = await fetch('/api/admin/stats', {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch admin statistics');
    }

    const data = await response.json();
    return data as AdminStatsData;
  });
}