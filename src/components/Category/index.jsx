import Icons from "../NewsArea/components/Icons"
import "./styles.css"


export default function Category(props) {
    const setCategory = props.setCategory;
    const category = props.category;
    const teste = "teste";

    const posts = [{
        id:"paleontology",
        categoria:"Paleologia",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/cranio-de-dinossauro.png"
    },
    {
        id:"archeology",
        categoria:"arqueologia",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/hieroglifo.png"  
    },
    {
        id:"history",
        categoria:"historia",
        icon:"https://raw.githubusercontent.com/vitorSbc/Paleo_Pulse-React/refs/heads/Teste/src/components/Category/Pictures/bussola.png"  
    }]

    return(
        <div className="Box_Category">
            <h1 className="Title_Category">Categorias</h1>
            <div className="ContainerCat">
                <Icons post={posts} setCategory = {setCategory} category = {category}/>
            </div>
        </div>
    )
}