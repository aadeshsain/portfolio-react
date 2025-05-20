import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// Initialize with default values to avoid undefined error
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light"); // Default to light theme initially

  useEffect(() => {
    // Only execute this on client-side
    setMounted(true);
    
    // Initialize theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    // Remove the class first
    root.classList.remove("light", "dark");
    
    // Add the correct class
    root.classList.add(theme);
    
    // Store preference
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
