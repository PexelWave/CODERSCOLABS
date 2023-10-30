"use client";
import React from "react";
import { Heart, Share, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import VideoCard from "@/components/VideoCard";

const VideoTutorialsPage = () => {
  return (
    <main className="container flex flex-col gap-8 md:flex-row md:gap-4">
      <section className="md:w-3/5">
        <video src="https://www.youtube.com/watch?v=GnodscC2p-A&t=9320s&ab_channel=freeCodeCamp.org" controls className="w-full rounded-lg">
          <source src="https://www.youtube.com/watch?v=GnodscC2p-A&t=9320s&ab_channel=freeCodeCamp.org"/>
        </video>
        <VideoMetaData />
      </section>
      <UpcomingVideos />
    </main>
  );
};

const VideoMetaData = () => {
  return (
    <section className="">
      <div>
        <h6>Introduction to HTML and CSS</h6>
        <div className="flex flex-col gap-2">
          <small>10 May 2023</small>
        </div>
      </div>

      <div className="border-t-2 border-b-2 flex items-center justify-between md:justify-start md:gap-4">
        <small>150 views</small>
        <div className="flex justify-between md:justify-start md:gap-4">
          <Button className="flex gap-2 items-center" variant="ghost">
            <Heart size={20} className="text-slate-400" />
            <small>{75}</small>
          </Button>
          <Button className="flex gap-2 items-center" variant="ghost">
            <Share size={20} className="text-slate-400" />
            Share
          </Button>
          <Button className="flex gap-2 items-center" variant="ghost">
            <Bookmark size={20} className="text-slate-400" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </Button>
        <p className="text-base">CODE COLABS</p>
      </div>
      <div>
        <small className="font-bold">Description</small>
        <p className="text-base text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          impedit aperiam omnis eius delectus vero perspiciatis alias
          dignissimos, labore veniam dolores, doloremque fugiat optio ab!
          Recusandae, facilis laborum. Aperiam, fugiat.
        </p>
      </div>
      <div>
        <small className="font-bold">Comments</small>
        <p className="text-base">
          <div className="flex gap-2 items-center">
            <Avatar className="bg-accent p-2 rounded-full">
              <AvatarImage />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <Input type="text" placeholder="comment here..." required />
          </div>
        </p>
      </div>
    </section>
  );
};

const UpcomingVideos = () => {
  return (
    <section className="flex flex-col gap-4 ml-3/5">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </section>
  );
};

export default VideoTutorialsPage;
