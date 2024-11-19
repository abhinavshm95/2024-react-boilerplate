import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const ScheduleRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Schedule">
      <p className="font-medium">
        Weclome to the schedule page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
