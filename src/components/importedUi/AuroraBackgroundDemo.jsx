"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { AnimatedTestimonialsDemo } from "../importedUi/AnimatedTestimonialsDemo";


export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-full mt-0 w-screen md:h-[40rem] flex items-center justify-center md:px-4">
        <div className="h-full w-screen text-3xl md:text-7xl font-bold dark:text-white text-center">
          <AnimatedTestimonialsDemo />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
