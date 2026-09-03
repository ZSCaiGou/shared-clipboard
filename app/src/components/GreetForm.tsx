import { type FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { useGreet } from "@/hooks/useGreet";
import { cn } from "@/lib/utils";

export function GreetForm() {
  const [name, setName] = useState("");
  const { message, isPending, submit } = useGreet();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit(name.trim() || "friend");
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1.5 text-left text-sm text-zinc-600 dark:text-zinc-400">
        Name
        <input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          placeholder="Enter a name..."
          className={cn(
            "rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900",
            "outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-2",
            "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
          )}
        />
      </label>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Greeting..." : "Greet from Rust"}
      </Button>
      {message ? (
        <p className="text-sm text-zinc-700 dark:text-zinc-300">{message}</p>
      ) : null}
    </form>
  );
}
