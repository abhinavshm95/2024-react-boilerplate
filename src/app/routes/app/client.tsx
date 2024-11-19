import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useUser } from '@/lib/auth';

export const ClientRoute = () => {
  const user = useUser();
  return (
    <ContentLayout title="Client">
      <div className="flex text-xl flex-row justify-between">
        Clients
        <Button variant={'secondary'} onClick={() => console.log('clicked')}>
          Add Client
        </Button>
      </div>
      <div className="flex flex-col justify-center min-h-96">
        <div className="mx-auto">
          <img src={Icons.booksvg} height={80} width={80} />
        </div>
        <div className="text-center text-lg py-6 text-gray-800">
          Your Clients.
        </div>
        <div className="text-center max-w-2xl mx-auto text-sm text-gray-400">
          {' '}
          Keep track of all your Clientsright here. Add their Information, see
          past appointments. and book new appointments for them. When a new
          Client books an appointment, they are automatically added here.{' '}
        </div>
      </div>
    </ContentLayout>
  );
};
