// packages/ui/src/hooks/useGoalForm.tsx
import { useState } from "react";
import type { GoalInput, GoalResponse, UpdateGoalInput } from "@my-project/api";

interface UseGoalFormProps {
  setGoalMutation: (data: GoalInput) => Promise<GoalResponse>;
  updateGoalMutation: (data: UpdateGoalInput) => Promise<GoalResponse>;
  currentGoal: GoalResponse | null;
  onSuccess?: (data: GoalResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

interface UseGoalFormReturn {
  goalWeight: string;
  message: string | null;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleGoalWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useGoalForm = ({
  setGoalMutation,
  updateGoalMutation,
  currentGoal,
  onSuccess,
  onError,
  onMutate,
}: UseGoalFormProps): UseGoalFormReturn => {
  const [goalWeight, setGoalWeight] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const goalWeightKg = parseFloat(goalWeight);
    if (isNaN(goalWeightKg) || goalWeightKg <= 0) {
      setMessage("Goal weight must be a positive number.");
      onError?.("Goal weight must be a positive number.");
      return;
    }
    const decimalPlaces = goalWeight.split(".")[1]?.length || 0;
    if (decimalPlaces > 2) {
      setMessage("Goal weight can have up to two decimal places.");
      onError?.("Goal weight can have up to two decimal places.");
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    onMutate?.();

    try {
      const response = currentGoal
        ? await updateGoalMutation({ goalId: currentGoal.id, goalWeightKg })
        : await setGoalMutation({ goalWeightKg });
      setMessage(
        currentGoal ? "Goal updated successfully!" : "Goal set successfully!"
      );
      setGoalWeight("");
      onSuccess?.(response);
    } catch (error: unknown) {
      let errorMessage = "Failed to save goal";
      let errorCode: string | undefined;

      if (error instanceof Error) {
        errorMessage = error.message;
        errorCode = (error as any).data?.code;
      } else if (typeof error === "object" && error !== null) {
        errorMessage = (error as any).message || errorMessage;
        errorCode = (error as any).data?.code;
      }

      if (errorCode === "UNAUTHORIZED") {
        setMessage("Please log in to set a goal.");
      } else {
        setMessage(`Failed to save goal: ${errorMessage}`);
      }
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalWeight(e.target.value);
    setMessage(null);
  };

  return {
    goalWeight,
    message,
    isSubmitting,
    handleSubmit,
    handleGoalWeightChange,
  };
};
