"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </div>
  );
}

export default Providers;
