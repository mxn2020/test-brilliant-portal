import React from 'react';
import { Container, Div } from '@/lib/dev-container';
import { Users, Clock, DollarSign } from 'lucide-react';

const stats = [
  {
    label: 'Active Users',
    value: '12,345',
    icon: Users,
  },
  {
    label: 'Daily Sessions',
    value: '45,678',
    icon: Clock,
  },
  {
    label: 'Monthly Revenue',
    value: '$1.2M',
    icon: DollarSign,
  },
];

export default function Stats() {
  return (
    <Container componentId="landing-stats">
      <Div devId="stats-section" className="py-12 bg-gray-50">
        <Div devId="stats-grid" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Div key={stat.label} className="flex flex-col items-center">
                <Icon className="h-8 w-8 text-purple-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-gray-600">{stat.label}</p>
              </Div>
            );
          })}
        </Div>
      </Div>
    </Container>
  );
}