import { useState } from "react";
import "./news.css"
import Title from "./Title";

export default function News(props){
    const  news  = props.news;
    const backgroundImg = news 
    const [blur, setBlur] = useState(true);
    const viewerBluer = blur ? "blur-overlay" : " " 

    const handling_enter = ()=>{
        setBlur(false)
    } 

    const handling_out = ()=>{
        setBlur(true)
    }

    return(
       <>
        <div className={`Teste ${backgroundImg}`} onMouseEnter={handling_enter} onMouseLeave={handling_out}>
            <Title text={props}/>
            <div className={viewerBluer} ></div>
            
        </div>
        
       </>
)
}