"use client";

import Hero from "@/components/Hero";
import Lottie from "lottie-react";
import pairProgrammingAnimation from "@/assets/pair-programming-animation.json";
import pickCourseAnimation from "@/assets/web-dev-animation.json"
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* <section className="container py-24">
        <div className="md:flex gap-2 items-center">
          <Lottie
            className="w-1/2 md:w-1/4"
            animationData={pickCourseAnimation}
          />
          <div>
            <h4 className="title">
              Get Started Today! Pick a{" "}
              <span className="text-primary">Course</span>
            </h4>
            <p>Collaborative Learning for Programmers. Let&apos;s dive head first!</p>
            <Button>View All</Button>
          </div>
        </div>

        <Courses />
      </section> */}

      <section className="container py-24">
        <div className="md:flex gap-2 items-center">
          <Lottie
            className="w-1/2 md:w-1/4"
            animationData={pairProgrammingAnimation}
          />
          <div>
            <h4 className="title">
              Explore Our Toolbox of Powerful{" "}
              <span className="text-primary">Features</span>
            </h4>
            <p className="subtitle">
              Are you ready to embark on a coding journey like no other? Welcome
              to CODERSCOLABS, where your programming dreams come to life.
            </p>
          </div>
        </div>
        <Features />
      </section>
    </main>
  );
}
