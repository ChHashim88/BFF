import { createFileRoute } from "@tanstack/react-router";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { Check, ArrowRight, Clapperboard, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { DestinationCard } from "@/components/ui/card-21";
import AccordionGallery from "@/components/ui/AccordionGallery";
import OpportunitySection from "@/components/ui/opportunity-section";
import FUIBentoGridDark from "@/components/ui/bento-grid";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Search, FileText, Blocks, CircleDollarSign, Rocket, Users } from "lucide-react";
import * as React from "react";

const ExpandableText = ({ shortText, fullText }: { shortText: string, fullText: React.ReactNode }) => {
  const [expanded, setExpanded] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <div ref={containerRef} className="space-y-3">
      {!expanded ? (
        <p>
          {shortText}{" "}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(true); }}
            className="inline-flex items-center text-white font-black text-lg hover:text-white/80 transition-colors ml-1 animate-pulse"
          >
            &gt;
          </button>
        </p>
      ) : (
        <div className="space-y-3 animate-in fade-in duration-500">
          {fullText}
        </div>
      )}
    </div>
  );
};

const timelineData = [
  {
    id: 1,
    title: "Source",
    date: "Jan 2026",
    content: "High potential film projects.",
    category: "Sourcing",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Evaluate",
    date: "Feb 2026",
    content: "Disciplined commercial evaluation.",
    category: "Evaluation",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Structure",
    date: "Mar 2026",
    content: "Investor-aligned legal and financial structures.",
    category: "Structuring",
    icon: Blocks,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Finance",
    date: "Apr 2026",
    content: "Access capital efficiently.",
    category: "Financing",
    icon: CircleDollarSign,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Bring To Market",
    date: "May 2026",
    content: "Strategic distribution and positioning.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 6,
    title: "Investor Experience",
    date: "Jun 2026",
    content: "Transparent ongoing and informative.",
    category: "Management",
    icon: Users,
    relatedIds: [5],
    status: "pending" as const,
    energy: 10,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Big Film Fund — Film Investing, Reimagined" },
      {
        name: "description",
        content:
          "Big Film Fund is a technology-powered platform connecting investors, filmmakers, and audiences for a transparent, profitable future for film.",
      },
      { property: "og:title", content: "Big Film Fund — Film Investing, Reimagined" },
      {
        property: "og:description",
        content:
          "A technology-powered platform connecting investors, filmmakers, and audiences for a transparent, profitable future for film.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-x-hidden bg-background">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center px-6 pt-28 pb-16 lg:px-12 lg:pt-32 lg:pb-20 xl:px-24">
          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-2">
            <div className="col-start-1 row-start-1 lg:col-auto lg:row-auto z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto lg:mx-0 lg:items-start lg:text-left opacity-100">
              <h1 className="text-h1 text-foreground">
                Film Investing.<br />
                <span className="text-destructive">Reimagined</span><br />
                for Investors.
              </h1>

              <div className="flex flex-col items-center lg:items-start space-y-4">
                {/* Subtitle text */}
                <p className="text-subtitle text-foreground/90 max-w-[280px] sm:max-w-md lg:max-w-none">
                  Big Film Fund is creating a new way to finance movies – powered by a
                  technology platform that connects investors, filmmakers, and
                  audiences.
                </p>
                {/* Body copy */}
                <div className="hidden lg:block space-y-3.5 text-body-text text-muted-foreground">
                  <p>
                    For everyday investors, that opens the door once largely reserved for
                    Hollywood studios and industry insiders, to an opportunity to own a
                    stake in the movies they believe in, and share in their success.
                  </p>
                  <p className="font-semibold text-foreground">
                    But opening access to film investing is the beginning.
                  </p>
                  <p>
                    Our model is designed for investors from the ground up – with clean
                    ownership structures that align incentives with filmmakers and
                    producers (without complex Hollywood recoupment waterfalls),
                    rigorous commercial discipline from start to finish, all delivered with
                    radical transparency.
                  </p>
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
                    This is an opportunity to own part of the company building that future.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-1 w-full">
                <LiquidButton>
                  Join Waitlist <ArrowRight size={18} />
                </LiquidButton>
              </div>
            </div>

            {/* Globe Container */}
            <div className="col-start-1 row-start-1 lg:col-auto lg:row-auto z-0 pointer-events-none relative flex items-center justify-center scale-[2.2] sm:scale-[1.6] md:scale-[1.4] lg:scale-[1.38] origin-center mt-6 lg:mt-0 opacity-40 lg:opacity-100">
              <div className="pointer-events-auto relative w-full max-w-[1000px]">
                <GlobePulse className="h-auto w-full" />
              </div>

              {/* Shadow below the globe */}
              <div
                className="absolute -bottom-5 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/15 blur-2xl"
              />
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section
          id="problem"
          className="relative w-full scroll-mt-24 bg-background px-6 pt-8 pb-16 lg:pt-10 lg:pb-24 lg:px-12 xl:px-24 flex flex-col justify-center"
        >
          <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
            <div className="w-full text-center lg:text-left">
              <h3 className="text-h3 text-destructive mb-4 font-bold tracking-tight">The Problem</h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 cursor-default">
                Film investing has never been built for investors.
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 lg:mt-12">
                {/* Left Side - Points */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0">
                  {/* Point 1 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">01</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      For most people, investing in Hollywood films has been out of reach. For those who are able to participate, it is too often opaque, complicated, and structured around everyone but the investor.
                    </p>
                  </div>
                  {/* Point 2 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">02</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      For decades, opportunities have largely remained gate kept within studios, private networks, and a small circle of Hollywood insiders. Audiences may help make a movie successful, but they rarely have the opportunity to own a stake in it or share in its financial upside.
                    </p>
                  </div>
                  {/* Point 3 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">03</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      At the same time, those who have been able to participate in film investing, face complicated ownership structures, incomplete capitalization, limited visibility, and recoupment waterfalls that leave them waiting to see what, if anything, reaches them.
                    </p>
                  </div>
                  {/* Point 4 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">04</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      Understanding what you own, where your money went, and how you participate in a film’s success shouldn’t be hidden from you.
                    </p>
                  </div>
                </div>

                {/* Right Side - Stacked Video Player */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
                  {/* Back layers for stack effect */}
                  <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
                  <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

                  {/* Main Video frame */}
                  <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    {/* Dummy Picture / Text */}
                    <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                      Video Player
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A New Model Section */}
        <section
          id="new-model"
          className="relative w-full scroll-mt-24 bg-background px-6 py-8 lg:py-10 lg:px-12 xl:px-24 flex flex-col justify-center"
        >
          <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
            {/* Animated Glowing Heading */}
            <div className="w-full text-center lg:text-left">
              <h3 className="text-h3 text-destructive mb-4 font-bold tracking-tight">The BFF Model</h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:drop-shadow-md dark:hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-700 cursor-default">
                A New Model For<br />Film Investing
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left Side - Points */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0">
                  {/* Point 1 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">01</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      Big Film Fund is building a platform designed to make film investing more accessible, and fundamentally, more investor-focused.
                    </p>
                  </div>
                  {/* Point 2 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">02</span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      In addition to opening the door to film investment opportunities for every day investors, BFF has designed a new model around a few clear principles.
                    </p>
                  </div>
                </div>

                {/* Right Side - Stacked Video Player */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
                  {/* Back layers for stack effect */}
                  <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
                  <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

                  {/* Main Video frame */}
                  <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    {/* Dummy Picture / Text */}
                    <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                      Video Player
                    </span>
                  </div>
                </div>
              </div>  </div>
          </div>
        </section>

        {/* Third Section: Three Core Principles */}
        <section
          id="model"
          className="relative w-full scroll-mt-24 bg-background px-6 pt-8 pb-16 lg:pt-10 lg:pb-24 lg:px-12 xl:px-24 flex flex-col justify-center"
        >
          <div className="mx-auto w-full max-w-[1350px] flex flex-col items-center text-center space-y-6">
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              The BFF Model Is Built On<br />Three Core Principles
            </h2>
            <p className="text-subtitle text-muted-foreground max-w-2xl">
              A simpler, more transparent, more aligned way to invest in film
            </p>
          </div>

          <div className="mx-auto w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12 lg:mt-16">
            <div className="w-full h-[550px]">
              <DestinationCard
                imageUrl="/images/31c498dbbf2c4fec7273a3e6a711e6ab.jpg"
                location="Each Film. One Clean Economic Picture."
                href="#"
                themeColor="0 84% 30%"
                description={
                  <ExpandableText
                    shortText="In traditional film finance, a movie can generate revenue while its investors are left."
                    fullText={
                      <>
                        <p>
                          In traditional film finance, a movie can generate revenue while its investors are left wondering where the money went. One film’s earnings may become entangled with other projects, shared company expenses, and layers of participants who are paid before the investor.
                        </p>
                        <p>
                          BFF is designed to preserve a clean line between a film’s performance and its investors’ participation.
                        </p>
                        <p>
                          Each film stands on its own - with its own company, investors, capitalization, budget, accounting, revenue, and distributions.
                        </p>
                        <p>
                          The performance of one film is not mixed with the economics of another. Investors can evaluate a standalone opportunity, understand exactly what they own, and follow how the film’s performance translates into their participation.
                        </p>
                      </>
                    }
                  />
                }
                readMoreContent={{
                  title: "How does BFF keep each film financially separate?",
                  description: (
                    <>
                      <p>
                        Each BFF film is maintained as a separate legal and economic entity. No other BFF film’s costs or losses are charged against it, and its capital, expenses, revenue, reporting, and distributions remain attached only to that project.
                      </p>
                      <p>
                        This avoids cross-collateralization between BFF films and preserves a clean financial picture for each investment.
                      </p>
                    </>
                  )
                }}
              />
            </div>
            <div className="w-full h-[550px]">
              <DestinationCard
                imageUrl="/images/1133d95d2963819575c96157e798a15b.jpg"
                location="No Back of the Line."
                flag=""
                stats=""
                href="#"
                themeColor="250 50% 30%"
                description={
                  <ExpandableText
                    shortText="In traditional film finance, not everyone shares in a movie’s revenue at the same time."
                    fullText={
                      <>
                        <p>
                          In traditional film finance, not everyone shares in a movie’s revenue at the same time. The money is distributed in a predefined order, and investors often have to wait while others are paid first.
                        </p>
                        <p>
                          BFF is designed differently.
                        </p>
                        <p>
                          When distributable revenue is received, investors, filmmakers, and BFF participate according to clearly defined percentages — without a complex, sequential Hollywood recoupment waterfall.
                        </p>
                      </>
                    }
                  />
                }
                readMoreContent={{
                  title: "What is a recoupment waterfall?",
                  description: (
                    <>
                      <p>
                        A recoupment waterfall establishes the order in which a film’s revenue is allocated among distributors, sales agents, investors, producers, and other participants.
                      </p>
                      <p>
                        These structures often include multiple tiers of fees, expenses, repayment priorities, and negotiated positions. A party at a later tier generally does not participate until the requirements of the tiers ahead of it have been satisfied.
                      </p>
                      <p>
                        BFF does not use a traditional sequential recoupment waterfall among its film participants. Once distributable revenue reaches the film entity, investors, filmmakers, and BFF share in the same revenue event according to their respective participation percentages.
                      </p>
                      <p>
                        Traditional waterfalls ask who gets paid first. BFF defines how everyone participates together.
                      </p>
                    </>
                  )
                }}
              />
            </div>
            <div className="w-full h-[550px]">
              <DestinationCard
                imageUrl="/images/79ed465a0b4a8162754b309acb14585d.jpg"
                location="Commercial Discipline,    Built In"
                flag=""
                stats=""
                href="#"
                themeColor="150 50% 25%"
                description={
                  <ExpandableText
                    shortText="At BFF, commercial discipline isn’t a checkpoint. It’s a design principle."
                    fullText={
                      <>
                        <p>
                          At BFF, commercial discipline isn’t a checkpoint. It’s a design principle.
                        </p>
                        <p>
                          From the first review, the film’s creative ambition, audience, path to market, capitalization, and investor economics are evaluated as one integrated plan.
                        </p>
                        <p>
                          That discipline extends to how each film is funded. Before production begins, every BFF project must be fully capitalized for its anticipated journey to market — not simply for the cost of getting the film made.
                        </p>
                        <p>
                          A project moves forward only when BFF believes it can be responsibly financed, professionally executed, and brought to market within a credible commercial framework.
                        </p>
                        <p>
                          We don’t finance a production and hope a business emerges. We finance a plan designed to reach an audience.
                        </p>
                      </>
                    }
                  />
                }
                readMoreContent={{
                  title: "What does “fully capitalized” mean?",
                  description: (
                    <>
                      <p>
                        Traditional film financing often centers on the cost of getting a movie made, leaving marketing, delivery, distribution, and other commercialization needs to be solved later.
                      </p>
                      <p>
                        BFF takes a more complete approach by fully capitalizing every project around its anticipated production AND commercialization requirements - not simply the cost of getting the film made.
                      </p>
                      <p>
                        By accounting upfront for the resources required to complete, deliver, market, and distribute the film, we reduce the risk of reaching the end of production without a funded path to an audience.
                      </p>
                      <p>
                        It’s not only a production budget. It’s a plan for the full path to the audience.
                      </p>
                    </>
                  )
                }}
              />
            </div>
          </div>
        </section>

        {/* The Platform Section */}
        <section
          id="platform"
          className="relative w-full scroll-mt-24 bg-background px-6 pt-8 pb-16 lg:pt-10 lg:pb-24 lg:px-12 xl:px-24 flex flex-col justify-center"
        >
          <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
            <div className="w-full text-center lg:text-left">
              <h3 className="text-h3 text-destructive mb-4 font-bold tracking-tight">THE PLATFORM</h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 cursor-default">
                Discover.<br />Invest.<br />Follow the Story.
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 lg:mt-12">
                {/* Left Side - Points */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0">
                  {/* Point 1 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2"></span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      Big Film Fund brings the film investment experience together in one place.
                    </p>
                  </div>
                  {/* Point 2 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2"></span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      Through the BFF platform, investors can discover a curated selection of films, explore the creative and commercial case behind each project, and choose the opportunities they believe in.
                    </p>
                  </div>
                  {/* Point 3 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2"></span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      When investors participate in a film offering, their capital is pooled specifically for that project. They can invest in one film or build a personal portfolio across multiple standalone opportunities over time.
                    </p>
                  </div>
                  {/* Point 4 */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2"></span>
                    <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      And the experience doesn’t end when the investment is made. Through the BFF dashboard, investors can follow each film’s progress from financing through production, release, and revenue—with access to project milestones, investor updates, financial reporting, and distributions.
                    </p>
                  </div>
                  {/* Point 5 (Red Text) */}
                  <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                    <p className="text-body-text font-medium text-destructive transition-colors duration-300">
                      Choose the films. Follow the journey. See how your investment performs.
                    </p>
                  </div>
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
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <FUIBentoGridDark />

        {/* Gallery Section */}
        <section className="relative w-full bg-background px-6 py-16 lg:py-24 lg:px-12 xl:px-24 flex lg:hidden flex-col justify-center items-center">
          <div className="mx-auto w-full max-w-[1350px]">
            <AccordionGallery
              items={[
                {
                  image: '/Images 2/Discover Curated Films.jpg',
                  label: 'Discover Curated Films',
                  link: '#',
                  description: <><span className="font-bold"></span><br />Find projects that have passed BFF’s review process.</>
                },
                {
                  image: '/Images 2/Explore and Invest.jpg',
                  label: 'Explore & Invest',
                  link: '#',
                  description: 'Understand the opportunity and choose what you believe in.'
                },
                {
                  image: '/Images 2/Follow The Journey.jpg',
                  label: 'Follow the Journey',
                  link: '#',
                  description: 'Track progress from financing through release.'
                },
                {
                  image: '/Images 2/Build Your Portfolio.jpg',
                  label: 'Build Your Portfolio',
                  link: '#',
                  description: 'Manage multiple standalone film investments in one place.'
                }
              ]}
              defaultIndex={2}
              expandRatio={0.52}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#060010"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              height={460}
              gap={7}
              radius={16}
              orientation="horizontal"
            />
          </div>
        </section>

        {/* Opportunity Section */}
        <OpportunitySection />

        {/* Timeline Section */}
        <section className="relative w-full bg-background pb-12 lg:pb-16 pt-0 -mt-12 px-6 lg:px-12 xl:px-24 flex justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left side text */}
            <div className="flex flex-col space-y-6 lg:pr-8 z-10 text-foreground order-2 lg:order-1">
              <h3 className="text-lg font-bold tracking-tight uppercase">FILM IS NEXT</h3>
              <div className="space-y-5 text-sm text-muted-foreground leading-relaxed font-medium">
                <p>
                  Bringing film investing into the modern era requires more than putting traditional film deals online.
                  It requires investor-focused structures, disciplined commercial evaluation, a repeatable project pipeline, and a platform that brings the entire investment experience together.
                </p>
                <p>
                  That is the system BFF is building.
                </p>
              </div>
            </div>

            {/* Right side orbital - Fixed Height */}
            <div className="relative w-full h-[500px] flex items-center justify-center order-1 lg:order-2">
              <RadialOrbitalTimeline timelineData={timelineData} />
            </div>

          </div>
        </section>

        {/* Placeholder Section */}
        <section className="relative w-full min-h-[50vh] bg-background py-24 flex items-center justify-center border-t border-border/20">
          <div className="text-center text-muted-foreground opacity-50">
            <h2 className="text-2xl font-bold mb-2">New Section Area</h2>
            <p className="text-sm">Blank placeholder ready for new content</p>
          </div>
        </section>
      </main>
    </>
  );
}
