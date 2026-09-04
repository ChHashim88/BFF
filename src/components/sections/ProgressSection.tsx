"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { PlayCircle, Target, MonitorSmartphone, DollarSign, Network } from "lucide-react";

const progressTimelineData = [
  {
    id: 1,
    title: "Pipeline Development",
    date: "Phase 1",
    content:
      "Initial film projects have been identified and are progressing through BFF's evaluation and development process.",
    category: "Capabilities",
    icon: PlayCircle,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Selection Framework",
    date: "Phase 2",
    content:
      "BFF has developed a structured methodology for evaluating projects across creative, audience, commercial, financial, production, and distribution criteria.",
    category: "Capabilities",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Platform Design",
    date: "Phase 3",
    content:
      "The core platform architecture and investor experience have been defined, with prototypes in development and potential build partners under evaluation.",
    category: "Capabilities",
    icon: MonitorSmartphone,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Financial Model",
    date: "Phase 4",
    content:
      "BFF has developed a financial model connecting individual film economics, company revenue streams, platform activity, and participation across a growing pipeline.",
    category: "Capabilities",
    icon: DollarSign,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Industry Network",
    date: "Phase 5",
    content:
      "The company has established active relationships and leadership experience across development, production, finance, marketing, and global distribution.",
    category: "Capabilities",
    icon: Network,
    relatedIds: [4],
    status: "completed" as const,
    energy: 40,
  },
];

export function ProgressSection() {
  return (
    <section
      id="progress-to-date"
      className="relative w-full scroll-mt-24 bg-background px-6 py-8 lg:py-12 lg:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0 text-left">
            <h3 className="text-h3 text-destructive mb-2 font-bold tracking-tight uppercase">
              PROGRESS TO DATE
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 cursor-default">
              From Foundation to <span className="text-destructive">Launch</span>
            </h2>
            <div className="space-y-4 text-body-text text-muted-foreground mt-4">
              <p>
                Big Film Fund has spent its development phase building more
                than a concept.
              </p>
              <p>
                Rather than rushing a single film to market, BFF has focused on
                establishing the core capabilities required to source, evaluate,
                structure, and support film investment opportunities repeatedly.
              </p>
            </div>
          </div>

          {/* Right side orbital */}
          <div className="relative w-full h-[500px] flex items-center justify-center order-1 lg:order-2">
            <RadialOrbitalTimeline timelineData={progressTimelineData} />
          </div>
        </div>
      </div>
    </section>
  );
}
