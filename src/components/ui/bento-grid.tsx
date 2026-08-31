"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-24 mx-auto max-w-[1350px]">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground">
            Radical Transparency.
          </h2>
          <p className="max-w-3xl text-lg font-medium tracking-tight mt-4 text-muted-foreground">
            Delivered Through the Platform.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-12 lg:grid-rows-2">
          {/* Top row: 3 cards (span 4 each) */}
          <BentoCard
            eyebrow=""
            title="Get perfect clarity"
            description="BFF’s structure makes a clean financial picture possible. The platform makes it visible."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] bg-cover bg-center" />
            }
            className="max-lg:rounded-t-3xl lg:col-span-4 lg:rounded-tl-3xl"
          />
          <BentoCard
            eyebrow=""
            title="Undercut your competitors"
            description="Because every film has its own entity, capitalization, accounting, revenue, and distributions, investors can follow each project as an individual investment while viewing their film holdings together in one place.."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] bg-cover bg-center" />
            }
            className="lg:col-span-4"
          />
          <BentoCard
            eyebrow=""
            title="Built for power users"
            description="The BFF dashboard provides ongoing visibility into project progress, financial reporting, revenue activity, and distributions, giving investors one place to manage every film investment."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] bg-cover bg-center bg-black" />
            }
            className="lg:col-span-4 lg:rounded-tr-3xl"
          />

          {/* Bottom row: 4 cards (span 3 each) */}
          <BentoCard
            eyebrow="SELECTION"
            title="Discover Curated Films"
            description="Find projects that have passed BFF’s review process."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] bg-cover bg-center" />
            }
            className="max-md:hidden lg:col-span-3 lg:rounded-bl-3xl"
          />
          <BentoCard
            eyebrow="CONVICTION"
            title="Explore & Invest"
            description="Understand the opportunity and choose what you believe in."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] bg-cover bg-center" />
            }
            className="max-md:hidden lg:col-span-3"
          />
          <BentoCard
            eyebrow="VISIBILITY"
            title="Follow the Journey"
            description="Track progress from financing through release."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] bg-cover bg-center" />
            }
            className="max-md:hidden lg:col-span-3"
          />
          <BentoCard
            eyebrow="OWNERSHIP"
            title="Build Your Portfolio"
            description="Manage multiple standalone film investments in one place."
            graphic={
              <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] bg-cover bg-center" />
            }
            className="max-md:hidden max-lg:rounded-b-3xl lg:col-span-3 lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export function BentoCard({
  dark = true,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-black dark:bg-[#0a0a0a] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-sm ring-1 ring-white/10",
        "data-[dark]:bg-zinc-900 data-[dark]:ring-white/15"
      )}
    >
      <div className="relative h-[22rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-black to-50% opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-black to-50% opacity-25" />
        )}
      </div>
      <div className="relative p-6 lg:p-8 z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white bg-black/40 border-t border-white/10">
        <h1 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{eyebrow}</h1>
        <p className="mt-1 text-xl font-medium tracking-tight text-white group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-zinc-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
