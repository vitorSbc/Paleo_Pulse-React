import img from "./Pictures/close.png";
import "./IconClose.css"

export default function IconClose(props) {
    const focus = props.focus;  
    const setFocus = props.setFocus;
    const bottomClass = focus ? "close" : "focusOFF"  

    const handleClick = (event)=>{
        setFocus(false)
    }

    return(
        <>
         <img className={bottomClass} src={img} alt="Close" onClick={handleClick}/>
        </>

    )
}