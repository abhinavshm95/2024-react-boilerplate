import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const QuoteRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Quote">
      <p className="font-medium">
        Weclome to the quote page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
