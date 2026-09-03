import { useCallback, useState } from "react";
import { greet } from "@/lib/tauri";

export function useGreet() {
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const submit = useCallback(async (name: string) => {
    setIsPending(true);
    try {
      const result = await greet(name);
      setMessage(result);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Failed to greet";
      setMessage(detail);
    } finally {
      setIsPending(false);
    }
  }, []);

  return { message, isPending, submit };
}
