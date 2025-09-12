import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

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
  onNavigateToLogin?: () => void; // Add onNavigateToLogin
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
  onNavigateToLogin, // Add prop
  token,
}: UseConfirmResetPasswordProps): UseConfirmResetPasswordReturn => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { newPassword: "" },
    mode: "onChange",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    console.log("useConfirmResetPassword message state changed:", message);
  }, [message]);

  const handleSubmit = async (data: FormValues) => {
    console.log("useConfirmResetPassword handleSubmit called with:", {
      ...data,
      token,
    });
    const isValid = await form.trigger("newPassword");
    console.log(
      "Form validation result:",
      isValid,
      "Errors:",
      form.formState.errors
    );
    if (!isValid) {
      return;
    }

    setIsPending(true);
    console.log("Clearing message before mutation");
    setMessage(null);
    console.log("Calling onMutate");
    onMutate?.();

    try {
      console.log("Calling resetMutation with:", { ...data, token });
      const rawResponse = await resetMutation({ ...data, token });
      console.log("Raw mutation response:", rawResponse);
      // Handle tRPC batch response
      const responseData =
        Array.isArray(rawResponse) && rawResponse[0]?.result?.data
          ? rawResponse[0].result.data
          : rawResponse;
      console.log("Processed response:", responseData);
      setMessage(responseData.message);
      console.log("Set message to:", responseData.message);
      form.reset();
      console.log("Form reset completed, message:", responseData.message);
      // Call onSuccess and delay navigation
      onSuccess?.(responseData);
      setTimeout(() => {
        console.log("Triggering navigation to /login");
        onNavigateToLogin?.();
      }, 100); // 100ms delay to allow message rendering
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to reset password";
      console.log("Mutation error:", errorMessage);
      setMessage(`Failed to reset password: ${errorMessage}`);
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
