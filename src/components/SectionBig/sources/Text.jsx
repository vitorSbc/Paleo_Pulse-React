import Link from "./Link";
import Paragraph from "./Paragraph";
import Title from "./Title";
import "./text.css"

export default function Text(props){
    const title = props.text
    
    return(
        <div className="test">
            <Title text={title}/>
            <Paragraph />
            <Link />
        </div>
    )
}