"use client"

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="text-center w-full space-y-4">
        <h2 className="text-4xl font-semibold">Get in Touch</h2>
        <p className="text-lg text-muted-foreground">
          Have questions, ideas, or just want to connect? Feel free to reach
          out—I&apos;d love to hear from you!
        </p>
        <Button
          size={"lg"}
          onClick={() => router.push("mailto:isyraffaishal@yahoo.com")}
        >
          Contact me
          <ChevronRight size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
