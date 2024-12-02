import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import BoxReveal from "../ui/box-reveal";
import BlurFade from "../ui/blur-fade";

interface TechStack {
  name: string;
}

interface ProjectProps {
  name: string;
  description?: string | null | undefined;
  techStack: TechStack[];
}

export default function Project({
  project,
}: {
  project: ProjectProps[] | null | undefined;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <BoxReveal boxColor={"#000000"} duration={0.5}>
          <h5 className="text-3xl font-semibold">
            Project I&apos;ve been involved in
          </h5>
        </BoxReveal>

        <BoxReveal boxColor={"#000000"} duration={0.5}>
          <p className="text-lg text-muted-foreground">
            I&apos;ve been involved in various projects during my part-time job,
            internship, and through personal initiatives. Some projects are no
            longer available, while others are still actively in development.
          </p>
        </BoxReveal>
      </div>

      <div className="space-y-5">
        {project &&
          project.map((d, index) => (
            <BlurFade key={index} delay={0.25} inView>
              <Card className="space-y-3 p-5 relative">
                <div className="space-y-1">
                  <SquareArrowOutUpRight
                    size={17}
                    className="absolute right-7"
                  />
                  <p className="text-lg font-semibold">{d.name}</p>
                  <p className="text-base py-1">{d.description}</p>
                </div>
                <div className="flex flex-row items-center gap-1 flex-wrap">
                  {d.techStack.map((t) => (
                    <Badge key={t.name}>{t.name}</Badge>
                  ))}
                </div>
              </Card>
            </BlurFade>
          ))}
      </div>
    </div>
  );
}
