import { format } from "date-fns";
import BoxReveal from "../ui/box-reveal";

interface AchievementProps {
  title: string;
  date: string;
  description?: string | null | undefined;
}

export default function Achievement({
  achievement,
}: {
  achievement: AchievementProps[] | null | undefined;
}) {
  return (
    <div className="space-y-5">
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <h5 className="text-3xl font-semibold">Achievement</h5>
      </BoxReveal>
      <div className="space-y-5">
        {achievement &&
          achievement.map((d, index) => (
            <div key={index} className="space-y-1">
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-lg font-semibold">{d.title}</p>
              </BoxReveal>
              <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(d.date), "MMMM yyyy")}
                </p>
              </BoxReveal>
              <p>{d.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
