"use client";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { educationVideosList } from "@/constants/dashboard/dashboard";


const EducationVideos = () => {
  return (
    <div className="min-h-screen w-full mt-2 bg-white flex flex-col md:flex-row items-center justify-center px-4 gap-4 text-left overscroll-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full ">
        {educationVideosList.map((video, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                id="banner"
                className="w-full flex flex-col items-center justify-center text-start bg-gray-200 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg p-2"
              >
                <Image
                width={270}
                height={100}
                src={"/cover.png"}
                alt="watch video"
                className="rounded-2xl"
                />
                <h1 className="text-sm md:text-base font-medium text-start mt-2 text-gray-700">
                  {video.title}
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-gray-800">
                  {video.title}
                </DialogTitle>
                <DialogDescription>
                  Watch the full video below.
                </DialogDescription>
                <div className="w-full flex flex-col items-center justify-center">
                  <iframe
                    className="w-full mt-2 border-4 border-gray-300 rounded-lg aspect-video"
                    src={video.videLink}
                    title="VetmentorAI Overview Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default EducationVideos;
