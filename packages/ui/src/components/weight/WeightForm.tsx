// packages/ui/src/components/weight/WeightForm.tsx
import { useWeightForm } from "../../hooks/useWeightForm"; // Fixed import path
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { WeightInput, GoalResponse } from "@my-project/api";

type WeightFormProps = {
  weightMutation: (data: WeightInput) => Promise<any>;
  currentGoal: GoalResponse | null;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
};

export function WeightForm({
  weightMutation,
  currentGoal,
  onSuccess,
  onError,
  onMutate,
}: WeightFormProps) {
  const {
    weight,
    note,
    message,
    isSubmitting,
    handleSubmit,
    handleWeightChange,
    handleNoteChange,
  } = useWeightForm({
    weightMutation,
    currentGoal,
    onSuccess,
    onError,
    onMutate,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-testid="weight-form"
    >
      <div>
        <label htmlFor="weight" data-testid="weight-label">
          Weight (kg)
        </label>
        <Input
          id="weight"
          type="number"
          placeholder="Enter weight in kg"
          step="0.01"
          min="0"
          data-testid="weight-input"
          value={weight}
          onChange={handleWeightChange}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="note" data-testid="note-label">
          Note (optional)
        </label>
        <Input
          id="note"
          placeholder="Add a note"
          data-testid="note-input"
          value={note}
          onChange={handleNoteChange}
          disabled={isSubmitting}
        />
      </div>
      {message && (
        <p
          className={`text-sm text-center ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
          data-testid="weight-error"
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
          {new Date(currentGoal.goalSetAt).toLocaleDateString()})
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} data-testid="submit-button">
        {isSubmitting ? "Submitting..." : "Submit Weight"}
      </Button>
    </form>
  );
}
