// packages/site1/src/pages/Goals.tsx
import { trpc } from "../trpc";
import { GoalForm, LoadingSpinner } from "@my-project/ui";
import { useNavigate } from "@tanstack/react-router";
import type { GoalInput, GoalResponse, UpdateGoalInput } from "@my-project/api";

type GoalMutationError = { message: string };

function Goals() {
  const navigate = useNavigate();
  const utils = trpc.useUtils();
  const {
    data: currentGoal,
    error: goalError,
    isLoading,
  } = trpc.weight.getCurrentGoal.useQuery();

  const setGoalMutation = trpc.weight.setGoal.useMutation({
    onSuccess: async () => {
      await utils.weight.getCurrentGoal.invalidate();
      await utils.weight.getWeights.invalidate();
    },
    onError: (error: GoalMutationError) => {
      if (error.message.includes("UNAUTHORIZED")) {
        navigate({ to: "/login" });
      }
    },
  });

  const updateGoalMutation = trpc.weight.updateGoal.useMutation({
    onSuccess: async () => {
      await utils.weight.getCurrentGoal.invalidate();
      await utils.weight.getWeights.invalidate();
    },
    onError: (error: GoalMutationError) => {
      if (error.message.includes("UNAUTHORIZED")) {
        navigate({ to: "/login" });
      }
    },
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        <h1
          className="text-2xl font-bold text-foreground text-center"
          role="heading"
          aria-level={1}
        >
          Your Weight Goal
        </h1>
        <LoadingSpinner size="md" testId="goal-loading" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <h1
        className="text-2xl font-bold text-foreground text-center"
        role="heading"
        aria-level={1}
      >
        Your Weight Goal
      </h1>
      {goalError && (
        <p className="text-destructive text-center" data-testid="error-message">
          Failed to load goal:{" "}
          {goalError.message.includes("UNAUTHORIZED")
            ? "Please log in"
            : goalError.message}
        </p>
      )}
      <GoalForm
        setGoalMutation={(data: GoalInput) => setGoalMutation.mutateAsync(data)}
        updateGoalMutation={(data: UpdateGoalInput) =>
          updateGoalMutation.mutateAsync(data) as Promise<GoalResponse>
        }
        currentGoal={currentGoal ?? null}
      />
    </div>
  );
}

export default Goals;