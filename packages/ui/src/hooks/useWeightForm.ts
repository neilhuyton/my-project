import { useState } from "react";

export interface FormValues {
  weightKg: number;
  note?: string;
}

export interface WeightResponse {
  id: string;
  weightKg: number;
  note: string | null; // Changed from note?: string | null to match API
  createdAt: string;
  userId: string;
}

interface UseWeightFormProps {
  weightMutation: (data: FormValues) => Promise<WeightResponse>;
  onSuccess?: (data: WeightResponse) => void;
  onError?: (error: string) => void;
  onMutate?: () => void;
  currentGoal?: {
    id: string;
    goalWeightKg: number;
    goalSetAt: string;
    reachedAt: string | null;
  } | null;
}

interface UseWeightFormReturn {
  weight: string;
  note: string;
  message: string | null;
  isSubmitting: boolean;
  showConfetti: boolean;
  fadeOut: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNoteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useWeightForm = ({
  weightMutation,
  onSuccess,
  onError,
  onMutate,
  currentGoal,
}: UseWeightFormProps): UseWeightFormReturn => {
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const weightKg = parseFloat(weight);
    if (isNaN(weightKg) || weightKg <= 0) {
      setMessage("Please enter a valid weight.");
      return;
    }
    const decimalPlaces = weight.split(".")[1]?.length || 0;
    if (decimalPlaces > 2) {
      setMessage("Weight can have up to two decimal places.");
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    onMutate?.();

    try {
      const response = await weightMutation({
        weightKg,
        note: note || undefined,
      });
      setMessage("Weight recorded successfully!");
      setWeight("");
      setNote("");
      if (
        currentGoal &&
        weightKg <= currentGoal.goalWeightKg &&
        !currentGoal.reachedAt
      ) {
        setShowConfetti(true);
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 6000);
        setTimeout(() => setShowConfetti(false), 7000);
      }
      onSuccess?.(response);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to record weight";
      const errorCode =
        error instanceof Error && "data" in error && (error.data as any)?.code;
      if (errorCode === "UNAUTHORIZED") {
        setMessage("Please log in to record a weight.");
      } else {
        setMessage(`Failed to record weight: ${errorMessage}`);
      }
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
    setMessage(null);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
    setMessage(null);
  };

  return {
    weight,
    note,
    message,
    isSubmitting,
    showConfetti,
    fadeOut,
    handleSubmit,
    handleWeightChange,
    handleNoteChange,
  };
};
