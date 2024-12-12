import { useEffect, useState } from "react"
import Icons from "./components/Icons"
import "./style.css"

export default function NewsArea(props){
    const post  = props.post
    const setpostFil = props.setpostFil;
    const category = props.category;

    return(
        <div className="ContainerIcons">
            <Icons setpostFil={setpostFil} post={post}/>
        </div>
    )
}