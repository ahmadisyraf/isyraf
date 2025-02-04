import Achievement from "@/components/achievement";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <div className="lg:px-80 md:px-40 px-10 space-y-32 py-32">
      <Header />
      <Experience />
      <Tools />
      <Achievement />
      <Contact />
    </div>
  );
}
