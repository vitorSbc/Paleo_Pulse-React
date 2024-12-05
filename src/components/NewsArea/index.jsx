import { useEffect, useState } from "react"
import Icons from "./components/Icons"
import "./style.css"

export default function NewsArea(props){
    const setpostFil = props.setpostFil;

    return(
        <div className="ContainerIcons">
            <Icons setpostFil={setpostFil}/>
        </div>
    )
}