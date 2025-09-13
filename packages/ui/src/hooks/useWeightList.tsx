// packages/ui/src/hooks/useWeightList.tsx
import { useState } from "react";
import { format } from "date-fns";
import { trpc } from "@/trpc";
import type { WeightResponse } from "@/hooks/useWeightForm";
import type { TRPCClientErrorLike } from "@trpc/client";
import type { ApiRouter } from "@my-project/api"; // Changed from AppRouter to ApiRouter

interface UseWeightListProps {
  getWeightsQuery: () => Promise<WeightResponse[]>;
  deleteWeightMutation: (data: { weightId: string }) => Promise<{ id: string }>;
  onSuccess?: (data: { id: string }) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

interface UseWeightListReturn {
  weights: WeightResponse[];
  isLoading: boolean;
  isError: boolean;
  error: TRPCClientErrorLike<ApiRouter> | null;
  formatDate: (dateString: string) => string;
  handleDelete: (weightId: string) => void;
  isDeleting: boolean;
}

export const useWeightList = ({
  getWeightsQuery,
  deleteWeightMutation,
  onSuccess,
  onError,
  onMutate,
}: UseWeightListProps): UseWeightListReturn => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    data: weightsData,
    isLoading,
    isError,
    error,
  } = trpc.weight.getWeights.useQuery(undefined, {
    queryFn: getWeightsQuery,
    retry: false,
  });

  const utils = trpc.useUtils();

  const mutation = trpc.weight.delete.useMutation({
    mutationFn: deleteWeightMutation,
    onMutate: async () => {
      onMutate?.();
      setErrorMessage(null);
    },
    onSuccess: async (data: { id: string }) => {
      await utils.weight.getWeights.invalidate();
      onSuccess?.(data);
    },
    onError: (error: TRPCClientErrorLike<ApiRouter>) => {
      const errorMsg = error.message || "Failed to delete weight";
      setErrorMessage(errorMsg);
      onError?.(errorMsg);
    },
  });

  const handleDelete = (weightId: string) => {
    if (mutation.isPending) return;
    setIsDeleting(true);
    mutation.mutate(
      { weightId },
      {
        onSettled: () => setIsDeleting(false),
      }
    );
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy");
  };

  return {
    weights: weightsData ?? [],
    isLoading,
    isError: isError || !!errorMessage,
    error: errorMessage
      ? ({ message: errorMessage } as TRPCClientErrorLike<ApiRouter>)
      : error,
    formatDate,
    handleDelete,
    isDeleting,
  };
};