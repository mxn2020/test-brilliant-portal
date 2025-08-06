import React from 'react';

export interface AdminStatsProps {
  stats: {
    totalUsers: number;
    activeSessions: number;
    recentActivities: { id: string; action: string; timestamp: string }[];
  };
}

interface StatItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export const AdminStats: React.FC<AdminStatsProps> = ({ stats }) => {
  const items: StatItem[] = [
    { label: 'Total Users', value: stats.totalUsers },
    { label: 'Active Sessions', value: stats.activeSessions },
    { label: 'Recent Activities', value: stats.recentActivities.length },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
        >
          {item.icon && <div className="text-purple-600 mb-2">{item.icon}</div>}
          <div className="text-2xl font-semibold">{item.value}</div>
          <div className="text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
};