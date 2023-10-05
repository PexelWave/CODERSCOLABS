"use client";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Github, Instagram, Menu, Youtube, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import PWLogo from "./pw-logo";
import { Separator } from "./ui/separator";
import ModeToggle from "./mode-toggler";
import { tutorials } from "@/lib/utils";

const linkStyles =
  "w-full block select-none space-y-1 transition-all rounded-md py-3 hover:px-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll custom-scrollbar">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-6">
            <Logo />
            <ModeToggle />
          </SheetTitle>
          <SheetDescription className="text-start">
            <p className="font-bold">
              <span className="text-[#3FA9F5]">Collaborate</span> •{" "}
              <span className="text-slate-600 dark:text-slate-200">Learn</span>{" "}
              • <span className="text-[#7ac943]">Grow</span>
            </p>
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col items-start my-6 gap-3 dark:text-slate-300 text-slate-800">
          <Link className={linkStyles} href="/playground">
            Playground
          </Link>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <CollapsibleTrigger
              asChild
              className="flex justify-between w-full cursor-pointer"
            >
              <div className={linkStyles}>
                Tutorials
                <ChevronDown className="relative top-[1px] ml-1 h-6 w-6 transition duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col space-y-4 ml-4 mt-2 text-slate-700 dark:text-slate-400">
              { tutorials.map(({title, href}) => (
                <Link key={title} className={linkStyles} href={href}>
                  {title}
                </Link>
              )) }
            </CollapsibleContent>
          </Collapsible>
          <Link className={linkStyles} href="/blog">Blog</Link>
          <Link className={linkStyles} href="/contact">Contact</Link>
        </div>
        <Separator />
        <SheetFooter className="grid gap-3 mt-3 text-slate-800 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
          <div className="flex items-center gap-6">
            <p>Follow us</p>
            <Link
              href="#"
            >
              <Github size={15} />
            </Link>
            <Link
              href="#"
            >
              <Instagram size={15} />
            </Link>
            <Link
              href="#"
            >
              <Youtube size={15} />
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy"
            >
              Terms and Conditions
            </Link>
            <Separator className="my-6 bg-slate-800 dark:bg-slate-400" />
            <Link
              href="https://pexelwave.com"
              className="flex gap-3 items-center"
            >
              A product of
              <PWLogo />
            </Link>
          </div>
          <small>
            &copy; Copyright, CODECOLABS. {new Date().getFullYear()}. All Rights
            Reserved.
          </small>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
