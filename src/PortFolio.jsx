import { useRef } from "react"
import { AutoWritingText } from "./components/AutoWrite"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { NewPageButton, ScrollButton } from "./components/Buttons"
import { MovingBackground } from "./components/MovingBackground"
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

            <ProjectLine title="Graph and maze pathfinding" description="2 path finding algorithms Breadth-first search and A* for path finding" link="https://github.com/Ajdamos/graphs" githubLink="https://github.com/Ajdamos/graphs"/>             
            <ProjectLine title="Currency exchange rates" description="Real time rates for currency in 6 different banks, all updated up to this date using kurzy.cz api" link="https://menove-kurzy-adam-cernos.vercel.app/" githubLink="https://github.com/Ajdamos/Menove-Kurzy-Adam-Cernos"/>             
            <ProjectLine title="Calendar" description="Project made for responsibility design" link="https://calendar-puce-one.vercel.app/" githubLink="https://github.com/Ajdamos/ObjednejZadani"/>             
            <ProjectLine title="Space evader" description="Game where you dodge meteors by moving your mouse" link="spaceevader"/>             
            <ProjectLine title="Wordle" description="Wordle clone" link="wordle"/>             

            {/* <RightArrow /> */}
            </div>
        </div>
        </>
    )
}



