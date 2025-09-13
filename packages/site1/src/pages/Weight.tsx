// packages/site1/src/pages/Weight.tsx
import { trpc, trpcClient } from "../trpc";
import { WeightForm, LoadingSpinner, WeightList } from "@my-project/ui";
import { useNavigate } from "@tanstack/react-router";
import type { WeightInput } from "@my-project/api";

type WeightMutationError = { message: string };

function Weight() {
  const navigate = useNavigate();
  const utils = trpc.useUtils();
  const {
    data: currentGoal,
    error: goalError,
    isLoading,
  } = trpc.weight.getCurrentGoal.useQuery();

  const mutation = trpc.weight.create.useMutation({
    onSuccess: async () => {
      await utils.weight.getCurrentGoal.invalidate();
      await utils.weight.getWeights.invalidate();
    },
    onError: (error: WeightMutationError) => {
      if (error.message.includes("UNAUTHORIZED")) {
        navigate({ to: "/login" });
      }
    },
  });

  const deleteMutation = trpc.weight.delete.useMutation({
    onSuccess: async () => {
      await utils.weight.getWeights.invalidate();
    },
    onError: (error: WeightMutationError) => {
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
          Your Weight
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
        Your Weight
      </h1>
      {goalError && (
        <p className="text-destructive text-center">
          Failed to load goal:{" "}
          {goalError.message.includes("UNAUTHORIZED")
            ? "Please log in"
            : goalError.message}
        </p>
      )}
      <WeightForm
        weightMutation={(data: WeightInput) => mutation.mutateAsync(data)}
        currentGoal={currentGoal ?? null}
      />
      <WeightList
        deleteWeightMutation={(data) => deleteMutation.mutateAsync(data)}
        onError={(error) => {
          if (error.includes("UNAUTHORIZED")) {
            navigate({ to: "/login" });
          }
        }}
      />
    </div>
  );
}

export default Weight;
