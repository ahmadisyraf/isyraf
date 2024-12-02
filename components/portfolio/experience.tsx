import { format } from "date-fns";
import BoxReveal from "../ui/box-reveal";

interface ExperienceProps {
  id?: string | null | undefined;
  position: string;
  startDate: string;
  endDate: string;
  description?: string | null | undefined;
}

export default function Experience({
  experience,
}: {
  experience: ExperienceProps[] | null | undefined;
}) {
  return (
    <div className="space-y-8">
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <h5 className="text-3xl font-semibold">Experience</h5>
      </BoxReveal>
      <div className="space-y-5">
        {experience &&
          experience.map((d, index) => (
            <div key={index} className="space-y-1">
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-lg font-semibold">{d.position}</p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(d.startDate), "MMMM yyyy")} -{" "}
                  {format(new Date(d.endDate), "MMMM yyyy")}
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-base py-1">{d.description}</p>
              </BoxReveal>
            </div>
          ))}
      </div>
    </div>
  );
}
