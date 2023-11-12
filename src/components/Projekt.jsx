import { AiFillGithub } from "react-icons/ai"
import { useEffect, useState } from "react"
import { BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { NavigateButton, NewPageButton } from "./Buttons"
export const Project = (props) => {

    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        if(props?.technologies){
            setTechnologies(props.technologies.map((item, index) => {
                if(item === "react") return <BiLogoReact key={index} size={70}/>
                else if (item === "tailwind") return <BiLogoTailwindCss key={index} size={70}/>
                else if (item === "javascript") return <BiLogoJavascript key={index} size={70}/>
                else if (item === "typescript") return <BiLogoTypescript key={index} size={70}/>
            }))
        
        }
    }, [])

    return (
        <div className="w-[350px] h-[500px] m-4 border-2 rounded-lg border-lightPink">
            <div className="h-[45%] bg-lightPink text-myBlack">
                <h4 className="m-0 p-4  flex-col flex items-center">{props?.name}</h4>
            </div>
            <div className="h-[15%] flex justify-evenly">
                {technologies}
            </div>
            <div className="h-[40%] flex flex-col text-center justify-between">
                <p>{props?.description}</p>
                <div className="flex bot">
                    {   props.toNewPage ?
                    <NewPageButton text="play" address={props.address}/> :
                    <NavigateButton text="play" address={props.address}/> 
                    }
                <NewPageButton icon={<AiFillGithub/>} text="Github" address={"https://github.com/Ajdamos" + (props.githubrepo ? props.githubrepo : "")} />
                </div>
            </div>
        </div>
    )
}