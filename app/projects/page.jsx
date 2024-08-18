"use client";

import { motion, px } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Machine Learning",
        title: "WhatsApp Chat Analysis",
        description: " Created a Python-based analysis tool to extract insights from WhatsApp chat data using natural language processing (NLP) and machine learning techniques. Conducted exploratory data analysis (EDA) to visualize chat activity trends, generated word clouds to identify frequently used words, and analyzed emoji usage patterns. Implemented an interactive user interface using Streamlit for data visualization and presentation",
        stack: [
            { name: "NLTK" }, { name: "Streamlit" }, { name: "Panadas" }, { name: "Seaborn" }, { name: "Matplotlib" },
        ],
        //image: "/assets/work/ekyc.png",
        live: "",
        github: "https://github.com/arshiyaakishore/WhatsApp-Chat-Analysis-Project",
    },
    {
        num: "02",
        category: "Data Visualization",
        title: "Netflix Dashboard",
        description: "Design an interactive Netflix Streaming Service Performance Dashboard in Tableau. Analyzed key metrics like user engagement, content performance, revenue trends, and subscriber growth. Created visualizations including heatmaps, bar charts, and geographical maps to track performance across regions and time periods",
        stack: [
            { name: "Tableau" }, { name: "Python" }, { name: "Python" },
        ],
        //image: "",
        live: "",
        github: "https://github.com/arshiyaakishore/Netflix-Dashboard-Streaming-Service-Performance",
    },
    
    // {
    //     num: "08",
    //     category: "Arduino, hardware",
    //     title: "Arduino-Uno driven buggy: RoboCar’",
    //     description: "Embedding intelligent program as combination hardware and software in Robotic buggy capable of autonomous parking, gantry detection, and precise line following.",
    //     stack: [
    //         { name: "Arduino" }, { name: "Microprocessors" }, { name: "Sensors" },
    //     ],
    //     image: "/assets/work/thumb2.png",
    //     live: "",
    //     github: "",
    // },

];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition:{
                duration: 0.4,
                delay: 2.4,
                ease: "easeIn"
            }}} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        > 
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[45%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">

                            {/* outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stack */}
                            <ul className="flex gap-3">
                                {project.stack.map((item, index)=> {
                                    return (
                                        <li key={index} className="text-md text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[55%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image 
                                                    src={project.image} 
                                                    fill
                                                    className="object-cover" 
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* slider buttons */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all"
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;