"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { HiOutlineShieldCheck, HiOutlineShieldExclamation } from "react-icons/hi";
import { LuServerCog } from "react-icons/lu";
import { useCanvasAnimation, AnimationId } from "./canvas-animations";

type ApiEvent = {
  id: string;
  ip: string;
  status: "Allowed" | "Throttled";
};

type ComponentProps = {
  cardTitle?: string;
  cardDescription?: string;
  events?: ApiEvent[];
  icon?: React.ReactNode;
  animationId?: AnimationId;
};

export const ApiRateLimitingCard = ({
  cardTitle = "API Rate Limiting",
  cardDescription = "Protect your services from abuse by monitoring incoming traffic and automatically throttling requests that exceed defined limits.",
  events = [],
  icon,
  animationId,
}: ComponentProps) => {
  const controls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use the extracted canvas hook
  useCanvasAnimation(canvasRef, animationId);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start((i) => ({
          opacity: [0, 1, 0],
          x: [-80, 0, 80],
          y: [Math.random() * 40 - 20, 0, Math.random() * 40 - 20],
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: i * 0.3,
          },
        }));
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
    sequence();
  }, [controls]);

  const isThrottled = events.some(e => e.status === 'Throttled');

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden text-left",
        "h-auto min-h-[20rem] md:min-h-[22rem] w-full",
        "rounded-2xl border border-border bg-muted/20 backdrop-blur-sm",
      )}
    >
      <div className="relative flex h-40 w-full items-center justify-center shrink-0 mt-4">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {animationId ? (
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
          ) : (
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  animate={controls}
                  className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-[#CD0007]"
                />
              ))}
            </div>
          )}

          <motion.div
            className="z-10 flex size-16 items-center justify-center rounded-full border border-border bg-background shadow-[0_0_15px_rgba(205,0,7,0.3)]"
            animate={{
              borderColor: "rgba(205, 0, 7, 0.5)",
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            {icon || <LuServerCog className="size-6 text-foreground" />}
          </motion.div>

          <motion.div
             className="absolute flex items-center justify-center"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{
                opacity: isThrottled ? 1 : 0,
                scale: isThrottled ? 1 : 0.8,
                transition: { duration: 0.3, ease: 'easeOut' }
             }}
          >
            <HiOutlineShieldExclamation className="size-24 text-red-500/50" />
          </motion.div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
        <h4 className="text-lg font-bold text-foreground leading-tight">{cardTitle}</h4>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{cardDescription}</p>
      </div>
    </div>
  );
};
