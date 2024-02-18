import { useRef } from "react"
import { AutoWritingText } from "./components/AutoWrite"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Project } from "./components/Projekt"
import { LeftArrow, RightArrow } from "./components/Arrows"
import { NewPageButton, ScrollButton } from "./components/Buttons"
import { MovingBackground } from "./components/MovingBackground"
import { ContactForm } from "./components/ContactForm"
import { AboutMe } from "./components/AboutMe"
import { ProjectLine } from "./components/ProjectLine"
export const PortFolio = () => {

    const projectsRef = useRef()
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({behavior: 'smooth'});
    }


    return (
        <>
        <div className="flex flex-col items-center justify-center w-full h-screen p-32  text-lightPink ">
        <MovingBackground />
            <h1 className="text-center">Hi, I'm Adam</h1>
            <div className="hidden md:block"><AutoWritingText /></div>

            <div className="flex flex-col md:flex-row">
            <ScrollButton icon={null} text="Projects" onClick={scrollToProjects} />
            <NewPageButton icon={<AiFillLinkedin/>} text="LinkedIn" address="https://www.linkedin.com/in/adam%C4%8Derno%C5%A1/" />
            <NewPageButton icon={<AiFillGithub/>} text="Github" address="https://github.com/Ajdamos" />
            </div>
            
        </div>

        <div className="flex flex-col items-center w-full h-screen text-lightPink" ref={projectsRef}>
            <h1 className="mt-8">Projects</h1>
            <div className="w-[90%] md:w-[65%]">
            {/* <LeftArrow /> */}

            <ProjectLine title="Graph and maze pathfinding" description="pipipupu" link="https://www.youtube.com/watch?v=RUKrXzzc9vE&ab_channel=HaiseT"/>             
            <ProjectLine title="Currency exchange rates" description="pipipupu" link="youtube.com"/>             
            <ProjectLine title="Space evader" description="pipipupu" link="youtube.com"/>             
            <ProjectLine title="Wordle" description="pipipupu" link="youtube.com"/>             
            <ProjectLine title="Calendar" description="pipipupu" link="https://calendar-puce-one.vercel.app/"/>             

            {/* <RightArrow /> */}
            </div>
        </div>
        </>
    )
}



