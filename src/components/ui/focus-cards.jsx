"use client";;
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.imageUrl} alt={card.name} className="object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col items-center py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.name}
      </div>
      <div
        className="text-xs md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-8xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card._id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
