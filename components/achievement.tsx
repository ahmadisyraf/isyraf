import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const achievements = [
  // "Partnership with Trinovik Labs Sdn. Bhd.",
  "Gold Award Undergraduate Project",
  "Dean List Semester I Academic Session 2022/2023",
  "Pengarah Terbaik Drama Komsas Negeri Pahang",
];

export default function Achievement() {
  return (
    <div className="space-y-10">
      <h2 className="font-semibold text-3xl">Here are my achievements</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-14">
        {achievements.map((achievement, index) => (
          <BlurFade
            key={index}
            delay={0.25 * index}
            className={`flex flex-col ${
              index == 2 && "lg:col-span-2 md:col-span-2 col-span-1"
            } items-center space-y-4 text-center`}
            inView
          >
            <div className="flex items-center space-x-2 max-w-sm">
              <Image
                src="/award-left.svg"
                width={"60"}
                height={"60"}
                alt="Award left"
              />
              <p className="font-semibold max-w-xs">{achievement}</p>
              <Image
                src="/award-right.svg"
                width={"60"}
                height={"60"}
                alt="Award right"
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
