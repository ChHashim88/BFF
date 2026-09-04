"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ElementType;
  titleClassName?: string;
  delay?: number;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon = Sparkles, titleClassName, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, scale: 1.02 }}
        className={`group relative w-full h-full min-h-[290px] rounded-3xl bg-card dark:bg-zinc-950/90 border border-zinc-200/80 dark:border-zinc-800/80 p-8 sm:p-10 flex flex-col items-center justify-start text-center transition-shadow duration-500 ease-out hover:border-destructive/50 hover:shadow-[0_20px_50px_rgba(205,0,7,0.18)] cursor-pointer overflow-hidden ${className || ""}`}
        {...props}
      >
        {/* Animated Background Glow */}
        <motion.div
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-destructive/10 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top Circular Icon Badge with Rhythmic Heartbeat Animation */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Beating Pulse Ring */}
          <motion.div
            className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-destructive/[0.08] dark:bg-destructive/20 flex items-center justify-center pointer-events-none"
            animate={{
              scale: [1, 1.15, 1, 1.24, 1],
              opacity: [0.4, 0.8, 0.4, 0.95, 0.4],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: delay * 0.3,
              ease: "easeInOut",
            }}
          />

          {/* Inner Beating White/Dark Circle */}
          <motion.div
            className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-zinc-900 border border-destructive/30 dark:border-destructive/40 shadow-md flex items-center justify-center transition-colors group-hover:border-destructive group-hover:shadow-destructive/30"
            animate={{
              scale: [1, 1.08, 1, 1.16, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: delay * 0.3,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.25, rotate: 6 }}
          >
            {Icon && (
              <motion.div
                animate={{
                  scale: [1, 1.12, 1, 1.2, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  delay: delay * 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.25, rotate: -6 }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-destructive stroke-[1.8] drop-shadow-[0_0_8px_rgba(205,0,7,0.3)]" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Card Title */}
        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 text-destructive transition-colors group-hover:text-destructive ${titleClassName || ""}`}>
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal group-hover:text-foreground/90 transition-colors duration-300">
          {description}
        </p>

        {/* Subtle Hover Shimmer Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
