import { useRef } from "react"
import { AutoWritingText } from "./components/AutoWrite"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Project } from "./components/Projekt"
import { LeftArrow, RightArrow } from "./components/Arrows"
import { NewPageButton, ScrollButton } from "./components/Buttons"
import { MovingBackground } from "./components/MovingBackground"
import { ContactForm } from "./components/ContactForm"
import { AboutMe } from "./components/AboutMe"
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
            <div className="flex flex-col overflow-auto items-center lg:overflow-hidden lg:flex-row">
            {/* <LeftArrow /> */}

            <Project key={1} description="Small game based of the game wordle online" name="Wordle" githubrepo="/Wordle" address="wordle" technologies={["react", "javascript", "tailwind"]}/>
            <Project key={2} description="Small game about generating obstacles, move your mouse out of the boxes" githubrepo="/SpaceEvader" name="Space Evader" address="spaceevader" technologies={["react", "typescript", "tailwind"]}/>
            <Project key={3} description="This was small project about calendar layout" toNewPage={true} address="https://calendar-puce-one.vercel.app/" name="Calendar" githubrepo="/ObjednejZadani" technologies={["react", "typescript", "tailwind"]}/>

            {/* <RightArrow /> */}
            </div>
        </div>
        </>
    )
}



