import { Bookmark, Heart } from "lucide-react";
import React from "react";

type Props = {};

const VideoCard = (props: Props) => {
  return (
    <div className="flex gap-2">
      <div className="h-32 w-60 bg-slate-800 rounded-lg"></div>
      <div className="">
        <h6 className="leading-none">Video Title</h6>
        <p className="leading-none text-sm"><small>150 views</small></p>
        <small className="leading-none">CODE COLABS</small>
        <div className="flex items-center gap-6">
          <Heart size={15} className="text-slate-500"/>
          <Bookmark size={15} className="text-slate-500"/>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
