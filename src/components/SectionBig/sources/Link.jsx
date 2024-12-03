import "./link.css"

export default function Link(props){
    const focus = props.focus;
    const setDisplay = focus ? "none" : " "

    return(
        <>
        <a href="" className={`link ${setDisplay}`}>Ler mais</a>
        </>
    )
}