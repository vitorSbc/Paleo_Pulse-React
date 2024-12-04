import "./link.css"

export default function Link(props){
    const focus = props.focus;
    const setDisplay = focus ? "none" : " "
    const setFocus = props.setFocus;

    const handleClick = (event)=>{
        event.preventDefault();
        setFocus(true)
    }

    return(
        <>
        <a href="" className={`link ${setDisplay}`} onClick={handleClick}>Ler mais</a>
        </>
    )
}