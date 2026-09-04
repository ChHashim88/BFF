"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { openWaitlistModal } from "@/components/ui/WaitlistModal";

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative px-6 pt-20 sm:pt-24 lg:pt-28 pb-8 lg:pb-12 lg:px-12 xl:px-24">
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-2">
        <div className="z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto lg:mx-0 lg:items-start lg:text-left opacity-100 order-1">
          <h1 className="text-h1 text-foreground">
            Film Investing.
            <br />
            <span className="text-destructive">Reimagined</span>
            <br />
            for Investors.
          </h1>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            {/* Subtitle text */}
            <p className="text-subtitle text-foreground/90 max-w-[280px] sm:max-w-md lg:max-w-none">
              Big Film Fund is creating a new way to finance movies – powered by
              a technology platform that connects investors, filmmakers, and
              audiences.
            </p>

            {/* Body copy */}
            <div className="hidden lg:block space-y-3.5 text-body-text text-muted-foreground">
              <p>
                For everyday investors, that opens the door once largely
                reserved for Hollywood studios and industry insiders, to an
                opportunity to own a stake in the movies they believe in, and
                share in their success.
              </p>

              {/* See More / See Less Toggle Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-destructive hover:text-destructive/80 transition-all cursor-pointer group py-1"
                >
                  <span>{isExpanded ? "See Less" : "See More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "animate-bounce"
                      }`}
                  />
                </button>
              </div>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="space-y-3.5 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="font-semibold text-destructive">
                    But opening access to film investing is the beginning.
                  </p>
                  <p>
                    Our model is designed for investors from the ground up – with
                    clean ownership structures that align incentives with filmmakers
                    and producers (without complex Hollywood recoupment
                    waterfalls), rigorous commercial discipline from start to
                    finish, all delivered with radical transparency.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Callout box / Feature point */}
          <div className="hidden lg:flex items-start gap-3.5 border border-border/80 bg-muted/40 p-4 backdrop-blur-sm">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-destructive/40 bg-destructive/10 text-destructive">
              <Check size={12} strokeWidth={3.5} />
            </div>
            <div>
              <p className="text-body-text font-bold text-foreground">
                No more opaque Hollywood economics.
              </p>
              <p className="text-label text-muted-foreground mt-0.5">
                This is an opportunity to own part of the company building that
                future.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-1 w-full">
            <LiquidButton onClick={() => openWaitlistModal("waitlist")}>
              Join Waitlist <ArrowRight size={18} />
            </LiquidButton>
          </div>
        </div>

        {/* Globe Container */}
        <div className="z-0 pointer-events-auto relative flex items-center justify-center mt-6 lg:mt-0 opacity-100 order-2 w-full max-w-[580px] mx-auto">
          <div className="relative w-full aspect-square">
            <GlobePulse className="h-full w-full" />
          </div>

          {/* Shadow below the globe */}
          <div className="absolute -bottom-5 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/15 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
