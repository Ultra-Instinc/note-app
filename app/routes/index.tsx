// app/routes/index.tsx
import { Button, buttonVariants } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {

  return (
    <div className="flex items-center justify-center flex-col h-screen gap-4">
      <h1 className="text-xl font-bold text-center">Notes made for developers</h1>
      <Link className={buttonVariants()} to="/notes">Get Started</Link>
    </div>
  );
}
