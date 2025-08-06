import { useQuery } from '@tanstack/react-query';
import { fetchAdminStats } from '@/lib/api/admin';

interface AdminStats {
  totalUsers: number;
  activeSessions: number;
  recentActivities: { id: string; action: string; timestamp: string }[];
}

export const useAdminData = () => {
  return useQuery<AdminStats, Error>('adminStats', async () => {
    const response = await fetchAdminStats();
    if (!response.ok) {
      throw new Error('Failed to fetch admin stats');
    }
    return response.json();
  });
};