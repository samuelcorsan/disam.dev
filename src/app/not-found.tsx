"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white mb-4">
            4
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block text-blue-500"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-3xl text-gray-300 mb-8 font-serif">
            Oops! Page not found
          </p>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the
            digital void. Let's get you back on track!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-stone-300 text-black rounded-lg font-medium 
                     transition-all duration-200 transform hover:scale-105 hover:bg-stone-400
                     focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
          >
            Return home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
