import Header from "./components/Header";
import "./App.css";
import SectionBig from "./components/SectionBig";
import NewsArea from "./components/NewsArea";
import { useState } from "react";

export default function App() {
  const [postFil, setpostFil] = useState([])
  
  return (
    <>
      <Header />
      <NewsArea setpostFil={setpostFil}/>
      <SectionBig postFil={postFil}/>
    </>
  );
}

