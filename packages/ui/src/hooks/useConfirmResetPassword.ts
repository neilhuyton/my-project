import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const formSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type FormValues = z.infer<typeof formSchema>;

export type ConfirmResetPasswordResponse = { message: string };

interface UseConfirmResetPasswordProps {
  resetMutation: (
    data: FormValues & { token: string }
  ) => Promise<ConfirmResetPasswordResponse>;
  onSuccess?: (data: ConfirmResetPasswordResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  onNavigateToLogin?: () => void;
  token: string;
}

interface UseConfirmResetPasswordReturn {
  form: ReturnType<typeof useForm<FormValues>>;
  message: string | null;
  isPending: boolean;
  handleSubmit: (data: FormValues) => Promise<void>;
}

export const useConfirmResetPassword = ({
  resetMutation,
  onSuccess,
  onError,
  onMutate,
  onNavigateToLogin,
  token,
}: UseConfirmResetPasswordProps): UseConfirmResetPasswordReturn => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { newPassword: "" },
    mode: "onChange",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (data: FormValues) => {
    const isValid = await form.trigger("newPassword");
    if (!isValid) {
      return;
    }

    setIsPending(true);
    setMessage(null);
    onMutate?.();

    try {
      const rawResponse = await resetMutation({ ...data, token });
      const responseData =
        Array.isArray(rawResponse) && rawResponse[0]?.result?.data
          ? rawResponse[0].result.data
          : rawResponse;
      setMessage(responseData.message);
      form.reset();
      onSuccess?.(responseData);
      setTimeout(() => {
        onNavigateToLogin?.();
      }, 100);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to reset password";
      setMessage(`Failed to reset password: ${errorMessage}`);
      onError?.(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return {
    form,
    message,
    isPending,
    handleSubmit,
  };
};
