"use client";
// Home.tsx
import { useState, useEffect } from "react";
import { CardAI, ChatModule, Navbar, TargetTopics } from "@/components";

export default function Home() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? storedTheme : "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className={`${theme === "dark" ? "bg-neutral-800 text-white" : "bg-white text-black"} min-h-screen transition-all`}>
        {/* Pasamos tanto el theme como la función toggleTheme */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <CardAI />
        <ChatModule />
        <TargetTopics />
      </div>
    </div>
  );
}
