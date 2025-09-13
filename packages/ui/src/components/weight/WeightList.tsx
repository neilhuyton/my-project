// packages/ui/src/components/weight/WeightList.tsx
import { useWeightList } from "@/hooks/useWeightList";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import type { WeightResponse } from "@/hooks/useWeightForm";

interface WeightListProps {
  getWeightsQuery: () => Promise<WeightResponse[]>;
  deleteWeightMutation: (data: { weightId: string }) => Promise<{ id: string }>;
  onSuccess?: (data: { id: string }) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
}

export function WeightList({
  getWeightsQuery,
  deleteWeightMutation,
  onSuccess,
  onError,
  onMutate,
}: WeightListProps) {
  const {
    weights,
    isLoading,
    isError,
    error,
    formatDate,
    handleDelete,
    isDeleting,
  } = useWeightList({
    getWeightsQuery,
    deleteWeightMutation,
    onSuccess,
    onError,
    onMutate,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-6">
        <LoadingSpinner size="md" testId="weight-list-loading" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6 shadow-sm">
      <h1
        className="text-xl font-bold text-foreground mb-6"
        role="heading"
        aria-level={1}
      >
        Past Measurements
      </h1>
      <Table className="border border-border rounded-lg">
        <TableHeader>
          <TableRow className="hover:bg-muted/50 rounded-t-lg">
            <TableHead className="h-10 px-4 text-left font-semibold text-foreground bg-muted/50">
              Weight (kg)
            </TableHead>
            <TableHead className="h-10 px-4 text-left font-semibold text-foreground bg-muted/50">
              Date
            </TableHead>
            <TableHead className="h-10 px-4 text-right font-semibold text-foreground bg-muted/50">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weights && weights.length > 0 ? (
            weights.map((weight, index) => (
              <TableRow
                key={weight.id}
                className={cn(
                  "hover:bg-muted/50",
                  index === weights.length - 1 && "rounded-b-lg"
                )}
                data-testid={`weight-row-${weight.id}`}
              >
                <TableCell className="p-4 text-foreground">
                  {weight.weightKg.toFixed(2)}
                </TableCell>
                <TableCell className="p-4 text-foreground">
                  {formatDate(weight.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(weight.id);
                    }}
                    disabled={isDeleting}
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive/90 focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Delete weight measurement from ${formatDate(
                      weight.createdAt
                    )}`}
                    data-testid={`delete-button-${weight.id}`}
                  >
                    <Trash2 className="h-4 w-4" data-lucide-name="trash-2" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-muted/50 rounded-b-lg">
              <TableCell
                colSpan={3}
                className="p-4 text-center text-muted-foreground"
                data-testid="no-weights-message"
              >
                No weight measurements found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isError && (
        <p
          role="alert"
          className="text-sm text-center text-destructive mt-4"
          data-testid="error-message"
        >
          Error: {error?.message || "Failed to fetch weights"}
        </p>
      )}
    </div>
  );
}
