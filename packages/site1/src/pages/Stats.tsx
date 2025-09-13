// packages/site1/src/pages/Stats.tsx
import { trpc } from "../trpc";
import { LoadingSpinner } from "@my-project/ui";
import { useNavigate } from "@tanstack/react-router";
import type { GoalResponse, WeightResponse } from "@my-project/api";

function Stats() {
  const navigate = useNavigate();
  const {
    data: weights,
    isLoading: weightsLoading,
    error: weightsError,
  } = trpc.weight.getWeights.useQuery();
  const {
    data: goals,
    isLoading: goalsLoading,
    error: goalsError,
  } = trpc.weight.getGoals.useQuery();

  if (weightsLoading || goalsLoading) {
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        <h1
          className="text-2xl font-bold text-foreground text-center"
          role="heading"
          aria-level={1}
        >
          Weight Statistics
        </h1>
        <LoadingSpinner size="md" testId="stats-loading" />
      </div>
    );
  }

  if (weightsError || goalsError) {
    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        <h1
          className="text-2xl font-bold text-foreground text-center"
          role="heading"
          aria-level={1}
        >
          Weight Statistics
        </h1>
        <p className="text-destructive text-center" data-testid="error-message">
          Failed to load stats:{" "}
          {weightsError?.message.includes("UNAUTHORIZED") ||
          goalsError?.message.includes("UNAUTHORIZED")
            ? "Please log in"
            : weightsError?.message ||
              goalsError?.message ||
              "An error occurred"}
        </p>
      </div>
    );
  }

  const weightCount = weights?.length || 0;
  const latestGoal = goals && goals.length > 0 ? goals[0] : null;

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <h1
        className="text-2xl font-bold text-foreground text-center"
        role="heading"
        aria-level={1}
      >
        Weight Statistics
      </h1>
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
        <p data-testid="weight-count">Total Weights Recorded: {weightCount}</p>
        {latestGoal ? (
          <p data-testid="latest-goal">
            Latest Goal: {latestGoal.goalWeightKg.toFixed(2)} kg (Set on{" "}
            {new Date(latestGoal.goalSetAt).toLocaleDateString("en-GB")})
          </p>
        ) : (
          <p data-testid="no-goal">No weight goals set</p>
        )}
      </div>
    </div>
  );
}

export default Stats;
