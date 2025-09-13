// packages/ui/src/hooks/useProfile.ts
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const emailFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type EmailFormValues = z.infer<typeof emailFormSchema>;

export type EmailUpdateResponse = {
  message: string;
};

export const useProfile = ({
  mutationFn,
  onSuccess,
  onError,
  onMutate,
}: {
  mutationFn: (data: EmailFormValues) => Promise<EmailUpdateResponse>;
  onSuccess: (
    data: EmailUpdateResponse,
    variables: EmailFormValues,
    context: unknown
  ) => void;
  onError: (error: string) => void;
  onMutate: () => void;
}) => {
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const {
    mutate,
    isPending: isEmailPending,
    data,
    error,
  } = useMutation({
    mutationFn,
    onMutate,
    onSuccess: (data, variables, context) => {
      console.log("onSuccess called with:", { data, variables, context });
      onSuccess(data, variables, context);
    },
    onError: (err: any) => {
      const message =
        err?.data?.error?.message || err?.message || "An error occurred";
      console.log("onError called with:", { message, err });
      onError(message);
    },
  });

  const handleEmailSubmit = emailForm.handleSubmit((data) => {
    mutate(data);
  });

  const emailMessage =
    data?.message ||
    (error as any)?.data?.error?.message ||
    error?.message ||
    null;

  return { emailForm, emailMessage, isEmailPending, handleEmailSubmit };
};
