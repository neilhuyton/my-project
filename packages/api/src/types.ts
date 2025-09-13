export interface WeightInput {
  weightKg: number;
  note?: string;
}

export interface WeightResponse {
  id: string;
  userId: string;
  weightKg: number;
  note: string | null;
  createdAt: string;
}

export interface GoalResponse {
  id: string;
  goalWeightKg: number;
  goalSetAt: string;
  reachedAt: string | null;
}
