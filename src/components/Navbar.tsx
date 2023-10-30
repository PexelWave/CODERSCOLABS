"use client";

import * as React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { cn, colabs } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ModeToggle from "./mode-toggler";
import SideDrawer from "./side-drawer";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import PWLogo from "./pw-logo";
import { tutorials } from "@/lib/utils";


export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="fixed w-full z-50 bg-background">
      <div className="container flex justify-between items-center h-[10vh]">
        <NavigationMenu className={cn("flex items-center gap-3")}>
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <NavigationMenuList className="w-full hidden lg:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Organisation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild={false}>
                      <Link
                        className="flex h-full w-full select-none flex-col gap-4 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <Logo />
                        <p className="text-sm leading-tight text-muted-foreground">
                          🚀Ignite Your Coding Journey with BrainSpark!🌟
                        </p>

                        <p>
                          A product of <PWLogo />
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Seamless Collaboration">
                    We are committed to providing high-quality programming
                    courses, fostering innovation through project collaboration
                  </ListItem>
                  <ListItem
                    href="/playground"
                    title="Code Playground and Sandbox"
                  >
                    Featured is an online code editor to practice coding
                  </ListItem>
                  <ListItem href="/community/forums" title="Community Forums">
                    Connect with other devs in our community forums
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tutorials</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                  {tutorials.map((tutorial) => (
                    <ListItem
                      key={tutorial.title}
                      title={tutorial.title}
                      href={tutorial.href}
                    >
                      {tutorial.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Colabs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                  {colabs.map((colab) => (
                    <ListItem
                      key={colab.title}
                      title={colab.title}
                      href={colab.href}
                    >
                      {colab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/commnunity" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline-block">
            <Button variant="ghost">
              <Github size={15} />
            </Button>
          </Link>
          <div className="hidden md:inline">
            <ModeToggle />
          </div>
          <AuthButton />
          <SideDrawer />
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
