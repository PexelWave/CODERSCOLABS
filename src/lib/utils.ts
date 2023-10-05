import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tutorials: { title: string; href: string; description: string }[] = [
    {
      title: "Written Tutorials",
      href: "/tutorials/written",
      description:
        "Step by step written tutorials that you can follow",
    },
    {
      title: "Interactive Tutorials",
      href: "/tutorials/interactive",
      description:
        "Hop on to the playground to get your feet wet in some interactive style tutorial",
    },
    {
      title: "Video Tutorials",
      href: "/tutorials/videos",
      description:
        "Watch a video, code along.",
    },
    
  ];