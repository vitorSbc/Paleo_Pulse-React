import Icons from "../NewsArea/components/Icons"
import "./styles.css"


export default function Category(props) {
    const posts = [{
        id:1,
        categoria:"paleontology",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/cranio-de-dinossauro.png?token=GHSAT0AAAAAAC2LNZUKUXLSEYG4AAYXFKG6Z225MEA"
    },
    {
        id:2,
        categoria:"archeology",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/hieroglifo.png?token=GHSAT0AAAAAAC2LNZUL3D4F5ZRY6ORDZWEQZ225MJA"  
    },
    {
        id:3,
        categoria:"hisotry",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/bussola.png?token=GHSAT0AAAAAAC2LNZUKMJKTSFSNXYM6ZJLAZ225L3Q"  
    }]

    return(
        <>
        <div className="ContainerCat">
            <Icons post={posts}/>
        </div>
        </>
    )
}