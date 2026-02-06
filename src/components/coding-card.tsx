"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { AllCodingData, TimeRange } from "@/lib/wakatime";

export default function CodingCard({ data }: { data: AllCodingData }) {
  const allRanges: { key: TimeRange; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "week", label: "7d" },
    { key: "month", label: "30d" },
  ];

  const availableRanges = allRanges.filter((r) => data[r.key].seconds >= 600);
  const [range, setRange] = useState<TimeRange>(
    availableRanges[0]?.key || "today"
  );

  if (availableRanges.length === 0) {
    return null;
  }

  const currentData = data[range];

  const hours = Math.floor(currentData.seconds / 3600);
  const minutes = Math.floor((currentData.seconds % 3600) / 60);

  const timeText = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 pt-5 px-6 pb-6 md:pt-6 md:px-8 md:pb-8"
    >
      {/* Header with Switcher */}
      <div className="relative z-10 flex flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Data provided by WakaTime
          </span>
        </div>
        {availableRanges.length > 1 && (
          <div className="flex items-center gap-1 p-1 bg-neutral-200/50 dark:bg-neutral-800/50 rounded-lg w-fit shrink-0">
            {availableRanges.map((r) => (
              <button
                key={r.key}
                onClick={() => setRange(r.key)}
                className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  range === r.key
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
              >
                {range === r.key && (
                  <motion.div
                    layoutId="range-highlight"
                    className="absolute inset-0 bg-white dark:bg-neutral-700 rounded-md shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{r.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={range + "-content"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-neutral-900 dark:text-neutral-100">
                  {timeText}
                </span>
                <span className="ml-2 text-lg text-neutral-500 font-medium">
                  {range === "today"
                    ? "today"
                    : range === "week"
                    ? "this week"
                    : "this month"}
                </span>
              </motion.div>
            </div>

            <div className="space-y-4">
              {currentData.languages.map((lang, index) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      {lang.name}
                    </span>
                    <span className="text-neutral-500">{lang.time}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percent}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                      className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-neutral-200/50 to-neutral-100/0 dark:from-neutral-800/30 dark:to-neutral-900/0 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-100/30 to-blue-50/0 dark:from-blue-900/10 dark:to-neutral-900/0 blur-3xl" />
    </motion.div>
  );
}
