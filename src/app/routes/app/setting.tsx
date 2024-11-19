import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const SettingRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Setting">
      <p className="font-medium">
        Weclome to the setting page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
