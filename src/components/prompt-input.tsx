"use client";

import { useState, FormEvent, useEffect } from "react";

export default function PromptInput() {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Ask me something you would like to know about me");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 640) {
        setPlaceholder("Ask me something...");
      } else {
        setPlaceholder("Ask me something you would like to know about me");
      }
    };

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      window.location.href = `https://delphi.ai/samu/talk?q=${encodeURIComponent(
        input.trim()
      )}`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 px-6 bg-gradient-to-t from-white/50 to-transparent pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl hover:scale-105 focus-within:max-w-2xl transition-all duration-300 ease-in-out flex items-center rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-200 overflow-hidden pr-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-6 py-4 bg-transparent text-black focus:outline-none font-mono min-w-0"
        />
        <button
          type="submit"
          className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
