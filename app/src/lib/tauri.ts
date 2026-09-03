import { invoke } from "@tauri-apps/api/core";
import type { GreetPayload } from "@/types";

export function isTauriRuntime(): boolean {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export async function greet(name: GreetPayload["name"]): Promise<string> {
  if (!isTauriRuntime()) {
    return `Hello, ${name}! (browser preview — Tauri invoke unavailable)`;
  }

  const payload: GreetPayload = { name };
  return invoke<string>("greet", payload);
}
