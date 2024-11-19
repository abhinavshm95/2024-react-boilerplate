import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const TeamRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Team">
      <p className="font-medium">
        Weclome to the team page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
