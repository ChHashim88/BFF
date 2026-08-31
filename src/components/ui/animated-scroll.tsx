import React, { useState, useEffect, useRef } from "react";

const pages = [
  {
    leftBgImage: "/Images 3/44f080324d08a880500d7d5e0efe4a5d.jpg",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: "Welcome Aboard!",
      description: "Hold on to your mouse, things are about to get wild!",
    },
  },
  {
    leftBgImage: null,
    rightBgImage: "/Images 3/cd6464dd9316fd785f3fbe84fcda9c06.jpg",
    leftContent: {
      heading: "Page 2",
      description: "Spoiler alert: it’s still empty. Keep that scroll finger limber!",
    },
    rightContent: null,
  },
  {
    leftBgImage: "/Images 3/572ddc73558974f2cd0ede5822489166.jpg",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: "Page 3",
      description: "Plot twist: You’ve reached the midpoint. Bravo!",
    },
  },
  {
    leftBgImage:
      "https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: "Epic Finale!",
      description: <>:)</>,
    },
  },
];

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage((p) => p + 1);
  };

  const handleWheel = (e: WheelEvent) => {
    if (scrolling.current) return;
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (scrolling.current) return;
    if (e.key === "ArrowUp") {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === "ArrowDown") {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="relative overflow-hidden h-screen bg-black w-full">
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = "translateY(-100%)";
        const downOff = "translateY(100%)";
        const leftTrans = isActive ? "translateY(0)" : downOff;
        const rightTrans = isActive ? "translateY(0)" : upOff;

        return (
          <div key={idx} className="absolute inset-0 z-0">
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.leftBgImage ? `url("${page.leftBgImage}")` : undefined,
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8">
                  {page.leftContent && (
                    <>
                      <h2 className="text-2xl uppercase mb-4 text-center">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-lg text-center">{page.leftContent.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.rightBgImage ? `url("${page.rightBgImage}")` : undefined,
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8">
                  {page.rightContent && (
                    <>
                      <h2 className="text-2xl uppercase mb-4 text-center">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === "string" ? (
                        <p className="text-lg text-center">{page.rightContent.description}</p>
                      ) : (
                        <div className="text-lg text-center">{page.rightContent.description}</div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
