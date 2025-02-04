import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

const tools = [
  { src: "/react.png", alt: "React logo" },
  { src: "/next.svg", alt: "Next.js logo" },
  { src: "/hono.png", alt: "Hono logo" },
  { src: "/expo.png", alt: "Expo logo" },
  { src: "/redux.png", alt: "Redux logo" },
  { src: "/zustand.png", alt: "Zustand logo" },
  { src: "/mongo.png", alt: "MongoDB logo" },
  { src: "/postgre.png", alt: "PostgreSQL logo" },
  { src: "/docker.png", alt: "Docker logo" },
  { src: "/github.png", alt: "Github logo" },
  { src: "/vercel.png", alt: "Vercel logo" },
];

export default function Tools() {
  return (
    <div className="space-y-5 w-full">
      <h2 className="text-3xl font-semibold leading-10">
        Here are the tool that I&apos;m using
      </h2>
      <InfiniteSlider duration={20} gap={40} reverse>
        {tools.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[150px] w-[150px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
