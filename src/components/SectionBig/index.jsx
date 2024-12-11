import { useEffect, useState } from "react";
import News from "./sources/News";
import "./styles.css";

export default function SectionBig(props) {
  const post = props.post
  const [focus, setFocus] = useState(false)
  
  const postFil = props.postFil > 0 ? props.postFil -1 : 0
  const news = post[postFil].img2;
  const blurFocus = focus ? "background-blur" : " "

  if (post.length === 0) {
    return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
  }

 
  return (
    <>
        <div className="Container" style={{backgroundImage: `url(${news})`}}>
        <div className="background-blur" ></div>
          <News 
            key={post[postFil].id} 
            news={post[postFil].img2}
            title={post[postFil].titulo} 
            text={post[postFil].texto} 
            img={post[postFil].img}
            cate={post[postFil].categorias}
            focus={focus} setFocus={setFocus}/>
            

        </div>
    </>
  );
}
