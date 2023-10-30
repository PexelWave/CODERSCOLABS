import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
type CardProps = {
   title: string; href: string; description: string 
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tutorials: CardProps[] = [
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

  export const colabs: CardProps[] = [
    {
      title: 'Front end Colab',
      href: '/colabs/front-end',
      description: 'Practice your HTML, CSS, and JS basics with with this colab.'
    },
    {
      title: 'Multi-Language Colab',
      href: '/colabs/multi-language',
      description: 'Choose from over 50 programming languages to practice your skills'
    }
  ]