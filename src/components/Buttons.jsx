import { Link } from "react-router-dom"

export const NavigateButton = (props) => {
    return (
        
            <button className="flex items-center justify-center w-[10rem] h-8 bg-myBlack border-2 rounded m-4 mx-6 border-lightPink hover:bg-lightPink hover:text-myBlack">
                <Link className="w-full h-full flex justify-center items-center" to={"/" + props.address}> {props?.icon}{props?.text}</Link>
            </button>
        
    )
}


export const NewPageButton = (props) => {    //URL for new page
    return (
        
            <button className="flex items-center justify-center w-[10rem] h-8 bg-myBlack border-2 rounded m-4 mx-6 border-lightPink hover:bg-lightPink hover:text-myBlack">
                <a className="w-full h-full flex justify-center items-center" href={props.address} target="_blank">{props?.icon}{props?.text}</a>
            </button>
        
    )
}
export const ScrollButton = (props) => { //scroll Function
    return (

            <button onClick={props.onClick} className="flex items-center justify-center w-[10rem] h-8 bg-myBlack border-2 rounded m-4 mx-6 border-lightPink hover:bg-lightPink hover:text-myBlack">
                {props?.icon}{props?.text}
            </button>

    )
} 

export const SubmitButton = (props) => {
    return (

            <button className="flex items-center justify-center w-[10rem] h-8 bg-lightPink border-2 rounded m-4 mx-6 border-myBlack hover:bg-myBlack hover:text-lightPink hover:border-lightPink">
            {props?.text}
        </button>
    
    )
}