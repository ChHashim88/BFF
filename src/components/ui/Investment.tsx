"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Clapperboard,
  Users,
  TrendingUp,
  Star,
  Target,
  Zap,
  Network,
  DollarSign,
  Rocket,
  ClipboardList,
  ShieldCheck,
  Clock3,
  Info,
  Settings,
  ArrowRight,
  BarChart3,
} from "lucide-react";

import "./Investment.css";

const RED = "#CD0007";

function IconCircle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`icon-circle ${className}`}>{children}</div>;
}

function InfoCard({ icon, children, bold = false }: { icon: React.ReactNode; children: React.ReactNode; bold?: boolean }) {
  return (
    <div className="investment-info-card">
      <IconCircle>{icon}</IconCircle>
      <div className={bold ? "info-card-text bold" : "info-card-text"}>
        {children}
      </div>
    </div>
  );
}

function EnableItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="enable-item">
      <div className="enable-icon">{icon}</div>
      <span>{children}</span>
    </div>
  );
}

export default function Investment() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setProgress(96);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="investment"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px] investment-page !p-0">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      {/* 
      <nav className="investment-nav">

        <div className="bff-logo">
          BFF
        </div>

        <div className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#problem">The Problem</a>
          <a href="#model">The BFF Model</a>
          <a href="#platform">The Platform</a>
          <a href="#opportunity">The Opportunity</a>
          <a href="#money">How We Make Money</a>
          <a href="#execute">Built to Execute</a>
          <a href="#founders">Founder's Club</a>
          <a href="#progress">Progress to Date</a>
          <a href="#next">What Comes Next</a>

          <a
            href="#investment"
            className="active"
          >
            The Investment
          </a>
        </div>

        <div className="nav-actions">
          <button className="settings-button" aria-label="Settings">
            <Settings size={15} strokeWidth={1.8} />
          </button>

          <button className="waitlist-button">
            Join Waitlist
          </button>
        </div>

      </nav> 
      */}


      {/* =====================================================
          HERO / INVESTMENT INTRO
      ===================================================== */}
      <section className="investment-hero" id="investment">

        {/* LEFT */}
        <div className="investment-left">

          <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
            THE INVESTMENT
          </h3>

          <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
            Own Part of the Company
            <br />
            Building <span className="text-destructive">What Comes Next.</span>
          </h2>


          <div className="investment-info-list">

            <InfoCard
              icon={<Building2 size={24} strokeWidth={1.8} />}
            >
              This offering is an opportunity to purchase shares in Big
              Film Fund, Inc. - the company building the model, platform,
              and operating system described on this page.
            </InfoCard>


            <InfoCard
              icon={<Clapperboard size={24} strokeWidth={1.8} className="text-destructive" />}
              bold
            >
              <span className="text-destructive font-bold">
                You are not investing in a single movie.
              </span>
            </InfoCard>


            <InfoCard
              icon={<Users size={24} strokeWidth={1.8} />}
            >
              You are investing in the company designed to source,
              evaluate, structure, finance, support, and participate in a
              growing pipeline of standalone films.
            </InfoCard>


            <InfoCard
              icon={<TrendingUp size={24} strokeWidth={1.8} />}
            >
              Future film investment opportunities are expected to be
              offered separately through individual film entities. Each
              will have its own investors, capitalization, economics,
              reporting, revenue, and performance.
            </InfoCard>


            <InfoCard
              icon={<Star size={24} strokeWidth={1.8} />}
            >
              Big Film Fund, Inc. is the company bringing those
              opportunities together through one platform.
            </InfoCard>

          </div>
        </div>


        {/* =====================================================
            RIGHT — SELECTION FRAMEWORK
        ===================================================== */}
        <div className="framework-card">

          <div className="framework-header">

            <IconCircle>
              <Target size={25} strokeWidth={1.8} />
            </IconCircle>

            <h2>
              Selection Framework
            </h2>

          </div>


          <div className="framework-status">

            <span className="complete-badge">
              COMPLETE
            </span>

            <span className="phase">
              Phase 2
            </span>

          </div>


          <h3>
            Selection Framework
          </h3>

          <p className="framework-description">
            BFF has developed a structured methodology for evaluating
            projects across creative, audience, commercial, financial,
            production, and distribution criteria.
          </p>


          <div className="framework-divider" />


          {/* ENERGY */}
          <div
            className="energy-section"
            ref={progressRef}
          >

            <div className="energy-header">

              <div className="flex items-center gap-[7px]">
                <Zap
                  size={17}
                  fill={RED}
                  strokeWidth={2}
                />

                <span>
                  Energy Level
                </span>
              </div>

              <strong>
                96%
              </strong>

            </div>


            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>


          {/* CONNECTED NODES */}
          <div className="connected-heading mt-[21px]">

            <Network size={14} />

            <span>
              CONNECTED NODES
            </span>

          </div>


          <div className="node-list">

            <button>
              Pipeline Development
              <ArrowRight size={17} />
            </button>

            <button>
              Platform Design
              <ArrowRight size={17} />
            </button>

          </div>


          <div className="framework-divider" />


          {/* FRAMEWORK ITEMS */}
          <div className="framework-items">

            <div className="framework-item">

              <IconCircle>
                <Target size={21} />
              </IconCircle>

              <span>
                Pipeline
                <br />
                Development
              </span>

            </div>


            <div className="framework-item">

              <IconCircle>
                <Clapperboard size={21} />
              </IconCircle>

              <span>
                Platform
                <br />
                Design
              </span>

            </div>


            <div className="framework-item">

              <IconCircle>
                <Users size={21} />
              </IconCircle>

              <span>
                Industry
                <br />
                Network
              </span>

            </div>


            <div className="framework-item">

              <IconCircle>
                <DollarSign size={21} />
              </IconCircle>

              <span>
                Financial
                <br />
                Model
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT THIS ROUND / WHY NOW
      ===================================================== */}
      <section className="round-section">


        {/* WHAT THIS ROUND ENABLES */}
        <div className="round-card enables-card">

          <div className="round-heading">

            <div className="round-heading-icon">
              <BarChart3 size={24} />
            </div>

            <h2>
              What This Round Enables
            </h2>

          </div>


          <p className="round-description">
            Capital raised through this offering will support BFF's
            transition from development toward live operation, including:
          </p>


          <div className="enable-grid">

            <EnableItem
              icon={<Rocket size={21} />}
            >
              Advancing the platform and
              initial investor experience
              toward launch
            </EnableItem>


            <EnableItem
              icon={<ClipboardList size={21} />}
            >
              Structuring and preparing
              the first film investment
              opportunities
            </EnableItem>


            <EnableItem
              icon={<Clapperboard size={21} />}
            >
              Expanding and
              progressing the initial
              project pipeline
            </EnableItem>


            <EnableItem
              icon={<Users size={21} />}
            >
              Building the operational
              capacity to evaluate and
              support films
            </EnableItem>


            <EnableItem
              icon={<Users size={21} />}
            >
              Growing the founding
              investor community
            </EnableItem>


            <EnableItem
              icon={<ShieldCheck size={21} />}
            >
              Establishing the foundation
              for recurring platform activity
              and revenue
            </EnableItem>

          </div>

        </div>


        {/* WHY NOW */}
        <div className="round-card why-card">

          <div className="round-heading">

            <IconCircle>
              <Clock3 size={24} />
            </IconCircle>

            <h2>
              Why Now?
            </h2>

          </div>


          <p>
            BFF has established its investor-focused model, developed its
            proprietary evaluation methodology, assembled industry leadership
            and relationships, identified an initial project pipeline, and defined
            the platform experience.
          </p>


          <strong className="execution-text">
            The next step is execution.
          </strong>


          <p>
            This round is intended to help bring the platform
            to market, prepare the first film offerings, and begin
            the first operating cycle of Big Film Fund.
          </p>

        </div>

      </section>


      {/* =====================================================
          BFF VS FILM
      ===================================================== */}
      <section className="difference-card">

        <div className="difference-heading">

          <IconCircle>
            <Info size={24} />
          </IconCircle>

          <h2>
            What is the difference between investing in BFF and investing in a film?
          </h2>

        </div>


        <div className="difference-content">


          {/* LEFT */}
          <div className="difference-item">

            <IconCircle>
              <Building2 size={24} />
            </IconCircle>

            <p>
              Investors in this offering are purchasing
              shares in Big Film Fund, Inc. They do not
              automatically receive a direct ownership
              interest in any individual film.
            </p>

          </div>


          <div className="difference-divider">
            <span />
          </div>


          {/* RIGHT */}
          <div className="difference-item">

            <IconCircle>
              <Clapperboard size={24} />
            </IconCircle>

            <p>
              Future film offerings are expected to
              provide separate opportunities to invest
              in specific film entities through the
              BFF platform.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="final-cta">

        <div className="cta-icon">
          <Clapperboard
            size={32}
            strokeWidth={1.7}
          />
        </div>


        <div className="cta-content">

          <p>
            Today, you can own part of the company building
            a future where more people can own part of
            the movies they believe in.
          </p>

          <h2>
            <span>Join Us</span> at the Beginning.
          </h2>

        </div>


        <div className="cinematic-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

      </section>
    </div>
    </section>
  );
}
