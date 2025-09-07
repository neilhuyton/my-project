import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@my-project/ui";
import { trpc, queryClient, trpcClient } from "./trpc";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { data } = trpc.greeting.useQuery({ name: "Test" });
  return (
    <div>
      <h1>Site1 Demo</h1>
      <Button onClick={() => alert("Clicked from Site1!")}>Site1 Button</Button>
      <div>{data?.message}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);
