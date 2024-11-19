import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useToast } from '@/hooks/use-toast';
import { loginInputSchema, useLogin } from '@/lib/auth';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();

  const login = useLogin({
    onSuccess,
    onError: () => {
      toast({
        title: 'Login Error',
        description: "We couldn't log you in. Please check your credentials.",
      });
    },
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div>
      <Form
        onSubmit={(values) => {
          login.mutate(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              label="Email Address"
              error={formState.errors['email']}
              registration={register('email')}
              placeholder="Enter your email address"
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
              placeholder="Enter your password"
            />
            <div>
              <Button
                isLoading={login.isPending}
                type="submit"
                className="hover:bg-secondary-dark w-full bg-secondary"
              >
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-6 flex items-center justify-center">
        <div className="text-sm">
          <span>Don’t have an account?&nbsp;</span>
          <Link
            to={paths.auth.register.getHref(redirectTo)}
            className="font-medium text-secondary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
