"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { SparklesCore } from "@/components/ui/sparkles";

// Interface for individual process card props
export interface ProcessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, className }) => (
  <div className={cn("group relative w-full overflow-hidden rounded-lg border bg-card dark:bg-black p-6 transition-all cursor-pointer duration-300 hover:border-[#CD0007] hover:shadow-[0_0_20px_rgba(205,0,7,0.15)] ", className)}>
    {/* Sparkling Background for Dark Mode */}
    <div className="absolute inset-0 z-0 hidden dark:block opacity-40 transition-opacity duration-500 group-hover:opacity-100">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={60}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>

    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute z-10 -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-border transition-colors group-hover:bg-[#CD0007] md:block" />
    <div className="absolute z-10 left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-border transition-colors group-hover:bg-[#CD0007] md:hidden" />


    {/* Icon Container - Website Red Icon */}
    <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-destructive/30 bg-destructive/10 dark:bg-destructive/20 text-destructive transition-all duration-300 group-hover:bg-destructive group-hover:border-destructive shadow-md group-hover:shadow-[0_0_20px_rgba(205,0,7,0.4)]">
      <Icon className="h-7 w-7 text-destructive group-hover:text-white transition-colors duration-300" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col">
      <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-destructive transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

// Interface for the main section props
export interface ProcessSectionProps {
  id?: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  id,
  subtitle,
  title,
  description,
  buttonText,
  items,
}) => {
  return (
    <section
      id={id}
      className="relative w-full scroll-mt-24 py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 overflow-hidden flex flex-col justify-center bg-background"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8 xl:pr-16 text-left">
            <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
              {subtitle}
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
              Market <span className="text-destructive">Execution</span>
            </h2>
            <div className="space-y-4 text-body-text text-muted-foreground transition-colors duration-300">
              <p>{description}</p>
            </div>
            <p className="text-lg font-medium text-destructive mt-2">
              {buttonText}
            </p>
          </div>

          {/* Right Side - Stacked Video Player */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
            <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
            <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

            <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                Video Player
              </span>
            </div>
          </div>
        </div>

        {/* 6 Process Cards Grid (Matching BUILT TO EXECUTE layout) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch pt-4 pb-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
