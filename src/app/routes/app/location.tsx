import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const LocationRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Location">
      <p className="font-medium">
        Weclome to the location page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
