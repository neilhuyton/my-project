// packages/site1/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Button, LoginForm } from "@my-project/ui";
import { trpc, queryClient, trpcClient } from "./trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import "@my-project/ui/index.css";

const App = () => {
  const loginMutation = trpc.login.useMutation({
    onSuccess: (data) => {
      alert(`Login successful! Token: ${data.token}`);
    },
    onError: (error: any) => {
      alert(`Login failed: ${error.message}`);
    },
  });

  const handleLogin = async (data: { email: string; password: string }) => {
    return loginMutation.mutateAsync(data); // Use mutateAsync to return a Promise
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Site1</h1>
      <LoginForm
        loginMutation={handleLogin}
        onSuccess={() => {}}
        onError={() => {}}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <App />
      </trpc.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
