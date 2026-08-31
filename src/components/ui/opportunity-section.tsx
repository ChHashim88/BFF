import React from "react";
import { Globe, Share2, Target, Clapperboard, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OpportunitySection() {
  return (
    <section
      id="opportunity"
      className="relative scroll-mt-24 w-full bg-background px-6 py-16 lg:py-24 lg:px-12 xl:px-24 flex justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-medium text-destructive uppercase tracking-[0.3em] block ml-0.5">
                THE OPPORTUNITY
              </h3>
              <h2 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground mt-4">
                Film is Ready for <br />
                <span className="text-destructive">Modern Investment Infrastructure.</span>
              </h2>
            </div>

            <div className="flex flex-col space-y-6 pt-6">
              {/* Point 1 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  Film is a global business—financed, produced, distributed, and consumed in markets
                  around the world.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Share2 className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  Yet film investing remains largely fragmented: built around private networks,
                  one-off deals, inconsistent structures, and investor experiences that begin and
                  end with each individual project.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  The opportunity is not simply to give more people access to film investments. It
                  is to transform how those opportunities are sourced, evaluated, structured,
                  financed, brought to market, and experienced by investors.
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Clapperboard className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  <span className="font-bold text-foreground">Big Film Fund</span> is building the
                  model and platform to make that transformation possible.
                </p>
              </div>

              {/* Point 5 */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-foreground font-bold leading-relaxed pt-1">
                  Film is ready for that transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full h-full lg:pl-6 lg:mt-24">
            {/* Video Placeholder Container */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl group cursor-pointer border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1400"
                alt="Film Set"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-destructive ml-1"></div>
                </div>
              </div>

              {/* Fake Video Controls */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-4 z-10">
                <div className="w-full flex items-center gap-4">
                  <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white"></div>
                  <span className="text-white text-xs font-medium">0:00 / 1:30</span>
                  <div className="flex-1 h-1 bg-white/30 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-1/4 bg-destructive rounded-full"></div>
                  </div>
                  <div className="w-4 h-4 bg-white/80 rounded-[2px]"></div>{" "}
                  {/* Fake volume/fullscreen icon */}
                </div>
              </div>
            </div>

            {/* Dark Liquid Glass Container */}
            <div className="relative w-full rounded-3xl bg-zinc-950 border border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Subtle glass reflection effect */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-destructive/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-start">
                <div className="w-14 h-14 shrink-0 rounded-xl border border-destructive/30 bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                    Investing itself has undergone a structural shift.
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    Platforms did more than open access to startups, real estate, and alternative
                    assets. They created the infrastructure that made those opportunities easier to
                    discover, evaluate, transact, manage, and understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
