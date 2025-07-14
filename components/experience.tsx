import { format } from "date-fns";
import Image from "next/image";

const experiences = [
  {
    imageURL: "/deloitte.jpeg",
    position:
      "Technology Analyst @ Deloitte Consulting SEA - Innovation & Cloud Development Centre (ICDC)",
    startDate: "2025-06-9",
    endDate: "Present",
    description: "Developed General Insurance (GI) system for Insurance Company",
  },
  {
    imageURL: "/deloitte.jpeg",
    position:
      "Technology Intern @ Deloitte Consulting SEA - Innovation & Cloud Development Centre (ICDC)",
    startDate: "2024-08-01",
    endDate: "2025-01-31",
    description:
      "Developed a task management system to enhance team collaboration and project efficiency.",
  },
  {
    imageURL: "/crib.jpg",
    position: "Part-Time Software Engineer @ My Crib Sdn. Bhd.",
    startDate: "2022-01-01",
    endDate: "2024-04-30",
    description:
      "Developed a real estate platform for buyers, investors, and realtors, a travel web app for seamless vacation booking, and a mobile app version for enhanced accessibility.",
  },
  {
    imageURL: "/crib.jpg",
    position: "Front-End Intern @ My Crib Sdn. Bhd.",
    startDate: "2021-08-01",
    endDate: "2022-01-31",
    description:
      "Developed a real estate marketplace with analytical tools and developed a tender management web app to streamline the bidding process.",
  },
];

export default function Experience() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold leading-10">My experiences</h2>

      <div className="space-y-5">
        {experiences &&
          experiences.map((d, index) => (
            <div key={index} className="space-y-1">
              <div className="w-fit overflow-hidden mb-2 rounded-md">
                <Image src={d.imageURL} width={50} height={50} alt={""} />
              </div>
              <p className="text-lg font-semibold">{d.position}</p>
              <p className="text-sm text-muted-foreground font-medium">
                {format(new Date(d.startDate), "MMMM yyyy")} -{" "}
                {d.endDate == "Present"
                  ? d.endDate
                  : format(new Date(d.endDate), "MMMM yyyy")}
              </p>
              <p className="text-base py-1 text-muted-foreground leading-normal">
                {d.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
