import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import GridPattern from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  description: string;
  image: string | null | undefined;
  email: string | undefined;
}

export default function Header({
  title,
  description,
  image,
  email,
}: HeaderProps) {
  return (
    <div className="">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <BlurFade delay={0.25 * 2} inView>
        <div className="space-y-5">
          {image && (
            <Image
              src={image}
              alt="myprofile"
              width={110}
              height={110}
              priority={true}
              className="rounded-full"
            />
          )}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h3 className="text-xl text-muted-foreground">{description}</h3>
          </div>
          <div className="flex flex-row items-center space-x-2">
            {email && (
              <Link href={`mailto:${email}`}>
                <Button>
                  Contact me <ChevronRight />
                </Button>
              </Link>
            )}
            <Button variant={"outline"} disabled>
              Go to my notes
            </Button>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
