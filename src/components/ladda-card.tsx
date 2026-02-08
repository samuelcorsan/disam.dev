"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

interface MediaItem {
  type: "video" | "image";
  src: string;
}

const media: MediaItem[] = [
  { type: "video", src: "/ladda-demo-1.mp4" },
  { type: "video", src: "/ladda-demo-2.mp4" },
  { type: "image", src: "/ladda-1.png" },
  { type: "image", src: "/ladda-3.png" },
  { type: "image", src: "/ladda-4.png" },
];

export function LaddaCard() {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-100">
            <motion.button
              key={`button-close-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-6 w-6 z-101"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-ladda-${id}`}
              ref={ref}
              className="w-full max-w-[800px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="p-6">
                <motion.h3
                  layoutId={`title-ladda-${id}`}
                  className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 mb-4"
                >
                  ladda
                </motion.h3>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6"
                >
                  <p>
                    reimagining fashion e-commerce. swipe through clothes like
                    social media, try them on instantly with AI, checkout in one
                    tap. shopping should feel personal and effortless, not like
                    work
                  </p>
                </motion.div>

                <div className="flex gap-3 justify-center">
                  {media.map((item, index) => (
                    <div key={index} className="shrink-0 w-[140px]">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-72 object-contain rounded-lg"
                        />
                      ) : (
                        <div className="relative w-full h-72 rounded-lg">
                          <Image
                            src={item.src}
                            alt={`Ladda screenshot ${index + 1}`}
                            fill
                            className="object-contain rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layoutId={`card-ladda-${id}`}
        onClick={() => setActive(true)}
        className="inline-block cursor-pointer"
      >
        <motion.span
          layoutId={`title-ladda-${id}`}
          className="text-blue-600 hover:underline"
        >
          ladda
        </motion.span>
      </motion.div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
