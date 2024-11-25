import "./link.css"

export default function Link(props){
   const newsFocus = props.newsFocus;
    return(
        <>
        <a href="" onClick={newsFocus} className="link">Ler mais</a>
        </>
    )
}