import { useEffect, useState } from "react"
import Icons from "./components/Icons"
import "./style.css"

export default function NewsArea(props){
    const post  = props.post
    const setpostFil = props.setpostFil;
    const category = props.category;
    

    const filterPostsByCategory = (posts, category) => {

        if (!category) {
          return post; // Se não houver categoria, retorna todos os posts
        }
          return posts.filter((item) => item.categoria === category);
      };
    


    // Caso não exista categoria e não haja posts, ou se não houver posts filtrados, exibe uma mensagem
    if (category === false) {
        return <div>Nenhum post encontrado para a categoria selecionada ou não há posts.</div>;
    }
    else{
        return (
            <div className="ContainerIcons">
                <Icons setpostFil={setpostFil} post={filterPostsByCategory(post, category)} />
            </div>
        );

    }
    
    
}