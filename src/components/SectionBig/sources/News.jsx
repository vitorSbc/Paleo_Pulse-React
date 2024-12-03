import { useState } from "react";
import "./news.css"
import Text from "./Text";

export default function News(props){
    const  news  = props.news;
    const title = props.title;
    const text = props.text;
    const backgroundImg = news;
    const [focus, setFocus] = useState(true)
    const newFocus = focus ? "newsFocus" : " "
    
    return(
       <>
        <div className={`display ${backgroundImg} ${newFocus}`}>
            <Text title={title} focus={focus} text ={text}/>
            
        </div>
        
       </>
)
}