import Link from "./Link";
import Paragraph from "./Paragraph";
import Title from "./Title";
import "./text.css"

export default function Text(props){
    const title = props.title
    const focus = props.focus
    const text = props.text;
    const setFocus = props.setFocus;
    
    return(
        <div className="test">
            <Title title={title} focus={focus}/>
            <Paragraph text={text} focus={focus}/>
            <Link focus={focus} setFocus={setFocus}/>
        </div>
    )
}