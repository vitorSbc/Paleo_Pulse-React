import { useState } from "react";
import "./news.css"
import Text from "./Text";
import Img from "./Img";
import IconClose from "./IconClose";

export default function News(props){
    const news  = props.news;
    const title = props.title;
    const text = props.text;
    const img = props.img;
    const cat = props.cat;
    const focus = props.focus
    const setFocus = props.setFocus
    const newFocus = focus ? "newsFocus" : " "
    

    return(
       <>
        <div className={`display ${newFocus}`}>
        
            <IconClose focus={focus} setFocus={setFocus}/>
            <Text title={title} focus={focus} setFocus={setFocus} text ={text}/>
            <Img img={img} cat={cat} focus={focus}/>
        </div>
        
       </>
)
}