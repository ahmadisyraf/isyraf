import { format } from "date-fns";
import BoxReveal from "../ui/box-reveal";

interface EducationProps {
  id?: string | null | undefined;
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  cgpa: number;
  description?: string | null | undefined;
}

export default function Education({
  education,
}: {
  education: EducationProps[] | null | undefined;
}) {
  return (
    <div className="space-y-5">
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <h5 className="text-3xl font-semibold">Education</h5>
      </BoxReveal>
      <div className="space-y-5">
        {education &&
          education.map((d, index) => (
            <div key={index} className="space-y-1">
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-lg font-semibold">{d.course}</p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-sm text-muted-foreground">{d.institution}</p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(d.startDate), "MMMM yyyy")} -{" "}
                  {format(new Date(d.endDate), "MMMM yyyy")}
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p>{d.description}</p>
              </BoxReveal>
            </div>
          ))}
      </div>
    </div>
  );
}
