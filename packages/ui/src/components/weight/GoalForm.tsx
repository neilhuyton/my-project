// packages/ui/src/components/weight/GoalForm.tsx
import { useGoalForm } from "../../hooks/useGoalForm";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { GoalInput, GoalResponse, UpdateGoalInput } from "@my-project/api";

type GoalFormProps = {
  setGoalMutation: (data: GoalInput) => Promise<GoalResponse>;
  updateGoalMutation: (data: UpdateGoalInput) => Promise<GoalResponse>;
  currentGoal: GoalResponse | null;
  onSuccess?: (data: GoalResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
};

export function GoalForm({
  setGoalMutation,
  updateGoalMutation,
  currentGoal,
  onSuccess,
  onError,
  onMutate,
}: GoalFormProps) {
  const {
    goalWeight,
    message,
    isSubmitting,
    handleSubmit,
    handleGoalWeightChange,
  } = useGoalForm({
    setGoalMutation,
    updateGoalMutation,
    currentGoal,
    onSuccess,
    onError,
    onMutate,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-testid="goal-weight-form"
    >
      <div>
        <label htmlFor="goalWeight" data-testid="goal-weight-label">
          Goal Weight (kg)
        </label>
        <Input
          id="goalWeight"
          type="number"
          placeholder="Enter goal weight in kg"
          step="0.01"
          min="0"
          data-testid="goal-weight-input"
          value={goalWeight}
          onChange={handleGoalWeightChange}
          disabled={isSubmitting}
        />
      </div>
      {message && (
        <p
          className={`text-sm text-center ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
          data-testid="goal-error"
        >
          {message}
        </p>
      )}
      {currentGoal && (
        <div
          className="text-sm text-muted-foreground"
          data-testid="current-goal"
        >
          Current Goal: {currentGoal.goalWeightKg} kg (Set on{" "}
          {new Date(currentGoal.goalSetAt).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
          )
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} data-testid="submit-button">
        {isSubmitting
          ? "Submitting..."
          : currentGoal
          ? "Update Goal"
          : "Set Goal"}
      </Button>
    </form>
  );
}
