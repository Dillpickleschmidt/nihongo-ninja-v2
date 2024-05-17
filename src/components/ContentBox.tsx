"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { Button } from "./ui/button";

type ContentBoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dialogVariants> & {
    children: React.ReactNode;
    nextButton?: React.ReactNode;
    showProgressBar?: boolean;
    backgroundImage?: string;
    backgroundImageSize?: string;
    backgroundImageOpacity?: number;
    showAlertOnClose?: boolean;
  };

export default function ContentBox({
  children,
  variant,
  className,
  nextButton = <Button link="/learn">Next Lesson {"->"}</Button>,
  showProgressBar = true,
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
}: ContentBoxProps) {
  const contentScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: contentScrollRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        ref={contentScrollRef}
        className={cn(dialogVariants({ variant, className }))}
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
      >
        {showProgressBar && (
          <m.div
            style={{ scaleX: scaleX }}
            className="sticky top-[-64.5px] mt-[-64.5px] mb-[64.5px] h-1 w-full origin-left bg-green-400"
          ></m.div>
        )}
        {children}
        <div className="mt-24 mx-12 flex flex-row justify-end">
          {nextButton}
        </div>
      </div>
    </div>
  );
}

const dialogVariants = cva(
  "relative w-full h-full py-16 bg-background border-[4px] border-black rounded-[50px] shadow-xl overflow-y-scroll scrollbar:hidden",
  {
    variants: {
      variant: {
        fullscreen: "w-full h-full rounded-none border-none",
        reading: "w-[45%] h-[99%]",
      },
    },
    defaultVariants: {
      variant: "reading",
    },
  }
);
