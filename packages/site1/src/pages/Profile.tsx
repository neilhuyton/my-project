// packages/site1/src/pages/Profile.tsx
import {
  EmailUpdateForm,
  type EmailFormValues,
  type EmailUpdateResponse,
} from "@my-project/ui";
import { trpc } from "../trpc";

function Profile() {
  const updateEmailMutation = trpc.updateEmail.useMutation();

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <h1
        className="text-2xl font-bold text-foreground text-center"
        role="heading"
        aria-level={1}
      >
        Your Profile
      </h1>
      <EmailUpdateForm
        mutationFn={async (data: EmailFormValues) => {
          const response = await updateEmailMutation.mutateAsync(data);
          return response;
        }}
        onSuccess={(data) => {
          console.log("Email update successful:", data.message);
        }}
        onError={(error) => {
          console.error("Email update failed:", error);
        }}
      />
    </div>
  );
}

export default Profile;
