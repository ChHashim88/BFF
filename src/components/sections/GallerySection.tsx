"use client";

import AccordionGallery from "@/components/ui/AccordionGallery";

export function GallerySection() {
  return (
    <section className="relative w-full bg-background px-6 py-8 lg:py-12 lg:px-12 xl:px-24 flex flex-col justify-center items-center">
      <div className="mx-auto w-full max-w-[1350px]">
        <AccordionGallery
          items={[
            {
              image: "/Images 2/Discover Curated Films.jpg",
              label: "Discover Curated Films",
              description:
                "Find projects that have passed BFF’s review process.",
            },
            {
              image: "/Images 2/Explore and Invest.jpg",
              label: "Explore & Invest",
              description:
                "Understand the opportunity and choose what you believe in.",
            },
            {
              image: "/Images 2/Follow The Journey.jpg",
              label: "Follow the Journey",
              description: "Track progress from financing through release.",
            },
            {
              image: "/Images 2/Build Your Portfolio.jpg",
              label: "Build Your Portfolio",
              description:
                "Manage multiple standalone film investments in one place.",
            },
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
  );
}
