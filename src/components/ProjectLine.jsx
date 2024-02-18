import { useState } from "react"
import { NewPageButton } from "./Buttons"


export const ProjectLine = (props) => {
    const {
        title,
        description,
        link,
        githubLink
    } = props
    
    const [isHovered, setIsHovered] = useState(false)

    const style = {
        height: isHovered ? "200px" : "75px",
        opacity: isHovered ? "0.7" : "1",
        backgroundColor: isHovered ? "#F1D4E5" : "transparent",
        color: isHovered ? "black" : "#F1D4E5",
        transition: "all 0.5s"
    }


    return (
        <div 
            className="flex flex-col items-center justify-around w-full border-y-2 border-lightPink bg-transparent"
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <p className="font-bold text-2xl text-center m-0">   
            {title}
            </p>
            {
                isHovered && 
                <>
                <p className="">
                    {description}
                </p>
                <div>
                    <div className="flex items-center text-center">

                        <button className="flex items-center justify-center border-2 border-myBlack bg-myBlack text-lightPink hover:bg-lightPink hover:text-myBlack w-[10rem] h-8 mx-6 rounded">
                            <a className="w-full h-full flex justify-center items-center" href={link} target="_blank">
                                Try it
                            </a>
                        </button>
                        { githubLink &&
                        <button className="flex items-center justify-center border-2 border-myBlack bg-myBlack text-lightPink hover:bg-lightPink hover:text-myBlack w-[10rem] h-8 mx-6 rounded">
                            <a className="w-full h-full flex justify-center items-center" href={githubLink} target="_blank">
                                Github
                            </a>
                        </button>
                        }
                        
                    </div>
                </div>
                </>
            }
        </div>
    ) 

}