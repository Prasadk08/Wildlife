"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/animals/anm1.jpg",
    "/animals/anm2.jpg",
    "/animals/anm3.jpg",
    "/animals/anm4.jpg",
    "/animals/anm5.jpg",
    "/animals/anm6.jpg",
    "/animals/anm7.jpg",
    "/animals/anm8.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.div className="font-bold backdrop-blur-sm text-xl md:text-6xl text-center w-screen text-white py-4">
          🌿 Welcome to WildGuard 🌿
          <br />
          <div className="text-amber-50 text-base md:text-lg text-center justify-center m-auto items-center w-2/3">
            Guardians of Wildlife is an initiative by the Government to raise
            awareness and educate people about wildlife conservation.
          </div>
        </motion.div>
        <button className="px-4 py-2 backdrop-blur-sm  bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>🌍 #SaveWildlife #WildGuard #EcoAwareness</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
