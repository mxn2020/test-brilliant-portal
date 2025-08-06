import React from 'react';
import { Container, Div, Card, CardHeader, CardTitle, CardContent, Icon } from '@/lib/dev-container';
import {
  LayoutDashboard,
  ChartBar,
  Users,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    name: 'Intuitive Dashboard',
    description: 'Realtime insights and customizable widgets at a glance.',
    icon: LayoutDashboard,
  },
  {
    name: 'Advanced Analytics',
    description: 'Deep data analysis with visual reports and trends.',
    icon: ChartBar,
  },
  {
    name: 'Team Collaboration',
    description: 'Seamless communication and shared workspaces for teams.',
    icon: Users,
  },
  {
    name: 'Enterprise‑Grade Security',
    description: 'Robust authentication, role‑based access and audit trails.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <Container componentId="landing-features">
      <Div devId="features-section" className="py-16 bg-white">
        <Div devId="features-grid" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.name} devId={\`feature-card-\${feature.name.replace(/\\s+/g, '-').toLowerCase()}\`} className="flex flex-col p-6">
                <Div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-purple-600" />
                </Div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </Div>
      </Div>
    </Container>
  );
}