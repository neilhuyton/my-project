import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@my-project/ui";
import { trpc, queryClient, trpcClient } from "./trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import "@my-project/ui/index.css";

const App = () => {
  const { data, error, isLoading } = trpc.greeting.useQuery({ name: "Test" });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Site1</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.message}</p>}
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
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
