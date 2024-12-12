import Icons from "../NewsArea/components/Icons"
import "./styles.css"


export default function Category(props) {
    const setCategory = props.setCategory;
    
    const posts = [{
        id:1,
        categoria:"paleontology",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/cranio-de-dinossauro.png?token=GHSAT0AAAAAAC2LNZULWYWIX4HNMHBWX4O2Z23D5LA"
    },
    {
        id:2,
        categoria:"archeology",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/hieroglifo.png?token=GHSAT0AAAAAAC2LNZUKUHHCRDZJILQAXXV4Z23D66Q"  
    },
    {
        id:3,
        categoria:"hisotry",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/bussola.png?token=GHSAT0AAAAAAC2LNZULLVTCMKCGMG64ZHVOZ23D42Q"  
    }]

    return(
        <div className="Box_Category">
            <h1 className="Title_Category">Categorias</h1>
            <div className="ContainerCat">
                <Icons post={posts} setCategory = {setCategory}/>
            </div>
        </div>
    )
}