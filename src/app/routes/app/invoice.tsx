import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';

export const InvoiceRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Invoice">
      <p className="font-medium">
        Weclome to the invoice page, {user?.data?.firstName}!
      </p>
    </ContentLayout>
  );
};
