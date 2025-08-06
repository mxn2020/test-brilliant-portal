import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Div } from '../lib/dev-container';
import { useDashboard } from '@/hooks/useDashboard';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { WelcomeCard } from '@/components/dashboard/WelcomeCard';
import { SessionWarning } from '@/components/dashboard/SessionWarning';
import { CurrentSessionCard } from '@/components/dashboard/CurrentSessionCard';
import { RecentActivityCard } from '@/components/dashboard/RecentActivityCard';
import { DashboardLoading } from '@/components/dashboard/DashboardLoading';
import { DashboardUnauthorized } from '@/components/dashboard/DashboardUnauthorized';
import { DashboardClientsWidget } from '@/components/dashboard/DashboardClientsWidget';
import { DashboardAppointmentsWidget } from '@/components/dashboard/DashboardAppointmentsWidget';

export const Dashboard: React.FC = () => {
  const {
    session,
    sessionLoading,
    currentSession,
    multipleSessions,
    getUserInitials,
    getTimeRemaining,
    getDaysSinceMember,
  } = useDashboard();

  if (sessionLoading) {
    return <DashboardLoading />;
  }

  if (!session) {
    return <DashboardUnauthorized />;
  }

  const user = session.user;

  if (!user) {
    return (
      <DashboardUnauthorized
        isError
        errorMessage="Error: User data is missing from session"
      />
    );
  }

  return (
    <Container componentId="dashboard-page">
      <Div devId="dashboard-page-wrapper" className="min-h-screen bg-gray-50">
        {/* Top navigation for new sections */}
        <Div className="bg-white border-b border-gray-200">
          <Div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex space-x-4">
            <Link
              to="/clients"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Clients
            </Link>
            <Link
              to="/appointments"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Appointments
            </Link>
          </Div>
        </Div>

        <Container componentId="dashboard-content">
          <Div
            devId="dashboard-content-wrapper"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            <Div devId="dashboard-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProfileCard user={user} getUserInitials={getUserInitials} />

              <Container componentId="dashboard-stats">
                <Div devId="dashboard-stats-wrapper" className="md:col-span-2 space-y-6">
                  <WelcomeCard
                    userName={user.name}
                    daysSinceMember={getDaysSinceMember(user.createdAt)}
                  />

                  {/* Business specific widgets */}
                  <DashboardClientsWidget />
                  <DashboardAppointmentsWidget />

                  <SessionWarning multipleSessions={multipleSessions} />

                  <CurrentSessionCard
                    currentSession={currentSession}
                    getTimeRemaining={getTimeRemaining}
                  />

                  <RecentActivityCard />
                </Div>
              </Container>
            </Div>
          </Div>
        </Container>
      </Div>
    </Container>
  );
};