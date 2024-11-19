import { ContentLayout } from '@/components/layouts';
import { Authorization } from '@/lib/authorization';
import { ROLES } from '@/utils/const';

// export const usersLoader = (queryClient: QueryClient) => async () => {
// const query = getUsersQueryOptions();
// return (
//   queryClient.getQueryData(query.queryKey) ??
//   (await queryClient.fetchQuery(query))
// );
// };

export const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
      <Authorization
        forbiddenFallback={<div>Only admin can view this.</div>}
        allowedRoles={[ROLES.SUPER_ADMIN]}
      >
        {/* <UsersList /> */}
        <>
          <div>Users</div>
        </>
      </Authorization>
    </ContentLayout>
  );
};
