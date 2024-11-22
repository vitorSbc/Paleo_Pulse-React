import { useState } from "react";
import "./news.css"
import Text from "./Text";

export default function News(props){
    const  news  = props.news;
    const title = props.text;
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
        <div className={`display ${backgroundImg}`} onMouseEnter={handling_enter} onMouseLeave={handling_out}>
            <Text text={title}/>
            <div className={viewerBluer} ></div>
        </div>
        
       </>
)
}