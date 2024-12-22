import { useState } from "react";
import Logo from "./sources/logo";
import MenuP from "./sources/menuP";
import "./styles.css";

export default function Header() {
  const [menuState, setMenuState] = useState(false);


  return (
    <div className="Cabecalho">
      <div >
        <Logo />
      </div>
      <MenuP menuState={menuState} />
    </div>
  );
}
