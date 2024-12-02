import { Portfolio } from "@/payload-types";
import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import Achievement from "./achievement";
import Project from "./project";
import Footer from "../footer";

export default function PortfolioScreen(data: Portfolio) {
  return (
    <div className="lg:px-80 md:px-40 px-10 space-y-20 py-20">
      <Header
        title={data.title}
        description={data.description}
        image={data.url}
        email={
          data.socialMedia.find((social) => social.platform === "email")?.url
        }
      />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Achievement achievement={data.achievement} />
      <Project project={data.project} />
      <Footer socialMedia={data.socialMedia} />
    </div>
  );
}
