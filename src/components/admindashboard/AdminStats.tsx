import React from 'react';
import { Card } from '@/components/ui/Card';

interface StatItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

interface AdminStatsProps {
  stats: {
    totalUsers: number;
    activeSessions: number;
    recentActivities: { id: string; description: string }[];
  };
}

export function AdminStats({ stats }: AdminStatsProps) {
  const items: StatItem[] = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
    },
    {
      label: 'Active Sessions',
      value: stats.activeSessions,
    },
    {
      label: 'Recent Activities',
      value: stats.recentActivities.length,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4 text-center">
          {item.icon && <div className="flex justify-center mb-2">{item.icon}</div>}
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-2xl font-bold text-gray-900">{item.value}</p>
        </Card>
      ))}
    </div>
  );
}