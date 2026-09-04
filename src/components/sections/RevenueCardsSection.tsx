"use client";

import GlassCard from "@/components/ui/glass-card";

export function RevenueCardsSection() {
  return (
    <section className="relative w-full bg-background px-6 py-8 lg:py-12 lg:px-12 xl:px-24 flex items-center justify-center">
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <GlassCard
            title="Platform Fees"
            titleClassName="text-destructive"
            description="Fees associated with bringing film offerings to market and supporting them through the BFF platform."
          />
          <GlassCard
            title="Project Participation"
            titleClassName="text-destructive"
            description="Revenue and defined economic participation associated with BFF’s role in financing, developing, and producing individual films."
          />
          <GlassCard
            title="Performance Upside"
            titleClassName="text-destructive"
            description="BFF participates in distributable revenue from successful films—aligning the company’s financial upside with performance."
          />
          <GlassCard
            title="Partnerships"
            titleClassName="text-destructive"
            description="Revenue associated with distribution, licensing, content partnerships, and other commercial relationships."
          />
        </div>
      </div>
    </section>
  );
}
