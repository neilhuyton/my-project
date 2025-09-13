// packages/ui/src/hooks/useLogin.ts
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export interface LoginResponse {
  // Added export
  id: string;
  email: string;
  token: string;
  refreshToken: string;
}

export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type FormValues = z.infer<typeof formSchema>;

interface UseLoginProps {
  loginMutation: (data: FormValues) => Promise<LoginResponse>;
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

interface UseLoginReturn {
  form: ReturnType<typeof useForm<FormValues>>;
  message: string | null;
  isPending: boolean;
  handleSubmit: (data: FormValues) => Promise<void>;
}

export const useLogin = ({
  loginMutation,
  onSuccess,
  onError,
  onMutate,
}: UseLoginProps): UseLoginReturn => {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const handleSubmit = async (data: FormValues) => {
    const isValid = await form.trigger();
    if (!isValid) return;

    setIsPending(true);
    setMessage(null);
    onMutate?.();

    try {
      const response = await loginMutation(data);
      setMessage("Login successful!");
      onSuccess?.(response);
      form.reset();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setMessage(`Login failed: ${errorMessage}`);
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
