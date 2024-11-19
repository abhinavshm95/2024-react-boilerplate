import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const JobRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Job">
      <p className="font-medium">
        Weclome to the job page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
