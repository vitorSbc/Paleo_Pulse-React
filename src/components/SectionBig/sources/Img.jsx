import "./img.css"

export default function Img(props) {
    const img = props.img;
    const cat = props.cat;
    const focus = props.focus;
    const imgFocus = focus ? "focus" :  " "
    return(
        <img className={`image ${imgFocus}`} src={img} alt={cat} />
    )
}