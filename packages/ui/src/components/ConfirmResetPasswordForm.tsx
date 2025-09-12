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
import {
  useConfirmResetPassword,
  FormValues,
} from "../hooks/useConfirmResetPassword";
import { useRouter } from "@tanstack/react-router";
import { Logo } from "./Logo";

interface ConfirmResetPasswordFormProps {
  resetMutation: (
    data: FormValues & { token: string }
  ) => Promise<{ message: string }>;
  onSuccess?: (data: { message: string }) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  onNavigateToLogin?: () => void;
  token: string;
}

export function ConfirmResetPasswordForm({
  resetMutation,
  onSuccess,
  onError,
  onMutate,
  onNavigateToLogin,
  token,
}: ConfirmResetPasswordFormProps) {
  const router = useRouter();
  const { form, message, isPending, handleSubmit } = useConfirmResetPassword({
    resetMutation,
    onSuccess,
    onError,
    onMutate,
    onNavigateToLogin: () => {
      onNavigateToLogin?.() ?? router.navigate({ to: "/login" });
    },
    token,
  });

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-1 sm:p-2 lg:p-3">
      <div className="pt-14">
        <Logo />
      </div>
      <div className="w-full max-w-md bg-background rounded-lg p-4 flex flex-col items-center mt-16 sm:mt-20">
        <h1
          className="text-2xl font-bold text-center mb-4"
          role="heading"
          aria-level={1}
        >
          Reset your password
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Enter your new password
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => handleSubmit(data))}
            data-testid="confirm-reset-password-form"
            className="w-full"
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="newPassword" data-testid="password-label">
                        New Password
                      </Label>
                      <FormControl>
                        <Input
                          id="newPassword"
                          type="password"
                          placeholder="Enter new password"
                          required
                          data-testid="password-input"
                          disabled={isPending}
                          tabIndex={1}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage data-testid="password-error" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                data-testid="submit-button"
                disabled={isPending}
                tabIndex={2}
              >
                {isPending ? "Resetting..." : "Reset Password"}
              </Button>
              {message && (
                <p
                  role="alert"
                  data-testid="confirm-reset-password-message"
                  className={cn(
                    "text-sm text-center",
                    message.toLowerCase().includes("failed")
                      ? "text-red-500"
                      : "text-green-500"
                  )}
                >
                  {message}
                </p>
              )}
              <div className="mt-4 text-center text-sm">
                <a
                  href="#"
                  role="link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToLogin?.() ?? router.navigate({ to: "/login" });
                  }}
                  className="underline underline-offset-4"
                  data-testid="back-to-login-link"
                  tabIndex={3}
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
