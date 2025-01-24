import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

type AuthMode = "login" | "signup";

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Here you would integrate with Keycloak
    // For now, we'll just show a toast
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Coming soon",
        description: "Keycloak integration will be implemented soon.",
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-md space-y-8 slide-up-animation">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {mode === "login"
            ? "Enter your credentials to access your account"
            : "Enter your details to create your account"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
              className="w-full"
              disabled={isLoading}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="w-full"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            className="w-full"
            disabled={isLoading}
          />
        </div>

        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : mode === "login" ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
        </span>
        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="text-primary hover:underline font-medium"
          disabled={isLoading}
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
}