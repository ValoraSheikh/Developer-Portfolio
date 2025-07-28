"use client";
import { motion } from "framer-motion";
import React from "react";

export const LoaderThree = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-20 w-20 stroke-neutral-500 [--fill-final:var(--color-yellow-300)] [--fill-initial:var(--color-neutral-50)] dark:stroke-neutral-100 dark:[--fill-final:var(--color-yellow-500)] dark:[--fill-initial:var(--color-neutral-800)]"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
        initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
        animate={{
          pathLength: [0, 1, 0],
          fill: ["var(--fill-initial)", "var(--fill-final)", "var(--fill-initial)"],
        }}
        transition={{
          duration: 2,
          times: [0, 1, 1, ],
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.svg>
  );
};

