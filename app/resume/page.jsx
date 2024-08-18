"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs, 
    FaAngular, 
    FaAws, 
    FaGithub,
    FaJava,
    FaPython,
} from 'react-icons/fa'

import { 
    SiTailwindcss, 
    SiNextdotjs, 
    SiGooglecloud, 
    SiAdobephotoshop, 
    SiFlutter, 
    SiVisualstudiocode,
    SiGit,
    SiSelenium,
    SiPostman,
    SiSpringboot,
    SiGradle,
    SiMysql,
    SiCplusplus,
    SiPandas,
    SiNumpy,
    SiVercel
} from 'react-icons/si'

// about data
const about = {
    title: "About me",
    description: "I would like you to know more about me!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Arshiya Kishore"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 8837875113"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Email",
            fieldValue: "arshiyakishore@gmail.com"
        },
        {
            fieldName: "Pronouns",
            fieldValue: "She/Her"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, French"
        },
        {
            fieldName: "Extra-curricular",
            fieldValue: "Writing"
        },
    ]
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    items: [
        {
            company: "Infosys SpringBoard",
            role: "Python Project Intern",
            duration: "May 2024 -July 2024"
        },
    ]
};

// achievements data
const achievements = {
    icon: '/assets/resume/badge.svg',
    title: "My achievements",

    items: [
        {
            competition: "Kaggle Expert",
            position: "Datasets and Notebooks Expert",
            date: "May 2024",
            description: " Recognised as Kaggle Notebook Expert, achieving a top 0.6% ranking (ranked 392 out of 60,045 participants), Recognised as Kaggle Dataset Expert, achieving a top 1.8% ranking (ranked 284 out of 15,633 participants)"
        },
        {
            competition: "Google Hack2Skill",
            position: "Semi-Finalist",
            date: "August 2024",
            description: "Semi-finalist in Google Hack2Skill Hackathon."
        },
    ]
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "I am a Computer Engineering student at Thapar Institute of Engineering and Technology, passionate about technology and innovation.",
    items: [
        {
            institution: "Thapar University",
            degree: "B.E. Computer Engineering",
            duration: "2021 - 2025"
        },
        {
            institution: "KBDAV Senior Secondary School",
            degree: "High School (CBSE)",
            duration: "2019 - 2021"
        },

        {
            institution: "Vivek High School",
            degree: "High School (CBSE)",
            duration: "2007 - 2019"
        },

        
    ]
};

// certifications data
const certifications = {
    icon: '/assets/resume/cap.svg',
    title: "My certifications",
    items: [
        {
            institution: "Cisco Networking Academy",
            name: "PCAP: Programming Essentials in Python",
            date: "Jun 2024"
        },
        {
            institution: "Microsoft",
            name: "Fundamentals of Responsible Generative AI",
            date: "July 2024"
        },
        {
            institution: "Deeplearning.ai",
            name: "Machine Learning Specialization",
            date: "Jul 2023"
        },
        {
            institution: "Udemy",
            name: "Digital Marketing",
            date: "Jun 2023"
        },
        
    ]
};

// skills
const skills = {
    title: "My skills",
    description: "With a blend of technical expertise, innovative project experience, and a passion for problem-solving, I am excited to make meaningful contributions in the field of software engineering.",
    skillList: [
        
        {
            icon: < FaPython />,
            name: "Python",
        },
        {
            icon: < SiCplusplus />,
            name: "C++",
        },
        {
            icon: < FaJava />,
            name: "Java",
        },
        {
            icon: < SiMysql />,
            name: "MySQL",
        },
        {
            icon: <FaHtml5/>,
            name: "HTML5",
        }, 
        {
            icon: <FaCss3 />,
            name: "CSS",
        }, 
        {
            icon: <FaJs />,
            name: "JavaScript",
        },      
        {
            icon: <FaReact/>,
            name: "React.js",
        }, 
        {
            icon: <FaFigma/>,
            name: "Figma",
        }, 
        
        {
            icon: <FaGithub />,
            name: "Github",
        },
        
        {
            icon: <SiVisualstudiocode/>,
            name: "Visual Studio Code",
        },
        {
            icon: <SiGit/>,
            name: "Git",
        },
       
        {
            icon: <SiPandas/>,
            name: "Pandas",
        },
        {
            icon: <SiNumpy/>,
            name: "Numpy",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider, 
    TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {
                duration: 0.4,
                delay: 2.4,
                ease: "easeIn"},
                }} 
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
        > 
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="certifications">Certifications</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full"> 

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-semibold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.role}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* achievements */}
                        <TabsContent value="achievements" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-semibold">{achievements.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {achievements.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                                        {achievements.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.date}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">{item.position}</h3>
                                                    <p className="text-sm text-white/60">{item.description}</p>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.competition}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-semibold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent value="certifications" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-semibold">{certifications.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {certifications.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {certifications.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.date}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.name}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                                            {skills.skillList.map((skill, index) => {
                                                return (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className='capitalize'>{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li key={index} className="flex item-center justify-center xl:justify-start gap-4">
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                    </div>

                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;