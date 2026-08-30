import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 380,
  width = "100%",
}: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group/flipping-card [perspective:1000px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={
        {
          "--height": typeof height === 'number' ? `${height}px` : height,
          "--width": typeof width === 'number' ? `${width}px` : width,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative rounded-2xl border border-border/60 bg-background shadow-xl transition-transform duration-700 [transform-style:preserve-3d]",
          "lg:group-hover/flipping-card:[transform:rotateY(180deg)]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
          "h-[var(--height)] w-[var(--width)] max-w-full",
          className
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-muted/20 text-foreground [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-muted/20 text-foreground [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
