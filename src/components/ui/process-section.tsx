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
    <section id={id} className="w-full bg-background py-8 md:py-12 scroll-mt-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8 lg:gap-16 max-w-[1350px]">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
          <h3 className="text-h3 text-destructive mb-3 font-bold tracking-tight uppercase">
            {subtitle}
          </h3>
          <h2 className="text-h2 text-foreground mb-4 drop-shadow-sm">
            {title}
          </h2>
          <p className="mb-6 text-base text-muted-foreground">
            {description}
          </p>
          <Button size="lg" className="hover:scale-110 duration-300 transition-all cursor-pointer">
            {buttonText}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
