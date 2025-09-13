// packages/ui/src/hooks/useWeightGoal.tsx
import { useState } from "react";
import { trpc } from "@/trpc";
import type { GoalResponse } from "@my-project/api";
import type { TRPCClientErrorLike } from "@trpc/client";
import type { ApiRouter } from "@my-project/api";

interface GoalInput {
  goalWeightKg: number;
}

interface UpdateGoalInput {
  goalId: string;
  goalWeightKg: number;
}

export function useWeightGoal() {
  const [goalWeight, setGoalWeight] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const {
    data: currentGoal = null,
    isLoading,
    error,
  } = trpc.weight.getCurrentGoal.useQuery(undefined, {
    retry: false,
  });

  const utils = trpc.useUtils();

  const setGoalMutation = trpc.weight.setGoal.useMutation({
    onSuccess: () => {
      setGoalWeight("");
      setMessage("Goal set successfully!");
      utils.weight.getCurrentGoal.invalidate();
      utils.weight.getWeights.invalidate();
    },
    onError: (error: TRPCClientErrorLike<ApiRouter>) => {
      setMessage(`Failed to set goal: ${error.message}`);
    },
  });

  const updateGoalMutation = trpc.weight.updateGoal.useMutation({
    onSuccess: () => {
      setGoalWeight("");
      setMessage("Goal updated successfully!");
      utils.weight.getCurrentGoal.invalidate();
      utils.weight.getWeights.invalidate();
    },
    onError: (error: TRPCClientErrorLike<ApiRouter>) => {
      setMessage(`Failed to update goal: ${error.message}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const goalWeightKg = parseFloat(goalWeight);
    if (isNaN(goalWeightKg) || goalWeightKg <= 0) {
      setMessage("Goal weight must be a positive number");
      return;
    }
    const decimalPlaces = goalWeight.split(".")[1]?.length || 0;
    if (decimalPlaces > 2) {
      setMessage("Goal weight can have up to two decimal places.");
      return;
    }
    if (currentGoal) {
      await updateGoalMutation.mutateAsync({
        goalId: currentGoal.id,
        goalWeightKg,
      });
    } else {
      await setGoalMutation.mutateAsync({ goalWeightKg });
    }
  };

  const handleGoalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalWeight(e.target.value);
    setMessage(null);
  };

  return {
    currentGoal,
    isLoading,
    error,
    goalWeight,
    message,
    isSettingGoal: setGoalMutation.isPending || updateGoalMutation.isPending,
    handleSubmit,
    handleGoalWeightChange,
  };
}
