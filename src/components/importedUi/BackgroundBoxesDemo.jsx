"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";
import ContactImp from "../../components/ContactImp";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-[90rem] md:h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 top-4")}>
        Feel Free to Contact Us
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        We'd love to hear from you! Whether it's feedback, suggestions, or collaboration
      </p>
      <ContactImp />
    </div>
  );
}
