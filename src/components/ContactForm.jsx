import { useRef, useState } from "react"
import useAutosize from "./useAutosize"
import { SubmitButton } from "./Buttons"
import emailjs from '@emailjs/browser'
export const ContactForm = (props) => {
    const [email, setEmail] = useState("@")
    const [text, setText] = useState("")

    const areaRef = useRef()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICETOKEN, import.meta.env.VITE_TEMPLATETOKEN, form.current, import.meta.env.VITE_PERSONALTOKEN)
        .then((result) => {
            console.log(result.text);
            if(result.text === "OK"){
                setEmail("");
                setText("");
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    useAutosize(areaRef.current, text)

    return (
        <form className=" w-[45%] max-w-[600px] min-w-[300px] rounded-md flex flex-col gap-[6px] justify-center items-center p-1 m-4" ref={form} onSubmit={sendEmail}>
            <h2 className="text-center text-lightPink">Contact me</h2>
            
            <label className="text-center text-lightPink">Your Email:</label>
            <input
                className="w-full border-2 p-2 border-myBlack text-center bg-lightPink/[0.85] text-myBlack"
                placeholder="Email"
                onChange={e => setEmail(e.currentTarget.text)}
                value={email}
                name="user_email"
                />
            
            <label className="text-center text-lightPink">Text for me:</label>
            <textarea 
                ref={areaRef} 
                className="w-full resize-none overflow-hidden border-2 p-2 border-myBlack text-center bg-lightPink/[0.85] text-myBlack"
                onChange={e => setText(e.currentTarget.value)}
                value={text}
                name="message"
                />
            <SubmitButton className="flex grow shrink-0 basis-[50px] text=myBlack" text={"submit"}></SubmitButton>
        </form>
    )


}