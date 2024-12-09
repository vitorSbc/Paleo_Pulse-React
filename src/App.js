import Header from "./components/Header";
import "./App.css";
import SectionBig from "./components/SectionBig";
import NewsArea from "./components/NewsArea";
import { useEffect, useState } from "react";

export default function App() {
  const [postFil, setpostFil] = useState([])
  const [post, setPosts] = useState([])
  
  
  useEffect(()=>{
    fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error('Erro ao carregar o JSON:', error))
  },[post])


  return (
    <>
      <Header />
      <NewsArea setpostFil={setpostFil} post={post}/>
      <SectionBig postFil={postFil} post={post}/>
    </>
  );
}

