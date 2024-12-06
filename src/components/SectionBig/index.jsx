import { useEffect, useState } from "react";
import News from "./sources/News";
import "./styles.css";

export default function SectionBig(props) {
  const [post, setPosts] = useState([])
  const postFocus = props.postFil

  useEffect(()=>{
    fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error('Erro ao carregar o JSON:', error))
  })
  
  if (post.length === 0) {
    return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
  }

  return (
    <>
        <div className="Container">
        <News 
          key={postFocus.id} 
          news="newsFirst" 
          title={postFocus.titulo} 
          text={postFocus.texto} 
          img={postFocus.img} 
          cate={postFocus.categorias}/>

        </div>
    </>
  );
}
