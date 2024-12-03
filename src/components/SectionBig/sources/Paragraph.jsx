import "./paragraph.css"

export default function Paragraph(props){
    const text = props.text
    return(
        <p className="text"> {text}</p>
    )
}