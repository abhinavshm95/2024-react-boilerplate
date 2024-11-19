import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const DashboardRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Dashboard">
      <p className="font-medium">Weclome to the dashboard</p>
    </ContentLayout>
  );
};
