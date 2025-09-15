import { Button } from "./ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github,
  LucideIcon 
} from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

interface SocialMediaLinksProps {
  links?: SocialLink[];
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  direction?: "horizontal" | "vertical";
}

const defaultLinks: SocialLink[] = [
  { platform: "Facebook", url: "#", icon: Facebook },
  { platform: "Twitter", url: "#", icon: Twitter },
  { platform: "Instagram", url: "#", icon: Instagram },
  { platform: "LinkedIn", url: "#", icon: Linkedin },
  { platform: "YouTube", url: "#", icon: Youtube },
  { platform: "GitHub", url: "#", icon: Github },
];

export function SocialMediaLinks({ 
  links = defaultLinks, 
  variant = "outline", 
  size = "default",
  direction = "horizontal" 
}: SocialMediaLinksProps) {
  const containerClass = direction === "horizontal" 
    ? "flex items-center space-x-2" 
    : "flex flex-col space-y-2";

  return (
    <div className={containerClass}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.platform}
            variant={variant}
            size={size}
            className="aspect-square p-0"
            asChild
          >
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.platform}`}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}