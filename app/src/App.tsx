import { GreetForm } from "@/components/GreetForm";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
          Vite + Tauri + React + Tailwind
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Shared Clipboard
        </h1>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Frontend is a Vite SPA. Native work goes through Tauri commands or
          official plugins.
        </p>
        <GreetForm />
      </div>
    </main>
  );
}
