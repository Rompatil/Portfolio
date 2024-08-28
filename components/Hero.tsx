import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffect } from './ui/TyperwriteEffect'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import MagicButton from "./MagicButton";
import { FaSmile, FaSmileBeam } from 'react-icons/fa';

const Hero = () => {
  const typewriterWords = [
    { text: "Deploying", className: "" },
    { text: "Creative", className: "" },
    { text: "Ideas", className: "" },
    { text: "into", className: "" },
    { text: "Websites", className: "text-blue-500 dark:text-blue-500" }
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="white" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-18">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6'>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
            I make Dynamic web pages!
          </h2>
          
          <TypewriterEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-6"
            words={typewriterWords}
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hey, I&apos;m Rom, A front-End Developer based in UAE.
          </p>

          <a href='#about'>
            <MagicButton
              title="Know about me" 
              icon={<FaSmileBeam />} 
              position={'right'}               
            />
          </a>
        </div> 
      </div>
    </div>
  );
}

export default Hero
