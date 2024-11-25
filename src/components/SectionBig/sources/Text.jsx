import Link from "./Link";
import Title from "./Title";
import "./text.css"

export default function Text(props){
    const title = props.text
    const newsFocus = props.newsFocus;
    return(
        <div className="test">
            <Title text={title}/>
            <Link newsFocus={newsFocus}/>
        </div>
    )
}