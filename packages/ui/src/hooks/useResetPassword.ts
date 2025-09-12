import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type FormValues = z.infer<typeof formSchema>;

export type ResetPasswordResponse = { message: string; token?: string };

interface UseResetPasswordProps {
  resetMutation: (data: FormValues) => Promise<ResetPasswordResponse>;
  onSuccess?: (data: ResetPasswordResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

interface UseResetPasswordReturn {
  form: ReturnType<typeof useForm<FormValues>>;
  message: string | null;
  isPending: boolean;
  handleSubmit: (data: FormValues) => Promise<void>;
}

export const useResetPassword = ({
  resetMutation,
  onSuccess,
  onError,
  onMutate,
}: UseResetPasswordProps): UseResetPasswordReturn => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (data: FormValues) => {
    const isValid = await form.trigger("email");
    if (!isValid) {
      return;
    }

    setIsPending(true);
    setMessage(null);
    onMutate?.();

    try {
      const response = await resetMutation(data);
      setMessage(response.message);
      onSuccess?.(response);
      form.reset();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send reset link";
      setMessage(`Failed to send reset link: ${errorMessage}`);
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
