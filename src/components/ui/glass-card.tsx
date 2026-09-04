"use client";

import * as React from "react";
import { Instagram, Twitter, Github, ChevronDown } from "lucide-react";

const ULogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29.667 31.69"
    {...props}
  >
    <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" />
    <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
    <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  showViewMore?: boolean;
  titleClassName?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, showViewMore = false, titleClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[300px] w-full max-w-[290px] mx-auto [perspective:1000px] ${className || ""}`}
        {...props}
      >
        <div className="relative h-full rounded-[40px] sm:rounded-[50px] bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/10 shadow-xl transition-all duration-300 ease-out transform-gpu will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:[box-shadow:rgba(0,0,0,0.12)_20px_35px_20px_-25px,rgba(0,0,0,0.04)_0px_20px_25px_0px] dark:group-hover:[box-shadow:rgba(255,255,255,0.04)_20px_35px_20px_-25px,rgba(255,255,255,0.02)_0px_20px_25px_0px] group-hover:[transform:rotate3d(1,1,0,25deg)]">
          <div className="absolute inset-2 rounded-[45px] sm:rounded-[55px] border-b border-l border-black/5 dark:border-white/20 bg-gradient-to-b from-black/[0.03] dark:from-white/20 to-transparent dark:to-white/5 [transform-style:preserve-3d] [transform:translate3d(0,0,25px)] pointer-events-none"></div>
          
          <div className="absolute inset-0 [transform:translate3d(0,0,26px)] pointer-events-none">
            <div className="px-6 pt-[75px] pb-0">
              <span className={`block text-lg sm:text-xl font-black leading-tight ${titleClassName || "text-black dark:text-white"}`}>
                {title || "Monochrome"}
              </span>
              <span className="mt-3 block text-[13px] sm:text-sm text-zinc-600 dark:text-zinc-300 leading-snug line-clamp-4">
                {description || "Create, share, and use beautiful custom elements made with CSS."}
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              {[Instagram, Twitter, Github].map((Icon, index) => (
                <button
                  key={index}
                  className="group/social grid h-[30px] w-[30px] place-content-center rounded-full border border-destructive/30 bg-destructive/5 dark:bg-zinc-900 shadow-sm transition-all duration-200 ease-out group-hover:[transform:translate3d(0,0,40px)] hover:bg-destructive"
                >
                  <Icon className="h-4 w-4 stroke-destructive group-hover/social:stroke-white transition-colors" />
                </button>
              ))}
            </div>
            {showViewMore && (
              <div className="flex w-2/5 cursor-pointer items-center justify-end transition-transform duration-200 ease-out hover:[transform:translate3d(0,0,10px)]">
                <button className="border-none bg-none text-xs font-bold text-black dark:text-white">
                  View more
                </button>
                <ChevronDown className="h-4 w-4 stroke-black dark:stroke-white" strokeWidth={3} />
              </div>
            )}
          </div>
          
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none">
            {[
              { size: "170px", pos: "8px", z: "20px" },
              { size: "140px", pos: "10px", z: "40px" },
              { size: "110px", pos: "17px", z: "60px" },
              { size: "80px", pos: "23px", z: "80px" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/10 transition-transform duration-300 ease-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                }}
              ></div>
            ))}
            <div
              className="absolute grid aspect-square w-[50px] place-content-center rounded-full bg-white dark:bg-zinc-900 shadow-md transition-transform duration-300 ease-out [transform:translate3d(0,0,100px)] group-hover:[transform:translate3d(0,0,120px)] border border-gray-100 dark:border-white/20"
              style={{ top: "30px", right: "30px" }}
            >
              <span className="text-destructive font-black text-sm tracking-tight">BFF</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
