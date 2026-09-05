"use client";

import * as React from "react";
import { Sparkles, RotateCw } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ElementType;
  titleClassName?: string;
  delay?: number;
  flipOnHover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon = Sparkles, titleClassName, delay = 0, flipOnHover = false, ...props }, ref) => {
    if (flipOnHover) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.8,
            delay: delay * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`group relative w-full h-full min-h-[290px] [perspective:1000px] cursor-pointer ${className || ""}`}
          {...props}
        >
          {/* Flipping 3D Card Inner Wrapper */}
          <div className="relative w-full h-full min-h-[290px] rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* FRONT FACE (Icon + Heading Only) */}
            <div className="absolute inset-0 w-full h-full rounded-3xl bg-card/95 dark:bg-zinc-950/90 border border-zinc-200/90 dark:border-zinc-800/90 p-8 sm:p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden] overflow-hidden backdrop-blur-md shadow-md transition-shadow duration-500 group-hover:shadow-xl border-t-white dark:border-t-white/20">
              {/* Corner Glow */}
              <motion.div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-zinc-400/10 blur-3xl pointer-events-none"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Automatic Glass Shine Beam */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.4) 55%, transparent 80%)",
                }}
                animate={{
                  x: ["-150%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: [0.25, 1, 0.5, 1],
                  delay: delay * 0.4,
                }}
              />

              {/* Top Circular Icon Badge */}
              <div className="relative mb-6 flex items-center justify-center z-20">
                <motion.div
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 flex items-center justify-center pointer-events-none"
                  animate={{
                    scale: [1, 1.14, 1],
                    opacity: [0.4, 0.85, 0.4],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    delay: delay * 0.2,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-zinc-900 border border-destructive/30 dark:border-destructive/40 shadow-md flex items-center justify-center"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    delay: delay * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {Icon && (
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-destructive stroke-[1.8]" />
                  )}
                </motion.div>
              </div>

              {/* Card Title Only */}
              <h3 className={`relative z-20 text-xl sm:text-2xl font-bold tracking-tight text-destructive ${titleClassName || ""}`}>
                {title}
              </h3>

              {/* Top Metallic Border Highlight */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent pointer-events-none" />
            </div>

            {/* BACK FACE (Description Only) */}
            <div className="absolute inset-0 w-full h-full rounded-3xl bg-white dark:bg-zinc-950 border border-destructive/50 dark:border-destructive/40 p-6 sm:p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden backdrop-blur-md shadow-xl">
              {/* Back Card Header Accent */}
              {/* <div className="mb-3 inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-destructive/40 text-destructive text-xs font-extrabold uppercase tracking-wider">
                {title}
              </div> */}

              {/* Description */}
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-normal">
                {description}
              </p>

              {/* Top Metallic Border Highlight */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-destructive/50 to-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.8,
          delay: delay * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
        className={`group relative w-full h-full min-h-[290px] rounded-3xl bg-card/95 dark:bg-zinc-950/90 border border-zinc-200/90 dark:border-zinc-800/90 p-8 sm:p-10 flex flex-col items-center justify-start text-center transition-all duration-500 ease-out hover:border-destructive/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden backdrop-blur-md ${className || ""}`}
        {...props}
      >
        {/* Animated Corner Red Glow */}
        <motion.div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-zinc-400/10 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Continuous Automatic Glass Shine Beam (45-degree angle sweep) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.4) 55%, transparent 80%)",
          }}
          animate={{
            x: ["-150%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: [0.25, 1, 0.5, 1],
            delay: delay * 0.4,
          }}
        />

        {/* Interactive Hover Light Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />

        {/* Top Circular Icon Badge with Smooth Breathing Animation */}
        <div className="relative mb-6 flex items-center justify-center z-20">
          {/* Outer Breathing Pulse Ring */}
          <motion.div
            className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 flex items-center justify-center pointer-events-none"
            animate={{
              scale: [1, 1.14, 1],
              opacity: [0.4, 0.85, 0.4],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              delay: delay * 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Inner Circle */}
          <motion.div
            className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-zinc-900 border border-destructive/30 dark:border-destructive/40 shadow-md flex items-center justify-center transition-all duration-500 group-hover:border-destructive group-hover:shadow-lg"
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              delay: delay * 0.2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.18, rotate: 5, transition: { duration: 0.3 } }}
          >
            {Icon && (
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  delay: delay * 0.2,
                  ease: "easeInOut",
                }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-destructive stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Card Title */}
        <h3 className={`relative z-20 text-xl sm:text-2xl font-bold tracking-tight mb-3 text-destructive transition-colors group-hover:text-destructive ${titleClassName || ""}`}>
          {title}
        </h3>

        {/* Card Description */}
        <p className="relative z-20 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal group-hover:text-foreground/90 transition-colors duration-300">
          {description}
        </p>

        {/* Top Metallic Border Highlight */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent group-hover:via-destructive/80 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;

