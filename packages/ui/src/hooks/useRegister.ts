// packages/ui/src/hooks/useRegister.ts
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { formSchema } from "./useLogin";

export { formSchema };

export interface RegisterResponse {
  id: string;
  email: string;
  message: string;
}

type FormValues = z.infer<typeof formSchema>;

interface UseRegisterProps {
  registerMutation: (data: FormValues) => Promise<RegisterResponse>;
  onSuccess?: (data: RegisterResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

interface UseRegisterReturn {
  form: ReturnType<typeof useForm<FormValues>>;
  message: string | null;
  isPending: boolean;
  handleSubmit: (data: FormValues) => Promise<void>;
}

export const useRegister = ({
  registerMutation,
  onSuccess,
  onError,
  onMutate,
}: UseRegisterProps): UseRegisterReturn => {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const handleSubmit = async (data: FormValues) => {
    const isValid = await form.trigger();
    if (!isValid) {
      return;
    }

    setIsPending(true);
    setMessage(null);
    onMutate?.();

    try {
      const response = await registerMutation(data);
      setMessage("Registration successful!");
      onSuccess?.(response);
      form.reset();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setMessage(`Registration failed: ${errorMessage}`);
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
