import { useState } from "react";
import "./news.css"

export default function News(props){
    const  news  = props.news;
    const backgroundImg = news 
    const [blur, setBlur] = useState(true);

    

    return(
       <>
        <div className={`Teste ${backgroundImg}`} onMouseEnter={handling_enter} onMouseOut={handling_out}>
            <div className={blur}></div>
        </div>
        
       </>
)
}