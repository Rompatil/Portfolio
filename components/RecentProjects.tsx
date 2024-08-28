// RecentProjects.tsx
import React from "react";
import { projects } from "@/data";
import { HeroParallax } from "./ui/HeroParallax";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10">
        <HeroParallax products={projects} />
      </div>
    </div>
  );
};

export default RecentProjects;
