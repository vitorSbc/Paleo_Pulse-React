import { useState } from "react";
import "./news.css"
import Text from "./Text";

export default function News(props){
    const  news  = props.news;
    const title = props.text;
    const newsFocus = props.newsFocus
    const setNewsFocus = props.newsStatus
    const backgroundImg = news 
    const [blur, setBlur] = useState(true);
    const viewerBluer = blur ? "blur-overlay" : " " 


    return(
       <>
        <div className={`display ${backgroundImg}`}>
            <Text text={title} />
        </div>
        
       </>
)
}