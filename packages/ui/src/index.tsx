// packages/ui/src/index.tsx
import "./index.css";
export * from "./components/ui/form";
export * from "./components/ui/input";
export * from "./components/ui/button";
export * from "./components/ui/label";
export * from "./components/ui/table";
export { LoginForm } from "./components/LoginForm";
export { Register } from "./components/Register";
export { ResetPasswordForm } from "./components/ResetPasswordForm";
export { ConfirmResetPasswordForm } from "./components/ConfirmResetPasswordForm";
export { WeightForm } from "./components/weight/WeightForm";
export { WeightList } from "./components/weight/WeightList";
export { GoalForm } from "./components/weight/GoalForm";
export { GoalList } from "./components/weight/GoalList";
export { LoadingSpinner } from "./components/LoadingSpinner";
export { default as Navigation } from "./components/Navigation";
export { default as ProfileIcon } from "./components/ProfileIcon"; // Add this line
export { useLogin, formSchema as loginFormSchema } from "./hooks/useLogin";
export type { LoginResponse } from "./hooks/useLogin";
export {
  useRegister,
  formSchema as registerFormSchema,
} from "./hooks/useRegister";
export type { RegisterResponse } from "./hooks/useRegister";
export {
  useResetPassword,
  formSchema as resetPasswordFormSchema,
} from "./hooks/useResetPassword";
export type { ResetPasswordResponse } from "./hooks/useResetPassword";
export {
  useConfirmResetPassword,
  formSchema as confirmResetPasswordFormSchema,
} from "./hooks/useConfirmResetPassword";
export type { FormValues as ConfirmResetPasswordFormValues } from "./hooks/useConfirmResetPassword";
export { useWeightGoal } from "./hooks/useWeightGoal";
export { useGoalList } from "./hooks/useGoalList";
