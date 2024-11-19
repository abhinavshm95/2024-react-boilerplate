import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { registerInputSchema, useRegister } from '@/lib/auth';
// import { Team } from '@/types/api.type';

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const registering = useRegister({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div>
      <Form
        onSubmit={(values) => {
          registering.mutate(values);
        }}
        schema={registerInputSchema}
        options={{
          shouldUnregister: true,
        }}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <div className="flex space-x-4">
              <Input
                type="text"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                error={formState.errors['firstName']}
                registration={register('firstName')}
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                error={formState.errors['lastName']}
                registration={register('lastName')}
              />
            </div>
            <Input
              type="text"
              name="businessName"
              label="Business Name"
              placeholder="Enter your business name"
              error={formState.errors['businessName']}
              registration={register('businessName')}
            />
            <Input
              type="text"
              name="businessAddress"
              label="Business Address"
              placeholder="Enter your business address"
              error={formState.errors['businessAddress']}
              registration={register('businessAddress')}
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button
                isLoading={registering.isPending}
                type="submit"
                className="w-full hover:bg-secondary-dark bg-secondary"
              >
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
