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
import { useRegister, formSchema } from "../hooks/useRegister";

export { formSchema };

export interface RegisterResponse {
  id: string;
  email: string;
  message: string;
}

interface RegisterProps {
  registerMutation: (data: {
    email: string;
    password: string;
  }) => Promise<RegisterResponse>;
  onSuccess?: (data: RegisterResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  onNavigateToLogin?: () => void;
}

export function Register({
  registerMutation,
  onSuccess,
  onError,
  onMutate,
  onNavigateToLogin,
}: RegisterProps) {
  const { form, message, isPending, handleSubmit } = useRegister({
    registerMutation,
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
          Create an account
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Enter your email below to create your account
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            data-testid="register-form"
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
                      <Label htmlFor="password" data-testid="password-label">
                        Password
                      </Label>
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
                  data-testid="register-message"
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
                data-testid="register-button"
                disabled={isPending}
                tabIndex={3}
              >
                {isPending ? "Registering..." : "Register"}
              </Button>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  role="link"
                  className="underline underline-offset-4"
                  data-testid="login-link"
                  tabIndex={4}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToLogin?.();
                  }}
                >
                  Login
                </a>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
