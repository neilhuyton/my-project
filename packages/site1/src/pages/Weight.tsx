import { trpc, queryClient } from "../trpc";
import { WeightForm, LoadingSpinner } from "@my-project/ui";
import { useNavigate } from "@tanstack/react-router";
import type {
  WeightInput,
  WeightResponse,
  GoalResponse,
} from "@my-project/api";

type WeightMutationError = { message: string };

function Weight() {
  const navigate = useNavigate();
  const {
    data: currentGoal,
    error: goalError,
    isLoading,
  } = trpc.weight.getCurrentGoal.useQuery();

  const mutation = trpc.weight.create.useMutation({
    onMutate: () => {
      console.log("Submitting weight...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["weight.getCurrentGoal"] });
    },
    onError: (error: WeightMutationError) => {
      console.error("Weight submission error:", error);
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
        onSuccess={(data: WeightResponse) => {
          console.log("Weight recorded:", data);
        }}
        onError={(error: string) => {
          console.error("Weight form error:", error);
        }}
        onMutate={() => {
          console.log("Submitting weight...");
        }}
      />
      {/* <WeightList /> */}
    </div>
  );
}

export default Weight;
