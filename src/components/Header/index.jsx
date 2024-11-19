import { useState } from "react";
import Logo from "./sources/logo";
import MenuP from "./sources/menuP";
import "./styles.css";

export default function Header() {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="Cabecalho">
      <div onClick={handleClick}>
        <Logo />
      </div>
      <MenuP menuState={menuState} />
    </div>
  );
}
