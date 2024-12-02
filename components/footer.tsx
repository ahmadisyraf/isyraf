import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialMedia {
  platform: "twitter" | "github" | "linkedin" | "email";
  url: string;
}

interface FooterProps {
  socialMedia: SocialMedia[];
}

const platformIcons = {
  twitter: { label: "Twitter", icon: <Twitter /> },
  github: { label: "Github", icon: <Github /> },
  email: { label: "Email", icon: <Mail /> },
  linkedin: { label: "LinkedIn", icon: <Linkedin /> },
};

export default function Footer({ socialMedia }: FooterProps) {
  return (
    <div className="space-y-3">
      <p className="text-muted-foreground text-sm">
        Built by Isyraf using Next + Typescript and Payload CMS
      </p>
      <div className="flex flex-row items-center gap-4">
        {socialMedia.map(({ platform, url }) => {
          const { label, icon } = platformIcons[platform];
          if (!label || !icon) return null;

          return (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontSize: "1.5rem" }}>{icon}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
