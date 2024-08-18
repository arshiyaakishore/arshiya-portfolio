"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
    {
        num: "01",
        title: "Languages",
        description: "JavaScript, Python, C/C++, MySQL, HTML/CSS, R, MATLAB",
        href: ""
    },
    {
        num: "02",
        title: "Soft Skills",
        description: "Leadership, Teamwork, Interpersonal Skills",
        href: ""
    },
    {
        num: "03",
        title: "Libraries & Frameworks",
        description: "Scikit Learn, Pandas, NumPy, Matplotlib, Seaborn",
        href: ""
    },
    {
        num: "04",
        title: "Libraries & Frameworks",
        description: "Scikit Learn, Pandas, NumPy, Matplotlib, Seaborn",
        href: ""
    },
]


const Skills = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: 'easeInOut'},
                    }} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {skills.map((skill, index) => {
                        return ( 
                            <div 
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group "
                            >

                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent 
                                    group-hover:text-outline-hover transition-all duration-500">
                                        {skill.num} 
                                    </div>
                                    <Link href={skill.href} className="w-[70px] h-[70px] rounded-full bg-white 
                                    group-hover:bg-accent transition-all duration-500 flex justify-center 
                                    items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>

                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                                transition-all duration-500"> 
                                    {skill.title} 
                                </h2> 

                                {/* description */}
                                <p>{skill.description}</p>

                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>

                            </div>
                );
            })}


                </motion.div>
            </div>
        </section>
    );
};

export default Skills;