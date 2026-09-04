"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SERVICES = [
  {
    id: "01",
    title: "Web Design",
    description: "Creating beautiful, functional, and user-centric digital experiences.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "02",
    title: "Framer Development",
    description: "Building high-performance, animated websites with Framer.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200",
  },
  {
    id: "03",
    title: "Branding",
    description: "Defining your brand's visual identity and voice for a lasting impression.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <section className="w-full bg-background pt-8 pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 xl:px-24">
      <div className="w-full mx-auto max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    onMouseEnter={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground/60 hover:text-foreground",
                    )}
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <div className="absolute top-0 left-0 w-full h-full bg-foreground" />
                      )}
                    </div>

                    <span
                      className={cn(
                        "text-[9px] md:text-[10px] font-medium mt-1 tabular-nums transition-colors duration-300",
                        isActive ? "text-destructive font-bold opacity-100" : "opacity-50"
                      )}
                    >
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500",
                          isActive ? "text-foreground" : "",
                        )}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div className="relative group/gallery">
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40">
                <AnimatePresence>
                  <motion.div
                    key={activeIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      opacity: { duration: 0.8, ease: "easeInOut" },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex]?.image}
                      alt={SERVICES[activeIndex]?.title}
                      className="w-full h-full object-cover m-0! p-0! block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
