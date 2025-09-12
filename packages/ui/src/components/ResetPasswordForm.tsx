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
import { useResetPassword } from "../hooks/useResetPassword";

export interface ResetPasswordResponse {
  message: string;
}

interface ResetPasswordFormProps {
  resetMutation: (data: { email: string }) => Promise<ResetPasswordResponse>;
  onSuccess?: (data: ResetPasswordResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  onNavigateToLogin?: () => void;
}

export function ResetPasswordForm({
  resetMutation,
  onSuccess,
  onError,
  onMutate,
  onNavigateToLogin,
}: ResetPasswordFormProps) {
  const { form, message, isPending, handleSubmit } = useResetPassword({
    resetMutation,
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
          Reset your password
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Enter your email to receive a password reset link
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            data-testid="reset-password-form"
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
              {message && (
                <p
                  data-testid="reset-password-message"
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
                data-testid="submit-button"
                disabled={isPending}
                tabIndex={2}
              >
                {isPending ? "Sending..." : "Send Reset Link"}
              </Button>
              <div className="mt-4 text-center text-sm">
                <a
                  href="#"
                  role="link"
                  className="underline underline-offset-4"
                  data-testid="back-to-login-link"
                  tabIndex={3}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToLogin?.();
                  }}
                >
                  Back to login
                </a>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}