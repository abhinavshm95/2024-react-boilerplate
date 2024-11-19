import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const TimeSheetRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Time Sheet">
      <p className="font-medium">
        Weclome to the time sheet page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
