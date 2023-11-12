import { useRef } from "react"
import { AutoWritingText } from "./components/AutoWrite"
import { AiFillGithub } from 'react-icons/ai'
import { Project } from "./components/Projekt"
import { LeftArrow, RightArrow } from "./components/Arrows"
import { NewPageButton, ScrollButton } from "./components/Buttons"
import { MovingBackground } from "./components/MovingBackground"
import { ContactForm } from "./components/ContactForm"
import { AboutMe } from "./components/AboutMe"
export const PortFolio = () => {

    const projectsRef = useRef()
    const contactRef = useRef()
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center w-full h-screen p-32  text-lightPink">
        <MovingBackground />
            <h1>Hi, I'm Adam</h1>
            <AutoWritingText />

            <div className="flex">
            <ScrollButton icon={null} text="Contact" onClick={scrollToContact} />
            <ScrollButton icon={null} text="Projects" onClick={scrollToProjects} />
            <NewPageButton icon={<AiFillGithub/>} text="Github" address="https://github.com/Ajdamos" />
            </div>
            
        </div>

        <div ref={contactRef} className=" w-full h-screen flex flex-wrap justify-center items-center  text-myBlack">
            <AboutMe />
            <ContactForm />
        </div>

        <div className="flex flex-col items-center w-full h-screen text-lightPink" ref={projectsRef}>
            <h1 className="mt-8">Projects</h1>
            <div className="flex items-center">
            {/* <LeftArrow /> */}

            <Project key={1} description="Small game based of the game wordle online" name="Wordle" githubrepo="/Wordle" address="wordle" technologies={["react", "javascript", "tailwind"]}/>
            <Project key={2} description="Small game about generating obstacles, move your mouse out of the boxes" githubrepo="/SpaceEvader" name="Space Evader" address="spaceevader" technologies={["react", "typescript", "tailwind"]}/>
            <Project key={3} description="This was small project about calendar layout" toNewPage={true} address="https://calendar-puce-one.vercel.app/" name="Calendar" githubrepo="/ObjednejZadani" technologies={["react", "typescript", "tailwind"]}/>

            {/* <RightArrow /> */}
            </div>
            <p className="text-lightPink/[0.4]">{"Hire me :)"}</p>
        </div>
        </>
    )
}



