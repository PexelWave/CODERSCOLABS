"use client";

import React from "react";
import Lottie from "lottie-react";
import heroIllustrationData from "@/assets/hero-illustration-animation.json";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const { status, data: session } = useSession();
  return (
    <header className="container pt-[10vh] flex items-center flex-col-reverse lg:flex-row">
      <div className="text-center lg:text-left">
        <h2>
          {status === "authenticated"
            ? `Hello👋 ${session?.user?.name} Welcome Back!`
            : "Unlock Your Potential in the World of Coding"}
        </h2>
        <p>
          Learn, Collaborate, and Create with CODERS
          <span className="text-secondary">COLABS</span>
        </p>

        <div className="mt-12">
          {status === "authenticated" ? (
            <Link href="/dashboard">
              <Button className="bg-[#0AFC07] text-white font-bold px-12 py-4">
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                className="bg-muted hover:bg-muted/50 text-slate-800 dark:text-white font-bold px-12 py-4"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="mr-2 h-4 w-4" />
                Log in with google
              </Button>

              <Button
                className="bg-muted hover:bg-muted/50 text-slate-800 dark:text-white font-bold px-12 py-4"
                onClick={() => signIn("github")}
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Log in with github
              </Button>
            </div>
          )}
        </div>
      </div>
      <Lottie animationData={heroIllustrationData} />
    </header>
  );
};

export default Hero;
