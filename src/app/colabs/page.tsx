import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { colabs } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Colabs = () => {
  return (
    <main className="container">
      <h1>Welcome to the Colabs!</h1>
      <p>Practice your programming skills effortlessy, no installations required. Simply choose your colab, and get to coding</p>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {colabs.map(colab => (
          <Card key={colab.title} className="p-6 flex flex-col justify-center items-center text-center">
          <CardTitle>{colab.title}</CardTitle>
          <CardDescription>{colab.description}</CardDescription>
          <CardFooter>
            <Link className="bg-primary px-6 py-2 rounded-lg" href={colab.href}>Start Coding</Link>
          </CardFooter>
        </Card>
        ))}
      </section>
    </main>
  );
};


export default Colabs;
