// packages/ui/src/components/LoginForm.tsx
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLogin, formSchema } from "../hooks/useLogin"; // Export formSchema

export { formSchema }; // Add this export

export interface LoginResponse {
  id: string;
  email: string;
  token: string;
  refreshToken: string;
}

interface LoginFormProps {
  loginMutation: (data: {
    email: string;
    password: string;
  }) => Promise<LoginResponse>;
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  onNavigateToResetPassword?: () => void;
  onNavigateToRegister?: () => void;
}

export function LoginForm({
  loginMutation,
  onSuccess,
  onError,
  onMutate,
  onNavigateToResetPassword,
  onNavigateToRegister,
}: LoginFormProps) {
  const { form, message, isPending, handleSubmit } = useLogin({
    loginMutation,
    onSuccess,
    onError,
    onMutate,
  });

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-1 sm:p-2 lg:p-3">
      <div className="w-full max-w-md bg-background rounded-lg p-4 flex flex-col items-center mt-16 sm:mt-20">
        <h1
          className="text-2xl font-bold text-center mb-4"
          role="heading"
          aria-level={1}
        >
          Login to your account
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Enter your email below to login to your account
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            data-testid="login-form"
            className="w-full"
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email" data-testid="email-label">
                        Email
                      </Label>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                          data-testid="email-input"
                          disabled={isPending}
                          tabIndex={1}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between leading-none mb-0">
                        <Label htmlFor="password" data-testid="password-label">
                          Password
                        </Label>
                        <a
                          href="#"
                          className="inline-block text-sm underline-offset-0 hover:underline"
                          data-testid="forgot-password-link"
                          tabIndex={3}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigateToResetPassword?.();
                          }}
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          data-testid="password-input"
                          disabled={isPending}
                          className="w-full"
                          tabIndex={2}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {message && (
                <p
                  data-testid="login-message"
                  className={cn(
                    "text-sm text-center",
                    message.includes("failed")
                      ? "text-red-500"
                      : "text-green-500"
                  )}
                >
                  {message}
                </p>
              )}
              <Button
                type="submit"
                className="w-full mt-4"
                data-testid="login-button"
                disabled={isPending}
                tabIndex={5}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  role="link"
                  className="underline underline-offset-4"
                  data-testid="signup-link"
                  tabIndex={4}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToRegister?.();
                  }}
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
