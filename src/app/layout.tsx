"use client"
import "./globals.css";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LampContainer } from "@/components/ui/lamp";
import { Boxes } from "@/components/ui/background-boxes";
import { PinContainer } from "@/components/ui/3d-pin";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function RootLayout(
 
{ className }: { className?: string }

) {
const wordstwo = [
  {
    text: "Here",
  },
  {
    text: "is",
  },
  {
    text: "my",
  },
  
  {
    text: "Skills.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
const testimonials = [
  {
    quote:
     
"Mate possesses a deep understanding of modern web technologies and best practices, which is evident in their work.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
    "I had the pleasure of working with you dear on several challenging projects. They are not only technically proficient but also a great team player and leader.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: 
    "Working with Uzair Shaikh has been a transformative experience for our project. Not only did they deliver high-quality code, but their attention to understanding and meeting our needs was exceptional. They consistently went above and beyond, making sure our project was not just completed, but successful. Highly recommended for anyone seeking a dedicated and skilled developer."
    
    ,
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const people = [
    {
      id: 1,
      name: "Github",
      designation: "https://github.com/Uzair0331",
      image:
        "/images/github.png",
    },
    {
      id: 2,
      name: "Linkedin",
      designation: "https://www.linkedin.com/in/uzair-shaikh-15a7382a7/",
      image:
      "/images/linkedin.png",
    },
    {
      id: 3,
      name: "Gmail",
      designation: "uxair0331xhaikh@gmail.com",
      image:
      "/images/mail.png",
    },
    {
      id: 4,
      name: "Instagram",
      designation: "https://www.instagram.com/im_uxair001/",
      image:
      "/images/ig.png",
    },
   
  ];
   
  return (
    
    <html lang="en">
      <body>


      <div
      className={cn("", className)}
    >
 
      <div className="w-[100%] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Wellcome to my Portfolio
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Im Uzair Shaikh and a Pakistan based Full Stack Developer.
        </p>
        
      </Vortex>
    </div>
    
    <div className="flex w-[100%]  text-center content-center justify-center ">

<TypewriterEffectSmooth words={wordstwo} />
</div>
<div className=" w-[100%]  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-12 content-center pl-6 items-start w-[95%] mt-8">
  {[
    { src: 'photoone.png', label: 'Tailwind CSS' },
    { src: 'react.png', label: 'React' },
    { src: 'js.png', label: 'React.js' },
    { src: 'nextjs.png', label: 'Next.js' },
    { src: 'reactnative.png', label: 'React Native' },
    { src: 'mernstack.png', label: 'MERN Stack' },
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <BackgroundGradient className="rounded-[22px] w-[150px] h-[150px] p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center">
        <Image
          src={`/images/${item.src}`}
          alt=""
          height="30"
          width="30"
          className="object-contain"
        />
        <p className="text-base sm:text-sm text-black mt-4 mb-2 dark:text-neutral-200">
          {item.label}
        </p>
      </BackgroundGradient>
    </div>
  ))}
</div>
    </div>





<div className="flex flex-col overflow-hidden min-h-screen">
    <ContainerScroll
        titleComponent={
            <>
                <h1 className="text-4xl font-semibold text-black dark:text-white mb-8">
                    About Me <br />
                </h1>
            </>
        }
    >
        <Image
            src={`/images/about.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl" 
            draggable={false}
        />
   <div className="flex flex-wrap justify-center  content-center items-start w-[95%] lg:mt-10 sm:min-mt-2">
    <div className=" lg:pr-4">
        <div className="w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-3 py-6 overflow-hidden rounded-2xl flex flex-col justify-end items-start h-[200px] sm:min-h-[300px]"> 
                <div className="h-4 w-4 rounded-full border flex items-center justify-center mb-3 border-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                    </svg>
                </div>

                <h1 className="font-bold text-lg text-white mb-3 relative z-50">
                    Software Engineer Intern
                </h1>

                <p className="font-normal text-sm text-slate-500 mb-3 relative z-50">
                    Software Industry, MERN Stack, Next.js, Problem Solving, Tailwind CSS, React.js, React Native
                </p>

                <button className="border px-3 py-1 text-sm rounded-lg border-gray-500 text-gray-300">
                    Explore
                </button>

                <Meteors number={20} />
            </div>
        </div>
    </div>
    <div className="lg:pl-4">
        <div className="w-full relative max-w-xs ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl sm:min-mt-2" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-3 py-6 overflow-hidden rounded-2xl flex flex-col justify-end items-start sm:min-w-[100px] w-[100%] min-h-[100px] sm:min-h-[300px]">  
                <div className="h-4 w-4 rounded-full border flex items-center justify-center mb-3 border-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                    </svg>
                </div>

                <h1 className="font-bold text-lg text-white mb-3 relative z-50">
                    Associate Software Engineer
                </h1>

                <p className="font-normal text-sm text-slate-500 mb-3 relative z-50">
                    MERN Stack, Next.js, React.js, Tailwind CSS, React Native
                </p>

                <button className="border px-3 py-1 text-sm rounded-lg border-gray-500 text-gray-300">
                    Explore
                </button>
                <Meteors number={20} />
            </div>
        </div>
    </div>
</div>

        
    </ContainerScroll>
</div>








<div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    <div
      className="h-[400vh] bg-black w-full  rounded-md relative overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
   
 <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      Build things<br /> for advance web
      </motion.h1>
    </LampContainer>


    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col lg:flex-row rounded-lg">
 
 
  <Boxes />

  <div className="flex flex-col lg:flex-row relative p-4 lg:pl-24 w-full">
  <PinContainer title="Karachi-Pakistan" href="">
    <div className="w-full sm:w-[30rem] h-auto  tracking-tight text-slate-100/50">
      <h3 className="pb-2 m-0 font-bold text-base text-slate-100">
        Address:
      </h3>
      <div className="text-base m-0 p-0 font-normal">
        <span className="text-slate-500">
          I am living here , click to see:
        </span>
      </div>
      <div className="mt-4 w-full h-full min-h-[200px] rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
    </div>
  </PinContainer>
</div>
 



  <div className="flex flex-col lg:flex-row relative p-4 lg:pr-24 w-full">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          My portfolio
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Feel free ? so visit my site
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/port.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
          uzairshaikh.netlify.app
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
</div>


    <div className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Get in touch !
        </h1>
       
      </div>
    
      <BackgroundBeams />
      <div className="flex flex-row items-center justify-center mt-16 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>

    </div>
   
      </body>
      
    </html>
  );
}
