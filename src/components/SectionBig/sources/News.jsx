import { useState } from "react";
import "./news.css"
import Text from "./Text";

export default function News(props){
    const  news  = props.news;
    const title = props.text;
    const backgroundImg = news;
    const [focus, setFocus] = useState(true)
    const newFocus = focus ? "newsFocus" : " "
    
    return(
       <>
        <div className={`display ${backgroundImg} ${newFocus}`}>
            <Text text={title} />
        </div>
        
       </>
)
}