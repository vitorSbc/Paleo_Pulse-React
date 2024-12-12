import Icons from "../NewsArea/components/Icons"
import "./styles.css"


export default function Category(props) {
    const posts = [{
        id:1,
        categoria:"paleontology",
        icon:"./Pictures/cranio-de-dinossauro.png"
    },
    {
        id:2,
        categoria:"archeology",
        icon:"./Pictures/hieroglifo.png"  
    },
    {
        id:3,
        categoria:"hisotry",
        icon:"./Pictures/bussola.png"  
    }]

    return(
        <>
        <div className="ContainerCat">
            <Icons post={posts}/>
        </div>
        </>
    )
}