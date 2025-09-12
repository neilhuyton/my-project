import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log("useResetPassword message state changed:", message);
  }, [message]);

  const handleSubmit = async (data: FormValues) => {
    console.log("useResetPassword handleSubmit called with:", data);
    const isValid = await form.trigger("email");
    console.log("Form validation result:", isValid, "Errors:", form.formState.errors);
    if (!isValid) {
      return;
    }

    setIsPending(true);
    console.log("Clearing message before mutation");
    setMessage(null);
    console.log("Calling onMutate");
    onMutate?.();

    try {
      console.log("Calling resetMutation with:", data);
      const response = await resetMutation(data);
      console.log("Raw mutation response:", response);
      setMessage(response.message);
      console.log("Set message to:", response.message);
      onSuccess?.(response);
      form.reset();
      console.log("Form reset completed, message:", response.message);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send reset link";
      console.log("Mutation error:", errorMessage);
      setMessage(`Failed to send reset link: ${errorMessage}`);
      onError?.(errorMessage);
    } finally {
      setIsPending(false);
      console.log("isPending set to false, final message:", message);
    }
  };

  return {
    form,
    message,
    isPending,
    handleSubmit,
  };
};