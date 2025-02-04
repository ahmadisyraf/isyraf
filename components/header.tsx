"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import GridPattern from "./ui/grid-pattern";
import { TextScramble } from "./ui/text-scramble";
import { TextLoop } from "./ui/text-loop";
import { ChevronRight } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="">
      <div className="space-y-7 z-50">
        <div className="space-y-3">
          <h1 className="text-6xl font-semibold flex flex-row items-center flex-wrap gap-2">
            <span>Hello</span>
            <span>I&apos;m</span>
            <span>
              <TextScramble>Isyraf</TextScramble>
            </span>
            <BlurFade delay={0.9} className="animate-wave">
              <span>👋</span>
            </BlurFade>
          </h1>
          <h5 className="text-xl text-muted-foreground leading-7 font-normal">
            I&apos;m a passionate Software Engineer based in Pahang, Malaysia.
            Currently, I&apos;m focused on building{" "}
            <TextLoop interval={2}>
              <span>web application</span>
              <span>mobile application</span>
            </TextLoop>
          </h5>
        </div>
        <Button
          size={"lg"}
          onClick={() => router.push("mailto:isyraffaishal@yahoo.com")}
        >
          Contact me
          <ChevronRight size={18} className="ml-2" />
        </Button>
      </div>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
        )}
      />
    </div>
  );
}
