import Link from "next/link";
import {FaGithub, FaLinkedin, FaCode, FaLink} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/arshiyaakishore'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ananyabansall/'},
    {icon: <FaCode />, path: 'https://leetcode.com/u/arshiyaakishore/'},
    {icon: <FaLink />, path: 'https://linktr.ee/arshiyak'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}> 
            {socials.map((item, index) => {
                return ( 
                    <Link 
                        href={item.path} 
                        key={index} 
                        className={iconStyles}>
                            {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;